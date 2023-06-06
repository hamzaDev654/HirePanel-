import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo-button">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHnadler} />
        </div>
        <div className="toolbar_logo">
          <a href="/">LOGO</a>
        </div>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_item">
        <ul>
          <li>
            <a href="#home">Hire</a>
          </li>
          <li>
            <a href="#services">What We Do</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Get in Touch</a>
          </li> 
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
