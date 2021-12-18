import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const List = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "skills", path: "/skills" },
];

function Navbar() {
  return (
    <Wrapper>
      <div className="navbar">
        <FaBars className="navbar__icon" />

        <ul className="navbar__list">
          {List.map((item) => {
            const { id, name, path } = item;
            return (
              <Link key={id} to={path}>
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #262626;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  border-bottom: 1px solid black;
  .navbar {
    text-transform: uppercase;
    margin: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &__icon {
      display: none;
    }
    a {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .navbar {
      &__icon {
        display: inline-block;
        cursor: pointer;
      font-size:1.6rem;
      }
      &__list{
       
      }
    }
  }
`;

export default Navbar;
