import React from "react";
import styled from "styled-components";
import { siteList } from "../utils/helps";
import ProjectSvg from "./shapebox/ProjectSvg";

function Projects() {
  return (
    <Wrapper id="projects">
      <div className="project">
        <h4 className="project__title">Projects</h4>

        {siteList.map((site) => {
          const { id, live, name, description,type, github, image, tech } = site;
          return (
            <div className="project__box" key={id}>
              <div className="project__info">
                <h3 className="project__type">{type}</h3>
                <h3 className="project__site">{name}</h3>
                <p>{description}</p>

                <div className="project__btns">
                  <a
                    style={{ backgroundColor: "red" }}
                    className="live-demo"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    style={{ backgroundColor: "teal" }}
                    className="source-code"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    source code
                  </a>
                </div>

                <ul className="project__tech__list">
                  {tech.map((item) => {
                    return <li key={item}>{item}</li>;
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
            </div>
          );
        })}
      </div>

      <ProjectSvg />

    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  background: #fff6f9;
  padding-top: 2rem;
  position: relative;
  .project {
    max-width: 1200px;
    margin: auto;
    padding: 4rem 0;
    .project__title {
      text-align: center;
      font-size: var(--font-medium);
    }
    .project__box {
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
        .project__site{
          color:#C0C0C0;
          margin-bottom:1rem;
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
    }
  }

  @media screen and (max-width: 768px) {
    .project {
      .project__box {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .project {
      .project__box {
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
    }
  }
`;

export default Projects;
