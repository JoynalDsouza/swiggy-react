import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import s from "./FilterForm.module.scss"

export const FilterForm = () => {
  return (
    <div className={s.filterFormContainer}>
      <div className={s.fieldContainer}>
        <FontAwesomeIcon icon={faSearch} className={s.icon} />

        <input type="text" placeholder="Search for dishes..." />
      </div>
      <div className={s.fieldContainer}>
        <input type="checkbox" id="Veg" />
        <label htmlFor="Veg">Veg Only</label>
      </div>
      <div className={s.fieldContainer}>
        <FontAwesomeIcon icon={faHeart} className={s.icon} />
        Favourite
      </div>
    </div>
  );
};
