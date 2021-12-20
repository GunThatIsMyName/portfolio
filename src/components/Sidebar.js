import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

import {MdClose} from "react-icons/md"
import NavbarList from "./NavbarList";


function Sidebar() {
    const {isSidebar,handleSidebar}=useAppContext();

  return <Wrapper open={isSidebar} >

      <div className="sidebar__header">
          <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" alt="logo" />
          <MdClose onClick={handleSidebar} />
      </div>

      <NavbarList closeSidebar={handleSidebar} />
  </Wrapper>;
}

const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  top: ${props=>props.open?0:-100}%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition:0.3s linear;
  z-index:9999;
  .sidebar__header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      img{
          width:100px;
      }
      svg{
          margin-right:1rem;
          font-size:2.5rem;
          cursor: pointer;
          &:hover{
              transform:scale(1.1)
          }
      }
  }
  .navbar__list{
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:1rem;
      a{
          text-transform:uppercase;
          font-weight:600;
          &:hover{
              transform:scale(1.1)
          }
      }
  }

  @media screen and (min-width:768px){
    top: -100%;
  }
`;

export default Sidebar;
