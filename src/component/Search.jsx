import { useState } from 'react'
import '../css/Search.scss' // Adjust the path if needed
import mic from '../assets/mic.png'
import Hamburger from './Hamburger'
const SearchBar = () => {
  const [query, setQuery] = useState('')

  const search = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <>
      <Hamburger />
      <div className="container">
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
