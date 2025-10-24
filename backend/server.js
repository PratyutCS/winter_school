import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const DATA_DIR = path.join('.', 'data');
const REG_FILE = path.join(DATA_DIR, 'registrations.json');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(REG_FILE)) fs.writeFileSync(REG_FILE, JSON.stringify([], null, 2));

// Simple endpoints (no DB). Demo-only.
app.post('/api/register', (req, res) => {
  try {
    const reg = {
      id: Date.now().toString(),
      name: req.body.name || 'Anonymous',
      email: req.body.email || '',
      organization: req.body.organization || '',
      feePaid: !!req.body.feePaid,
      createdAt: new Date().toISOString()
    };
    const data = JSON.parse(fs.readFileSync(REG_FILE));
    data.push(reg);
    fs.writeFileSync(REG_FILE, JSON.stringify(data, null, 2));
    res.status(201).json({ success: true, data: reg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/registrations', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(REG_FILE));
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Sample metadata endpoint
app.get('/api/meta', (req, res) => {
  res.json({
    event: 'IndoCrypt National Workshop 2025',
    date: '2025-12-15T10:00:00+05:30',
    timezone: 'Asia/Kolkata'
  });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
