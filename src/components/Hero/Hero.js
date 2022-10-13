import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <main>
      <section id="home" className="main-container1  ">
        <div className="section-hero container">
          <div className="hero-text-box">
            <p className="hero-text">Himal</p>
            <p className="hero-text">Pet</p>
            <p className="hero-text">Care</p>
            <p className="hero-call">House Call Veterinarian</p>
            <a href="#" className="btn">
              Schedule a visit
            </a>
          </div>
          <div className="img-box">
            <img
              className="dog-her0"
              src={require("../../assets/photos/pets/one.jpg")}
              alt="dog-hero"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
