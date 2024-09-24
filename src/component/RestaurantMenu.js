import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    setRestaurantData(json.data);
  };

  if (restaurantData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu-section">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h4>Average Rating : {avgRating}</h4>
      <h1>Our Menu</h1>
      <div className="menu-container">
        {itemCards.map((item, index) => (
          <div className="menu-card" key={item.card.info.id}>
            <img
              alt="Item Photo"
              src={CDN_URL + item.card.info.imageId}
              className="item-photo"
            />
            <h2 className="item-name">{item.card.info.name}</h2>
            <p className="item-description">
              A savory dish that is sure to satisfy your taste buds.
            </p>
            <p className="item-price">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
