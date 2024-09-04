// Tabs.js
import React, { useState } from 'react';
import '../css/MainContent.css';

const Tabs = ({ categories, onSelect }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category);
    onSelect(category);
  };

  return (
    <div className="tabs">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`tab ${activeTab === category ? 'active' : ''}`}
          onClick={() => handleTabClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
