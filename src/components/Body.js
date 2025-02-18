import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    setListOfRestaurants(
      resList?.data?.cards?.map((card) => card?.card?.card?.info) || []
    );
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.01782581667957&lng=72.55748748779297&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await response.json();

      const restaurants =
        json?.data?.cards?.map((card) => card?.card?.card?.info) || [];

      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <h2>Restaurants</h2>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.id} resData={restaurant} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Body;
