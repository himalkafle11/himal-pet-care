import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" class="main-container-contact container-last">
      <div className="container">
        <h1 className="section-heading">Contact</h1>

        <div className="details">
          <div className="phone">
            <p className="main">Phone</p>
            <p>123-345-33454</p>
          </div>

          <div className="email">
            <p className="main">Email</p>
            <p>mywebsite11@gamil.com</p>
          </div>

          <div className="operation">
            <p className="main">Hours of Operation</p>
            <p>Mon - Fri: 9am - 8pm</p>
            <p>Saturday: 9am - 4pm</p>
          </div>

          <div className="location">
            <div className="main">Area of Service</div>
            <p>Thapa Gaun, Baneshwor</p>
            <p>Maitighar, Kathmandu</p>
            <p>Patan Dhoka, Lalitpur</p>
          </div>
        </div>

        <div className="form">
          <form className="lst-form">
            <div className="input1">
              <input type="text" 
              className="inputfield"
              placeholder="Name:" />
            </div>
            <div className="input2">
              <input
                className="inputfield"
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
            <div className="input4">
              <input type="submit" class="last-button" value="SUBMIT" />
            </div>
          </form>
        </div>

        <div className="last-icons">
          <a className="logo" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a className="logo" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="logo" href="#">
            <ion-icon  name="logo-youtube"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
