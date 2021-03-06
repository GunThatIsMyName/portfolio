import React from "react";
import styled from "styled-components";
import { GradientBtn } from ".";

function ProjectsBox({
  id,
  live,
  name,
  description,
  type,
  github,
  image,
  tech,
}) {
  return (
    <BoxWrapper className="project__box" key={id}>
      <div className="project__info">
        <h3 className="project__type">{type}</h3>
        <h3 className="project__site">{name}</h3>
        <p>{description}</p>

        <div className="project__btns">
          <GradientBtn href={live} children={"Live Demo"} name={"live-demo"} />
          <GradientBtn
            href={github}
            children={"Source Code"}
            name={"source-code"}
          />
        </div>

        <ul className="project__tech__list">
          {tech.map((item) => {
            return <li key={item}> {item}</li>;
          })}
        </ul>
      </div>

      <div className="project__image">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="project__live"
        >
          <img src={image} alt="name" />
        </a>
      </div>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  &:last-child{
    margin-bottom:10rem;
  }
  .project__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    margin: auto;
    p {
      line-height: 1.5rem;
    }
    .project__type {
      font-size: var(--font-large);
      margin-bottom: 0.3rem;
    }
    .project__site {
      color: #c0c0c0;
      margin-bottom: 1rem;
    }
    .project__btns {
      margin: 1rem 0;
      display: flex;
      width: 100%;
      justify-content: space-around;
      a {
        color: #fff;
        padding: 8px 16px;
        border-radius: 10px;
        font-weight: bold;
      }
    }
    .project__tech__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 5px;
      justify-content: space-around;
      li {
        text-align: center;
        padding: 2px 4px;
        color: #222;
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  }
  .project__image {
    height: 25rem;
    text-align: center;
    position: relative;
    .project__live {
      display: block;
      height: 100%;
      width: 60%;
      margin: auto;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      border-radius: 10px;
      img {
        transition: 0.3s linear;
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 480px) {
    .project__info {
      .project__tech__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .project__image {
      .project__live {
        width: 80%;
      }
    }
  }
`;

export default ProjectsBox;
