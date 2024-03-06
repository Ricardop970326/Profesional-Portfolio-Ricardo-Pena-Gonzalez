import React, { useState, useRef, useEffect } from 'react';
import Html from "../assets/60e82884cc593f6be8b3ac31_5ec7a166eab74da5d5a0b8b3_Lenny20AMA201.webp";
import Css from "../assets/cssssss.jpeg";
import Js from "../assets/js.jpeg";
import Git from "../assets/8ddf9310-4bee-4593-890b-bd9653a08d33.png";
import Github from "../assets/github-logo.png";
import Nodejs from "../assets/nodejs.jpg";
import Express from "../assets/express.png";
import Mysql from "../assets/d7b04738-bc60-48a8-bc99-d73a71ba998e.webp";
import Reacticon from "../assets/img.png";
import Arrow from "../assets/arrow.png";


import "../css/carousel.css";

const Carousel = () => {
  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="skills-details-container">
        <div className="container">
          <div className="carousel">
            <div className="carousel__face"><span> <img
  id="pic"
  src={Html}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
            <div className="carousel__face"><span> <img
  id="pic"
  src={Css}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
            {/* Repeat the above structure for all carousel faces */}
            <div className="carousel__face"><span> <img
  id="pic"
  src={Js}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
            <div className="carousel__face"><span> <img
  id="pic"
  src={Git}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}<div className="carousel__face"><span> <img
  id="pic"
  src={Github}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
            <div className="carousel__face"><span> <img
  id="pic"
  src={Nodejs}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}<div className="carousel__face"><span> <img
  id="pic"
  src={Express}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
            <div className="carousel__face"><span> <img
  id="pic"
  src={Mysql}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}<div className="carousel__face"><span> <img
  id="pic"
  src={Reacticon}
  alt="camera"
  draggable="false"
/></span></div> {/* Replace with your content */}
           
</div>
        </div>
      </div>
  
    </section>
    
  );
};

export default Carousel;















// export default function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(1);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Move to the next slide
//       setCurrentSlide((prevSlide) => (prevSlide % 5) + 1);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
//   }, []);

//   const handleRadioChange = (slideNumber) => {
//     setCurrentSlide(slideNumber);
//   };

//   return (
//     <section id="slider">
//       <input type="radio" name="slider" id="s1" checked={currentSlide === 1} onChange={() => handleRadioChange(1)} />
//       <input type="radio" name="slider" id="s2" checked={currentSlide === 2} onChange={() => handleRadioChange(2)} />
//       <input type="radio" name="slider" id="s3" checked={currentSlide === 3} onChange={() => handleRadioChange(3)} />
//       <input type="radio" name="slider" id="s4" checked={currentSlide === 4} onChange={() => handleRadioChange(4)} />
//       <input type="radio" name="slider" id="s5" checked={currentSlide === 5} onChange={() => handleRadioChange(5)} />
//       {/* <input type="radio" name="slider" id="s6" checked={currentSlide === 6} onChange={() => handleRadioChange(6)} /> */}
//       {/*<input type="radio" name="slider" id="s7" checked={currentSlide === 7} onChange={() => handleRadioChange(7)} /> */}
//       {/* <input type="radio" name="slider" id="s8" checked={currentSlide === 8} onChange={() => handleRadioChange(8)} />
//       <input type="radio" name="slider" id="s9" checked={currentSlide === 9} onChange={() => handleRadioChange(9)} />
//       <input type="radio" name="slider" id="s10" checked={currentSlide === 10} onChange={() => handleRadioChange(10)} /> */} 


//       <label htmlFor="s1" id="slide1">
//       <Link to="/listOfObject">
//          <img src={Camera} alt="" />
//         </Link>
//       </label>
//       <label htmlFor="s2" id="slide2">
//       <Link to="/listOfObject">
//         <img src={Dron} alt="" />
//         </Link>
//       </label>
//       <label htmlFor="s3" id="slide3">
//       <Link to="/listOfObject">
//         <img src={Headphones} alt="" />
//         </Link>
//       </label>
//       <label htmlFor="s4" id="slide4">
//       <Link to="/listOfObject">
//         <img src={Laptop} alt="" />
//         </Link>
//       </label>
//       <label htmlFor="s5" id="slide5">
//       <Link to="/listOfObject">
//         <img src={Segurity} alt="" />
//         </Link>
//       </label>
//       {/* <label htmlFor="s6" id="slide6">
//       <img src={Pc} alt="" />
//       </label>
//       */}
      
     
      
//     </section>
//   );
// }


// import React from 'react'
// import Dron from "../image/dron.jpeg"
// import Camera from "../image/camera.jpg"
// import Headphones from "../image/headphones.jpg"
// import "../css/carousel.css"


// export default function Carousel() {
//   return (

//     <section id="slider">
//   <input type="radio" name="slider" id="s1" defaultChecked="" />
//   <input type="radio" name="slider" id="s2" />
//   <input type="radio" name="slider" id="s3" />
//   <input type="radio" name="slider" id="s4" />
//   <input type="radio" name="slider" id="s5" />
//   <label htmlFor="s1" id="slide1">
//     <img
//       src={Camera}
//       alt=""
//     />
//   </label>
//   <label htmlFor="s2" id="slide2">
//     <img
//      src={Dron}
//       alt=""
//     />
//   </label>
//   <label htmlFor="s3" id="slide3">
//     <img src={Headphones} alt="" />
//   </label>
//   <label htmlFor="s4" id="slide4">
//     <img src={Camera} alt="" />
//   </label>
//   <label htmlFor="s5" id="slide5">
//     <img
//       src={Dron}
//       alt=""
//     />
//   </label>
// </section>


//   )
// }








// // <div className="container">
//   <div className="slider-wrapper">
//     <button id="prev-slide" className="slide-button material-symbols-rounded">
//       chevron_left
//     </button>
//     <ul className="image-list">
//       <img className="image-item" src={Camera} alt="img-1" />
//       <img className="image-item" src={Dron} alt="img-2" />
//       <img className="image-item" src={Headphones} alt="img-3" />
//       <img className="image-item" src="images/img-4.jpg" alt="img-4" />
//       <img className="image-item" src="images/img-5.jpg" alt="img-5" />
//       <img className="image-item" src="images/img-6.jpg" alt="img-6" />
//       <img className="image-item" src="images/img-7.jpg" alt="img-7" />
//       <img className="image-item" src="images/img-8.jpg" alt="img-8" />
//       <img className="image-item" src="images/img-9.jpg" alt="img-9" />
//       <img className="image-item" src="images/img-10.jpg" alt="img-10" />
//     </ul>
//     <button id="next-slide" className="slide-button material-symbols-rounded">
//       chevron_right
//     </button>
//   </div>
//   <div className="slider-scrollbar">
//     <div className="scrollbar-track">
//       <div className="scrollbar-thumb" />
//     </div>
//   </div>
// </div>





// <div>
// <div>
// <section className="ftco-section">
// <div className="container">
// <div className="row">
//  <div className="col-md-12 text-center">
//    <h2 className="heading-section mb-5 pb-md-4">Our Products!!</h2>
//  </div>
//  <div className="col-md-12">
//    <div className="slider-hero">
//      <div >
//        <div className="item">
//          <div className="work">
//            <div
//              className="img d-flex align-items-center justify-content-center"
//            >
//               <img
//  alt="dron"
//  draggable="false"
// />
//              <div className="text text-center">
//                <h2>Discover New Places</h2>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="item">
//          <div className="work">
//            <div
//              className="img d-flex align-items-center justify-content-center"
            
//            >
//               <img
//  src={Camera}
//  alt="camera"
//  draggable="false"
// />
//              <div className="text text-center">
//                <h2>Dream Destination</h2>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="item">
//          <div className="work">
//            <div
//              className="img d-flex align-items-center justify-content-center"
             
//            >
//               <img
//  src={Headphones}
//  alt="headphones"
//  draggable="false"
// />
//              <div className="text text-center">
//                <h2>Travel Exploration</h2>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="my-5 text-center">
//        <ul className="thumbnail">
//          <li className="active img">
//            <a href="#">
//              <img
//                src={Dron}
//                alt="dron"
//                draggable="false"
//                className="img-fluid"
//              />
//            </a>
//          </li>
//          <li>
//            <a href="#">
//              <img
//                  src={Camera}
//                  alt="camera"
//                  draggable="false"
//                className="img-fluid"
//              />
//            </a>
//          </li>
//          <li>
//            <a href="#">
//              <img
//                  src={Headphones}
//                  alt="headphones"
//                  draggable="false"
//                className="img-fluid"
//              />
//            </a>
//          </li>
//        </ul>
//      </div>
//    </div>
//  </div>
// </div>
// </div>
// </section>
// </div>


// </div>