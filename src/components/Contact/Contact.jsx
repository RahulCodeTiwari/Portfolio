import React from "react";
import "../Contact/Contact.css";
import { Col, Container, FloatingLabel, Row, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section className="contact-section section-spacing" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="contact-form">
                <div className="text-center">
                  <h1 className="heading primary-btn mb-3">Let's work Together!</h1>
                  <p className="body-text">
                    I design and code beautifully simple things and i love what
                    i do. Just simple like that!
                  </p>
                </div>
              
           
          <Row className="mb-4">
            <Col md={6} className="mb-4">
              <FloatingLabel controlId="Fname" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col md={6} className="mb-4">
              <FloatingLabel controlId="Lname" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
            <Col md={12} className="mb-4">
              <FloatingLabel controlId="email" label="Email address">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md={12} className="mb-4">
              <FloatingLabel
                controlId="floatingSelect"
                label="select an option"
                >
                  <Form.Select aria-label="">
                    <option disabled>Choose Service</option>
                    <option value="1">Web Development</option>
                    <option value="2">Web Design</option>
                    <option value="3">UI / UX Design</option>
                    <option value="4">App Design</option>
                  </Form.Select>
                  </FloatingLabel>
            </Col>
            <Col md={12} className="mb-4">
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={({height: "125px"})}
                />
              </FloatingLabel>
            
            </Col>

            <div className="text-start">
              <button className="primary-btn"> Send Message </button>
            </div>
          </Row>
          </div>
            </Col>
            <Col md={5} className="offset-md-1 offset-0 mt-4 mt-md-0">
              <div className="d-flex flex-column px-0">
                <ul className="m-0 p-0 contact-information">
                <li className="d-flex align-item-center justify-content-start mb-4 mt-md-5">
                    <span className="d-flex align-items-center justify-content-center rounded-cirle me-3 fs-4 icon-box">
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span className="">
                      <span className="body-text mb-2">Phone</span>
                      <span className="detail-text mb-2"> +91 7706987149</span>
                    </span>
                  </li>

                  <li className="d-flex align-item-center justify-content-start mb-4 mt-md-5">
                    <span className="d-flex align-items-center justify-content-center rounded-cirle me-3 fs-4 icon-box">
                    <i className="bi bi-envelope"></i>

                    </span>
                    <span className="">
                      <span className="body-text mb-2 d-block">Email</span>
                      <span className="detail-text mb-2"> rahul2231tiwari@gmail.com </span>
                    </span>
                  </li>

                  <li className="d-flex align-item-center justify-content-start mb-4 mt-md-5">
                    <span className="d-flex align-items-center justify-content-center rounded-cirle me-3 fs-4 icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <span className="">
                      <span className="body-text mb-2 d-block">Address</span>
                      <span className="detail-text mb-2"> Lucknow, Uttar Pradesh, India</span>
                    </span>
                  </li>

                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact