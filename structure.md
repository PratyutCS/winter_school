// MERN Aesthetic Starter Template with Deployment Setup
// Frontend: React + Tailwind CSS
// Backend: Express + MongoDB
// Deployment: Frontend on Vercel, Backend on Render or Railway

/* ===============================
   1. Folder Structure
   ===============================
project-root/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── contentRoutes.js
│   ├── models/
│   │   └── Content.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeatureSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md

/* ===============================
   2. Backend (Express + MongoDB)
   =============================== */

// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contentRoutes from './routes/contentRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/content', contentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// backend/models/Content.js
import mongoose from 'mongoose';
const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});
export default mongoose.model('Content', contentSchema);

// backend/routes/contentRoutes.js
import express from 'express';
import Content from '../models/Content.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

// backend/.env.example
MONGO_URI=mongodb+srv://your_connection_string
PORT=5000

/* ===============================
   3. Frontend (React + Tailwind)
   =============================== */

// frontend/src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
  background-color: #fafafa;
}

// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// frontend/src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-col items-center justify-center h-[90vh] p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
        Building Aesthetic Web Experiences
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-center opacity-80">
        A seamless fusion of elegant design and modern MERN architecture.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-slate-900 rounded-2xl font-medium hover:bg-slate-200 transition-all">
        Get Started
      </button>
    </section>
  );
}

// frontend/src/components/FeatureSection.jsx
export default function FeatureSection() {
  const features = [
    { title: 'Modern Design', desc: 'Sleek, responsive layouts built with Tailwind.' },
    { title: 'Dynamic Backend', desc: 'Express & MongoDB powering fast APIs.' },
    { title: 'Fully Customizable', desc: 'Adapt easily for events, brands, or portfolios.' }
  ];

  return (
    <section className="py-16 bg-white text-slate-900">
      <h2 className="text-3xl font-semibold text-center mb-10">Why Choose This Template?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8 md:px-20">
        {features.map((f, i) => (
          <div key={i} className="p-6 shadow-md rounded-2xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// frontend/src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  );
}

// frontend/src/components/Navbar.jsx
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-slate-900">Aesthetica</Link>
      <div className="flex gap-6 text-slate-700">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-auto">
      <p>© 2025 Aesthetica. Built with ❤️ using MERN Stack.</p>
    </footer>
  );
}

// frontend/src/pages/About.jsx
export default function About() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-semibold mb-4">About Aesthetica</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Aesthetica merges visual excellence with full-stack power — inspired by IndoCrypt's simplicity and 5S Content's edge.
      </p>
    </div>
  );
}

/* ===============================
   4. Deployment Setup
   =============================== */

// --- FRONTEND (Vercel) ---
// 1. Push the frontend folder to a new GitHub repo.
// 2. Go to https://vercel.com → Import the repo → Select frontend folder as root.
// 3. Add environment variable:
//    VITE_API_URL = https://your-backend.onrender.com/api
// 4. Deploy. Vercel auto-detects React + Vite.

// --- BACKEND (Render or Railway) ---
// 1. Push backend folder to GitHub.
// 2. Go to Render (https://render.com) → Create new Web Service → Connect repo.
// 3. Add environment variables from .env.example.
// 4. Choose Node version 18+.
// 5. Start command: node server.js
// 6. Deploy → It will host your API endpoint.

// --- Testing the connection ---
// From your frontend, use:
// fetch(`${import.meta.env.VITE_API_URL}/content`)
// to test API integration.

// 🎯 Done! You now have a full MERN stack template with aesthetic design and deploy-ready configuration.
