import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ModeProvider } from './context/ModeContext';

function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <div className="app-container">
          <AppRouter />
        </div>
      </BrowserRouter>
    </ModeProvider>
  );
}

export default App;
