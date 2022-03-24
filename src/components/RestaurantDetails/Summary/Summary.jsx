import React from "react";
import { FilterForm } from "./FilterForm/FilterForm";
import { Offer } from "./Offer/Offer";
import "./Summary.styles.scss";
import { SummaryDetails } from "./SummaryDetails/SummaryDetails";

export const Summary = ({ details }) => {
  return (
    <div className="restaurant-summary">
      <div className="summary-img">
        <img src={details.image} alt="res-dp" />
      </div>

      <div className="summary-details">
          <SummaryDetails  details={details} />
          <FilterForm />
      </div>

      <div className="discount-offer">
        <Offer offers={details.offer} />
      </div>
    </div>
  );
};
