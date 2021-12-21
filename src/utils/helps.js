import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";

import shophero from "../images/shophero.png";
import shopmobile from "../images/shopmobile.png";
import shopmain from "../images/shopmain.png";

import dreamhero from "../images/dreamhero.png";
import dreammobile from "../images/dreammobile.png";
import dreammain from "../images/dreammain.png";

import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const siteList = [
  {
    id: 1,
    live: "https://yello-sneakers.netlify.app/",
    name: "e-commerce",
    description: "Nike shoes platform",
    github: "www.google.com",
    image:shopmobile
  },
  {
    id: 2,
    live: "https://albamong-eb240.firebaseapp.com/",
    name: "dreamMon",
    description: "Sharing my dream to others",
    github: "www.google.com",
    image:dreammobile
  },
];

const skillsList = [
  { id: 1, skill: "html5", image: image1 },
  { id: 2, skill: "css3", image: image2 },
  { id: 3, skill: "javascript", image: image3 },
  { id: 4, skill: "react", image: image4 },
  { id: 5, skill: "firebase", image: image5 },
  { id: 6, skill: "Responsive Websites", image: image6 },
];

const infoList = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/GunThatIsMyName" },
  {
    id: 2,
    icon: <SiNotion />,
    link: "https://adaptive-otter-f22.notion.site/adff99a2dff847c19218da6de56bc230",
  },
];

export { siteList, skillsList, infoList };
