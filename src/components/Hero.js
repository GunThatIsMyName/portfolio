import React from "react";
import styled from "styled-components";

import HeroSvg from "./shapebox/HeroSvg";
import HeroCss from "./HeroCss";

const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="hero">
        <div className="hero__info">
          <div className="hero__title">
            <h1>실패를 발판삼아 배우는</h1>
            <h3>개발자.</h3>
          </div>

          <p className="hero__text">
            어제보다 성장하는 <strong>이준현</strong> 입니다.
            <br />
            배움의 즐거움을 느끼며 <strong>성장</strong> 하고 있습니다.
            <br />
            실패를 통해 더 좋은 다음 <strong>기회</strong>를 잡는 이준현 입니다.
            <br />
          </p>

          <div className="hero__icon">
            <button className="hero__btn">Discover More</button>
          </div>
        </div>

        <HeroCss />
      </div>

      <HeroSvg />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  min-height: 90vh;
  position: relative;
  background-color: #FFAF01;
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: auto;
    padding: 5rem 0;
    max-width: 1200px;

    .hero__info {
      margin-left: 4rem;
      .hero__title {
        font-size: var(--font-giant);
      }

      .hero__text {
        font-size: var(--font-medium);
        margin: 2rem 0;
        line-height: 3rem;
      }

      .hero__icon {
        .hero__btn {
          background-color: #028042;
          border: 1px solid #028042;
          color: var(--color-white);
          font-size: var(--font-medium);
          padding: 8px 16px;
          border-radius: var(--pixels-ten);
          transition: 0.3s linear;
          &:hover {
            color: #028042;
            background-color: var(--color-white);
            border: 1px solid transparent;
          }
        }
      }
    }
  }
  @keyframes imageBreath {
    0% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(-20px) translateY(-10px);
    }
  }
  @media screen and (max-width: 991px) {
    .hero {
      display: flex;
      flex-direction: column;

      .hero__info {
        .hero__title {
          font-size: var(--font-large);
        }
        .hero__text {
          font-size: var(--font-normal);
        }
        .hero__icon {
          text-align: center;
        }
      }
    }
  }
`;

export default Hero;
