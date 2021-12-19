import React from 'react'
import { Link } from 'react-router-dom';


const List = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "about", path: "/about" },
    { id: 3, name: "projects", path: "/projects" },
    { id: 4, name: "skills", path: "/skills" },
  ];

function NavbarList({closeSidebar}) {
    return (
        <ul className="navbar__list">
          {List.map((item) => {
            const { id, name, path } = item;
            return (
              <Link key={id} to={path} onClick={closeSidebar&&closeSidebar} >
                {name}
              </Link>
            );
          })}
        </ul>
    )
}

export default NavbarList
