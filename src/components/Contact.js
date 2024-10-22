import "./StylesComponents.scss";
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs.sendForm(
        'service_e2zzzuf',   // remplace par ton Service ID
        'template_n7xlk6l',
        form.current,
        '08lgTRSjKksTvdwcB'       // remplace par ton User ID
      ).then((result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setErrors({});
      }, (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-form">
       <h2>Nous Contacter</h2>
      {submitted && <p className="success">Votre message état bien énvoyé !</p>}
      
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group" id="Contact">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
