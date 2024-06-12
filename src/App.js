// src/App.js

// Importing React library to use JSX
import React from 'react';

// Importing the CSS file for styling
import './App.css';

// Importing the components used in the app
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

// Main functional component of the application
function App() {
  return (
    // Root div with a class name "App" for styling
    <div className="App">
      {/* Header component at the top of the page */}
      <Header />
      
      {/* Banner component to display a banner or hero image */}
      <Banner />
      
      {/* ContentSection component for the TV section */}
      <ContentSection
        title="Enjoy on your TV."
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image="/images/tv.png"
      />
      
      {/* ContentSection component for the offline download section */}
      <ContentSection
        title="Download your shows to watch offline."
        description="Save your favorites easily and always have something to watch."
        image="/images/mobile.jpg"
      />
      
      {/* Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
