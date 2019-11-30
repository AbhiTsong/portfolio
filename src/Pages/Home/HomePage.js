import React from 'react';
import "./HomePageStyle.scss";
import ocean from "../../Assets/motion.mp4"

export default function HomePage() {
 return (
  <section className="section">
   <div className="video-container">
    <div className="color-overlay"></div>
      <video autoPlay loop muted id="myVideo">
        <source src={ocean} type="video/mp4"/>
      </video>
  </div>
   <div className="name-disc">
    <h3>Abhishek</h3>
     <p>
      Hi my name is Abhishek. I am a self taught web-developer & UI/UX designer. All of my designes and work are from my pure imagination hardwork and a lot of experimentation.
     </p>
     <div className="contacts">
       <ul>
         <li>f</li>
         <li>g</li>
         <li>l</li>
         <buttom>--></buttom>
       </ul>
     </div>
   </div>
  </section>
 )
}
