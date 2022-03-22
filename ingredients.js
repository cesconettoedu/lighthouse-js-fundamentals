const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0
while (i<ingredients.length) {
  console.log(ingredients[i]);
  i++
}


for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}


for (var list = ingredients.length - 1; list >= 0; list--){
  console.log(ingredients[list]);
}

