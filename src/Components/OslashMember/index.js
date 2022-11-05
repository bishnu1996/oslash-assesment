import React from "react";
import './style.css';
import oslashlogo from "../../assets/images/oslashlogo.png";
import DropDown from "../DropDown";
const OslashMembar = () => {
  return (
    <div className="sharetoweb">
      <div className="sharelogo-box">
        <img src={oslashlogo} alt="sharelogo" className="share-logo" />
        <div className="shareinfo-text">
          <h4>Everyone at oSlash</h4>
          <p>learn about sharing</p>
        </div>
      </div>
      <div className="toggleSwitch">
        <DropDown/>
      </div>
    </div>
  );
};

export default OslashMembar;
