import React from "react";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
  faLifeRing,
  faPercent,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-and-location-container">
        <div>
          <img src="/swiggy2.png" alt="logo" className="logo-image" />
        </div>
        <div className="location">
          <span className="area">Jayanagar</span>
          <span className="city">Bengaluru, Karnataka, India</span>
          <FontAwesomeIcon icon={faChevronDown} className="down-arrow" />
        </div>
      </div>

      <div className="nav">
        <div className="nav-item">
          <FontAwesomeIcon icon={faSearch} className="fas" />
          <span className="search">Search</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faPercent} className="fas" />

          <span className="offers">
            Offers <sup>NEW</sup>
          </span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faLifeRing} className="fas" />

          <span className="help">Help</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} className="fas" />

          <span className="signIn"> Sign In</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faCartShopping} className="fas" />

          <span className="cart"> Cart </span>
        </div>
      </div>
    </div>
  );
};

