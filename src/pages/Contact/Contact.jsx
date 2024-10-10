import React from 'react';
import '../../style/style.css';

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" method="post">
          <div className="input-box">
            <input type="text" required="required" />
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="email" required="required" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input id="subject" type="text" required="required" />
            <label>Subject</label>
          </div>
          <div className="input-box">
            <textarea required="required" defaultValue={''} />
            <label>Message</label>
          </div>
          <div className="btn-submit">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
