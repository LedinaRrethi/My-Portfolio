import React from 'react';
import '../../style/style.css';
import avatar from '../../images/avatar.jpg';

const Hero = () => {
  return (
    <div>
      {/*  Hero section */}
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
            <div className="btn">
              <a href="#projects">View My Work</a>
            </div>
          </div>
          <div className="scroll-icon-box">
            <a href="#about" className="scroll-btn">
              <i className="uil uil-mouse-alt" />
              <p>Scroll Down</p>
            </a>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
