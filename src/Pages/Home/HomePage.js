import React from 'react';
import "./HomePageStyle.scss";
import ocean from "../../Assets/motion.mp4"
import {Link} from "react-router-dom";

export default function HomePage() {
 return (
  <section className="section">
  <div className="container">
   <div className="video-container">
    <div className="color-overlay"></div>
      <video autoPlay loop muted id="myVideo">
        <source src={ocean} type="video/mp4"/>
      </video>
  </div>
   <div className="name-disc">
    <h3>Abhishek</h3>
     <p>
      Hi my name is Abhishek. I am a self taught web-developer & like to experiment with UI/UX designes. All of my designes and work are from my pure imagination hardwork and a lot of experimentation.
     </p>
     <div className="contacts">
       <ul>
         <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook fa-2x"/></a>
         <a rel="noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/"><i className="fab fa-linkedin fa-2x"/></a>
         <a rel="noopener noreferrer"  target="_blank" href="https://github.com"><i className="fab fa-github fa-2x"/></a>
         <Link to="/project"><i className="far fa-hand-point-right fa-2x"/></Link>         
       </ul>
     </div>
   </div>
  </div>
</section>
 )
}
