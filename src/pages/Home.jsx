import React, { use, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import me from "../assets/images/me.jpeg";
import {motion} from "framer-motion";
import Service from "../components/Services/Service";
import RecentWork from "../components/RecentWorks/RecentWork";
import Career from "../components/Career/Career";
import Skill from "../components/Skills/Skill";
import Contact from "../components/Contact/Contact";
import Certification from "../components/Certificates/Certificate";



const Home = () => {
 

  const [cursorPos, setCursorPos] = useState({x:0, y:0});

  // Mouse move event listener
  useEffect(() => {

    const handleMouseMove=(e) =>{
      setCursorPos({x:e.clientX, y:e.clientY});
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    }, []);

  return (
    <>
      <main className="position-relative overflow-hidden">
        {/* Motion div for sportlight effect */}
        <motion.div
        className="motion-sportlight"
        animate={{
          left: "cursorPos.x -100",
          top: "cursorPos.y -100",
        }}
        transition={{type:"tween", duration: 0.2}}
        />

      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <div className="intro_text d-none d-md-block">
              <p className="animate-stroke">Hi</p>
            </div>
            <Col md={6} className="order-2 order-md-1">
              <div className="hero-des">
                <h3 className="heading mb-3">
                  I am Web Developer
                </h3>
                <h1 className="main-heading mb-3">
                  Full-Stack Web  <br />
                  Developer
                </h1>
                <p className="detail-text mt-4 mt-md-0 ">
                Passionate about building scalable web applications with clean, efficient code. Experienced in developing and deploying full-stack projects
                . Always eager to learn new technologies and solve real-world challenges.
                </p>
                <div className="d-flex mt-3 align-items-center flex-sm-row flex-column">
                  <button className="secondary-btn" type="button">
                     
                    <a href="../src/My_Resume.pdf" download="" target="_blank" className="button about__button">Resume</a>
                    <i className="bi bi-download ms-2"></i>
                  </button>
                  <ul className="d-flex gap-3 m-0 mt-3 mt-sm-0 p-0 ms-sm-3 social-media pb-3 pb-md-0">
                    <li className="d-block">
                      <a href="https://x.com/RAHULTIWAR5279">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="#">
                        <i className="bi bi-dribbble"></i>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="https://www.linkedin.com/in/rahul-tiwari-6a55b9229/">
                      <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="https://github.com/RahulCodeTiwari">
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6} className="order-1 order-md-2 pb-2 pb-md-0">
              <div className="hero-img">
                <img src={me} alt="image" className="image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="activement-section section-spacing pb-5">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6} xs={6} className="pb-4 pb-lg-0">
              <div className="activement-item d-flex align-align-items-center flex-column flex-sm-row">
                <div className="number me-sm-3 me-0 mb-3 mb-sm-0">
                  <h5>3</h5>
                </div>
                <div className="text">
                  <p className="detail-text primary-clr">
                    Months of Internship <br/> Experience
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6} className="pb-4 pb-lg-0">
              <div className="activement-item d-flex align-align-items-center flex -column flex-flex-sm-row">
                <div className="number me-sm-3 me-0 mb-3 mb-sm-0">
                  <h5>5+</h5>
                </div>
                <div className="text">
                  <p className="detail-text primary-clr">
                    projects <br/> completed
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6} className="pb-4 pb-lg-0">
              <div className="activement-item d-flex align-align-items-center flex -column flex-flex-sm-row">
                <div className="number me-sm-3 me-0 mb-3 mb-sm-0">
                  <h5>3 </h5>
                </div>
                <div className="text">
                  <p className="detail-text primary-clr">
                    Months learning from <br/> SamSung Innovation Campus Program
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6} className="pb-4 pb-lg-0">
              <div className="activement-item d-flex align-align-items-center flex -column flex-flex-sm-row">
                <div className="number me-sm-3 me-0 mb-3 mb-sm-0">
                  <h5>10+</h5>
                </div>
                <div className="text">
                  <p className="detail-text primary-clr">
                    participations in <br/> Tech Events
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      </main>

      <Service />
      <RecentWork />
      <Career />
      <Skill />
      <Certification />
      <Contact />
    </>
  )
}

export default Home