import React from "react";
import styled from "styled-components";
import { ProjectSvg ,ProjectsBox } from ".";
import { siteList } from "../utils/helps";

function Projects() {
  return (
    <Wrapper id="projects">
      <div className="project">
        <h4 className="project__title">Projects</h4>

        {siteList.map((site) => {
          return (
            <ProjectsBox key={site.id} {...site}/>
          );
        })}
      </div>

      <ProjectSvg />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  background: var(--color-skin);
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
  }
`;

export default Projects;
