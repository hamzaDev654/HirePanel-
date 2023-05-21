import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
export const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [classesName, setNameClass] = useState(
    "ant-input ant-input-lg  css-5scq2q "
  );
  const [classesEmail, setEmailClass] = useState(
    "ant-input ant-input-lg  css-5scq2q "
  );

  const rgex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const nameHanlder = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };


  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length <= 0 && email.trim().length <= 0) {
      setNameError("Please input your name");
      setEmailError("Please input your email!");
      setNameClass("ant-input ant-input-lg ant-input-status-error css-5scq2q ");
      setEmailClass(
        "ant-input ant-input-lg ant-input-status-error css-5scq2q "
      );
      return;
    } 
    else {
      if (name.trim().length <= 0) {
        setNameError("Please input your name");
        setEmailError("");
        setNameClass(
          "ant-input ant-input-lg ant-input-status-error css-5scq2q"
        );
        setEmailClass("ant-input ant-input-lg css-5scq2q");
        return;
      } else if (email.trim().length <= 0) {
        setEmailError("Please input your email!");
        setNameError("");
        setNameClass("ant-input ant-input-lg css-5scq2q");
        setEmailClass(
          "ant-input ant-input-lg ant-input-status-error css-5scq2q"
        );
        return;
      }
      else if (!rgex.test(email)){
        setEmailError("Invalid email!");
        setNameError("");
        setNameClass("ant-input ant-input-lg css-5scq2q");
        setEmailClass(
          "ant-input ant-input-lg ant-input-status-error css-5scq2q"
        );
        return;
      }
      else {
        setNameError("");
        setEmailError("");
        setNameClass("ant-input ant-input-lg css-5scq2q");
        setEmailClass("ant-input ant-input-lg css-5scq2q");
      }
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    
    emailjs.sendForm('service_qm2momt', 'template_t4uoufa', e.target, 'ubUq1rlZ5o2kaUEzb')
      .then((result) => {
        if(result.text === 'Ok'){
          showToastMessage();
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
        <ToastContainer />
      <div className="landing-section-content">
        <h2>Get In Touch</h2>
        <p>
          Better yet, Lets talk! We love our customers, so feel free to call
          during normal business hours.
        </p>
        <div
          className="ant-row css-5scq2q"
          style={{ marginLeft: "-16px", marginRight: "-16px", rowGap: "32px" }}
        >
          <div
            className="ant-col ant-col-xs-24 ant-col-xl-18 css-5scq2q"
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            <form
              id="basic"
              autoComplete="off"
              className="ant-form ant-form-vertical ant-form-large css-5scq2q"
              onSubmit={(e)=>{submitHandler(e)}}
            >
              <div
                className="ant-row css-5scq2q"
                style={{
                  marginLeft: "-8px",
                  marginRight: "-8px",
                  rowGap: "16px",
                }}
              >
                <div
                  className="ant-col contact-col-antd ant-col-xs-24 ant-col-md-8 css-5scq2q"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div className="ant-form-item css-5scq2q">
                    <div className="ant-row ant-form-item-row css-5scq2q">
                      <div className="ant-col ant-col-8 ant-form-item-label css-5scq2q">
                        <label
                          for="basic_name"
                          className="ant-form-item-required"
                          title="Name"
                       
                        >
                          Name
                        </label>
                      </div>
                      <div className="ant-col ant-col-16 ant-form-item-control css-5scq2q">
                        <div className="ant-form-item-control-input">
                          <div className="ant-form-item-control-input-content">
                            <input
                              placeholder="Enter Name"
                              id="basic_name"
                              aria-required="true"
                              className={classesName}
                              value={name}
                              name="user_name" 
                              type="text"
                              onChange={nameHanlder}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "nowrap" }}>
                          <div
                            id="basic_name_help"
                            className="ant-form-item-explain ant-form-item-explain-connected css-5scq2q"
                            role="alert"
                          >
                            <div class="ant-form-item-explain-error">
                              {nameError}
                            </div>
                          </div>
                          <div style={{ width: "0px", height: "24px" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ant-col contact-col-antd ant-col-xs-24 ant-col-md-8 css-5scq2q"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div className="ant-form-item css-5scq2q">
                    <div className="ant-row ant-form-item-row css-5scq2q">
                      <div className="ant-col ant-col-8 ant-form-item-label css-5scq2q">
                        <label
                          for="basic_email"
                          className="ant-form-item-required"
                          title="Email"
                        >
                          Email
                        </label>
                      </div>
                      <div className="ant-col ant-col-16 ant-form-item-control css-5scq2q">
                        <div className="ant-form-item-control-input">
                          <div className="ant-form-item-control-input-content">
                            <input
                              placeholder="Enter Email"
                              id="basic_email"
                              aria-required="true"
                              className={classesEmail}
                              name="user_email" 
                              type="text"
                              value={email}
                              onChange={emailHandler}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "nowrap" }}>
                          <div
                            id="basic_name_help"
                            className="ant-form-item-explain ant-form-item-explain-connected css-5scq2q"
                            role="alert"
                          >
                            <div class="ant-form-item-explain-error">
                              {emailError}
                            </div>
                          </div>
                          <div style={{ width: "0px", height: "24px" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ant-col contact-col-antd ant-col-xs-24 ant-col-md-8 css-5scq2q"
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <div className="ant-form-item css-5scq2q">
                    <div className="ant-row ant-form-item-row css-5scq2q">
                      <div className="ant-col ant-col-8 ant-form-item-label css-5scq2q">
                        <label
                          for="basic_number"
                          className=""
                          title="Phone Number"
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="ant-col ant-col-16 ant-form-item-control css-5scq2q">
                        <div className="ant-form-item-control-input">
                          <div className="ant-form-item-control-input-content">
                            <input
                              placeholder="Enter Phone Number"
                              id="basic_number"
                              className="ant-input ant-input-lg css-5scq2q"
                              type="text"
                              name="user_phone"
                              value={phone}
                              onChange={phoneHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-row css-5scq2q">
                <div className="ant-col contact-col-antd ant-col-xs-24 css-5scq2qa">
                  <div className="ant-form-item css-5scq2q">
                    <div className="ant-row ant-form-item-row css-5scq2q">
                      <div className="ant-col ant-col-8 ant-form-item-label css-5scq2q">
                        <label for="basic_message" className="" title="Message">
                          Message
                        </label>
                      </div>
                      <div className="ant-col ant-col-16 ant-form-item-control css-5scq2q">
                        <div className="ant-form-item-control-input">
                          <div className="ant-form-item-control-input-content">
                            <textarea
                              rows="4"
                              placeholder="Enter Message"
                              name="message"
                              id="basic_message"
                              className="ant-input ant-input-lg css-5scq2q"
                              value={message}
                              onChange={messageHandler}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-row css-5scq2q">
                <div className="ant-col css-5scq2q">
                  <button
                    type="submit"
                    className="ant-btn css-5scq2q ant-btn-primary ant-btn-lg"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="ant-col ant-col-xs-24 ant-col-xl-6 css-5scq2q"
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            <ul class="contact-details">
              <li>
                <h4>Address</h4>
                <span>
                  Ideal Villa / A4, KH 632 <br />
                  GANESHPUR RAHMANPUR, CHINHAT <br /> LUCKNOW, UP-226028, IND
                </span>
              </li>
              <li>
                <h4>Email</h4>
                <a href="mailto:hr@hiremaze.com">hr@hiremaze.com</a>
              </li>
              <li>
                <h4>Phone</h4>
                <a href="https://wa.me/917011287961">+91 7011287961</a>
              </li>
              <li>
                <h4>GSTIN</h4>
                <span>09GXOPS0491A1Z5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </section>
  );
};
