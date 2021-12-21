import React from "react";
import styled from "styled-components";
import { siteList } from "../utils/helps";

function Projects() {
  return (
    <Wrapper>
      <div className="project">
        <h4 className="project__title">Projects</h4>
        {siteList.map((site) => {
          const { id, live, name, description, github, image, tech } = site;
          return (
            <div className="project__box" key={id}>
              <div className="project__info">
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
              </div>

              <div className="project__image">
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="project__live"
                >
                  <img src={image} alt="name" />
                  <ul className="project__tech__list">
                    {tech.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </ul>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  background: #fff6f9;
  .project {
    max-width: 1200px;
    margin: auto;
    padding: 4rem 0;
    .project__title {
      text-align: center;
      font-size: 1.4rem;
    }
    .project__box {
      background-color: #fff;
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
          margin-bottom: 2rem;
          line-height: 1.5rem;
        }
        .project__site {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .project__btns {
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
      }
      .project__image {
        height: 25rem;
        text-align: center;
        .project__live {
          position: relative;
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
          .project__tech__list {
            position: absolute;
            visibility: hidden;
            top: -10px;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000b6;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-radius: 5px;
            transition: 0.1s linear;
            li {
              font-size: 1.3rem;
              margin-bottom: 1rem;
              text-transform: capitalize;
              background-color: white;
              padding: 8px;
              border-radius: 5px;
              font-weight: bold;
            }
          }
          &:hover {
            .project__tech__list {
              visibility: visible;
              top: 0;
            }
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
