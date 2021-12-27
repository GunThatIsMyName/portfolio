import React from "react";
import styled from "styled-components";

function GradientBtn({ href, children, name }) {
  return (
    <GradientWrapper
      className={name}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </GradientWrapper>
  );
}

const GradientWrapper = styled.a`
  &.live-demo {
    background-image: linear-gradient(
      to right,
      #edb504,
      #99be84 51%,
      #edb504 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: red;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: black;
      text-decoration: none;
    }
  }

  &.source-code {
    background-image: linear-gradient(
      to right,
      #1f1c2c 0%,
      #928dab 51%,
      #1f1c2c 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
`;

export default GradientBtn;
