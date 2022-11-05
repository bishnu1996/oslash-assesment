import React from "react";
import "./FourthPage.css";
import cross from ".././assets/images/cross.png";
import Avatar from ".././assets/images/Avatar.png";
import Footer from "../Components/Footer";

const FourthPage = ({setPage,memberInfo,setMemberInfo}) => {
    const clearHandler = ()=>{
        setMemberInfo({...memberInfo,name:""})
    }
  return (
    <div className="fourthpage">
      <div className="chow-cros-name">
        <div className="cross-name">
          <span>{memberInfo.name}</span>
          <img src={cross} onClick={clearHandler} alt="cross" className="cross-img" />
        </div>
        <div className="select-button">
          <div className="fourthpage-dropdown">
            <select className="fourth-select">
              <option>Full Access</option>
              <option>Can Edit</option>
              <option>Can View</option>
              <option>No Access</option>
            </select>
          </div>
          <button className="fourthpage-button" onClick={()=>setPage(5)}>Invite</button>
        </div>
      </div>
      <div className="showMember">
        <p>Select Person</p>
        <div className="show-member-image-name">
          {memberInfo.name && <img src={Avatar} alt="" />}
          <span>{memberInfo.name}</span>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FourthPage;
