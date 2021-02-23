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
    ],
    letsCook: function(){
        console.log("I'm hungry! Let's Cook " + this.recipeTitle + "!")
    }
};

objRecipe.letsCook();