import React from "react";
import { ItemCard } from "./ItemCard/ItemCard";
import s from './MenuItems.module.scss'

export const MenuItems = ({ variety, items }) => {
  return (
    <>
      <div className={s.variety} id={variety}>{variety}</div>
      <div className={s.itemsCount}>{items.length} {items.length === 1 ? `ITEM` : `ITEMS`}</div>
      <div>
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </>
  );
};
