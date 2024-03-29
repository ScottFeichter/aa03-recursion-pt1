/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

// function iceCreamShop(flavors, favorite) {
//   if (flavors[0] === favorite) {
//     return true;
//   }

//   if (flavors.length === 0) {
//     return false;
//   }

//   flavors.shift();
//   return iceCreamShop(flavors, favorite);
// }

let iceCreamShop = (flavors, favorite) => {
  if (flavors.length === 0) {
    return false;
  }

  let flavor = flavors.pop();
  // console.log(flavor)
  if (flavor === favorite) {
    return true;
  } else {
    return iceCreamShop(flavors, favorite);
  }
};

console.log(iceCreamShop(["vanilla", "strawberry"], "blue moon")); // false
console.log(
  iceCreamShop(
    ["pistachio", "green tea", "chocolate", "mint chip"],
    "green tea"
  )
); // true
console.log(
  iceCreamShop(
    [
      "cookies n cream",
      "blue moon",
      "superman",
      "honey lavender",
      "sea salt caramel",
    ],
    "pistachio"
  )
); // false
console.log(iceCreamShop(["moose tracks"], "moose tracks")); // true
console.logg(iceCreamShop([], "honey lavender")); // false
console.log(iceCreamShop(["vanilla", "strawberry"], "blue moon")); // false
console.log(
  iceCreamShop(
    ["pistachio", "green tea", "chocolate", "mint chip"],
    "green tea"
  )
); // true
console.log(
  iceCreamShop(
    [
      "cookies n cream",
      "blue moon",
      "superman",
      "honey lavender",
      "sea salt caramel",
    ],
    "pistachio"
  )
); // false
console.log(iceCreamShop(["moose tracks"], "moose tracks")); // true
console.log(iceCreamShop([], "honey lavender")); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
