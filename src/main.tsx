// import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/route';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
       <Routes />
       <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  /* </React.StrictMode>, */
)
