import React from "react";
import "../Certificates/certificate.css";
import { Col, Container, Row, Card} from "react-bootstrap";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import { certificationsData } from "../../utils/data";


const Certification = () => {
  return (
    <>
      <section className="certification section-spacing light-bg" id="certification">
        <Container>
          <Row className="g-md-5 g-4">
            <Col md={6}>
              <h1 className="heading primary-clr"> My Learnings </h1>
                <p className="detail-text mt-3">
                  I have completed several courses and certifications to enhance my skills 
                  and knowledge in various domains. Here are some of the notable ones:
                </p>
            </Col>
            {/* Swiper Carousel */}
            <Col md={6}>
              <Swiper
               // install Swiper modules
               modules={[ Pagination, Autoplay ]}
               spacebetween={10}
               slidesPerView={1}
               autoplay={{delay:5000}}
               pagination={{ clickable: true}}
               breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
               }}
               className="pb-5"
              >
                {
                  certificationsData.map(( Certification, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Card className="border-0 p-3 rounded-2">
                          <div className="d-flex align-items-center justify-content-between">
                            <img src={Certification.logo} className="img-fluid w-100" alt="logo" />
                            
                          </div>

                          <div className="mt-3">
                            <p className="body-text"> {Certification.msg} </p>
                            <h5 className="detail-text fw-bold mt-4">{Certification.name}</h5>
                            <p className="body-text mt-1">{Certification.position}</p>
                          </div>
                        </Card>

                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>
            
            </Col>
           </Row>
        </Container>
      </section>
    </>
  )
}

export default Certification
