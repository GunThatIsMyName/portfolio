import React from "react";
import styled from "styled-components";
import { HeroImage, HeroQuotes } from "..";


const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="hero">
        <div className="hero__info">
          <div className="hero__title">
            <HeroQuotes />
            <h3>이 준 현</h3>
          </div>

          <p className="hero__text">
          바뀌어 가는 풍경을 바라보며 <br />
          걷는 것을 좋아하는 준현이는
            <br />
              배움을 향해 <strong>여행</strong> 하고 있습니다.
            <br />
          </p>

          <div className="hero__icon">
            <button className="hero__btn">Discover More</button>
          </div>
        </div>

        <HeroImage />
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  min-height: 90vh;
  background: #edb504;
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: auto;
    padding: 5rem 0;
    max-width: 1200px;

    .hero__info {
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
