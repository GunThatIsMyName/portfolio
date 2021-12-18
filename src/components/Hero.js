import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import bird2 from "../images/bird2.png";
import bird1 from "../images/bird1.png";
import forest from "../images/forest.png";
import rocks from "../images/rocks.png";
import water from "../images/water.png";

function Hero() {
  const [offsetY, setOffset] = useState(0);
  console.log(offsetY, "offsetY");

  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <section className="section">
        <h2 id="text" style={{ top: `${50 + offsetY * -0.2}%` }}>
          it's time for new adventure
        </h2>
        <img
          src={bird1} className="bird"
          alt="bird1"
          style={{ top: `${offsetY * 1.5}px`, left: `${offsetY * 2}px` }}
        />
        <img src={bird2} alt="bird2"  className="bird"
        style={{ top: `${offsetY * 1.5}px`, left: `${offsetY * -4}px` }}/>
        <img src={forest} alt="forest" style={{top:`${offsetY*0.45}px`}} />
        <Link to="/" id="btn" style={{top:`${offsetY*1.5}px` }} >
          Explore
        </Link>
        <img src={rocks} alt="rocks" style={{ top: `${offsetY * -0.12}px` }} />
        <img src={water} alt="water"  />
      </section>
      <div className="div__sec">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod
          dolore et,?
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          dignissimos cumque quod in exercitationem beatae repellendus tempore
          doloremque expedita? Eum eligendi dignissimos quod porro doloremque
          commodi, iste accusamus consequuntur tenetur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          dignissimos cumque quod in exercitationem beatae repellendus tempore
          doloremque expedita? Eum eligendi dignissimos quod porro doloremque
          commodi, iste accusamus consequuntur tenetur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          dignissimos cumque quod in exercitationem beatae repellendus tempore
          doloremque expedita? Eum eligendi dignissimos quod porro doloremque
          commodi, iste accusamus consequuntur tenetur.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    background-attachment:fixed;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      z-index: 9;
      background: linear-gradient(transparent, #094b65);
    }
    a{
        position:absolute;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    #text {
      position: absolute;
      text-align: center;
      font-size: 3rem;
    }
    #btn {
      text-decoration: none;
      display: inline-block;
      padding: 8px 30px;
      background: #ff0;
      color: #094b65;
      font-size: 1.4rem;
      border-radius: 10px;
      transform: translateY(100px);
    }
  }
  .div__sec {
    position: relative;
    background: #094b65;
    padding: 100px;
    color: #fff;
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export default Hero;
