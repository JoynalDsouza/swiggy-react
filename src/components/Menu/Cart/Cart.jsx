import React from "react";
import s from "./Cart.module.scss";

export const Cart = () => {
  return (
    <div className={s.cartContainer}>
      <div className={s.cartHeading}>Cart Empty</div>
      <img src="/CartEmpty.png" alt="cart empty" className={s.emptyCartImg} />
      <p className={s.sentence}>
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </p>
    </div>
  );
};
