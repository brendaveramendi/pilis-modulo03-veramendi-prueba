import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CardsProvider } from './context/CardContext';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CardsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CardsProvider>
    </BrowserRouter>   
  </React.StrictMode>
);


