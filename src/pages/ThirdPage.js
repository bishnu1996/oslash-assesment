import React,{useState} from "react";
import './ThirdPage.css';
import DropDown from '../Components/DropDown/index';
import TextArea from "../Components/TextArea";
import Footer from "../Components/Footer";



const ThirdPage = ({setPage,memberInfo,setMemberInfo}) => {
  const [text,setText] = useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    setMemberInfo({
      ...memberInfo,name:text
    })
    setPage(4);
  }
  return (
    <div className="third-page">
      <form onSubmit={submitHandler}>
        <div className="member-details-group">
          <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="People,emails,groups" className="member-details-input"/>
          <DropDown className="third-drop-down"/>  
        </div>
        <div className="show-text">
          <span>{text}</span>
        </div>
        <div className="fullDetails">
          <TextArea />
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default ThirdPage;
