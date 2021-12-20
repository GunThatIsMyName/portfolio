import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { infoList } from "../utils/helps";

function Info() {
  return (
    <InfoWrapper>
      {infoList.map((item) => {
        const { id, icon, link } = item;
        return (
          <li key={id}>
            <a target="_blank" rel="noreferrer" href={link}>
              {icon}
            </a>
          </li>
        );
      })}
    </InfoWrapper>
  );
}

const InfoWrapper = styled.ul`
  position: fixed;
  bottom: 0;
  left: 2rem;
  li {
    font-size: 2rem;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    &:hover {
      transform: scale(1.1);
    }
    &:last-child {
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: black;
      }
    }
  }
  @media screen and (max-width:768px){
      display:none;
  }
`;

export default Info;
