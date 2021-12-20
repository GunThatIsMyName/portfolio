import React from "react";
import styled from "styled-components";
import NavbarList from "./NavbarList";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";


function Navbar() {
  const {handleSidebar}=useAppContext();

  return (
    <Wrapper>
      <div className="navbar">
        <FaBars className="navbar__icon" onClick={handleSidebar} />

        <NavbarList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #FFFFFF;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
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
    font-size:1rem;
    .navbar {
      &__icon {
        display: inline-block;
        cursor: pointer;
      font-size:1.6rem;
      }
      &__list{
       display:none;
      }
    }
  }
`;

export default Navbar;
