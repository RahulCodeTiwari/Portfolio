import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { Row, Offcanvas, Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  // Handling Sticky header on scroll
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    }
  }, [])

  // Function to add/remove 'is-sticky' class based on scroll position
  const isSticky = () => {
    const header = document.querySelector(".header"); // select header element
    const scrollTop = window.scrollY; // get scroll position
    scrollTop >= 320 ? header.classList.add("is-sticky") // add class when scrolled 320px or more
     : header.classList.remove("is-sticky"); // remove class when not scrolled 320px
  }

  return (
    <>
    <header className="header">
        <Container fluid='md'>
            <Row>
            <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3">
          <Container fluid>

            {/* logo */}
            <Navbar.Brand href="#">Web Crafters</Navbar.Brand>

            {/* for mobile menu */}
  
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              show={show}
            >
                {/* header only visible on mobile */}
              <Offcanvas.Header className="d-flex justify-content-between d-lg-none">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg m-0`}>
                  Web Creafters
                </Offcanvas.Title>
                <button className="btn btn-secondary" onClick={() => setShow(false)}>
                  <i className="bi bi-x"></i>
                </button>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#works">Works</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="header-action d-flex">
              <a href="#contact" className="primary-btn"> Hire me! </a>
            </div>
            {/* mobile menu toggle btn */}
            <button className="toggle-btn d-block d-lg-none ms-2"
            onClick={() => setShow(!show)}>
              <i className={`bi ${show ? "bi-x" : "bi-list"}`}></i>
            </button>

          </Container>
        </Navbar>
        </Row>
        </Container>
    </header>
    </>
  )
}

export default Header