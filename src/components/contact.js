import React, { useState } from 'react';
import Mail from "../assets/email.png"
import Linkedin from "../assets/linkedin.png"
import Phone from "../assets/email.png"
import "../css/contact.css"

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  }

  return (
    <section id="contact">
      <p className="section__text__p1">Reach out!!</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
        <img
  className="icon"
  onClick={() => {window.open('https://www.linkedin.com/in/ricardo-pena-gonzalez/')}}
  src={Linkedin}
  alt="Ricardo profile picture"
/>
          <p><a   onClick={() => {window.open('https://www.linkedin.com/in/ricardo-pena-gonzalez/')}}
>Linkedin</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={Phone}
            alt="phone icon"
            className="icon contact-icon phone-icon"
          />
          <p><a>(737) 318-3154</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={Mail}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a className="box">ricardop.alejandrog@gmail.com</a></p>
        </div>
      </div>
      <div className="contnair">
        <button className='contactButton' onClick={togglePopup}>Send me a Message Here</button>
      </div>
      <div className={showPopup ? "popUp show" : "popUp"}>
        <form onsubmit="validateForm(event)"
      action="https://formspree.io/f/xwkdywrd"
      method="POST"
      name="myform">
          <div className="remove" onClick={handleClosePopup}>x</div>
          <label htmlFor="fn">First Name</label>
          <input type="text" name="fn" required/>
          <label htmlFor="ln">Last Name</label>
          <input type="text" name="ln" required/>
          <label htmlFor="number">Number</label>
          <input type="number" name="phone" required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
          <label htmlFor="notes">Comments</label>
          <textarea name="notes" rows="5" cols="5" ></textarea>
          <input id="submit" type="submit" value="Submit"  required/>
        </form>
      </div>
    </section>
  );
}

export default Contact;