import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Hero2() {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__title">Making The World Work Better For All</h1>
          <p className="hero__text">
            Cardano is a blockchain platform for changemakers, innovators, and
            visionaries, with the tools and technologies required to create
            possibility for the many, as well as the few, and bring about
            positive global change.
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  background-color: #fcfcfc;
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

export default Hero2;
