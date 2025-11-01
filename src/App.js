import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Register from './pages/Register';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show login page first on root */}
        <Route path="/" element={<Login />} />

        {/* App pages live under /app so we can show login at root without the app chrome */}
        <Route path="/app" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Fallbacks */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
