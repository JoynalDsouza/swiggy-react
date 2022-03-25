import React from "react";
import { ItemCard } from "./ItemCard/ItemCard";

export const MenuItems = ({ variety, items }) => {
  console.log("djcbdicwkjn");
  return (
    <div>
      <h2>{variety}</h2>
      <div>
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};
