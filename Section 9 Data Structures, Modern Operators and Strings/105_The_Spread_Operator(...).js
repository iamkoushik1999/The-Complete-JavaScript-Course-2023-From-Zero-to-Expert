const restaurant = {
  name: "Classico Italiano",
  location: "109/7 Bankim sarani road,New Alipur,Kolkata",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}  will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};

// ---------------------------------------------------------------------------------------------------------------------------------------------

const arr = [7, 8, 9];
// Adding elements in new array (bad way)
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// ---------------------------------------------------------------------------------

// Adding elements in new array (not good way)
// const badarray = [1, 2, arr];
// console.log(badarray);
// ---------------------------------------------------------------------------------

// Adding elements in new array (Good way)
const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// ---------------------------------------------------------------------------------

// Adding Menu item in Main Menu (Good way)
const newMenu = [...restaurant.mainMenu, "Guocci"];
// console.log(newMenu);
// ---------------------------------------------------------------------------------

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// ---------------------------------------------------------------------------------

// Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// ---------------------------------------------------------------------------------

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "Koushik";
const letters = [...str, "", "S"];
// console.log(letters);
// console.log(...str);
// ---------------------------------------------------------------------------------

const ingredients = ["a", "b", "c"];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// ---------------------------------------------------------------------------------

// Objects
const newResturant = {
  foundIn: 1999,
  founder: "Guiseppe",
  ...restaurant,
};
// console.log(newResturant);
// ---------------------------------------------------------------------------------
const restaurantCopy = {
  ...restaurant,
};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
