import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AssistantPage from '../pages/AssistantPage';
import ScannerPage from '../pages/ScannerPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assistant" element={<AssistantPage />} />
      <Route path="/scanner" element={<ScannerPage />} />
      {/* Additional routes will be added here as features are implemented */}
    </Routes>
  );
};

export default AppRouter;
