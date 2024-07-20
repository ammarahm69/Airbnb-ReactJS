import React from "react";
import "./Header.css";
import Logo from "./assets/airbnb-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="header">
      <img className="header_icon" src={Logo} />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>

      </div>
    </div>
  );
}

export default Header;
