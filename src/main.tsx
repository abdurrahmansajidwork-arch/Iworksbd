import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ServicesPage from './ServicesPage.tsx';
import AboutPage from './AboutPage.tsx';
import TeamPage from './TeamPage.tsx';
import ManagementPage from './ManagementPage.tsx';
import ContactPage from './ContactPage.tsx';
import QueryPage from './QueryPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ScrollProgressBar from './components/ScrollProgressBar.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollProgressBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
