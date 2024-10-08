import React from 'react';
import './App.css'

const WelcomeSection = () => {
  return (
    <section id="welcome-section">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <div className="buttons">
          <a href="#projects">See My Work</a>
          <a href="#about" className="cta">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
