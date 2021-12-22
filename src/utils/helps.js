import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";

import shopmobile from "../images/shopmobile.png";
import dreammobile from "../images/dreammobile.png";

import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const siteList = [
  {
    id: 1,
    live: "https://yello-sneakers.netlify.app/",
    name: "e-commerce",
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
    name: "dreamMon",
    description:
      "드림몬 사이트는 꿈을 공유하는 사이트 입니다. firebase 를 이용해서 글, 사진을 업로드 합니다. 업로드된 게시물은 나포함 다른 유저에게도 실시간으로 보여집니다. 첫 화면은 firebase login 을 이용해서 로그인 한 유저만 home화면에 접속 할수 있습니다. 로그인 하지 않으면 login 화면에 남아있게 됩니다. 자신이 만든 꿈은 수정/삭제 할수 있으며 다른 유저의 게시물은 삭제 불가능 합니다.",
    tech: ["React JS", "firebase", "styled-components", "react-router-dom"],
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

const aboutList = [
  {
    id: 1,
    question: "간단 소개",
    answer:
      "이준현 입니다. 성공하는 성격 유형이기도 하다.[4] 수는 전체 인구의 약 1.8%로 적지만 이들의 영향력은 상당히 큰 편. 주로 기업가, 고위공무원, 정치가, 전문직 직군에 많이 분포한다. 활기찬 성격에 사교활동을 잘하고, 어려운 도전을 마다하지 않고 즐기며 일과 친하다보니 성실한 경우가 많은데다 논리정연하게 따지기를 좋아한다. 통계를 보면 E형 매우 적극적이며 본인이 직접 모임 매우 적극적이며 본인이 직접 모임",
  },
  {
    id: 2,
    question: "저는요!",
    answer:
      " 사교활동에 매우 적극적이며 본인이 직접 모임을 주도하고 적극적으로 대화의 주도권을 이끌어 나가는 힘이 있는 성격이다. 이것저것 논리적으로 계산을 하는데도 능숙하고 자기관리능력이 뛰어나 한마디로 유능한 성격의 대표주자이다. 회사를 비롯한 집단에서도 유능한 직원, 팀장, 재능 있는 구성원의 이미지를 많이 풍긴다.",
  },
  {
    id: 3,
    question: "왜 코딩을 배웠나?",
    answer:
      "당연하게도 사회적으로 가장 성공하는 성격 유형이기도 하다.[4] 수는 전체 인구의 약 1.8%로 적지만 이들의 영향력은 상당히 큰 편. 주로 기업가, 고위공무원, 정치가, 전문직 직군에 많이 분포한다. 활기찬 성격에 사교활동을 잘하고, 어려운 도전을 마다하지 않고 즐기며 일과 친하다보니 성실한 경우가 많은데다 논리정연하게 따지기를 좋아한다. 통계를 보면 E형",
  },
  {
    id: 4,
    question: "어떻게 코딩을 배웠나?",
    answer:
      "222당연하게도 사회적으로 가장 성공하는 성격 유형이기도 하다.[4] 수는 전체 인구의 약 1.8%로 적지만 이들의 영향력은 상당히 큰 편. 주로 기업가, 고위공무원, 정치가, 전문직 직군에 많이 분포한다. 활기찬 성격에 사교활동을 잘하고, 어려운 도전을 마다하지 않고 즐기며 일과 친하다보니 성실한 경우가 많은데다 논리정연하게 따지기를 좋아한다. 통계를 보면 E형",
  },
];

const navList = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "skills", path: "/skills" },
  { id: 4, name: "projects", path: "/projects" },
  { id: 5, name: "contact", path: "/contact" },
];

export { siteList, skillsList, infoList, aboutList ,navList};
