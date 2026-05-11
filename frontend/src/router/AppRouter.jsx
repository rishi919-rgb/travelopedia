import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AssistantPage from '../pages/AssistantPage';
import ScannerPage from '../pages/ScannerPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Additional routes will be added here as features are implemented */}
    </Routes>
  );
};

export default AppRouter;
