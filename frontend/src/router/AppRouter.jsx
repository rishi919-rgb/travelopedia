import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Additional routes will be added here as features are implemented */}
    </Routes>
  );
};

export default AppRouter;
