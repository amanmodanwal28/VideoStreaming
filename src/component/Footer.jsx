import React, { useEffect, useState } from 'react';
import '../css/Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;
    setIsVisible(isBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <p>© 2024 My YouTube Clone. All rights reserved.</p>
      <p>Privacy • Terms • Contact</p>
    </footer>
  );
};

export default Footer;
