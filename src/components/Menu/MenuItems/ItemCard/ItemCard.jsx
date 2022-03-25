import React from "react";
import s from "./ItemCard.module.scss";

export const ItemCard = ({ item:{name, price, details, image} }) => {
  return (
    <div className={s.itemCardContainer}>
      <div>
          <p className={s.dishName}>{name}</p>
          <p className={s.dishPrice}>Rs {price}</p>
          <p className={s.dishDetails}>{details}</p>
      </div>
      <div>
          <div className={s.imgButton}>
              <img src={image} alt="Item Image" className={s.itemImg} />
              <button className={s.addButton}>Add</button>
          </div>
      </div>
    </div>
  );
};
