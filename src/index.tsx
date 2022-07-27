/*IMPORT UTILITIES*/
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Global/Store/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
/*IMPORT COMPONENTS*/
import App from './App';
/*IMPORT CSS*/
import './index.css';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <CookiesProvider>
               <App />
            </CookiesProvider>
         </Router>
      </Provider>
   </React.StrictMode>
);
