import React from "react";

function Meals({ meals, handleClick }) {
  if (!meals) {
    return null;
  }

  return meals.map((meal) => (
    <a onClick={() => handleClick(meal)} className="meal" key={meal.idMeal}>
      <img src={meal.strMealThumb} alt="meal.strMeal" />
      <div className="meal-info" data-mealid={meal.idMeal}>
        <h3>{meal.strMeal}</h3>
      </div>
    </a>
  ));
}

export default Meals;
