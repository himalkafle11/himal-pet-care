import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-hero">
        <div className="hero-text-box">
          <p className="hero-text">Himal</p>
          <p className="hero-text">Pet</p>
          <p className="hero-text">Care</p>
          <p className="hero-call">Call Veterinarian</p>
          <a href="#contact" className="btn">
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
        <div className="text-box">
          <p className="text">Himal Pet Care</p>
          <p className="text">Call Veterninarian</p>
          <a href="#contact" className="btn">
            Schedule a visit
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
