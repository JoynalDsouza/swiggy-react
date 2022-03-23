import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import { RestuarantFilter } from "./RestaurantFilter/RestuarantFilter";
import "./RestaurantList.styles.scss";

export const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const getRestaurantList = async (page) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}`,
      requestOptions
    );

    const responseJson = await response.json();
    // console.log(responseJson.data);

    return responseJson.data;
  };

  useEffect(() => {
    getRestaurantList(page).then((result) => {
      setRestaurantList((prevState) => [...prevState, ...result.restaurants]);
    });
  }, [page]);

  return (
    <>
      <RestuarantFilter />
      <div className="restaurantList-container">
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
      </div>
    </>
  );
};
