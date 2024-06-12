// Importing React library to create the component
import React from 'react';

// Defining the ContentSection functional component
// The component takes title, description, and image as props
const ContentSection = ({ title, description, image }) => {
  return (
    // The section element with a class name "content-section" for styling
    <section className="content-section">
      {/* Div containing the text elements of the content section */}
      <div className="content-section__text">
        {/* Title of the content section */}
        <h2>{title}</h2>
        {/* Description of the content section */}
        <p>{description}</p>
      </div>
      {/* Image related to the content section, with alt text for accessibility */}
      <img src={image} alt={title} className="content-section__image" />
    </section>
  );
};

// Exporting the ContentSection component as the default export
export default ContentSection;
