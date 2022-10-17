import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import { DataContextProvider } from './context/DataContext';
import { MenuContextProvider } from './context/MenuContext';
import { ResizeContextProvider } from './context/ResizeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <MenuContextProvider>
      <ResizeContextProvider>
        <App />
      </ResizeContextProvider>
    </MenuContextProvider>
  </DataContextProvider>
);