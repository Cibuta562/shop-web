import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Confirm from "./pages/Confirm";
import {CartProvider} from "react-use-cart";
import ThankYou from "./pages/ThankYou";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CartProvider>
      <HashRouter>
          <Routes>
              <Route path="/" element={<App/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/confirm" element={<Confirm/>} />
              <Route path="/thanks" element={<ThankYou/>} />
          </Routes>
      </HashRouter>
      </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
