export async function searchMealFromApi(term) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
  if (response.status === 200) {
    return response.json();
    } else {
    throw new Error(response);
  }
}
