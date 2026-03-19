import "../App.css";

function FoodTruckCard ({funnyFoodTruck}) {

return (
  <>
  <div className = "foodTruckCardInfo">
  <h2> Name:{funnyFoodTruck.name}</h2>
  <p> Id:{funnyFoodTruck.id}</p>
  <p> Location: {funnyFoodTruck.current_location}</p>
  <p> Daily Special:{funnyFoodTruck.daily_special}</p>
  <p> Slogan:{funnyFoodTruck.slogan}</p>
  <p>Vegan: {funnyFoodTruck.has_vegan_options ? "🌱 Yes" : "No"}</p>
  <p>Price Level:{funnyFoodTruck.price_level}</p>
  <p>rating: {funnyFoodTruck.rating}</p>
  </div> 
    </>
);
}

export default FoodTruckCard;