import { Link, Routes, Route } from "react-router-dom";
import Form from "./pages/Form.jsx";
import "./App.css";
import FoodTruckCard from "./pages/FoodTruckCard.jsx";
import { useState, useEffect } from "react";

function App() {
  const [allFoodTrucks, setAllFoodTrucks] = useState([]);

  const getAllFoodTrucks = async () => {
    try {
      const response = await fetch('/api/get-all-food-trucks');
      const data = await response.json();
      setAllFoodTrucks(data);
    } catch (error) {
      console.error('error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllFoodTrucks();
  }, []);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Food Trucks App 🚚</Link>
          <Link to="/form">Add Food Truck</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>

        {/* Get total count for number of cards */}
        <h1>Total Food Trucks: {allFoodTrucks.length}</h1>

        <div className="card-container">
          {allFoodTrucks.map((funnyFoodTruck) => (
            <FoodTruckCard 
              funnyFoodTruck={funnyFoodTruck} 
              key={funnyFoodTruck.id} 
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;