import React from "react";
import "../Container.css";
import "./About.css";

function About() {
  return (
    <section id="about" class="main-container2 ">
      <div class="about-me container">
        <figure class="about-me-imgs">
          <img
            src={require("../../assets/photos/pets-with-vet/about-img.jpg")}
            alt=""
            class="about-me-img"
          />
        </figure>
        <div class="text">
          <h1 class="primary-heading about-me-heading">About Me</h1>
          <p>
            I am a student of Bachelor Level currently studying BSC CSIT in
            Patan Multiple Campus. I have been learning HTML and CSS since last
            month. This website is a practice website that i built. I am
            aspiring to be a top front end web-developer and acting accordingly
            and hope i will succeed. After this month i will start learning
            Javascript. Thank you for visiting my demo online pet vet care!
          </p>
          <a href="#" class="btn read-more">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
