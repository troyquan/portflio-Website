import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import java from "./assets/java.png";
import javaScript from "./assets/javaScript.jpg";
import PHP from "./assets/PHP.png";
import python from "./assets/python.png";
import springboot from "./assets/springboot.png";
import springSecurity from "./assets/springSecurity.png";
import AJAX from "./assets/AJAX.png";
import antD from "./assets/antD.png";
import aws from "./assets/aws.png";
import bootstrap from "./assets/bootstrap.png";
import cSharp from "./assets/c-Sharp.png"; 
import docker from "./assets/docker.png"; 
import drawio from "./assets/drawio.webp"; 
import elementUI from "./assets/ElementUI.jpg"; 
import flask from "./assets/Flask.png"; 
import gitHub from "./assets/GitHub.png"; 
import htmlCSS from "./assets/HTML-CSS.png"; 
import IntelliJ from "./assets/IntelliJ.png"; 
import JPA from "./assets/JPA.jpg"; 
import jQuery from "./assets/jQuery.png"; 
import jUnit5 from "./assets/jUnit5.jpg"; 
import mockito from "./assets/Mockito.png"; 
import myBatisPlus from "./assets/myBatisPlus.jpg"; 
import mysql from "./assets/mysql.png"; 
import postman from "./assets/postman.jpg"; 
import react from "./assets/react.png"; 
import redis from "./assets/redis.webp"; 
import restAPI from "./assets/restAPI.jpeg"; 
import swagger2 from "./assets/swagger2.jpg"; 
import thymeleaf from "./assets/thymeleaf.png"; 
import vue from "./assets/vue.png"; 
import vscode from "./assets/vscode.jpg"; 
import XAMPP from "./assets/XAMPP.jpg"; 
import vmware from "./assets/vmware.webp"; 
import nodejs from "./assets/nodejs.png"; 

import education1 from "./assets/education1.png";
import education2 from "./assets/education2.png";



import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Skills",
    href: "skills",
  },
  {
    id: 3,
    text: "Education",
    href: "educations",
  },
  {
    id: 4,
    text: "Projects",
    href: "projects",
  },
  {
    id: 5,
    text: "Contact",
    href: "contact",
  },
];

export const projects = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Employment Management(Upgraded)",
    description1: "-A front-end and back-end seperated project that generated API documentation by Swagger",
    description2: "-Used: vue.js and Springboot, Spring Security, MVC model, RESTful API, MyBatis Plus, Element UI library, Swagger",
    description3: "-Using Spring Security to assign authorities to different users and caching the authorities in Redis for efficient retrievaland management. Trying to work with AOP to add logs once user logged in or made changes.",
    sourceCode: "https://github.com/troyquan/permissionProject",
    liveDemo: ""
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "Order System",
    description1: "-Created CRUD operations, model and the views using PHP",
    description2: "-Uses sign-up/login/logout feature, password encryption, input validation",
    sourceCode: "https://gitlab.com/quantroy/MissionEats",
    liveDemo: ""
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Employee Management(Thymeleaf)",
    description1: "-Created CRUD operations on Employee model and the views using springboot and thymeleaf",
    description2: "-Adding vague search function to search all elements of the employees",
    sourceCode: "https://github.com/troyquan/employeeManagement",
    liveDemo: ""
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "Portofolio Website",
    description1: "-A front-end and back-end seperated project that generated API documentation by Swagger",
    description2: "-Used: vue.js and Springboot, Spring Security, MVC model, RESTful API, MyBatis Plus, Element UI library, Swagger",
    description3: "-Using Spring Security to assign authorities to different users and caching the authorities in Redis for efficient retrievaland management. Trying to work with AOP to add logs once user logged in or made changes.",
    sourceCode: "https://github.com/troyquan/permissionProject",
    liveDemo: ""
  },
];

export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "Working Hours",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Awards Won",
    amount: 13,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
    amount: 1189,
  },
];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Language", value: "Language" },
  { id: 3, name: "Front-End", value: "Front-End" },
  { id: 4, name: "Web & Databases", value: "Web & Databases" },
  { id: 5, name: "Frameworks", value: "Frameworks" },
  { id: 5, name: "Tools", value: "Tools" },
  { id: 5, name: "Testing and Documentation", value: "Testing and Documentation" },
];

export const skills = [
  {
    id: 1,
    image: java,
    value: "Language",
  },
  {
    id: 2,
    image: cSharp,
    value: "Language",
  },
  {
    id: 3,
    image: PHP,
    value: "Language",
  },
  {
    id: 4,
    image: python,
    value: "Language",
  },
  {
    id: 5,
    image: htmlCSS,
    value: "Front-End",
  },
  {
    id: 6,
    image: javaScript,
    value: "Front-End",
  },
  {
    id: 7,
    image: react,
    value: "Front-End",
  },
  {
    id: 8,
    image: vue,
    value: "Front-End",
  },
  {
    id: 9,
    image: jQuery,
    value: "Front-End",
  },
  {
    id: 10,
    image: elementUI,
    value: "Front-End",
  },
  {
    id: 11,
    image: antD,
    value: "Language",
  },
  {
    id: 12,
    image: bootstrap,
    value: "Front-End",
  },
  {
    id: 13,
    image: AJAX,
    value: "Front-End",
  },
  {
    id: 14,
    image: restAPI,
    value: "Web & Databases",
  },
  {
    id: 15,
    image: mysql,
    value: "Web & Databases",
  },
  {
    id: 16,
    image: aws,
    value: "Web & Databases",
  },
  {
    id: 17,
    image: JPA,
    value: "Web & Databases",
  },
  {
    id: 18,
    image: redis,
    value: "Web & Databases",
  },
  {
    id: 19,
    image: myBatisPlus,
    value: "Web & Databases",
  },
  {
    id: 20,
    image: thymeleaf,
    value: "Web & Databases",
  },
  {
    id: 21,
    image: XAMPP,
    value: "Web & Databases",
  },
  {
    id: 22,
    image: springboot,
    value: "Frameworks",
  },
  {
    id: 23,
    image: springSecurity,
    value: "Frameworks",
  },
  {
    id: 24,
    image: flask,
    value: "Frameworks",
  },
  {
    id: 25,
    image: gitHub,
    value: "Tools",
  },
  {
    id: 26,
    image: vscode,
    value: "Tools",
  },
  {
    id: 27,
    image: IntelliJ,
    value: "Tools",
  },
  {
    id: 28,
    image: drawio,
    value: "Tools",
  },
  {
    id: 29,
    image: docker,
    value: "Tools",
  },
  {
    id: 30,
    image: vmware,
    value: "Tools",
  },
  {
    id: 31,
    image: jUnit5,
    value: "Testing and Documentation",
  },
  {
    id: 32,
    image: mockito,
    value: "Testing and Documentation",
  },
  {
    id: 33,
    image: postman,
    value: "Testing and Documentation",
  },
  {
    id: 34,
    image: swagger2,
    value: "Testing and Documentation",
  },
  {
    id: 35,
    image: nodejs,
    value: "Front-End",
  },
  
];

export const educations = [
  {
    id: 1,
    image: education1,
    title: "AEC In Full Stack Development, John Abbott College",
    time: "September, 2022 - Present",
    description1: "- The 1,305-hour intensive program offers hands-on training in various development stacks, including database, Java OOP, data structures & algorithms, AWS  ( EC2 ，S3)   as well as web programming in PHP, Java, JavaScript, and C#.-Named on the Dean's list for Academic Excellence",
    description2: "- Named on the Dean's list for Academic Excellence"
  },
  {
    id: 2,
    image: education2,
    title: "DEP In Computer Support, Lester B. Pearson School Board",
    time: "June, 2016 - November, 2017",
    description1: "- A  1800  hour  program  with  fundamental  computer  technologies  including  html,css,  server  creating  and  maintaining ., network set-up, and visual basic ."
  },
];



export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "514-660-0320",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "Montreal, Quebec",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "yongze.quan@outlook.com",
  },
];
