import React, { useState, useEffect } from 'react';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid.';
    }
    if (!message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data para validimit:', formData);

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      localStorage.removeItem('contactFormData');
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <InputBox
          type="text"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputBox
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputBox type="text" label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
        <InputBox
          type="textarea"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <div className="btn-submit" style={{ marginTop: '50px' }}>
          <Button label="Send Message" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
