import React from 'react';
import '../../style/style.css';
import avatar from '../../images/avatar.jpg';

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
          <img src={avatar} alt="Ledina Rrethi" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            Frontend <span> Developer</span>
          </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, consequuntur.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem, molestias vero aliquam commodi quam?
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
