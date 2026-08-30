import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gpt from './pages/gpt/Gpt';
import Rag from './pages/rag/rag';
import Home from './pages/home/home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/gpt" element={<Gpt />} />
        <Route path="/rag" element={<Rag />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
