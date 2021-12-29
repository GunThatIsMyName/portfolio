import React from "react";
import styled from "styled-components";

function Goal() {
  return (
    <Wrapper>
      <div className="pole"></div>
      <div className="flag">배움</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 0px;
  top: -150px;
  animation: UpAndDown linear 2s infinite;
  .pole {
    background-color: var(--color-pole);
    border: 1px solid var(--color-pole);
    border-radius: 10px;
    width: 10px;
    height: 150px;

    &::before {
      content: "";
      position: absolute;
      top: -14px;
      left: -5px;
      display: block;
      background-color: var(--color-black);
      border-radius: 50%;
      border: 1px solid var(--color-pole);
      width: 20px;
      height: 20px;
    }
  }
  .flag {
    position: absolute;
    display: grid;
    place-items: center;
    color: white;
    font-size: 1.5rem;
    top: 8px;
    left: -80px;
    z-index: 10;
    background-color: var(--color-red);
    border: 1px solid var(--color-red);
    width: 80px;
    height: 60px;
  }

  @media screen and (max-width: 640px) {
    top: -100px;
    .pole {
      height: 100px;
    }
    .flag {
      font-size: 12px;
      width: 40px;
      height: 40px;
      left: -40px;
    }
  }
  @keyframes UpAndDown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Goal;
