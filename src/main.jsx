import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // To'g'ri import qilinganiga ishonch hosil qiling
import './index.css'; // Agar kerak bo'lsa CSS fayllarini ham qo'shishingiz mumkin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
