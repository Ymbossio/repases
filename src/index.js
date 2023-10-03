import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Album } from './Album';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Album />
  </React.StrictMode>
);
