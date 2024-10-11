import React from 'react';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Contact Me</h2>
      <form className="contact-form">
        <InputBox type="text" label="Name" />
        <InputBox type="email" label="Email" />
        <InputBox type="text" label="Subject" />
        <InputBox type="textarea" label="Message" />
        <div className="btn-submit" style={{ marginTop: '50px' }}>
          <Button label="Send Message" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
