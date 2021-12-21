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
    description:
      "신발 플랫폼 입니다. netlify serverless 를 사용해서 신발 data를 받아옵니다. 신발을 둘러보며 마음에 드는 신발을 장바구니에 담을 수 있고 삭제 할 수 있습니다. 장바구니에 담아둔 신발은 locastorage 에 저장됩니다.",
    tech: ["ReactJs", "netlify serverless","styled-components","react-router-dom"],
    github: "https://github.com/GunThatIsMyName/e-commerce-dream",
    image: shopmobile,
  },
  {
    id: 2,
    live: "https://albamong-eb240.firebaseapp.com/",
    name: "dreamMon",
    description: "드림몬 사이트는 꿈을 공유하는 사이트 입니다. firebase 를 이용해서 글, 사진을 업로드 합니다. 업로드된 게시물은 나포함 다른 유저에게도 실시간으로 보여집니다. 첫 화면은 firebase login 을 이용해서 로그인 한 유저만 home화면에 접속 할수 있습니다. 로그인 하지 않으면 login 화면에 남아있게 됩니다. 자신이 만든 꿈은 수정/삭제 할수 있으며 다른 유저의 게시물은 삭제 불가능 합니다.",
    tech: ["ReactJs", "firebase","styled-components","react-router-dom"],
    github: "https://github.com/GunThatIsMyName/dreamMong",
    image: dreammobile,
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
