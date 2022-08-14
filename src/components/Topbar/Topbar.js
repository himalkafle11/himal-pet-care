import React from "react";
import "./Topbar.css";

function Topbar() {
  let list = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Members", link: "members" },
    { name: "Contacts", link: "contact" },
  ];
  return (
    <header>
      <nav class="main-nav">
        <img
          src={require("../../assets/photos/pets/logo.webp")}
          alt="logo"
          class="logo"
        />
        <ul class="main-nav-list">
          {list.map((item) => (
            <li>
              <a class="main-nav-link" href={`#${item.link}`}>
                {item.name}
              </a>
            </li>
          ))}
          <a href="#" class="main-nav-link  nav-profile ">
            <ion-icon name="person-circle-outline" class="nav-icon"></ion-icon>
            Log In
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
