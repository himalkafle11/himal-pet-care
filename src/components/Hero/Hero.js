import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <main>
      <section id="home" class="main-container1  ">
        <div class="section-hero container">
          <div class="hero-text-box">
            <p class="hero-text">Himal</p>
            <p class="hero-text">Pet</p>
            <p class="hero-text">Care</p>
            <p class="hero-call">House Call Veterinarian</p>
            <a href="#" class="btn">
              Schedule a visit
            </a>
          </div>
          <div class="img-box">
            <img
              class="dog-her0"
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
