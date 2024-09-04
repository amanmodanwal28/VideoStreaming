// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';

import Search from './Search';
import LoginIdBar from './Login';
import '../css/index.scss';
import MainContent from './MainContent';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <header className="header">
      <Search />
      <LoginIdBar />
    </header>
    <main>
      <MainContent />
    </main>
    <Footer />
  </div>
);
