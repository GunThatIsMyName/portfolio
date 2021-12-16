import React, { useEffect, useState } from "react";
import styled from "styled-components";

import bgImg from "../images/bg.jpg";
import img1 from "../images/mountain1.png";
import img2 from "../images/mountain2.png";
import textImg from "../images/text.png";

function Hero() {
  const [offsetY, setOffset] = useState(0);
  console.log(offsetY);

  const handleScroll = () => {
    return setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <div className="parallax">
        <img
          src={img1}
          alt="img1"
          id="img1"
          style={{ width: (100 + offsetY * 0.3) + "%" , display:offsetY>400?"none":"block"}}
        />
        <img
          src={img2}
          alt="img2"
          id="img2"
          style={{ width: 100 + offsetY * 0.3 + "%",display:offsetY>400?"none":"block"}}
        />
        <img
          src={textImg}
          alt="textImg"
          id="textImg"
          style={{ top: `-${1 + offsetY * 0.3 + "%"}`,display:offsetY>400?"none":"block"}}
        />
      </div>
      <div className="content">
        <h2>SIMPLE PArallax with react </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam earum
          tempora hic corporis, autem eligendi iste adipisci nesciunt libero?
          Iure mollitia aliquid tenetur, incidunt illo perspiciatis sed itaque
          reiciendis cumque!{" "}
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .parallax {
    width: 100%;
    height: 1000px;
    position: relative;
    z-index: 10;
    background: url(${bgImg});
    background-size: cover;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 200px;
      bottom: 0%;
      background: linear-gradient(transparent, #fff);
    }
    #img1 {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      z-index: 9;
    }
    #img2 {
      position: absolute;
      z-index: 9;
    }
    #textImg {
      position: absolute;
      transform: translateY(40%);
    }
  }

  .content {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      text-align: justify;
    }
  }
`;

export default Hero;
