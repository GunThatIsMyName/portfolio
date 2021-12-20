import React from "react";
import styled from "styled-components";
import NavbarList from "./NavbarList";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const { handleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className="navbar">
        <div className="navbar__icons">
          <img
            src="https://www.designevo.com/res/templates/thumb_small/cute-monkey-and-interesting-gaming.webp?v=1.0.0.2"
            alt="logo"
          />
          <FaBars className="navbar__icon" onClick={handleSidebar} />
        </div>

        <NavbarList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #ffffff;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  .navbar {
    text-transform: uppercase;
    margin: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar__icons {
      img {
        width: 40px;
        border-radius: 50%;
      }
      .navbar__icon {
        display: none;
      }
    }
    a {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    .navbar {
      .navbar__icons{
        display:flex;
        width:100%;
        align-items:center;
        justify-content:space-between;
        .navbar__icon{
          display: inline-block;
          cursor: pointer;
          font-size: 1.6rem;
        }
      }
      &__list {
        display: none;
      }
    }
  }
`;

export default Navbar;
