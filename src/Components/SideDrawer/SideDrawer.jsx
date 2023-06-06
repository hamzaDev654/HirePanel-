import React from "react";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="side-drawer__logo">
          <div className="logo">
            LOGO
          </div>
      </div>
      <ul>
        <li>
          <a href="#home" onClick={props.closeDrawer}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </svg>

            <span>Hire</span>
          </a>
        </li>
        <li>
          <a href="#services" onClick={props.closeDrawer}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
            <span>What We Do</span>
          </a>
        </li>
        <li>
          <a href="#about" onClick={props.closeDrawer}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
            <span>About Us</span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={props.closeDrawer}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
            </svg>
           <span> Get in Touch</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
