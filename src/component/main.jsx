// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Search from './Search'
import LoginIdBar from './Login'
import '../css/index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../component/Sidebar";


createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <Sidebar/>
    <Search />
    <LoginIdBar />
  </div>
)