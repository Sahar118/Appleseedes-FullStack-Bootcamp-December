const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food1.length; j++) {
        if (food[i] == food1[j]) {
            console.log(food[i]);
        }
        else{false} 
    }
}

