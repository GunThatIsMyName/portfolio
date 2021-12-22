import React from "react";
import styled from "styled-components";

import work from "../images/work.png";


function Hero() {
  return (
    <Wrapper id="home">
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__title">실패를 발판삼아 배우는 개발자.</h1>
          <p className="hero__text">
            안녕하세요 실패를 두려워 하지 않는 이준현 입니다.
            <br />
            끄떡없어 쓰러지고 떨어져도 다시 일어나 오를 뿐야
            <br />
            난 말야 똑똑히 봐 깎일수록 깨질수록
            <br />
            더욱 세지고 강해지는 돌덩이
          </p>
          <div className="hero__icon">
            <button className="hero__btn">Discover More</button>
          </div>
        </div>

        <div className="hero__image__box">
          <img className="hero__img" src={work} alt="hero-img" />
        </div>
      </div>

      <div className="hero__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  min-height: 90vh;
  position: relative;
  background-color: #FFDEE9;
background-image: linear-gradient(0deg, #E9F9FF 0%, #EFF4FF 100%);


  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: auto;
    padding: 5rem 0;
    max-width: 1200px;

    .hero__info {
      margin:0 2rem;
      .hero__title {
        font-size: 3rem;
        color: #449edf;
      }

      .hero__text {
        font-size: 1.5rem;
        margin: 2rem 0;
      }

      .hero__icon {
        .hero__btn {
          background-color: #449edf;
          border: 1px solid #449edf;
          color: #fff;
          font-size: 1.5rem;
          padding: 8px 16px;
          border-radius: 10px;
          transition: 0.3s linear;
          &:hover {
            color: #449edf;
            background-color: #fff;
            border: 1px solid transparent;
          }
        }
      }
    }

    .hero__image__box {
      text-align: center;
      .hero__img {
        width: 100%;
        animation:5s linear imageBreath infinite;
      }
    }
  }
  @keyframes imageBreath{
    0% {
    transform: translateX(0) translateY(0) ;
  }
    50% {
      transform: translateX(-10px) translateY(-10px);
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
      flex-direction: column;

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

      .hero__image__box {
        text-align: right;
        .hero__img {
          width: 300px;
        }
      }
    }
  }
`;



export default Hero;
