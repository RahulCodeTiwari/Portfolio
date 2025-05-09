import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import "../RecentWorks/RecentWork.css";
import { recentWorks, recentWorksCats } from "../../utils/data";

const RecentWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  // This stores the size and position of each category tab
  const [navItemDimensions, setnavItemDimensions ] = useState([]);

  // this helps us reference each category tab
  const navItemsRef = useRef([])

  // get the size and position of each tab when the component loads
  useEffect(()=> {
    const itemDimensions = navItemsRef.current.map((item) => ({
      top: item.offsetTop,
      height: item.offsetHeight,
      width: item.offsetWidth,
      left: item.offsetLeft,
    }));
    setnavItemDimensions(itemDimensions);
  }, [activeIndex]);

  // when a category is clicked, update the active index
  const handleSelect = (eventKey) => setActiveIndex(Number(eventKey));

  //show all project if "All" is selected, otherwise show filetred projects

  const filteredWorks = activeIndex === 0
   ? recentWorks
   : recentWorks.filter((work) => work.catId === activeIndex)

  return (
    <>
      
      <section className="recent-work section-spacing " id="works">
        <Container>
          <Row>
            {/* Heading & description */}
            <Col md="12" className="text-center">
            <h1 className="heading primary-clr">My Recent Work</h1>
            <p className="body_text">
              We put your ideas and wishes in the form of a unique web project that 
              inspires you and your customers.
            </p>
            </Col>
            {/* Category navigation menu */}
            <Col md={12} className="mt-4">
              <div className="position-relative d-flex justify-content-center">
                <div className="py-2 rounded-5 px-2 px-md-5 light-bg">
                
                <Nav 
                 variant="pills"
                // activeKey="1" 
                 onSelect={handleSelect}
                 className="position-relative"
                 activeKey={activeIndex.toString()}
                >
                  {recentWorksCats.map((category, index) => {
                    return (
                      <Nav.Item key={index}>
                        
                      <Nav.Link eventKey={index.toString()}
                      className="detail-text px-md-4 px-3"
                      ref={(el) => (navItemsRef.current[index] = el)}
                      >
                        {category}
                      </Nav.Link>
                    </Nav.Item>
                    );
                  })}
                 
                 <motion.div
                    className="active-bg rounded-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      height: navItemDimensions[activeIndex]?.height || 40,
                      width: navItemDimensions[activeIndex]?.width || 50,
                      left: navItemDimensions[activeIndex]?.left || 0,
                      top: navItemDimensions[hoverIndex]?.top || 0,
                      zIndex: 1,
                    }}
                  />

                </Nav>
                </div>
                </div>
                {/* Display the project cards based on the selected category */}
                <Row className="mt-1 g-5">
                  <AnimatePresence>
                  {filteredWorks.map((project, index) => {
                    return (

                      <Col md={6} sm={12} key={index}
                      
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        
                        
                      
                      >
                       
                      <div className="service-item position-relative p-3 p-md-5 rounded">
                        {/* Project Image */}
                        <img src={project.image} className="img-fluid" alt={project.title} />
                       
  
                        {/* Project Title and description */}
                        <div className="service-des">
                          <h1 className="heading text-white fw-bold primary-clr">
                           
                          {project.title}
                          </h1>
                          <p className="body-detail text-white"> </p>
                          {project.description}
                        </div>
  
                      </div>
                    </Col>
                    )
                  })}
                 </AnimatePresence>

                </Row>
            
                <NavDropdown className=" fw-bold"  title="Link Of Projects" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1"><a href="https://chatting-app-clea.onrender.com/login">Chat app</a></NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2"><a href="https://rahulcodetiwari.github.io/EMS-frontend-App/">Ems app</a></NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3"><a href="https://rahulcodetiwari.github.io/Tic-Tac-Toe-game/">Tic-Tac-Toe game</a></NavDropdown.Item>
            
                </NavDropdown>
              
              
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default RecentWork
