// Importing React library to create the component
import React from 'react';

// Defining the Footer functional component
const Footer = () => {
  return (
    // The footer element with a class name "footer" for styling
    <footer className="footer">
      {/* Copyright information */}
      <p>&copy; 2024 Netflix Clone. All rights reserved.</p>
      {/* Link to the original Netflix website */}
      <p>
        Original website: 
        <a 
          href="https://www.netflix.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Netflix
        </a>
      </p>
    </footer>
  );
};

// Exporting the Footer component as the default export
export default Footer;
