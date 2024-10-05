import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    setRestaurantData(json.data);
  };

  return restaurantData;
};

export default useRestaurantMenu;
