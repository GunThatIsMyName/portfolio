import React from "react";
import styled from "styled-components";
import { skillsList } from "../utils/helps";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <Wrapper>
      <section className="skill">
        <h1 className="skill__title">My Toolbox & Things I Can Do</h1>
        <div className="skill__list">
          {skillsList.map((item) => {
            const { id, skill, image } = item;
            return (
              <SkillItem key={id} skill={skill} image={image} />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 60vh;
  background: #b1bdc5;
  display: flex;
  .skill__title {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .skill {
    max-width: 1200px;
    margin: auto;

    .skill__list {
      display: grid;
      text-align: center;
      place-items:center;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1rem;
      text-align: center;
      transition:0.3s linear;
    }
}
@media screen and (max-width:1024px){
    .skill{
        .skill__list{
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 2rem;
            }
        }
    }
    @media screen and (max-width:768px){
        .skill{
            .skill__list{
                padding:1rem;
                grid-gap:1rem;
                row-gap: 3rem;
            }
        }
  }
`;
export default Skills;
