'use client';

import { useRef, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type ParsedResponse = {
  valid: Array<{
    name: string;
    age: number;
    email: string;
    department?: string;
  }>;
  errors: Array<{
    row: number;
    issues: string[];
  }>;
};

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ParsedResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function pickFile(f: File | null) {
    setFile(f);
    setResult(null);
    setError(null);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message || `Request failed: ${res.status}`);
      }
      const data = (await res.json()) as ParsedResponse;
      setResult(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setFile(null);
    setResult(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <main className="page">
      <header className="header">
        <span className="badge">CSV → JSON</span>
        <h1>Upload &amp; Inspect CSV Files</h1>
        <p>Drop a CSV file below — it will be parsed by the NestJS API and rendered as a table.</p>
      </header>

      <section className="card">
        <form className="uploader" onSubmit={handleUpload}>
          <label
            className={`dropzone ${dragging ? 'dragging' : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              const f = e.dataTransfer.files?.[0];
              if (f) pickFile(f);
            }}
          >
            <div className="icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div className="title">
              {file ? 'Choose a different file' : 'Drag & drop or click to select a CSV'}
            </div>
            <div className="hint">Only .csv files are supported</div>
            <input
              ref={inputRef}
              type="file"
              accept=".csv,text/csv"
              onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
            />
          </label>

          {file && (
            <div>
              <span className="file-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {file.name} · {(file.size / 1024).toFixed(1)} KB
              </span>
            </div>
          )}

          <div className="actions">
            <button type="submit" className="btn btn-primary" disabled={!file || loading}>
              {loading ? (
                <>
                  <span className="spinner" /> Uploading…
                </>
              ) : (
                <>Upload &amp; Parse</>
              )}
            </button>
            {(file || result || error) && (
              <button type="button" className="btn btn-ghost" onClick={reset} disabled={loading}>
                Reset
              </button>
            )}
          </div>

          {error && <div className="alert alert-error">⚠ {error}</div>}
        </form>
      </section>

      {result && (
        <section className="card">
          <div className="results-header">
            <h2 className="results-title">Validation Results</h2>
            <div className="results-meta">
              <span className="chip">
                <strong>{result.valid.length}</strong> valid
              </span>
              <span className="chip">
                <strong>{result.errors.length}</strong> invalid
              </span>
            </div>
          </div>

          {result.valid.length === 0 ? (
            <div className="empty">No valid rows to display.</div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {result.valid.map((row) => (
                    <tr key={`${row.email}-${row.name}`}>
                      <td>{row.name}</td>
                      <td>{row.age}</td>
                      <td>{row.email}</td>
                      <td>{row.department ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {result.errors.length > 0 && (
            <div className="table-wrap" style={{ marginTop: 16 }}>
              <table>
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {result.errors.map((rowError) => (
                    <tr key={rowError.row}>
                      <td>{rowError.row}</td>
                      <td>{rowError.issues.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      <footer className="footer">
        Powered by NestJS + <code>papaparse</code> · Frontend on Next.js
      </footer>
    </main>
  );
}
