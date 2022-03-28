import React from "react";
import s from "./CarousalCard.module.scss";

export const CarousalCard = ({ data }) => {
  return (
    <div className={s.slide}>
      <img className={s.slideImg} src={data.backgroundImage} alt="promotion" />
      <p className={s.slideTitle}>Grab 20% Off on First Order</p>
    </div>
  );
};
