import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" class="main-container2">
      <div class="container">
        <h1 class="primary-heading ">Services</h1>
        <div class="services  ">
          <div class="dental-care box-shadow onhover">
            <a class="ser-img" href="#">
              <img
                src={require("../../assets/photos/pets/three.webp")}
                alt=""
                class="service-img"
              />
            </a>
            <h2 class="secondary-heading">Dental Care</h2>
            <p class="service-text">
              As the picture depicts, we provide a top quality dental service to
              you pet. After visiting once, your pets will themself visit our
              visit in need as excitingly as the pet above is holding bursh in
              mouth.
            </p>
            <a href="#" class="btn service-btn">
              Book Now
            </a>
          </div>

          <div class="check-up box-shadow onhover">
            <a class="ser-img" href="#">
              <img
                src={require("../../assets/photos/pets/four.jpg")}
                alt=""
                class="service-img"
              />
            </a>

            <h2 class="secondary-heading">Check Up</h2>
            <p class="service-text">
              We provide best check up service to your pets. Once the pet is in
              our service, we help and care them as if ours. We believe in
              quality service and there must not be compromise in health of our
              pets.
            </p>
            <a href="#" class="btn service-btn">
              Book Now
            </a>
          </div>
          <div class="grooming box-shadow onhover">
            <a class="ser-img" href="#">
              <img
                src={require("../../assets/photos/pets/six.webp")}
                alt=""
                class="service-img"
              />
            </a>
            <h2 class="secondary-heading">Grooming</h2>
            <p class="service-text">
              We have a top notch grooming service for your pet. We have best
              hands in business fot grooming who will take care of beauty of
              your pets in the best and loving manner. Do visit for the best.
            </p>
            <a href="#" class="btn service-btn">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
