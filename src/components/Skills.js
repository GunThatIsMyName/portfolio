import React from "react";
import styled from "styled-components";
import { SkillItem } from ".";
import { skillsList } from "../utils/helps";
import SkillsSvg from "./shapebox/SkillsSvg";

function Skills() {
  return (
    <Wrapper id="skills">
      <section className="skill">
        <h1 className="skill__title">skills</h1>
        <div className="skill__list">
          {skillsList.map((item) => {
            const { id, skill, image } = item;
            return <SkillItem key={id} skill={skill} image={image} />;
          })}
        </div>
      </section>

          {/* shape svg */}
          <SkillsSvg />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 70vh;
  background: #E6D8FF;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 8rem;
  .skill__title {
    font-size: var(--font-medium);
    text-align: center;
    margin-bottom: 4rem;
  }
  .skill {
    max-width: 1200px;
    margin: auto;

    .skill__list {
      display: grid;
      text-align: center;
      place-items: center;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1rem;
      text-align: center;
      transition: 0.3s linear;
    }
  }

  @media screen and (max-width: 1024px) {
    .skill {
      .skill__subtitle {
        max-width: 80%;
      }
      .skill__list {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        row-gap: 4rem;
        margin-bottom: 8rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .skill {
      padding: 1rem;
      text-align: center;
      .skill__list {
        margin-top: 2rem;
        grid-gap: 1rem;
        row-gap: 3rem;
      }
    }
  }
`;
export default Skills;
