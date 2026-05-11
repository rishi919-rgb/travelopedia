import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ModeProvider } from './context/ModeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'react-hot-toast';
import LocationTracker from './components/Common/LocationTracker';

function App() {
  return (
    <Provider store={store}>
      <ModeProvider>
        <BrowserRouter>
          <div className="app-container">
            <LocationTracker />
            <AppRouter />
            <Toaster 
              position="top-center" 
              toastOptions={{ 
                style: { 
                  background: 'var(--bg-tertiary)', 
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)'
                } 
              }} 
            />
          </div>
        </BrowserRouter>
      </ModeProvider>
    </Provider>
  );
}

export default App;
