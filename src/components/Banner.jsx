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
            <button text="XX век" hover-text="XIX век" onClick={handleChange}></button>
          ) : (
            <button text="XIX век" hover-text="XX век" onClick={handleChange}></button>
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
