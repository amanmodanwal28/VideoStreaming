import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import "../css/Sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <Button variant="outline-light" className="hamburger" onClick={toggleSidebar}>
        ☰
      </Button>
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
  );
};

export default Sidebar;
