import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import { ApiContextProvider } from './context/ApiContext';
import { MenuContextProvider } from './context/MenuContext';
import { ResizeContextProvider } from './context/ResizeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiContextProvider>
    <MenuContextProvider>
      <ResizeContextProvider>
        <App />
      </ResizeContextProvider>
    </MenuContextProvider>
  </ApiContextProvider>
);