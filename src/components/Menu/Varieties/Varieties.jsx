import React from "react";
import s from "./Varieties.module.scss";

export const Varieties = ({ varieties }) => {
  return (
    <div className={s.varietiesContainer}>
      {varieties &&
        varieties.map((item, index) => (
          <a href={`#${item}`} className={s.variety} key={index}>
            {item}
          </a>
        ))}
    </div>
  );
};
