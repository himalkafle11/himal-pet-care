import React from "react";
import "../Container.css";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section class="main-container2">
      <h1 class="primary-heading">What Pet Owners Say</h1>
      <div class="testimonial container">
        <div class="testimonial-one">
          <div class="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/three.jpg")}
              alt="client"
              class="testimonial-img"
            />
            <blockquote>"Very Professional"</blockquote>
          </div>
          <p class="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p class="testimonial-name">- Ram Hari Shah</p>
        </div>

        <div class="testimonial-two">
          <div class="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/two.jpg")}
              alt="client"
              class="testimonial-img"
            />
            <blockquote>"Great Service"</blockquote>
          </div>
          <p class="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p class="testimonial-name"> - Geeta Pandey</p>
        </div>

        <div class="testimonial-three">
          <div class="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/four.jpg")}
              alt="client"
              class="testimonial-img"
            />
            <blockquote>"Kind & Loving"</blockquote>
          </div>
          <p class="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p class="testimonial-name"> - Bhattarai Couple</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
