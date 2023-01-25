import { useEffect, useState } from "react";
import { RestraurantList } from "../../constant";
import RestraurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//  body

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants , setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
const [searchText, setsearchText] = useState("");
    //  console.log(restaurants)
  useEffect(() => {
    getRestaurants();
  }, []);
  // api fetch  

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json)
  }
    // not render component early 
   if (!allRestaurants) return null;
   

  return allRestaurants?.length === 0 ? <Shimmer/> : (
    <>
      <div className="search-Container">
        <input
          type="text"
          className="search-input"
          place-holder="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilterRestaurants(data);
          }}
        >
          search
        </button>
      </div>

      {/* restrorantList */}

      <div className="restrorant-list">
      {/* if (filteredRestaurants?.length === 0) return <h1>No restaurants found </h1> */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link 
            to ={"restaurant/" +restaurant.data.id}
            key={restaurant.data.id}
            >
           <RestraurantCard {...restaurant.data}  />
           </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
