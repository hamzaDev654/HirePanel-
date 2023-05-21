import React from "react";
import home from "./home.svg";
import homeImage from "./homeImage.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <section id="home">
      <div className="landing-section-content">
        <div
          className="inner-content"
          style={{ marginLeft: "8px", marginRight: "8px", rowGap: "16px" }}
        >
          <div className="media-with-content" style={{ paddingLeft: "-8px", paddingRight: "8px" }}>
            <picture>
              <source media="(min-width: 992px)" srcSet={home} />
              <img src={homeImage} alt="HomeIMage" />
            </picture>
          </div>
          <div className="content-data" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
            <p>
              Streamline the hiring process, save time and money with hiremaze
            </p>
            <a href="#contact">
              <button type="button" className="button-contact">
                <span>Contact Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
