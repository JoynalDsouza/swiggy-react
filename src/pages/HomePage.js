import React from "react";
import { Carousal } from "../components/Carousal/Carousal";
import { RestaurantList } from "../components/RestaurantList/RestaurantList";

export const HomePage = () => {
  return (
    <>
      <Carousal />
      <RestaurantList />
    </>
  );
};
