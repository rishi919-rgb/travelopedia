import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ModeProvider } from './context/ModeContext';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ModeProvider>
        <BrowserRouter>
          <div className="app-container">
            <AppRouter />
          </div>
        </BrowserRouter>
      </ModeProvider>
    </Provider>
  );
}

export default App;
