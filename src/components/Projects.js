import React from "react";
import styled from "styled-components";
import { siteList } from "../utils/helps";

function Projects() {
  return (
    <Wrapper id="projects">
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

      <div className="project__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
          line-height: 1.5rem;
        }
        .project__site {
          font-size: 2rem;
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
    }
  }

  .project__wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .project__wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 83px;
  }

  .project__wave .shape-fill {
    fill: #fff;
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
