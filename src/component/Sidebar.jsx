import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary' // Similar to "Shorts"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import PersonIcon from '@mui/icons-material/Person'
import '../css/Sidebar.scss'

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
      <ListGroup className="menu">
        <ListGroup.Item>
          <HomeIcon className="icon" />
          <span className="menu-text">
            <b>Home</b>
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <VideoLibraryIcon className="icon" />
          <span className="menu-text">
            <b>Shorts</b>
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <SubscriptionsIcon className="icon" />
          <span className="menu-text">
            <b>Subscriptions</b>
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <PersonIcon className="icon" />
          <span className="menu-text">
            <b>You</b>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Sidebar
