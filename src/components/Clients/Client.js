import React from "react";
import "../Container.css";
import "./Client.css";

function Client() {
  return (
    <section id="members" class="main-container2">
      <div class="container Clients">
        <h1 class="primary-heading ">Love My Clients</h1>
        <div class="client-imgs">
          <div class="client-image">
            <img
              src={require("../../assets/photos/pets-with-vet/one.jpg")}
              class="image"
              alt="img-1"
            />
          </div>
          <div class="client-image">
            <img
              class="image"
              src={require("../../assets/photos/pets-with-vet/two.jpg")}
              alt="img-2"
            />
          </div>
          <div class="client-image">
            <img
              src={require("../../assets/photos/pets-with-vet/three.jpg")}
              class="image"
              alt="img-3"
            />
          </div>
          <div class="client-image">
            <img
              src={require("../../assets/photos/pets-with-vet/four.jpg")}
              class="image"
              alt="img-4"
            />
          </div>
          <div class="client-image">
            <img
              src={require("../../assets/photos/pets-with-vet/five.jpg")}
              class="image"
              alt="img-5"
            />
          </div>
          <div class="client-image">
            <img
              src={require("../../assets/photos/pets-with-vet/six.jpg")}
              class="image"
              alt="img-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
