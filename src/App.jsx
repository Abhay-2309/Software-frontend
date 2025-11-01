import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar'; // current default export from Navbar.jsx (your home)
import InternshipPage from './pages/Internship';

// Lightweight placeholders for routes that may not exist yet
const JobsPage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Jobs page (placeholder)
  </div>
);
const CompetitionsPage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Competitions page (placeholder)
  </div>
);
const MentorshipsPage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Mentorships page (placeholder)
  </div>
);
const PracticePage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Practice page (placeholder)
  </div>
);
const AboutPage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    About page (placeholder)
  </div>
);
const SchedulePage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Schedule page (placeholder)
  </div>
);
const RegisterPage = () => (
  <div className='min-h-screen flex items-center justify-center'>
    Register page (placeholder)
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/internships' element={<InternshipPage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/competitions' element={<CompetitionsPage />} />
      <Route path='/mentorships' element={<MentorshipsPage />} />
      <Route path='/practice' element={<PracticePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/schedule' element={<SchedulePage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
