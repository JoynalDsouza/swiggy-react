import React from "react";
import "./RestaurantCard.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faStar } from "@fortawesome/free-solid-svg-icons";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={restaurant.image} alt="Restaurant Display Image"/>
      <div className="restaurant-name">{restaurant.name}</div>
      <p className="restaurant-items">{restaurant.items.join(',')}</p>
      <div className="restaurant-reviews">
        <div className="rating-container">
          <FontAwesomeIcon icon={faStar} className="star" />
          <div className="rating">{restaurant.rating}</div>
        </div>
        <div className="weight-800">.</div>
        <div className="delivery-time">{restaurant.deliveryTime}</div>
        <div className="weight-800">.</div>
        <div className="cost">{restaurant.costForTwo}</div>
      </div>
      <div className="restaurant-offer">
        <FontAwesomeIcon icon={faPercent} />

        <div className="discount">{restaurant.offer}</div>
      </div>
      <div className="quick-view">Quick View</div>
    </div>
  );
};
