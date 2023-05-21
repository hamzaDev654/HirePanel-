import React from "react";
import "./Services.css";
import firstImg from "./servicesImgFirst.svg";
import secImg from "./servicesImgSec.svg";
export const Services = () => {
  return (
    <section id="services">
      <div className="landing-section-content">
        <h2>What We Do</h2>
        <div
          className="ant-row ant-row-space-between ant-row-middle css-5scq2q"
          style={{ marginLeft: "-8px", marginRight: "8px", rowGap: "16px" }}
        >
          <div
            className="ant-col ant-col-xs-24 ant-col-md-10 css-5scq2q"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
          >
            <img src={firstImg} alt="" />
          </div>
          <div
            className="ant-col ant-col-xs-24 ant-col-md-12 css-5scq2q"
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
          >
            <h3>All About Us</h3>
            <p>
              At HireMaze, we understand that the success of your business is
              our business as well. That's why we are committed to making your
              dreams and goals a reality by providing you with the best staffing
              solutions. Our team of experts is highly skilled and experienced
              in recruiting and staffing for various industries and positions.
              We know how to find the right employees that will not only meet
              but exceed your expectations.
            </p>
          </div>
        </div>
        <div
          className="ant-row ant-row-space-between ant-row-middle css-5scq2q"
          style={{ marginLeft: "-8px", marginRight: "8px", rowGap: "16px" }}
        >
          <div
            className="ant-col ant-col-xs-24 ant-col-xs-order-2 ant-col-md-12 ant-col-md-order-1 css-5scq2q"
            style={{ paddingLeft: "-8px", paddingRight: "8px" }}
          >
            <h3>The Technical Stuff</h3>
            <p>
              HireMaze works by assisting companies in finding and hiring
              employees that meet their specific requirements. Our approach is
              to have open communication with clients to understand their needs
              and find the perfect fit for their organization. Our payment
              structure is unique, we only take payment after the candidate
              joins the client organization. Contact us today to discuss your
              staffing needs and let us show you how we can help your company
              succeed.
            </p>
          </div>
          <div
            className="ant-col ant-col-xs-24 ant-col-xs-order-1 ant-col-md-10 ant-col-md-order-2 css-5scq2q"
            style={{ paddingLeft: "-8px", paddingRight: "8px" }}
          >
            <img src={secImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
