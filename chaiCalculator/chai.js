
function calculatorChaiIngredients(numberOfCups) {
    let ingredients = {
    water: 200,
    milk: 50,
    teaLeaves: 1,
    sugar: 2
}  
    const ingredientsAmount = {
        waterAmount: `Water: ${ingredients["water"] * numberOfCups}ml`,
        milkAmount: `Milk: ${ingredients["milk"] * numberOfCups}ml`,
        teaLeavesAmount: `Tea Leaves (Majani): ${ingredients["teaLeaves"] * numberOfCups}tbsp`,
        sugarAmount: `Sugar (Sukari): ${ingredients["sugar"] * numberOfCups}tsp`,
      }

    let msg = 
    `
    To make ${numberOfCups} cup(s) of superb Kenyan Chai, assemble the following:

    ${ingredientsAmount.waterAmount}
    ${ingredientsAmount.milkAmount}
    ${ingredientsAmount.teaLeavesAmount}
    ${ingredientsAmount.sugarAmount}

    Chai Tamu!
    `;

    return msg;
}

console.log(calculatorChaiIngredients(2))

function promptMsg(){
    let cupsofTea = prompt("Hello, there. Chai Master! How many cups of Chai would you like to chef today?");
    let numberOfCups = parseInt(cupsofTea);

    if (numberOfCups > 0) {
        return calculatorChaiIngredients(numberOfCups);
    } else {
        return "Please enter a valid number of cups."
    }
}




