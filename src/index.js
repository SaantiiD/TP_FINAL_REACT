import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import { CartProvider } from './context/CartContext';
import App from './components/App';
import './utils/funcionesBDD.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

