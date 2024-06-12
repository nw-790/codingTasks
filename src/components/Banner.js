// Importing React library to create the component
import React from 'react';

// Importing the CSS file specific to the Banner component for styling
import './Banner.css';

// Defining the Banner functional component
const Banner = () => {
  return (
    // The section element with a class name "banner" for styling
    <section className="banner">
      {/* Title of the banner */}
      <h1 className="banner__title">Unlimited movies, TV shows, and more.</h1>
      {/* Subtitle of the banner */}
      <h2 className="banner__subtitle">Watch anywhere. Cancel anytime.</h2>
      {/* Button in the banner to start the process */}
      <button className="banner__button">Get Started</button>
    </section>
  );
};

// Exporting the Banner component as the default export
export default Banner;
