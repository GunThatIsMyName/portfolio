import React from 'react'
import { Link } from 'react-router-dom';


const List = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "about", path: "/about" },
    { id: 3, name: "skills", path: "/skills" },
    { id: 4, name: "projects", path: "/projects" },
  ];

function NavbarList({closeSidebar}) {
    return (
        <ul className="navbar__list">
          {List.map((item) => {
            const { id, name, path } = item;
            return (
              <Link className='navbar__link' key={id} to={path} onClick={closeSidebar&&closeSidebar} >
                {name}
              </Link>
            );
          })}
        </ul>
    )
}

export default NavbarList
