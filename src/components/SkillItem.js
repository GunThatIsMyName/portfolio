import React from "react";
import styled from "styled-components";

function SkillItem({ id, skill, image }) {
  return (
    <Wrapper>
      <div className="skill__image">
        <img src={image} alt={skill} className="skill__img" />
      </div>
      <div className="skill__name">
        <p>{skill}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border-radius: 5px;
  width: 150px;
  height: 150px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition:0.1s linear;
  .skill__image {
    width: inherit;
    height: inherit;
    border-radius: 40px;
    margin-bottom: 0.5rem;
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
      background-color: white;
    }
  }
  .skill__name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: 150px;
  }
`;

export default SkillItem;
