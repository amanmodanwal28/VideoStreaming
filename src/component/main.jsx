import '../css/index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../component/Sidebar";
import React from 'react';
import { createRoot } from 'react-dom/client';

import Search from './Search';
import LoginIdBar from './Login';
import MainContent from './MainContent';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <header className="header">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="search-login-container">
        <Search />
        <LoginIdBar />
      </div>
    </header>
    <main>
      <div className="main-content-container">
        <MainContent />
      </div>
    </main>
    <Footer />
  </div>
);
