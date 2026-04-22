export interface ParsedCsvResult {
  filename: string;
  rowCount: number;
  fields: string[];
  data: Record<string, unknown>[];
}
