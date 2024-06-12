// Importing React library to create the component
import React from 'react';

// Importing the CSS file specific to the Header component for styling
import './Header.css';

// Defining the Header functional component
const Header = () => {
  return (
    // The header element with a class name "header" for styling
    <header className="header">
      {/* Logo image with alt text for accessibility */}
      <img src="/Logo.png" alt="Netflix Logo" className="header__logo" />
      {/* Navigation section of the header */}
      <nav className="header__nav">
        {/* Sign In button */}
        <button className="header__button">Sign In</button>
      </nav>
    </header>
  );
};

// Exporting the Header component as the default export
export default Header;

