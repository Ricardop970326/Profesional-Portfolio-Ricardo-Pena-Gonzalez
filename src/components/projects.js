import React from 'react'
import "../css/projects.css"
import Game from "../assets/Game.png";

import Calculator from "../assets/calculator.png";
import Calculator2 from "../assets/calculatorvr2.png";

import Justice from "../assets/code-for-justice.png";
import Justice2 from "../assets/code-for-justice-vr2.png";

import Ecommerce from "../assets/e-commerce.png";
import Budject from "../assets/budjeg.png";
import Budjectv2 from "../assets/budgetv2.png";
import Hope from "../assets/hope.png";
import Ecomerce2 from "../assets/e-commercev2.png";
import learner from "../assets/lrnr.png";
import Arrow from "../assets/arrow.png";

const Projects = () => {
    return (
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          {/* Project One */}
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Game} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Rock-Paper-Scissors</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/rock-paper-scissors')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://rock-paper-scissors-project-steel.vercel.app/')}>
                  Live Demo
                </button>
              </div>
            </div>
            {/* Project Two */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Calculator} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Calculator</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/calculator/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://calculator-flax-tau.vercel.app/')}>
                  Live Demo
                </button>
              </div>
            </div>
            {/* Project Three */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Justice} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Code for Justice</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/code-for-justice/tree/main/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://code-for-justice-nine.vercel.app/')}>
                  Live Demo
                </button>
              </div>
            </div>
            </div>

            {/* Project four */}
            <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Hope} alt="Project 6" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Hope Hacks API</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/vbenavi0/hope-hacks/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://saludysonrisas.onrender.com/')}>
                  Live Demo
                </button>
              </div>
              </div>
            </div>
         
    


            
            {/* Project Five */}
                      <div className="about-containers">

            <div className="details-container color-container">
              <div className="article-container">
                <img src={Ecommerce} alt="Project 4" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">E-Commerce VR1</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/e-commerce-project/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://e-commerce-project-orpin.vercel.app/')}>
                  Live Demo
                </button>
              </div>
            </div>
          
        
          {/* Project Six */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Budject} alt="Project 5" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Tracker Vr1</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/Budget-Tracker-Javascript-GI-Assigment-/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://tracker-three-theta.vercel.app/')}>
                  Live Demo
                </button>
              </div>
             </div>
             {/* Project Seven */}
              <div className="details-container color-container">
              <div className="article-container">
                <img src={Calculator2} alt="Project 6" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Calculator Vr2</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/Calculator-Vr2')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://saludysonrisas.onrender.com/')}>
                  Live Demo
                </button>
              </div>
              </div>
            </div>

            {/* Project Eight */}
            <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={learner} alt="Project 8" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Learner App</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/Lrnr_App_ricardo')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => {window.open('https://lrnr-app-ricardo.onrender.com/')}}>
                  Live Demo
                </button>
                </div>  
                </div> 
         
      </div>
                  {/* Project Nine */}
      <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Budjectv2} alt="Project 7" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Tracker Vr2</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/Budget-Tracker-v2')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://budget-tracker-v2-xtb3.onrender.com/')}>
                  Live Demo
                </button>
              </div>
            </div>
          
            {/* Project Ten */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Justice2} alt="Project 8" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Code for Justice Vr2</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/Code-for-justice-v2/tree/main')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => {window.open('https://code-for-justice-v2.onrender.com/')}}>
                  Live Demo
                </button>
                </div>  
                </div> 

                  {/* Project Eleven */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Ecomerce2} alt="Project 8" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">E-Commerce Vr2</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Ricardop970326/e-commercevr2c14/')}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://e-commerce-vr-2.onrender.com/')}>
                  Live Demo
                </button>
              </div>
            </div>
      </div>
      
      {/* Arrow Down */}
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {window.location.href='./#contact'}} // Use onClick event handler instead of inline onclick
      />
            
          </div>
          
        
      </section>
    );
  };
  
  export default Projects;



  