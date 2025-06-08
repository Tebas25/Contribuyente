import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { MainLayout } from '../layout/MainLayout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/contribuyente" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
