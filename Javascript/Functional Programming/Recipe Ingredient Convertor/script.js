const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
}

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
}

const gramsResult = convertQuantity("cup")("gram")(2);
console.log(gramsResult);

const adjustForServings = (baseQuantity) => (newServings) =>
  baseQuantity * newServings;

const servingsResult = adjustForServings(4)(6);
console.log(servingsResult);

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};

const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");

const units = ["cup", "gram", "ounce", "teaspoon"];

const updateResultsList = () => {
  // Clear previous results
  resultList.innerHTML = "";

  const ingredient = ingredientName.value;
  const quantity = parseFloat(ingredientQuantity.value);
  const currentUnit = unitToConvert.value;
  const servings = parseFloat(numberOfServings.value);

  // Iterate over all units
  units.forEach((unit) => {
    // Skip the current unit
    if (unit !== currentUnit) {
      // Convert and adjust for servings
      const convertedQuantity = processIngredient(quantity, currentUnit, unit, servings);
      
      // Create list item
      const li = document.createElement("li");
      li.textContent = `${ingredient}: ${convertedQuantity} ${unit}`;
      
      // Append to result list
      resultList.appendChild(li);
    }
  });
};


recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateResultsList();
});