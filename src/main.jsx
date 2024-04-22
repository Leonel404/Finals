import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './assets/Home'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-blue/theme.css';     
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
            <App/>
        </PrimeReactProvider>
  </React.StrictMode>,
)
