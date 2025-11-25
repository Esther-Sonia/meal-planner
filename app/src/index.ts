type Meal = {
    day: string;
    dish : string;
};

const weeklyMeals: Meal[] = [
    { day: "Monday", dish: "Spaghetti Bolognese" },
    { day: "Tuesday", dish: "Chicken Curry" },
    { day: "Wednesday", dish: "Beef Tacos" },
    { day: "Thursday", dish: "Vegetable Stir Fry" },
    { day: "Friday", dish: "Fish and Chips" },
    { day: "Saturday", dish: "Pizza" },
    { day: "Sunday", dish: "Roast Dinner" },
];

console.log("Your Weekly Meal Plan:\n")

weeklyMeals.forEach(meal => {
    console.log(`${meal.day}: ${meal.dish}`);
});