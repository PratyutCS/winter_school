# IndoCrypt National Workshop 2025 - IIT Bhilai - Website

Countdown is set to **Dec 15, 2025 10:00 (Asia/Kolkata)**.

## Contents
- `frontend/` — Vite + React + Tailwind frontend.
- `backend/` — Express backend (no MongoDB). Registrations are saved to `backend/data/registrations.json` (simple JSON storage for demo).
- sample data included for sponsors, partners and program.

## Quick start guide

### Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on port 5000 by default (API endpoint: `POST /api/register` and `GET /api/registrations` for demo).

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on port 3000 by default and will proxy API requests to the backend using `/api/*` (CORS enabled).

## Notes
- MongoDB is **not** configured Backend uses a JSON file for persistence.
- Countdown target: `2025-12-15T10:00:00+05:30` (Asia/Kolkata).
- Customize styles/components in `frontend/src`.
