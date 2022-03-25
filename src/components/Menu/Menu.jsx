import React, { useState, useEffect } from "react";
import { Cart } from "./Cart/Cart";
import s from "./Menu.module.scss";
import { Varieties } from "./Varieties/Varieties";

export const Menu = () => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    fetch("http://training.panorbitprojects.com/api/Menu")
      .then((response) => response.json())
      .then((result) => {
        setMenu(result.data);
  console.log(result.data);

      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={s.menuContainer}>
      <div className={s.varieties}>
        {menu && <Varieties varieties={menu.varieties} />}
      </div>
      <div className={s.menuItems}>Menu Items</div>
      <div className={s.cart}>
        <Cart />
      </div>
    </div>
  );
};
