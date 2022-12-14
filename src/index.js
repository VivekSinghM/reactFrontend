import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import MenuProvider from './context/MenuProvider';
import OrderProvider from './context/OrderProvide';
import TableProvicer from './context/TableProvicer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <OrderProvider>
            <TableProvicer>
              <App />
            </TableProvicer>
          </OrderProvider>
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

