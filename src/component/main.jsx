
import { createRoot } from 'react-dom/client'
import Search from './Search'
import LoginIdBar from './Login'
import '../css/index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../component/Sidebar";
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
      <Sidebar />
      <MainContent />
    </main>
    <Footer />
  </div>
)
