import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavbarList from "./NavbarList";
import { FaBars } from "react-icons/fa";

function Navbar() {

  const [navbarOpen,setNavbarOpen]=useState(false);


  const handleScroll = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper navbarOpen={navbarOpen} >
      <div className="navbar">
        <div className="navbar__icons">
          <img
            src="https://www.designevo.com/res/templates/thumb_small/cute-monkey-and-interesting-gaming.webp?v=1.0.0.2"
            alt="logo"
          />
          <FaBars className="navbar__icon" onClick={(()=>setNavbarOpen(prev=>!prev))} />
        </div>

        <NavbarList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
background-color:#EEF4FF;
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
    .navbar__list {
      .navbar__link {
        margin-left: 1rem;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    background-color:#fff;
    .navbar {
      display:flex;
      flex-direction:column;
      .navbar__icons {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .navbar__icon {
          display: inline-block;
          cursor: pointer;
          font-size: 1.6rem;
        }
      }
      .navbar__list {
        display: ${props=>props.navbarOpen?"flex":"none"};
        flex-direction:column;
        .navbar__link{
          margin:0.5rem 0;
        }
      }
    }
  }
`;

export default Navbar;
