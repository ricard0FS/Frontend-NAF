import React, { useState } from "react";
import "./Header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { logoNaf } from "../../images";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [hovered, setHovered] = useState(null);

  const toggleMenu = () => {
    setNavList(!navList);
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logoNaf} alt="Logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li
                  key={index}
                  onMouseEnter={() => list.hasSubmenu && setHovered(list.text)}
                  onMouseLeave={() => list.hasSubmenu && setHovered(null)}
                >
                  <Link to={list.path}>
                    {list.text}
                    {list.hasSubmenu && (
                      <i
                        className={`fa fa-chevron-${
                          hovered === list.text ? "up" : "down"
                        }`}
                      ></i>
                    )}
                  </Link>
                  {list.submenu && hovered === list.text && (
                    <ul className="submenu">
                      {list.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <Link to={subitem.path}>{subitem.text}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex"></div>

          <div className="toggle" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
