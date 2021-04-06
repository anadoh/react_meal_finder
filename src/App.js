import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultHeading from "./components/ResultHeading";
import Meals from "./components/Meals";
import SingleMeal from "./components/SingleMeal";
import { getRandomMeal, searchMealFromApi } from "./helpers/helpers";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState();

  function handleSearch(value) {
    setSearch(value);
    searchMealFromApi(value)
      .then((data) => {
        data && data.meals && setMeals(data.meals);
      })
      .catch((err) => {
        console.log("api-error " + err);
      });
  }

  function randomMeal() {
    getRandomMeal()
      .then((data) => {
        console.log("data", data);
        data && data.meals[0] && setSelectedMeal(data.meals[0]);
        setMeals([]);
      })
      .catch((err) => {
        console.log("api-error " + err);
      });
  }

  const handleClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <>
      <div className="container">
        <Header />
        <SearchBar handleSearch={handleSearch} randomMeal={randomMeal} />
        <ResultHeading />
        <div id="meals" className="meals">
          <Meals meals={meals} handleClick={handleClick} />
        </div>
        <SingleMeal meal={selectedMeal} />
      </div>
    </>
  );
}

export default App;
