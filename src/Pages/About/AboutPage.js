import React from 'react'
import "./AboutPageStyles.scss";

export default function AboutPage() {
  return (
    <section className="entire-section">

  <section className="section-intro">
      <div className="container">
   <h1>About MySelf</h1>
   <h3>
     Hi my name is Abhishek Subba(Limboo). I am a highly motivated self taught web developer and for  UI/UX designes i like to experiment and bring my imaginations to life. I started coding by going through youtube videos and reading documentations, blogs and articals. Looking at the job market I did a certified course on "R and Python for Data Science". But when I wrote my 1st "HTML and CSS" code I got hooked and I  have never looked back since then. I quickly realized that this was the reason why I wanted to learn to code and could do this for the rest of my life and so I gave my 100% and I went through several online courses and articles to get the best out for myself.<br/> Most of my websites are fully responsive. Currently iam working on the PWA version of my websites and polishing my CSS skills, State Management skills with Redux and GSAP for animation.<br/><br/> <strong style={{color: "#333"}} >"CURRENTLY MY WEBSITES ARE HOSTED ON FREE SERVER SO IT MAY BE A BIT SLOW."</strong><br/><br/> If you would like to hire please email or message me on LinkedIn.
   </h3>
    </div>
  </section>
  <section className="my-tech">
    <h1>Technologies That I Know</h1>
    <div className="container">
      <div>
        <img alt="React Logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fdevinterface-web%2Fproduction%2Ftechnologies%2F43%2Fmedium%2Freact-logo.png%3F1450793506&f=1&nofb=1 "/>
      </div>
      <div>
        <img alt="CSS3 Logo" src="http://2.bp.blogspot.com/-SA2WI88oDrU/TZswrHsbQdI/AAAAAAAAAQ0/EiVS4jOHXp4/s1600/CSS3.png"/>
      </div>
      <div>
        <img alt="JavaScript Logo" src="https://camo.githubusercontent.com/78e700548355a41550992f0c4a5c88a229f6a1da/68747470733a2f2f7261772e6769746875622e636f6d2f6f74746177616a732f6c6f676f2e6a732f6d61737465722f6f74746177616a732f4f74746177614a532e706e67"/>
      </div>
      <div>
        <img alt="ES6 Logo" src="http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg" />
      </div>
      <div>
        <img alt="Git Logo" src="https://git-for-windows.github.io/img/git_logo.png" />
      </div>
      <div>
        <img alt="Html5 Logo" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"/>
      </div>
    </div>
  </section>
  <section className="qualification">
        <div className="school">
        <h1>EDUCATION</h1>
        <div className="education">
        <div>
          <h2>MBA</h2>
          <p>I have completed my MBA in Finance and IT from Shimla University. With 8.2 (SGPA)on August 2019</p>
        </div>
        <div>
          <h2>B.Com</h2>
          <p>I have completed my B.Com Honous from Sikkim University. With 66.11 (CGPA) August 2017</p>
        </div>
        <div>
          <h2>12th Standard</h2>
          <p>I have completed my Class 12 Commerce (CBSE) from Pelling Senior Sec School West Sikkim. With 60.6% (CGPA)</p>
        </div>
        <div>
          <h2>10th Standard</h2>
          <p>I have completed my Class 10 (ICSE) from St Mary Convent School Geyzing, West Sikkim. With 80%</p>
        </div>
        </div>
        </div>
        <aside>
        <h1>Skill Sets</h1>
          <h3>Following are some of the skill sets that I have</h3>
            <ul>
              <li>Responsive Web Design</li>
              <li>Problem Solving</li>
              <li>Commumication</li>
              <li>Leadership</li>
              <li>Management</li>
              <li>Time Management</li>
              <li>Decision Making</li>
              <li>Market Research</li>
              <li>Fast Learner</li>
              <li>Excellent In Interpersonal Skills</li>
            </ul>
        </aside>
  </section>
  <footer>
    <div className="container">
      <h1>Contact Me</h1>
      <div>
      <a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/abhishek.subba2"><i class="fab fa-facebook fa-2x"/></a>
      <a rel="noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/abhishek-subba-limboo-2a4846152/"><i class="fab fa-linkedin fa-2x"/></a>
        <a rel="noopener noreferrer"  target="_blank" href="https://github.com/AbhiTsong"><i class="fab fa-github fa-2x"/></a>
        <p>Email limbooabhishek5@gmail.com</p>
      </div>
    </div>
  </footer>
  </section>
 )
}
