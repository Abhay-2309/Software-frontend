import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar'; // your current home component (default export in Navbar.jsx)
import InternshipPage from './pages/Internship';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/internships' element={<InternshipPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
