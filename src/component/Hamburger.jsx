import '../css/Hamburger.scss';
import logo from '../assets/GP-Logo.png'


const hamburger = () => {
  return (
    <>
      <div className="HamburgerContainer">
        <button>hamburger</button>
      </div>
      <img src={logo} alt="Logo" className="logo" />
    </>
  )
}


export default hamburger