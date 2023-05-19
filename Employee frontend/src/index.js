import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Address from './component/Address';
import Contact from './component/Contact';
import Role from './component/Role';
import Bank from './component/Bank';
import Mobile from './component/Mobile';
import FileUploader from './component/Upload';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Contact/> */}
    <App />
    {/* <FileUploader/> */}

    {/* <Role/> */}
    {/* <Mobile/> */}
    {/* <Address/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
