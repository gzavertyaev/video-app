import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'styles';
import { store, persistor } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'components';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>,
);

reportWebVitals();
