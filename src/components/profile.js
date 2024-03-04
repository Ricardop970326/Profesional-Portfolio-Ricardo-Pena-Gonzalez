import React from 'react'
import "../css/profile.css"
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import resumePdf from '../assets/Ricardo-A.-peña-G.Resume.pdf';

import Profil from "../assets/B44A3587.jpg";

const openResume = () => {
  window.open(resumePdf);
};

export default function Hero () {
    return (
      <section id="profile">
      <div className="section__pic-container">
        <img
          id="picture"
          src={Profil}
          alt="Ricardo profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ricardo Peña</h1>
        <p className="section__text__p2">Coding Apprentice</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={openResume}
            // onclick="window.open('./assets/Ricardo A. peña G. Resume.pdf')"
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => {window.location.href='./#contact'}}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
        <img
  className="icon"
  onClick={() => {window.open('https://www.linkedin.com/in/ricardo-pena-gonzalez/')}}
  src={Linkedin}
  alt="Ricardo profile picture"
/>
<img
  className="icon"
  onClick={() => {window.open('https://github.com/Ricardop970326?tab=repositories')}}
  src={Github}
  alt="Ricardo profile picture"
/>
        </div>
      </div>
    </section>
    );
}
   

