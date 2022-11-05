import React from "react";
import "./style.css";
import ShareToWeb from "../ShareToWeb.js";
import OslashMembar from "../OslashMember/index.js";
import InputBox from "../InputBox/index.js";
import Footer from "../Footer/index.js";

const Card = ({setPage,children}) => {
  return (
    <div className="card">
      <ShareToWeb />
      <InputBox setPage = {setPage}/>
      <OslashMembar />
      {children && children}
      <Footer />
    </div>
  );
};

export default Card;
