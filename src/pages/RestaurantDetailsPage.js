import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Menu } from "../components/Menu/Menu";
import { Breadcrumb } from "../components/RestaurantDetails/Breadcrumb/Breadcrumb";
import { Summary } from "../components/RestaurantDetails/Summary/Summary";

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
    return responseJson.data;
  };

  useEffect(() => {
    fetchRestaurantDetails(params.id).then((result) => {
      setRestaurantData(result);
    });
  }, [params.id]);
  return (
    <>
      <div>
        {restaurantData && (
          <>
            <Breadcrumb name={restaurantData.name} />
            <Summary details={restaurantData} />
          </>
        )}
      </div>
      <Menu></Menu>
    </>
  );
};
