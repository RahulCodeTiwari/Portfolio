import React from "react";
import "../Testimonials/Testimonial.css";
import { Col, Container, Row, Card} from "react-bootstrap";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import { testimonialsData } from "../../utils/data";


const Testimonial = () => {
  return (
    <>
      <section className="testimonial section-spacing light-bg" id="testimonial">
        <Container>
          <Row className="g-md-5 g-4">
            <Col md={6}>
              <h1 className="heading primary-clr"> My Client's Stories </h1>
                <p className="detail-text mt-3">
                  Empowering people in a new digital journey with my super services
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
                  testimonialsData.map(( Testimonial, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Card className="border-0 p-3 rounded-2">
                          <div className="d-flex align-items-start justify-content-between">
                            <img src={Testimonial.logo} className="img-fluid w-50" alt="logo" />
                            <img src={Testimonial.user} className="img-fluid user-img" alt="user" />
                          </div>

                          <div className="mt-3">
                            <p className="body-text"> {Testimonial.msg} </p>
                            <h5 className="detail-text fw-bold mt-4">{Testimonial.name}</h5>
                            <p className="body-text mt-1">{Testimonial.position}</p>
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

export default Testimonial