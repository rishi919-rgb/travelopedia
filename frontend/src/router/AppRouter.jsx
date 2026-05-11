import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AssistantPage from '../pages/AssistantPage';
import ScannerPage from '../pages/ScannerPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from '../components/Common/PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/assistant" 
        element={
          <PrivateRoute>
            <AssistantPage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/scanner" 
        element={
          <PrivateRoute>
            <ScannerPage />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } 
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* 404 catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
