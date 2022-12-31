import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// DESC: mock service worker
import { worker } from './mocks/browser';
if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

// DESC: state management
import store from './store';

// DESC: import global css
import './styles/global.css';
import './styles/reset.css';

// DESC: import components
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
