import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { LandingPage } from '../pages/home/LandingPage';
import { MainLayout } from '../pages/MainLayout';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contribuyente" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);
