import React from "react";
import styled from "styled-components";
import { SkillItem, SkillsSvg } from ".";
import { skillsList } from "../utils/helps";

function Skills() {
  return (
    <Wrapper id="skills">
      <section className="skill">
        <h1 className="skill__title">skills</h1>
        <p className="skill__description">사용 할수 있는 기술들 입니다.</p>

        <div className="skill__list">
          {skillsList.map((item) => {
            const { id, skill, image } = item;
            return <SkillItem key={id} skill={skill} image={image} />;
          })}
        </div>

        <div className="skill__extra">
          <h3 className="skill__add">Currently working on:</h3>
          <p>
            자바스크립트 의 실력을 더 향상 시키기 위해 Data structure &
            algorithms 을 공부하고 있습니다.
          </p>
        </div>
      </section>

      {/* shape svg */}
      <SkillsSvg />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 70vh;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 8rem;
  .skill {
    .skill__title {
      font-size: var(--font-medium);
      text-align: center;
      margin-bottom: 2rem;
    }
    .skill__description {
      text-align: center;
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    max-width: 1200px;
    margin: auto;

    .skill__list {
      display: flex;
      justify-content: space-around;
      margin-bottom: 8rem;
      align-items: center;
      transition: 0.3s linear;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      text-align: center;
      place-items: center;
    }
    .skill__extra {
      max-width: 1000px;
      margin: auto;
      font-size: 1.4rem;
      text-align: center;
      .skill__add {
        margin-bottom: 5px;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .skill {
      max-width: 80%;
      .skill__list {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 4rem;
      }
      .skill__extra {
        margin: 1rem 2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .skill {
      .skill__list {
        margin-top: 2rem;
        grid-gap: 1rem;
        row-gap: 3rem;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
export default Skills;
