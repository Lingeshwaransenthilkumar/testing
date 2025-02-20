import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


console.log("meta variable is",import.meta.env.BASE_URL)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='*' element={<App/>}/>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
)
