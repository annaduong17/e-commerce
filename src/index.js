import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from './context/shoes';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
)