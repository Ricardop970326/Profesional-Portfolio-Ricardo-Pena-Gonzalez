import React from 'react'
import "../css/footer.css"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"




export default function Footer() {
  return (
  
<footer>
  <nav>
    <div className="nav-links-container">
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div className="contact-info-container">
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
  </nav>
  <p>Copyright © 2024 Ricardo A. Pena G. All Rights Reserved.</p>
</footer>


  )
}



