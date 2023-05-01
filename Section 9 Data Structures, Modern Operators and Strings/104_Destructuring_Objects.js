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
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
console.log("---------------------------------------------------------");

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});
console.log("---------------------------------------------------------");

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
console.log("---------------------------------------------------------");

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
console.log("---------------------------------------------------------");

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
console.log("---------------------------------------------------------");

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
console.log("---------------------------------------------------------");

// Nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
