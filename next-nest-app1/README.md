# next-nest-app1

Two apps in one repo:

- `backend/` – NestJS API exposing `POST /upload` that parses CSV via **papaparse** and returns JSON.
- `frontend/` – Next.js (React) app to upload a CSV and render it as a table.

## Run

### Backend (port 3001)
```bash
cd backend
npm install
npm run start:dev
```

### Frontend (port 3000)
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000, choose a CSV file, and click **Upload**.

### API
`POST http://localhost:3001/upload` — multipart/form-data, field name `file`.

Response:
```json
{
  "filename": "data.csv",
  "rowCount": 1,
  "fields": ["name", "age"],
  "data": [{ "name": "John", "age": 25 }]
}
```
