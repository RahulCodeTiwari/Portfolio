
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Col, Row} from "react-bootstrap";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    //your emailjs service Id, template Id, and Public key
    const serviceId = "service_uu9w7vs";
    const templateId = "template_j0sq7u3";
    const publicKey = "kERVI8EparhKDGlA8";
  

  // create a new object that contains dynamic template params
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Rahul",
    message: message,
  };

  //send the email using Emailjs
  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log("Email sent Successfully!", response);
    setName("");
    setEmail("");
    setMessage("");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
}

return (
  <section className="contact-section section-spacing" id="contact">
     <Row className="g-md-5 g-4">
     <Col md={6}>
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="primary-clr">Contact </h2>
      <input 
      className="input-box"
      type="text"
      placeholder="Your Name"
      value={name} 
      onChange={(e) => setName(e.target.value)}
      required
      />
      <input
      className="input-box"
      type="email"
        placeholder="Your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
      <textarea
      className="textarea "
      cols="30"
      row="10"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Your message"
      required
      >

      </textarea>
      <button type="submit">Send Email</button>
    </form>
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
    </section>
  )
}

export default Contact