import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [resDataSearch, setResDataSearch] = useState([]);

  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(resList);
    setResDataSearch(resList);
  };

  const filterRestaurant = () => {
    let topRest = resDataSearch.filter((res) => res.info.avgRating >= 4.5);
    setResData(topRest);
  };

  const resetFilter = () => {
    setSearchRes("");
    setResData(resDataSearch);
  };

  const searchRestaurantVal = (str) => {
    var cusines = str?.info?.cuisines.map((item, index) => item.toLowerCase());
    return (
      str?.info?.name.toLowerCase().includes(searchRes.toLowerCase()) ||
      cusines.includes(searchRes.toLowerCase())
    );
  };

  const searchRestaurant = () => {
    const searchResName = resDataSearch.filter(searchRestaurantVal);
    searchResName.length > 0
      ? setResData(searchResName)
      : console.log("No Restuarant Found");
  };

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restuarant"
            value={searchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          />
          <button
            onClick={() => {
              searchRestaurant();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterRestaurant();
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn reset-filter-btn"
          onClick={() => {
            resetFilter();
          }}
        >
          Reset Filter
        </button>

        {/* <Search /> */}
      </div>
      <div className="res-container">
        {resData.map((item, index) => (
          <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
