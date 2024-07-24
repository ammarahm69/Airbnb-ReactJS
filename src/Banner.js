import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const navigateSearch = () => {
    navigate("/search");
  };
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner_searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch out your imagination</h1>
        <h5>
          Plan a different kind of getaway uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={navigateSearch}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
