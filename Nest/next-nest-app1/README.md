# next-nest-app1 — CSV Upload & Display

A two-app monorepo:

- `backend/` — **NestJS** API that accepts a CSV upload, parses it with **papaparse**, validates each row using **class-validator** DTOs, and returns valid rows + per-row validation errors as JSON.
- `frontend/` — **Next.js (React)** UI that uploads a CSV and renders valid rows and any validation errors as tables.

---

## Project Structure

```
backend/
  .env.example                    # PORT / CORS_ORIGIN / SWAGGER_PATH
  src/
    app.module.ts                 # Imports ConfigModule (global) + CsvModule
    main.ts                       # Bootstraps Nest: ConfigService, Logger, Swagger UI, ValidationPipe, CORS
    csv/
      csv.module.ts
      csv.controller.ts           # POST /upload — Swagger decorated, ParseFilePipe (size + type)
      csv.service.ts              # papaparse + DTO validation, NestJS Logger
      csv.controller.spec.ts      # Jest: controller w/ mocked service (success + error)
      csv.service.spec.ts         # Jest: parses CSV + validation behavior
      dto/
        csv-row.dto.ts            # class-validator rules + @ApiProperty
        csv-upload-response.dto.ts# Swagger response schema
      interfaces/
        csv.interface.ts          # CsvUploadResult / CsvValidRow / CsvRowError / RawCsvRow
frontend/
  app/
    page.tsx                      # Upload form + tables for valid rows & errors
    layout.tsx
    globals.css
sample.csv                        # Valid CSV (all rows pass validation)
sample-invalid.csv                # CSV containing rows that fail validation
```

---

## Prerequisites

- Node.js 18+ and npm

---

## Install

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## Configuration

The backend is configured entirely via environment variables (loaded by `@nestjs/config`).
Copy the template and edit as needed:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

| Variable              | Default                  | Description                                       |
| --------------------- | ------------------------ | ------------------------------------------------- |
| `PORT`                | `3001`                   | Port the Nest API listens on                      |
| `CORS_ORIGIN`         | `*`                      | Allowed CORS origin (set to your frontend URL)    |
| `SWAGGER_PATH`        | `docs`                   | Path Swagger UI is mounted at (`/docs`)           |
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001`  | Backend URL the Next.js frontend calls            |

---

## Run

### 1. Start the backend (port 3001)

```bash
cd backend
npm run start:dev
```

You should see logs from the Nest `Logger`:

```
[Bootstrap] Backend running on http://localhost:3001
[Bootstrap] Swagger docs available at http://localhost:3001/docs
```

Open http://localhost:3001/docs to explore the interactive Swagger UI.

### 2. Start the frontend (port 3000)

In a separate terminal:

```bash
cd frontend
npm run dev
```

Open http://localhost:3000, drop or pick a CSV file, then click **Upload & Parse**.

---

## API

### `POST /upload`

- Content-Type: `multipart/form-data`
- Form field: `file` (the CSV)
- Limits: max **5 MB**, mimetype must be `text/csv`, `application/csv`, `application/vnd.ms-excel`, or `text/plain` (enforced by `ParseFilePipe` and the service)

Expected CSV columns: `name,age,email,department` (department is optional).

#### Validation rules (`CsvRowDto`)

| Field      | Rule                                    |
| ---------- | --------------------------------------- |
| name       | required, non-empty string              |
| age        | number, 18 ≤ age ≤ 100                  |
| email      | valid email                             |
| department | optional string                         |

A global `ValidationPipe` is enabled with `whitelist: true` and `forbidNonWhitelisted: true`.

#### Sample request (curl)

```bash
curl -X POST http://localhost:3001/upload \
  -F "file=@sample.csv"
```

#### Sample response

```json
{
  "valid": [
    { "name": "John", "age": 25, "email": "john@example.com", "department": "Engineering" },
    { "name": "Jane", "age": 30, "email": "jane@example.com", "department": "Marketing" }
  ],
  "errors": [
    {
      "row": 3,
      "issues": [
        "name should not be empty",
        "age must be a number",
        "email must be an email"
      ]
    }
  ]
}
```

### Sample CSVs

Two files are provided in the repo root:

**`sample.csv`** — every row is valid, the response will contain only `valid` entries:

```
name,age,email,department
John,25,john@example.com,Engineering
Jane,30,jane@example.com,Marketing
Alice,28,alice@example.com,Design
Bob,35,bob@example.com,Sales
Charlie,22,charlie@example.com,Engineering
Rohan,23,rohan@example.com,Support
```

**`sample-invalid.csv`** — mixes valid and invalid rows so you can see the `errors` array:

```
name,age,email,department
John,25,john@example.com,Engineering        # valid
,30,jane@example.com,Marketing              # name empty
Alice,15,alice@example.com,Design           # age < 18
Bob,40,not-an-email,Sales                   # email invalid
Charlie,abc,charlie@example.com,Engineering # age not a number
Diana,150,diana@example.com,Research        # age > 100
Eve,28,eve@example.com,                     # valid (department optional)
```

Try them with curl:

```bash
curl -X POST http://localhost:3001/upload -F "file=@sample.csv"
curl -X POST http://localhost:3001/upload -F "file=@sample-invalid.csv"
```

---

## Test

### Backend unit tests (Jest)

```bash
cd backend
npm test
```

Covered:

- `csv.service.spec.ts` — parses a mock CSV, asserts valid rows and validation errors; ensures `BadRequestException` when no file is provided.
- `csv.controller.spec.ts` — mocks `CsvService` and verifies the controller delegates the uploaded file and returns the service response.

Watch mode:

```bash
npm run test:watch
```

### Manual end-to-end test

1. Start backend and frontend (steps above).
2. Open http://localhost:3000.
3. Upload `sample.csv` from the repo root — confirm all 6 rows render in the **Valid Rows** table and the **Errors** table is empty.
4. Upload `sample-invalid.csv` — confirm 2 rows appear in **Valid Rows** (John, Eve) and 5 rows appear in the **Errors** table with the failing field messages.

### Build (production)

```bash
# Backend
cd backend
npm run build
npm start            # runs dist/main.js on :3001

# Frontend
cd ../frontend
npm run build
npm start            # serves Next.js production build on :3000
```

---

## Tech Stack

- NestJS 11 (Node.js + TypeScript)
- @nestjs/config (env-driven configuration)
- papaparse (CSV parsing)
- class-validator + class-transformer (DTO validation)
- @nestjs/swagger + swagger-ui-express (API docs at `/docs`)
- Jest + ts-jest (unit tests)
- Next.js 14 + React 18 (frontend)
