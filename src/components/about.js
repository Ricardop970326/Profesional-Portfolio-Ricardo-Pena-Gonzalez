import React from 'react';
import Arrow from "../assets/arrow.png"
import Medal from "../assets/experience.png"
import Edu from "../assets/experience.png"
import Profils from "../assets/rapg1.png"
import "../css/about.css"


const AboutSection = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            id="picture1"
            src={Profils}
            alt="Ricardo profile picture"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={Medal}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <h6 id="experience">
                Road To Hire/Red Ventures
                <br />
                Front-end and Back-end Coding Apprentice
              </h6>
            </div>
            <div className="details-container">
              <img
                src={Edu}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <h6 id="education">
                GED
                <br />
                Texas Education Agency
              </h6>
            </div>
          </div>
          <div className="text-container">
            <p>
              Ricardo Alejandro Peña is a committed and courageous person with a
              positive mindset. Born and raised in Venezuela, he graduated from high
              school and obtained a diploma as an Electrical Technician. He holds
              certificates from courses like Community Manager, Electronic Commerce,
              and Cloud Computing. From a young age, Ricardo has always been curious
              and enjoyed coding, knowing how programs are built, and understanding
              them. Coding has always been one of his interests, and his passion for
              coding is what continues to impulse him on taking new challenges. He
              started university to get a bachelor's in Informatic Engineering, but
              the social-economic situation in his country led him to migrate.
              Ricardo is now on a new adventure as an immigrant in the U.S. He is
              working to get the opportunity and determined to build his career in
              the tech field to fulfill that dream.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {window.location.href='./#skills'}}
      />
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow2"
        onClick={() => {window.location.href='./#projects'}}
      />
    </section>
  );
}

export default AboutSection;
