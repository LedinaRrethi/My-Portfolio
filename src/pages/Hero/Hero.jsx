import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import avatar from '../../images/avatar.jpg';
import '../../style/style.css';
import Button from '../../components/Button/Button';

const Hero = () => {
  const handleViewWorkClick = () => {
    // Scroll to the projects section (or you can use window.location.hash = '#projects')
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="home-content">
          <h3>Hi</h3>
          <h1>
            I'm <span style={{ color: 'orangered' }}>Ledina</span>
          </h1>
          <h1>
            Striving for excellence in <span>Software Development</span>
          </h1>
          <p className="principle">
            My guiding principle: <br />
            <span style={{ fontWeight: 'bold', color: 'orangered' }}>"Thinking outside the Box is the Key!" </span>
          </p>
          <Button label="View My Work" href="#projects" />
        </div>
        <ScrollButton href="#about" label="Scroll Down" />
      </div>
      <div className="featured-image">
        <div className="image">
          <Avatar src={avatar} alt="Ledina Rrethi" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
