import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

createRoot(document.getElementById('root')).render(<App />);

AOS.init({ duration: 900, easing: 'ease-out-quart' });
