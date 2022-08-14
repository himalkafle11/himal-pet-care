import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" class="main-container-contact container-last">
      <div class="container">
        <h1 class="section-heading">Contact</h1>

        <div class="details">
          <div class="phone">
            <p class="main">Phone</p>
            <p>123-345-33454</p>
          </div>

          <div class="email">
            <p class="main">Email</p>
            <p>mywebsite11@gamil.com</p>
          </div>

          <div class="operation">
            <p class="main">Hours of Operation</p>
            <p>Mon - Fri: 9am - 8pm</p>
            <p>Saturday: 9am - 4pm</p>
          </div>

          <div class="location">
            <div class="main">Area of Service</div>
            <p>Thapa Gaun, Baneshwor</p>
            <p>Maitighar, Kathmandu</p>
            <p>Patan Dhoka, Lalitpur</p>
          </div>
        </div>

        <div class="form">
          <form class="lst-form">
            <div class="input1">
              <input type="text" placeholder="Name:" />
            </div>
            <div class="input2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email:"
                required
              />
            </div>
            <div class="input3">
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Type message here:"
                required
              ></textarea>
            </div>
            <div class="input4">
              <input type="submit" class="last-button" value="SUBMIT" />
            </div>
          </form>
        </div>

        <div class="last-icons">
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
