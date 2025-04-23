import SkillImg1 from "../assets/images/figma.png";
import SkillImg2 from "../assets/images/html-5.png";
import SkillImg3 from "../assets/images/css-3.png";
import SkillImg4 from "../assets/images/reactjs.png";
import SkillImg5 from "../assets/images/angular.png";
import SkillImg6 from "../assets/images/nodejs.png";

import logo1 from "../assets/images/logo1.avif";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";


import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import { a } from "framer-motion/client";

export const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
  }
];

export const recentWorksCats = ["All", "Full Stack", "Frontend"];

export const recentWorks = [
  {
    id: 0,
    catId: 1, 
    title: "Chat Application",
    description: "Revamping user experience for better engagement",
    image: project1,
  },
  {
    id: 1,
    catId: 2,
    title: "Employee Management System",
    description: "Modernizing the management system for efficiency",
    image: project2,
  },
  {
    id: 2,
    catId: 2, 
    title: "News Application with React.js",
    description: "A real time news web application",
    image: project3,
  },
  {
  id: 3,
  catId: 3, 
  title: "Tic Tac Toe Game",
  description: "A simple tic tac toe game",
  image: project4,
},

];


export const experienceData = [
  {
    id: 0,
    year: "August 2024 - September 2024",
    name: "Software Development Engineering Intern",
    address: "BLUESTOCK.in",
  },
  {
    id: 1,
    year: "July 2024 - August 2024",
    name: "Web Development Internship",
    address: "Indian Railways, Lucknow",
  },
  {
    id: 2,
    year: "May 2024 - June 2024",
    name: "Web Development Internship",
    address: "Oasis Infobyte",
  },
];

export const educationData = [
  {
    id: 0,
    year: "2021 - 2025",
    name: "B.Tech in Computer Science and Engineering",
    address: "FOET , University of Lucknow, Lucknow",
  },
  {
    id: 1,
    year: "2020 - 2021",
    name: "Class XII",
    address: "Govt Jubilee Inter College, Lucknow",
  },
  {
    id: 2,
    year: "2018 - 2019",
    name: "Class X ",
    address: "Govt L.B.S Inter College, Kheri",
  },
];

export const skillsData = [
  {
    id: 0,
    image: SkillImg1,
    title: "Figma",
    percentage: "90%",
  },
  {
    id: 1,
    image: SkillImg2,
    title: "HTML",
    percentage: "95%",
  },
  {
    id: 2,
    image: SkillImg3,
    title: "CSS",
    percentage: "92%",
  },
  {
    id: 3,
    image: SkillImg4,
    title: "React",
    percentage: "80%",
  },
  {
    id: 4,
    image: SkillImg5,
    title: "Angular",
    percentage: "75%",
  },

  {
    id: 5,
    image: SkillImg6,
    title: "Node js ",
    percentage: "85%",
  },
];

export const certificationsData = [
  {
    id: 0,
    logo: logo1,
    msg: "This is a 3 months learning program that has helped me a lot in learning the basics of web development and 3 days hackathon event.",
    name: "SamSung Innovation Campus",
    position: "Web Development",
  },
  {
    id: 1,
    logo: logo2,
    msg: "I have completed a web development course from Udemy. This course has helped me a lot in learning the basics of web development.",
    name: "Udemy",
    position: "Web Development Course",
  },
  {
    id: 1,
    logo: logo3,
    msg: "I have completed a digital training program from HCL Foundation. This program has helped me a lot in learning the basics of web development.",
    name: "Digital Training Program",
    position: "HCL Foundation",
  },
];
