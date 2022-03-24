import React from "react";
import s from "./SummaryDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const SummaryDetails = ({ details }) => {
  const {
    name,
    items,
    address,
    rating,
    ratingCount,
    costForTwo,
    deliveryTime,
  } = details;
  return (
    <>
      <div className={s.name}>{name}</div>
      {items && <p className={s.items}>{items.join(",")}</p>}
      <p className={s.address}>{address}</p>
      <div className={s.ratings}>
        <div className={s.rating}>
          <span>
            <FontAwesomeIcon icon={faStar} className={s.star} /> {rating}
          </span>
          <p className={s.ratingCount}>{ratingCount} Ratings</p>
        </div>

        <div className={s.deliveryTimeContainer}>
          <span>{deliveryTime}</span>
          <p className={s.deliveryTime}>Delivery Time</p>
        </div>

        <div className={s.cftContainer}>
          <span>Rs {costForTwo}</span>
          <p className={s.cft}>Cost for two</p>
        </div>
      </div>
    </>
  );
};
