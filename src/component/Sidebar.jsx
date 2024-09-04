// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import '../css/Sidebar.scss'
import logo from '../assets/GP-Logo.png'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Button
        variant="outline-light"
        className="hamburger"
        onClick={toggleSidebar}
      >
        ☰
      </Button>

      {isOpen && (

         <img src={logo} alt="Logo" className="logo" />
      )}

      <ListGroup className="menu">
        <ListGroup.Item>
          <span className="icon">🏠</span>
          <span className="menu-text">Home</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="icon">🎬</span>
          <span className="menu-text">Shorts</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="icon">📦</span>
          <span className="menu-text">Subscriptions</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="icon">📁</span>
          <span className="menu-text">You</span>
          <ListGroup className="submenu">
            {/* Submenu items can go here */}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Sidebar
