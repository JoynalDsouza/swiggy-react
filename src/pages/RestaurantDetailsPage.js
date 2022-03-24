import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { RestaurantDetails } from "../components/RestaurantDetails/RestaurantDetails";

export const RestaurantDetailsPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const params = useParams();

  const fetchRestaurantDetails = async (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://training.panorbitprojects.com/api/RestaurantDetails/?id=${id}`,
      requestOptions
    );

    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data;
  };

  useEffect(() => {
    fetchRestaurantDetails(params.id).then((result) => {
      setRestaurantData(result);
    });
  }, [params.id]);
  return (
    <div>
      {restaurantData && <RestaurantDetails details={restaurantData} />}
    </div>
  );
};
