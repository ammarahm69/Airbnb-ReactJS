import React from "react";
import "./SearchResult.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from '@mui/icons-material/Star';
function SearchResult({
  img,
  location,
  title,
  describition,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} />
      <FavoriteIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>______</p>
          <p> {describition}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
        </div>
        <div className="searchResult__price">
        <h2>{price}</h2>
        <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
