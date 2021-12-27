import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AboutBox } from ".";
import { aboutList } from "../utils/helps";


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

        <AboutBox
          aboutList={aboutList}
          answer={answer}
          listIndex={listIndex}
          setIndex={setIndex}
        />

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
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
      text-align: center;
      .about__header__title {
        text-align: center;
        margin-bottom: 2rem;
        font-size: var(--font-biglarge);
      }
    }
  }
  @media screen and (max-width: 991px) {
    display: flex;
    margin-top: 5rem;
    .about__section {
      grid-template-columns: 1fr;
      padding: 0 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .about__section {
      padding: 0 2rem;
    }
  }
`;

export default About;
