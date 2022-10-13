import React from "react";
import "../Container.css";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="main-container2">
      <h1 className="primary-heading">What Pet Owners Say</h1>
      <div className="testimonial container">
        <div className="testimonial-one">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/three.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>"Very Professional"</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p className="testimonial-name">- Ram Hari Shah</p>
        </div>

        <div className="testimonial-two">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/two.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>"Great Service"</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p className="testimonial-name"> - Geeta Pandey</p>
        </div>

        <div className="testimonial-three">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/four.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>"Kind & Loving"</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quasi eius doloremque,
            <br /> eveniet tempore sint aliquid
            <br /> beatae distinctio iste voluptas nam."
          </p>
          <p className="testimonial-name"> - Bhattarai Couple</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
