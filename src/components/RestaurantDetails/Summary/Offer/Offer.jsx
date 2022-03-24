import React from "react";
import s from "./Offer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

export const Offer = ({ offers }) => {
  return (
    <>
    <div className={s.offer}>OFFER</div>
      <div>
        <span className={s.icons}>
          <FontAwesomeIcon icon={faPercent} />
        </span>
        <span>{offers}</span>
      </div>
      <br></br>
      <div>
        <span className={s.icons}>
          <FontAwesomeIcon icon={faPercent} />
        </span>

        <span>
          
          20% off up to ₹100 on orders above ₹400 + Up to ₹100 cashback with <br></br>
          Paytm | Use code JUMBO
        </span>
      </div>
    </>
  );
};
