import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="py-4 footer">
        <ul className="nav justify-content-center border-bottom bb-3 my-3">
          <li className="nav-item">
            <a href="#services" className="nav-link px-2 border-text"> Services </a>
          </li>
          <li className="nav-item">
            <a href="#works" className="nav-link px-2 border-text"> Work </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link px-2 border-text"> Resume </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link px-2 border-text"> Skills </a>
          </li>
          <li className="nav-item">
            <a href="#certification" className="nav-link px-2 border-text"> Certificates </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link px-2 border-text"> Contact </a>
          </li>
        </ul>
        <p className="text-center body-text mb-0"> @2025 Mern Master Rahul Tiwari </p>
      </footer>
    </>
  )
}

export default Footer