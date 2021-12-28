import React from "react";
import styled from "styled-components";

function RunningMan({ order }) {
  return (
    <RunningCss order={order}>
      <div className="man">
        <div className="body">
          <div className="head">
            <div className="hat"></div>
            <div className="glasses"></div>
            <div className="ear"></div>
            <div className="mouth"></div>
          </div>

          <div className="arm left">
            <div className="lower-arm"></div>
          </div>
          <div className="leg left">
            <div className="lower-leg"></div>
          </div>
          <div className="leg right">
            <div className="lower-leg"></div>
          </div>
          <div className="arm right">
            <div className="lower-arm"></div>
          </div>
        </div>
      </div>
    </RunningCss>
  );
}

const RunningCss = styled.div`
  --anim-speed: 1570ms;
  --skin-light-color: #fbc2a7;
  --skin-dark-color: #ffb898;
  --skin-darker-color: #f5af8e;
  --cloth-light-color: #79af87;
  --cloth-dark-color: #007759;
  --cloth-darker-color: #028042;
  width: 200px;
  height: 320px;
  left: ${(props) => props.order * 25}%;
  position: absolute;
  transition: 0.3s linear;
  top: -230px;
  z-index: 99;
  transform: scale(0.5);

  .man {
    position: relative;
    width: 200px;
    height: 280px;
    animation: BodyAnim var(--anim-speed) ease 0s infinite;
  }

  /* BODY--------------------------------------- */
  .body {
    position: relative;
    width: 51px;
    height: 103px;
    top: 110px;
    left: 73px;
    background-color: var(--cloth-dark-color);
    border-radius: 50px;
  }

  /* HEAD ----------------------------------- */
  .head {
    position: relative;
    top: -90px;
    left: -30px;
    width: 96px;
    height: 97px;
    background-color: var(--skin-dark-color);
    border-radius: 50px 40px 30px 68px;
    transform-origin: bottom;
    animation: HeadAnim var(--anim-speed) ease 0s infinite;

    .hat {
      position: absolute;
      top: -8px;
      left: -4px;
      width: 102px;
      height: 48px;
      background-color: var(--color-darkblue);
      border-radius: 42px 41px 0px 5px;
      transform: rotate(-3deg);
      &::after {
        content: "";
        position: absolute;
        top: 39px;
        left: 51px;
        width: 82px;
        height: 9px;
        background-color: var(--color-darkblue);
        border-radius: 0px 7px 4px 0px;
      }
    }

    .glasses {
      position: absolute;
      top: 43px;
      left: 80px;
      width: 15px;
      height: 14px;
      background-color: var(--color-black);
      border-radius: 50%;

      &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: white;
      }
    }

    .ear {
      position: absolute;
      top: 45px;
      left: 27px;
      width: 17px;
      height: 24px;
      background-color: var(--skin-light-color);
      border-radius: 6px 9px 4px 12px;
      border-left: solid 4px var(--skin-darker-color);
    }

    .mouth {
      position: absolute;
      top: 75px;
      left: 82px;
      width: 10px;
      height: 8px;
      background-color: #a6452a;
      border-radius: 8px 10px 21px 13px;
    }

  }

  /* A R M S ----------------------------------- */
  .arm {
    position: absolute;
    top: 5px;
    left: 14px;
    width: 32px;
    height: 63px;
    background-color: var(--cloth-light-color);
    border-radius: 50px;
    transform-origin: 50% 15px;
    .lower-arm {
      position: absolute;
      top: 35px;
      left: 2px;
      width: 29px;
      height: 55px;
      background-color: var(--cloth-light-color);
      border-radius: 50px;
      transform-origin: 50% 16px;
      &::after {
        content: "";
        position: absolute;
        top: 60px;
        left: 6px;
        width: 22px;
        height: 19px;
        background-color: var(--skin-light-color);
        border-radius: 9px 12px 6px 7px;
      }
    }
  }
  .arm.left {
    z-index: -1;
    left: 0px;
    background-color: var(--cloth-darker-color);
    transform: rotate(86deg);
    animation: LeftArmAnim var(--anim-speed) ease 0s infinite;
    .lower-arm {
      background-color: var(--cloth-darker-color);
      transform: rotate(-66deg);
      animation: LeftLowerArmAnim var(--anim-speed) ease 0s infinite;
    }
  }
  .arm.right {
    transform: rotate(-55deg);
    animation: RightArmAnim var(--anim-speed) ease 0s infinite;
    .lower-arm {
      transform: rotate(-66deg);
      animation: RightLowerArmAnim var(--anim-speed) ease 0s infinite;
    }
  }

  /* LEGS ------------- */

  .leg {
    position: absolute;
    top: 62px;
    left: 6px;
    width: 41px;
    height: 73px;
    background-color: var(--cloth-dark-color);
    border-radius: 50px;
    transform-origin: 50% 20px;
    .lower-leg {
      position: absolute;
      top: 35px;
      left: 2px;
      width: 38px;
      height: 80px;
      background-color: var(--cloth-dark-color);
      border-radius: 20px 20px 4px 4px;
      transform-origin: 50% 20px;
      transform: rotate(3deg);
      &::after {
        content: "";
        position: absolute;
        top: 84px;
        left: 5px;
        width: 44px;
        height: 13px;
        background-color: var(--color-darkblue);
        border: solid 1px rgba(0, 0, 0, 30%);
        border-bottom: solid 4px rgba(184, 184, 184, 0.986);
        border-radius: 5px 13px 6px 7px;
      }
    }
  }
  .leg.left {
    z-index: -1;
    background-color: var(--cloth-darker-color);
    transform: rotate(-70deg);
    animation: LeftLegAnim var(--anim-speed) ease 0s infinite;
    .lower-leg {
      background-color: var(--cloth-darker-color);
      transform: rotate(24deg);
      animation: LeftLowerLegAnim var(--anim-speed) ease 0s infinite;
    }
  }
  .leg.right {
    transform: rotate(29deg);
    animation: RightLegAnim var(--anim-speed) ease 0s infinite;
    .lower-leg {
      transform: rotate(66deg);
      animation: RightLowerLegAnim var(--anim-speed) ease 0s infinite;
    }
  }

  /* MEDIA QUERIES ------------------------ */
  @media screen and (max-width: 640px) {
    left: 50%;
    transform: translateX(-50%) scale(0.5);
  }

  /* ANIMATIONS ------------------------ */
  @keyframes BodyAnim {
    from {
      transform: translateY(-15px) rotate(25deg);
    }
    25% {
      transform: translateY(-0px) rotate(25deg);
    }
    50% {
      transform: translateY(-12px) rotate(25deg);
    }
    75% {
      transform: translateY(-0px) rotate(25deg);
    }
    to {
      transform: translateY(-15px) rotate(25deg);
    }
  }

  /*Head*/
  @keyframes HeadAnim {
    from {
      transform: translateY(1px) rotate(-35deg);
    }
    25% {
      transform: translateY(-0px) rotate(-39deg);
    }
    50% {
      transform: translateY(-1px) rotate(-35deg);
    }
    75% {
      transform: translateY(-0px) rotate(-30deg);
    }
    to {
      transform: translateY(1px) rotate(-35deg);
    }
  }
  /*Arms*/
  @keyframes RightArmAnim {
    from {
      transform: rotate(-60deg);
    }
    50% {
      transform: rotate(60deg);
    }
    to {
      transform: rotate(-60deg);
    }
  }
  @keyframes RightLowerArmAnim {
    from {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-120deg);
    }
    to {
      transform: rotate(-45deg);
    }
  }
  @keyframes LeftArmAnim {
    from {
      transform: rotate(80deg);
    }
    50% {
      transform: rotate(-60deg);
    }
    to {
      transform: rotate(80deg);
    }
  }
  @keyframes LeftLowerArmAnim {
    from {
      transform: rotate(-80deg);
    }
    50% {
      transform: rotate(-60deg);
    }
    to {
      transform: rotate(-80deg);
    }
  }
  /*Legs*/
  @keyframes RightLegAnim {
    from {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(-100deg);
    }
    to {
      transform: rotate(60deg);
    }
  }
  @keyframes RightLowerLegAnim {
    from {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(35deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
  @keyframes LeftLegAnim {
    from {
      transform: rotate(-90deg);
    }
    50% {
      transform: rotate(80deg);
    }
    to {
      transform: rotate(-90deg);
    }
  }
  @keyframes LeftLowerLegAnim {
    from {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(35deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
`;

export default RunningMan;
