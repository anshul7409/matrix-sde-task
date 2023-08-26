import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <input type="text" className="search-bar" placeholder="Search" />
      <button className="connect-button">Connect</button>
    </div>
  );
}

export default TopBar;
