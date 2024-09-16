import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";

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

  const searchRestaurant = () => {
    const searchResName = resDataSearch.filter((str) =>
      str?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
    );
    setResData(searchResName);
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
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
