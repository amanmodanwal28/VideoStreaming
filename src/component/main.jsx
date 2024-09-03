// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Search from './Search'
import LoginIdBar from './Login'
import '../css/index.scss'


createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <Search />
    <LoginIdBar />
  </div>
)