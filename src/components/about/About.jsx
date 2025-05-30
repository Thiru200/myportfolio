import React from "react";
import "./about.css";
import myImage from "../../assets/Karthi_Profile.jpeg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>Master of Computer Application</small>
            </article>
            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current CGPA</h5>
              <small>8.0</small>
            </article>
            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Dot Net</li>
                  <li>SQL</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Software Developer</b> at Access Healthcare. I'm an
            enthusiastic and driven Software Engineering Profession. With a
            strong academic foundation in software engineering and hands-on
            experience in various programming languages, I am eager to
            contribute to innovative projects and learn from experienced
            professionals in the industry. I am a quick learner who is always
            ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
