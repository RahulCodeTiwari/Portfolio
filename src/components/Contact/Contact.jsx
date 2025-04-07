import React from "react";
import "../Contact/Contact.css";
import { Col, Container, FloatingLabel, Row, Form } from "react-bootstrap";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "fcc57a28-bfad-46ad-a474-3f091e1df1c4");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    console.log("Sending payload:", json); // for debugging
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
  
    const res = await response.json();
    console.log("Server response:", res);
  
    if (res.success) {
      console.log("Success:", res);
    } else {
      console.error("Submission error:", res);
    }
  };
  
 

  return (
    <>
      <section className="contact-section section-spacing" id="contact">
        <Container >
          <Row className=" mb-5">
            <Col md={6} className="offset-md-1 offset-0 mt-4 mt-md-0">
            <div className="d-flex flex-column px-0">
              <form className="contact-form">
                  <h2>Contact Form</h2>
                  <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' required />
                  </div>
                  <div className="input-box">
                    <label>Full Name</label>
                    <input type="email" className="field" placeholder='Enter your email' required />
                  </div>
                  <div className="input-box">
                    <label>Full Name</label>
                    <textarea name="" id="" className="field mess" placeholder='Enter your message' required></textarea>
                  </div>
                  <button type="submit">Send Message</button>
              </form>
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

