import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";

import shopmobile from "../images/shopmobile.png";
import dreammobile from "../images/dreammobile.png";
import metamobile from "../images/metamobile.png";
import mypetimage from "../images/mypetimage.png";

import { FaGithub } from "react-icons/fa";
import { SiFreecodecamp,SiNotion } from "react-icons/si";

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
  {
    id: 4,
    live: "https://mywebpet.shop/",
    name: "다마고찌 사이트",
    type: "Firebase",
    description:
      "Github 협업을 통해 만든 프로젝트 입니다. firebase 를 이용해서 캐릭터의 레벨업 을 구현하였으며, 레벨업시 보상으로 게임 머니를 받게됩니다. 게임머니를 통해 캐릭터를 마음대로 꾸밀수있습니다. 유저들의 레벨,게임 머니, 캐릭터의 모습은 실시간으로 다른 유저에게 보여집니다. ",
    tech: ["React JS", "styled-components", "firebase","github"],
    github: "https://github.com/mandy0529/web-pet",
    image: mypetimage,
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
  {
    id: 1,
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/GunThatIsMyName",
  },
  {
    id: 2,
    icon: <SiNotion />,
    name: "Notion Resume",
    link: "https://adaptive-otter-f22.notion.site/adff99a2dff847c19218da6de56bc230",
  },
  {
    id: 3,
    icon: <SiFreecodecamp />,
    name: "freecodecamp",
    link: "https://www.freecodecamp.org/junhyunLee",
  },
];

const aboutList = [
  {
    id: 1,
    question: "소개를 해드릴게요",
    answer:
      "배움을 향해 달리는 이준현 입니다. 2년전 어렸을때 부터 꿈꿔왔던 워킹홀리데이를 호주에서 하게 되었습니다. 2년 동안 타지에 살면서 행복한 삶에 대해서 생각을 하게 되었습니다. 내가 행복해야하는 이유, 행복할수 있는 방법. 한국에 살고 있을땐 그저 주어진 일을 잘 해내면 열심히 살고 있다고 착각을 하며 살았습니다. 행복한 삶을 위해선 자기 성장이 있어야하고 성장을 위한 원동력에는 나의 행복이 포함되어 있어야 된다고 느꼈습니다. 현재는 성장을 위한 배움을 하고 있습니다. ",
  },
  {
    id: 2,
    question: "강점은 무엇인가?",
    answer: ` '늙은 사람은 앉아서 "이게 뭐야?" 라고 묻고 소년은 "이걸로 내가 무엇을 할수 있지?" 를 묻는다.' - 스티브 잡스 의 명언 처럼-  소년 처럼  새로운 아이디어 로 이걸로 내가 무엇을 할수 있을지  무엇을 배워야 하는지 상상을 하는 모습이 장점 입니다 `,
  },
  {
    id: 3,
    question: "10년 뒤의 모습?",
    answer: `목표한 배움의 과정까지 도달 했을때 온라인 상에서 건축 설계,디자인 할수있는 서비스를 만들고 싶습니다. 도면을 만들고 다른 유저에게 나의 디자인을 보낼수 있고 공유할수 있는 네트워크 서비스를 만드는 것입니다. `,
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

export { siteList, skillsList, infoList, aboutList, navList, words };
