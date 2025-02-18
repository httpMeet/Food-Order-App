import CDN_URL from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData) return null; 

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwoMessage,
    costForTwo,
  } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>🕒 {sla?.deliveryTime ?? "N/A"} min</h4>
      <h4>{costForTwoMessage}</h4>
    </div>
  );
};

export default RestaurantCard;
