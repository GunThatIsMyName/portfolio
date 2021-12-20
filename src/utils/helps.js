import image1 from "../images/13.webp"
import image2 from "../images/12.webp"
import image3 from "../images/14.png"
import image4 from "../images/15.png"
import image5 from "../images/61.png"
import image6 from "../images/6.png"

import {FaGithub} from "react-icons/fa";
import {SiNotion} from "react-icons/si";

const siteList = [
    {id:1,site:"https://yello-sneakers.netlify.app/",name:"e-commerce",description:"Nike shoes platform"},
    {id:2,site:"https://albamong-eb240.firebaseapp.com/",name:"dreamMon",description:"Sharing my dream to others "},
]

const skillsList = [
    {id:1,skill:"html5",image:image1},
    {id:2,skill:"css3",image:image2},
    {id:3,skill:"javascript",image:image3},
    {id:4,skill:"react",image:image4},
    {id:5,skill:"firebase",image:image5},
    {id:6,skill:"Responsive Websites",image:image6},
]

const infoList = [
    {id:1,icon:<FaGithub />,link:"https://github.com/GunThatIsMyName"},
    {id:2,icon:<SiNotion />,link:"https://adaptive-otter-f22.notion.site/adff99a2dff847c19218da6de56bc230"},
]


export {siteList,skillsList,infoList};