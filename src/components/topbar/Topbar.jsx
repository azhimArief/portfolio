import React from "react";
import "./Topbar.scss";
import {Person, Mail} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Ajim.</a>
          <div className="itemContainer">
              <Person className="icon"></Person>
              <span>0183900655</span>
          </div>
          <div className="itemContainer">
              <Mail className="icon"></Mail>
              <span>ariefazhim@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>  
  );
}
