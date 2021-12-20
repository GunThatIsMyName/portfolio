import React from "react";
import styled from "styled-components";
import { skillsList } from "../utils/helps";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <Wrapper>
      <section className="skill">
        <h1 className="skill__title">My Toolbox & Things I Can Do</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos impedit obcaecati voluptatem consequuntur magni officiis vero, praesentium quod amet numquam quae odio ipsa sapiente natus nemo suscipit a cumque?</p>
        <div className="skill__list">
          {skillsList.map((item) => {
            const { id, skill, image } = item;
            return <SkillItem key={id} skill={skill} image={image} />;
          })}
        </div>
      </section>

      <div className="waves__bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 119"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 60vh;
  background: #CACDC5;
  position: relative;
  padding-top:6rem;
  padding-bottom:8rem;
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
      place-items: center;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1rem;
      text-align: center;
      transition: 0.3s linear;
    }
  }

  /*  */

  .waves__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .waves__bottom svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 93px;
  }

  .waves__bottom .shape-fill {
    fill: #f7b2d8;
  }

  /*  */
  @media screen and (max-width: 1024px) {
    .skill {
      .skill__list {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin-bottom: 8rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .skill {
      .skill__list {
        padding: 1rem;
        grid-gap: 1rem;
        row-gap: 3rem;
      }
    }
  }
`;
export default Skills;
