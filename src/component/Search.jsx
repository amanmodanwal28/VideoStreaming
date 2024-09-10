import { useState } from 'react'
import '../css/Search.scss' // Adjust the path if needed
import mic from '../assets/mic.png'
// import Hamburger from './Hamburger'
import logo from '../assets/GP-Logo.png'
const SearchBar = () => {
  const [query, setQuery] = useState('')

  const search = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            onChange={search}
            value={query}
          />
          <button>🔍</button>
        </div>
        <div className="mic-container">
          <img src={mic} alt="Mic" className="mic" />
        </div>
      </div>
    </>
  )
}

export default SearchBar
