import React from "react";
import "./Topbar.css";
import ModalLog from "../Modal/ModalLog";
// import {useNavigate} from 'react-router-dom';
import { useState } from "react";

function Topbar() {
  // const navigate = useNavigate();
  const list = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Members", link: "members" },
    { name: "Contacts", link: "contact" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  if(modalOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <header>
      <nav className="main-nav">
        <img
          src={require("../../assets/photos/pets/logo.webp")}
          alt="logo"
          className="logo"
        />
        <ul className="main-nav-list">
          {list.map((item) => (
            <li>
              <a class="main-nav-link" href={`#${item.link}`}>
                {item.name}
              </a>
            </li>
          ))}
          <button 
            onClick={toggleModal}
           href="#" className="main-nav-link  nav-profile ">
            <ion-icon name="person-circle-outline" className="nav-icon"></ion-icon>
            Log In
          </button>
          {modalOpen && <ModalLog setOpenModal={setModalOpen} />}
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
