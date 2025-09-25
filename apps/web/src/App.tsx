import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './marketing/LandingPage';
import BookingsPage from './app/bookings/BookingsPage';
import BusinessLogin from './app/business/BusinessLogin';
import BusinessSignup from './app/business/BusinessSignup';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/business/login" element={<BusinessLogin />} />
      <Route path="/business/signup" element={<BusinessSignup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/business/signup" element={<BusinessSignup />} />
    </Routes>
  );
}
