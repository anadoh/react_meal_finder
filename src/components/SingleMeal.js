import React from "react";

function SingleMeal({ meal }) {
  if (!meal) {return null;}

  const ingredients = [];
  if (meal) {
 
    
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (meal[ingredientKey]) {
      ingredients.push(`${meal[ingredientKey]} - ${meal[measureKey]}`);
    } else {
      break;
    
  }}}



  return (
    <div>
        <div className='single-meal'>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="{meal.strMeal}" />
        <div className="single-meal-info">
          {meal.strCategory ? <p>{meal.strCategory}</p> : ""}
          {meal.strArea ? <p>{meal.strArea}</p> : ""}
        </div>
        <div className="main">
          <p>{meal.strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>{ingredients.map((ing) => <li key={ing}>{ing}</li>)}</ul>
        </div>
      </div>
    </div>
    
  
  )
}

export default SingleMeal;
