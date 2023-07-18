import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';

// Define el elemento de la aplicación
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
