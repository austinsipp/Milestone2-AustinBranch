import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/style.css';
import App from './App';
import {FoodContextProvider} from './context/foodContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </React.StrictMode>
);

