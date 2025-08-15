import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TopBar from './Components/TopBar/TopBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
  </StrictMode>
);
