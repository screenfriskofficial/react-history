import React from 'react';
function Banner({ changeBackground, handleChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <span>Общественные</span> <br /> организации России XIX-XX века.
        </h1>
        <div className="header-button-container">
          {changeBackground ? (
            <button onClick={handleChange}>XX век</button>
          ) : (
            <button onClick={handleChange}>XIX век</button>
          )}
        </div>
      </div>
      <div className="header-overlay"></div>
      <div className="header-background"></div>
      {changeBackground && <div className="header-background1"></div>}
    </header>
  );
}
export default Banner;
