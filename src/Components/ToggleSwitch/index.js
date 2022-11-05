import React from "react";
import './style.css';

const ToggleSwitch = () => {
  return (
    <div className="switch-button">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
