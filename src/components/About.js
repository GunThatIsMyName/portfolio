import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { aboutList } from "../utils/helps";
import AboutSvg from "./shapebox/AboutSvg";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [listIndex, setIndex] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(aboutList);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const { answer } = info[listIndex];

  return (
    <Wrapper id="about">

      <div className="about__section">

        <h4 className="about__title">about</h4>

        <div className="about__header">
          <h3 className="about__header__title">내일이 더 기대되는 준현이.</h3>
        </div>

        <div className="about__box">
          <div className="about__btns">

            {aboutList.map((item) => {
              // change answer variable by click the button
              const { id, question } = item;
              return (
                <button
                  className={`about__btn ${
                    listIndex === id - 1 ? "active" : ""
                  }`}
                  key={id}
                  onClick={() => setIndex(id - 1)}
                >
                  {question}
                </button>
              );
            })}
          </div>

          <div className="about__me">
            {/* answer variable change by press the button*/}
            <p>{answer}</p>
          </div>
          
        </div>
      </div>

      <AboutSvg />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;

  background-color: var(--color-white);
  background-image: linear-gradient(
    0deg,
    var(--color-ligthpink) 0%,
    var(--color-white) 100%
  );
  .about__section {
    max-width: 1200px;
    margin: auto;
    padding: 2rem 4rem;
    .about__title {
      font-size: var(--font-medium);
      text-align: center;
      margin-bottom: 4rem;
    }
    .about__header {
      text-align:center;
      .about__header__title {
        text-align: center;
        margin-bottom:2rem;
        font-size: var(--font-biglarge);
      }
    }

    .about__box {
      margin-bottom: 10rem;
      display: flex;
      gap: 4rem;
      .about__btns {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        border-right: 2px solid var(--color-black);
        padding-right: 1rem;
        .about__btn {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          &.active {
            color: #EDB504;
            border-left: 4px solid #EDB504;
          }
        }
      }
      .about__me {
        flex-basis: 75%;
        p {
          font-size:1.2rem;
          line-height: 1.7rem;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    display: flex;
    margin-top: 5rem;
    .about__section {
      grid-template-columns: 1fr;
      padding: 0 5rem;
      .about__header {
        margin-bottom: 2rem;
        grid-template-columns: 1fr;
        img {
          display: none;
        }
      }
      .about__box {
        text-align: center;
        p {
          margin-left: auto;
          font-size: var(--font-normal);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about__section {
      padding: 0 2rem;
      .about__header {
        .about__title {
          font-size: var(--font-large);
        }
      }
      .about__box {
        display: flex;
        flex-direction: column;
        .about__btns {
          border-right: none;
          padding-bottom: 1rem;
          padding-right: 0;
          border-bottom: 2px solid var(--color-black);
          .about__btn {
            border-bottom: 4px solid transparent;
            &.active {
              border-left: none;
            }
          }
        }
      }
    }
  }
`;

export default About;
