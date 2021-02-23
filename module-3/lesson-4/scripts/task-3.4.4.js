objRecipe = { //Create object recipe
    recipeTitle: 'Golden Brown Toast',
    servings: 1,
    ingredients: [ //create ingredients array
        'Toaster',
        'Bread',
        'Butter',
    ],
    directions:[ //create instructions as an array
        '1. Place a slice of bread into the toaster',
        '2. Turn on the toaster at the medium level',
        '3. Check that the toast is golden brown and not burned',
        '4. Butter the toast',
        '5. Eat the toast',
    ]
};

console.log(objRecipe.recipeTitle); //output recipe title
console.log(objRecipe.servings); //output servings

for(counter = 0; counter < objRecipe.ingredients.length; counter++){ //output array for length of ingredients array
    let ingredient = objRecipe.ingredients[counter]; //set ingredients variable to object recipe ingredients array
    console.log(ingredient); //output ingredient variable
}

for(counter = 0; counter < objRecipe.directions.length; counter++){
    let direction = objRecipe.directions[counter];
    console.log(direction);
}