import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { navList } from "../utils/helps";
import navLogo from "../images/headLogo.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = () => {
    setNavbarOpen(false);
  };

  const handleClick = (e) => {
    let target = e.target.dataset.href;
    const elementPosition = document.querySelector(`#${target}`).offsetTop;
    window.scrollTo({
      left: 0,
      top: elementPosition,
    });
  };

  const handleTop=()=>{
    window.scroll({
      left:0,
      top:0
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper navbarOpen={navbarOpen}>
      <div className="navbar">
        <div className="navbar__icons">
          <img src={navLogo} alt="logo" onClick={handleTop} />
          <FaBars
            className="navbar__icon"
            onClick={() => setNavbarOpen((prev) => !prev)}
          />
        </div>

        <ul className="navbar__list">
          {navList.map((item) => {
            const { id, name, path } = item;
            return (
              <li
                className="navbar__link"
                key={id}
                to={path}
                data-href={name}
                onClick={handleClick}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
background-color:var(--color-white);
  font-size: var(--font-medium);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  .navbar {
    text-transform: uppercase;
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar__icons {
      img {
        height:50px;
        cursor: pointer;
      }
      .navbar__icon {
        display: none;
      }
    }
    .navbar__list {
      .navbar__link {
        display: inline;
        cursor: pointer;
        margin-left: 1rem;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-normal);
    background-color: var(--color-white);
    .navbar {
      display: flex;
      flex-direction: column;
      .navbar__icons {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .navbar__icon {
          display: inline-block;
          cursor: pointer;
          font-size: var(--font-medium);
        }
      }
      .navbar__list {
        display: ${(props) => (props.navbarOpen ? "flex" : "none")};
        flex-direction: column;
        .navbar__link {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

export default Navbar;
