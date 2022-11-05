import React from "react";
import Card from "../Components/Card";
import "./FiftPage.css";
import Avatar from ".././assets/images/Avatar.png";
import DropDown from "../Components/DropDown";

const FiftPage = ({ setPage, memberInfo }) => {
  return (
    <div className="fiftPage">
      <Card setPage={setPage}>
        <div className="foftpage-member">
          <div className="show-member-image-name">
            {memberInfo.name && <img src={Avatar} alt="" />}
            <span>{memberInfo.name}</span>
          </div>
          <DropDown/>
        </div>
      </Card>
    </div>
  );
};

export default FiftPage;
