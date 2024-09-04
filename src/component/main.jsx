

import { createRoot } from 'react-dom/client'

import Search from './Search'
import LoginIdBar from './Login'
import '../css/index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../component/Sidebar";



import React from 'react';



import '../css/index.scss';
import MainContent from './MainContent';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <header className="header">
     <Sidebar/>

      <Search />
      <LoginIdBar />
    </header>
    <main>
      <MainContent />
    </main>
    <Footer />

  </div>
);
