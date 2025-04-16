import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import "../Skills/Skill.css";
import { skillsData } from "../../utils/data";

const Skill = () => {
  return (
    <>
      <section className="skills section-spacing" id="skills">
        <Container>
          <Row>
            <Col lg={7} md={10} sm={12} className="text-center m-auto">
              <h1 className="heading primary-clr">My Skills</h1>
              <p className="mt-3 body-text">We put your ideas and thgus your wishes in the form of a unique Web
                project that inspires you and you customers.
              </p>
            </Col>
          </Row>

          <Row className="mt-md-5 mt-3">
            {skillsData.map((skill, index) => {
              return <Col lg={2} md={4} sm={6} key={index}>
                <Card className="text-center p-3 border-0">
                  <div className="img-container p-4 rounded-4">
                    <img src={skill.image} alt={skill.title} className="img-fluid m-auto" />
                    <h5 className="mt-3 detail-text fw-bold">{skill.percentage}</h5>
                  </div>
                  <Card.Body>
                    <h3 className="detail-text primary-clr">{skill.title}</h3>
                  </Card.Body>
                </Card>
              </Col>
            })}

          </Row>
          <Col md={12} className="mt-4"></Col>
        </Container>
      </section>
    </>
  )
}

export default Skill
