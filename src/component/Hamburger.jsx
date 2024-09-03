import '../css/Hamburger.scss';
import logo from '../assets/GP-Logo.png'


const hamburger = () => {
  return (
    <>
      <button>hamburger</button>
      <img src={logo} alt="Logo" className="logo" />
    </>
  )
}


export default hamburger