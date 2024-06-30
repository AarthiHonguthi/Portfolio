import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Get in Touch</h1>
        <h2>Contact:</h2>
        <div className="item">
          <h2>Mail</h2>
          <span>aarthihonguthi025@gmail.com</span>
        </div>
        <div className="item">
          <h2>Instagram</h2>
          <a href="https://www.instagram.com/aarthi_honguthi/">@aarthi_honguthi</a>
        </div>
        <div className="item">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/aarthi-honguthi-b01838257/">Go to Aarthi's profile</a>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="text" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
