import React from 'react';

function Contact() {
  return (
    <div style={{ backgroundColor: '#003366', minHeight: '100vh', padding: '20px', color: 'white', fontSize: '14px' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #ff8c00', paddingBottom: '10px' }}>Contact Us</h1>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#0055b7', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
        <h3>Our Office</h3>
        <p>Address: 1234 Street Rd., City, State, 10021</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <h3>Customer Support:</h3>
        <p>Email: support@example.com</p>
        <p>Phone: (321) 654-0987</p>
        <h3>Contact Form</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" style={{ padding: '8px', margin: '10px 0', width: '100%', boxSizing: 'border-box' }} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={{ padding: '8px', margin: '10px 0', width: '100%', boxSizing: 'border-box' }} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" style={{ padding: '8px', margin: '10px 0', width: '100%', height: '100px', boxSizing: 'border-box' }}></textarea>
          <button type="submit" style={{ backgroundColor: '#ff8c00', color: '#ffffff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
