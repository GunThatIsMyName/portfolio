import React from "react";
import styled from "styled-components";
import { siteList } from "../utils/helps";

function Projects() {
  return (
    <Wrapper>
      <div className="project">
        {siteList.map((site) => {
          const { id, live, name, description, github, image } = site;
          return (
            <div className="project__box" key={id}>
              <div className="project__info">
                <h3 className="site__name">{name}</h3>

                <p>{description}</p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  quas molestias, voluptatibus perferendis ad voluptatum
                  perspiciatis harum ipsum illum eius voluptatem deserunt
                  doloremque id dolor omnis ullam debitis minus sed!
                </p>

                <div className="project__btns">
                  <a style={{backgroundColor:"red"}}className="live-demo"  href={live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a style={{backgroundColor:"teal"}} className="source-code" href={github} target="_blank" rel="noreferrer">
                    source code
                  </a>
                </div>
              </div>

              <div className="project__image">
                <img src={image} alt="name" />
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
    .project__box {
        background-color:#fff;
        border-radius:10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      margin: 2rem;
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
        p{
            margin-bottom:2rem;
        }
        .site__name {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .project__btns{
            display:flex;
            width:100%;
            justify-content:space-around;
            a{
                color:#fff;
                padding:8px 16px;
                border-radius:10px;
                font-weight:bold;
            }

        }
      }
      .project__image {
        height: 25rem;
        text-align: center;
        img {
          height: 100%;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
      }
    }
  }

  @media screen and (max-width:768px){
      .project{
          .project__box{
              display:flex;
              flex-direction:column-reverse;
          }
      }
  }
`;

export default Projects;
