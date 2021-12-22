import React, { useEffect, useState } from "react";
import styled from "styled-components";

import whoami from "../images/whoami.png";
import { aboutList } from "../utils/helps";

function About() {
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
          <img src={whoami} alt="face" />
          <h3 className="about__header__title">내일이 더 기대되는 준현이.</h3>
        </div>

        <div className="about__box">
          <div className="about__btns">
            {aboutList.map((item) => {
              const { id, question } = item;
              return (
                <button className={`about__btn ${listIndex===id-1?"active":""}`} key={id} onClick={() => setIndex(id-1)}>
                  {question}
                </button>
              );
            })}
          </div>
          <div className="about__me">
            <p>{answer}</p>
          </div>
        </div>
      </div>

      <div className="about__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;

  background-color: #fff;
  background-image: linear-gradient(0deg, #fff6f9 0%, #fff 100%);
  .about__section {
    max-width: 1200px;
    margin: auto;
    padding: 2rem 4rem;
    .about__title {
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 4rem;
    }
    .about__header {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      img {
        width: 400px;
        height: 300px;
      }
      .about__header__title {
        text-align: center;
        font-size: 2.5rem;
      }
    }

    .about__box {
      margin-bottom: 10rem;
      display: flex;
      gap: 4rem;

      .about__btns {
        flex-basis:25%;
        display: flex;
        flex-direction: column;
        border-right:2px solid black;
        padding-right:1rem;
        .about__btn {
          font-size:1.2rem;
          margin-bottom:1rem;
          &.active{
            color:teal;
            border-left:4px solid teal;
          }
        }
      }
      .about__me{
        flex-basis:75%;
        p{
          line-height:1.7rem;
        }
      }
    }
  }
  /*  */

  .about__wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .about__wave svg {
    position: relative;
    display: block;
    width: calc(169% + 1.3px);
    height: 127px;
  }

  .about__wave .shape-fill {
    fill: #fff;
  }

  /*  */

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
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about__section {
      padding: 0 2rem;
      .about__header {
        .about__title {
          font-size: 2rem;
        }
      }
      .about__box{
        display:flex;
        flex-direction:column;
        .about__btns {
          border-right:none;
          padding-bottom:1rem;
          padding-right:0;
          border-bottom:2px solid black;
        .about__btn {
          border-bottom:4px solid transparent;
          &.active{
            color:teal;
            border-left:none;
          }
        }
      }
      }
    }
  }
`;

export default About;
