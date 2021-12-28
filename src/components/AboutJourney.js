import React from "react";
import styled from "styled-components";
import Goal from "./Goal";
import RunningMan from "./RunningMan";

function AboutJourney({ listIndex }) {
  return (
    <JourenyWrapper>
      <RunningMan order={listIndex} />
      <Goal />
    </JourenyWrapper>
  );
}

const JourenyWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 10px;
  background: orange;
  margin: auto;
  @media screen and (max-width: 1024px) {
    .item__box {
      width: 100%;
    }
  }
`;

export default AboutJourney;
