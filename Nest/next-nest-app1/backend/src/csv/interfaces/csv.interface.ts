export interface CsvValidRow {
  name: string;
  age: number;
  email: string;
  department?: string;
}

export interface CsvRowError {
  row: number;
  issues: string[];
}

export interface CsvUploadResult {
  valid: CsvValidRow[];
  errors: CsvRowError[];
}

export interface RawCsvRow {
  name?: string;
  age?: string | number | null;
  email?: string;
  department?: string;
  [key: string]: string | number | null | undefined;
}
