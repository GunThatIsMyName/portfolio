import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Hero(){
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__title">실패를 발판삼아 배우는 개발자.</h1>
          <p className="hero__text">
            안녕하세요 실패를 두려워 하지 않는 이준현 입니다.
          </p>
          <div className="hero__icon">
            <Link to="/" className="hero__btn">
              Discover More
            </Link>
          </div>
        </div>

        <div className="hero__img">
          <img
            src="https://ethereum.org/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/81032/hackathon_transparent.png"
            alt="hero-img"
          />
        </div>
      </div>

      <div className="hero__wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
    </svg>
</div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  display:flex;
  min-height: 80vh;
  position: relative;
  background-color: #EBEBEB;
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: auto;
    padding: 5rem 2rem;
    max-width: 1200px;

    .hero__info {
      .hero__title {
        font-size: 3rem;
      }

      .hero__text {
        font-size: 1.5rem;
        margin: 2rem 0;
      }

      .hero__icon {
        .hero__btn {
          border: 1px solid black;
          color: #222;
          padding: 8px 16px;
          border-radius: 10px;
          transition: 0.3s linear;
          &:hover {
            background-color: #222;
            color: #fff;
          }
        }
      }
    }

    .hero__img {
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
/*  */
.hero__wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.hero__wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 235px;
}

.hero__wave .shape-fill {
    fill: #fff;
}

/*  */
  @media screen and (max-width: 991px) {
    .hero {
      display: flex;
      flex-direction: column-reverse;

      .hero__info {
        .hero__title {
          font-size: 2rem;
        }
        .hero__text {
          font-size: 1rem;
        }
        .hero__icon {
          text-align: center;
        }
      }

      .hero__img {
        text-align: right;
        img {
          width: 70%;
        }
      }
    }
  }
`;

export default Hero;
