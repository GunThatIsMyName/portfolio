import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";

import shopmobile from "../images/shopmobile.png";
import dreammobile from "../images/dreammobile.png";
import metamobile from "../images/metamobile.png";

import { FaGithub } from "react-icons/fa";
import { SiCodesandbox, SiFreecodecamp } from "react-icons/si";

const siteList = [
  {
    id: 1,
    live: "https://sneakers-site.netlify.app/",
    name: "e-commerce  (나이키 신발 플랫폼)",
    type: "Serverless Functions",
    description:
      "신발 플랫폼 입니다. netlify serverless 를 사용해서 신발 data를 받아옵니다. 신발을 둘러보며 마음에 드는 신발을 장바구니에 담을 수 있고 삭제 할 수 있습니다. 장바구니에 담아둔 신발은 locastorage 에 저장됩니다.",
    tech: [
      "React JS",
      "netlify serverless",
      "styled-components",
      "react-router-dom",
    ],
    github: "https://github.com/GunThatIsMyName/e-commerce-dream",
    image: shopmobile,
  },
  {
    id: 2,
    live: "https://albamong-eb240.firebaseapp.com/",
    name: "습관 리코더",
    type: "Firebase CRUD",
    description:
      "건강한 습관을 만들기 위해 사소한 기록을 업로드 하는 사이트 입니다. firebase 를 이용해서 글, 사진을 업로드 합니다. 업로드된 게시물은 나포함 다른 유저에게도 실시간으로 보여집니다. 첫 화면은 firebase login 을 이용해서 로그인 한 유저만 home화면에 접속 할수 있습니다. 로그인 하지 않으면 login 화면에 남아있게 됩니다. 자신이 만든 꿈은 수정/삭제 할수 있으며 다른 유저의 게시물은 삭제 불가능 합니다.",
    tech: ["React JS", "firebase", "styled-components", "react-router-dom"],
    github: "https://github.com/GunThatIsMyName/dreamMong",
    image: dreammobile,
  },
  {
    id: 3,
    live: "https://aboutmeta.netlify.app/",
    name: "About meta",
    type: "메타 태그 사이트",
    description:
      "검색창에 웹사이트를 검색하면 사이트가 가지고 있는 Meta tags 들에 대한 정보를 보여줍니다. promptapi 를 사용하여 meta tags 에 대한 정보(title , image , description)를 받아와 보여줍니다. Meta tags 의 역할 과  검색 엔진의 도움 되는 정보를 담을수 있는 것을 배웠습니다",
    tech: ["React JS", "styled-components", "promptapi"],
    github: "https://github.com/GunThatIsMyName/meta-tags",
    image: metamobile,
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
  { id: 1,name:"github", icon: <FaGithub />, link: "https://github.com/GunThatIsMyName" },
  {
    id: 2,
    icon: <SiCodesandbox />,
    name:"sandbox",
    link: "https://codesandbox.io/u/Jooning",
  },
  {
    id: 3,
    icon: <SiFreecodecamp />,
    name:"freecodecamp",
    link: "https://www.freecodecamp.org/junhyunLee",
  },
];

const aboutList = [
  {
    id: 1,
    question: "소개를 해드릴게요",
    answer:
      "배움을 향해 달리는 이준현 입니다. 주어진 일을 잘 해내면 열심히 살고 있다고 착각 하며 살았습니다. ",
  },
  {
    id: 2,
    question: "강점은 무엇인가요 ?",
    answer:
      " 사교활동에 매우 적극적이며 본인이 직접 모임을 주도하고 적극적으로 대화의 주도권을 이끌어 나가는 힘이 있는 성격이다. 이것저것 논리적으로 계산을 하는데도 능숙하고 자기관리능력이 뛰어나 한마디로 유능한 성격의 대표주자이다. 회사를 비롯한 집단에서도 유능한 직원, 팀장, 재능 있는 구성원의 이미지를 많이 풍긴다.",
  },
  {
    id: 3,
    question: "목표는 무엇인가요 ?",
    answer:
      `목표한 배움의 과정까지 도달 했을때 온라인 상에서 건축 설계,디자인  할수있는 서비스를 만드는것입니다. `,
  },
];

const navList = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "skills", path: "/skills" },
  { id: 5, name: "contact", path: "/contact" },
];

const words = [
  "실패를 통해 발전하는",
  "어제 보다 성장하는",
  "배움을 배고파 하는",
];

export { siteList, skillsList, infoList, aboutList ,navList,words};

