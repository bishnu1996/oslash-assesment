import React from "react";
import './style.css';
import sherelogo from "../../assets/images/sherelogo.png";
import ToggleSwitch from "../ToggleSwitch/index";
const ShareToWeb = () => {
  return (
    <div className="sharetoweb">
      <div className="sharelogo-box">
        <img src={sherelogo} alt="sharelogo" className="share-logo" />
        <div className="shareinfo-text">
          <h4>Share to Web</h4>
          <p>Publish and share link with anyone</p>
        </div>
      </div>
      <div className="toggleSwitch">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default ShareToWeb;
