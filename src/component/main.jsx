import Search from './Search'
import LoginIdBar from './Login'
import '../css/index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../component/Sidebar";
import '../css/index.scss';
import { createRoot } from 'react-dom/client';
import MainContent from './MainContent';
import Footer from './Footer';
import Hamburger from './Hamburger'
import { RxHamburgerMenu } from 'react-icons/rx'



createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <header className="header">
      {/* <div className="sidebar-container"><Sidebar /></div> */}
      <div className="search-login-container">
        <div>
          <span style={{ padding: '1rem .5rem' }}>
            <RxHamburgerMenu size={30} color="black" />
          </span>
        </div>
        <Hamburger />
        <Search />
        <LoginIdBar />
      </div>
    </header>
    <main>
      <MainContent />
      <div className="main-content-container">
        <MainContent />
      </div>
    </main>
    <Footer />
  </div>
)
