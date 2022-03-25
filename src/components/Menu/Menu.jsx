import React, { useState, useEffect } from "react";
import { Cart } from "./Cart/Cart";
import s from "./Menu.module.scss";
import { MenuItems } from "./MenuItems/MenuItems";
import { Varieties } from "./Varieties/Varieties";

export const Menu = () => {
  const [menu, setMenu] = useState({
    varieties: [],
    collection: {},
  });

  const createCollectionObject = (data) => {
    const coll = {};
    data.varieties.map((variety) => {
      coll[variety] = data.menu.filter((item) => item.Type === variety);
    });
    return coll;
  };

  useEffect(() => {
    fetch("http://training.panorbitprojects.com/api/Menu")
      .then((response) => response.json())
      .then((result) => {
        setMenu({
          varieties: result.data.varieties,
          collection: createCollectionObject(result.data),
        });
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={s.menuContainer}>
      <div className={s.varieties}>
        {menu && <Varieties varieties={menu.varieties} />}
      </div>
      <div className={s.menuItems}>
        {Object.entries(menu.collection).map(([key,value]) => {
         return <MenuItems key={key} variety={key} items={value} />
        })}
      </div>
      <div className={s.cart}>
        <Cart />
      </div>
    </div>
  );
};
