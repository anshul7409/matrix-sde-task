import React from 'react';

function MainContent() {
  return (
    <div className="main-content">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="box"></div>
      ))}
    </div>
  );
}

export default MainContent;
