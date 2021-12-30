import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { infoList } from "../utils/helps";

function Info() {
  const [docking, setDocking] = useState(false);

  const handleScroll = () => {
    const wholePageY = document.documentElement.scrollHeight - 30;
    let currentPage =
      document.documentElement.clientHeight + window.pageYOffset;
    if (currentPage > wholePageY) {
      setDocking(true);
    } else {
      setDocking(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <InfoWrapper className={`info ${docking ? "docking" : "none-docking"}`}>
      <div className="box">
        {infoList.map((item) => {
          const { id, icon, link, name } = item;
          return (
            <li key={id}>
              {docking && <h3>{name}</h3>}
              <a target="_blank" rel="noreferrer" href={link}>
                {icon}
              </a>
            </li>
          );
        })}
      </div>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.ul`
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 2rem;
  transition: 0.3s linear;
  &.docking {
    bottom: 100px;
    width: 100%;
    .box {
      margin: auto;
      justify-content: space-around;
      display: flex;
      max-width: 1200px;
      width: 100%;
      max-width: 1200px;
    }
    li {
      text-align: center;
      h3 {
        margin-bottom: 10px;
        text-transform: capitalize;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
  li {
    font-size: 2rem;
    transition: 0.2s linear;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    &:hover {
      transform: translateY(5px);
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
  @media screen and (max-width: 768px) {
    &.docking {
      bottom: 30px;
      .box {
        display: grid;
        grid-template-columns: 1fr;
        background: none;
        li {
          display:flex;
          justify-content:center;
          font-size: 1.4rem;
          h3{
            margin-bottom:0;
          }
        }
      }
    }
    width: 100%;
    left: 0;
    .box {
      display: flex;
      justify-content: space-between;
      background-color: var(--color-white);
      li {
        margin:3px 0;
        h3{margin-right:5px;}
        &:not(:last-child) {
          margin-bottom: none;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }
  }
`;

export default Info;
