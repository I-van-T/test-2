const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(priceses) {

  const allPrice = [];
  for (const product of products) {
    console.log(product.price);
    allPrice.push(product.price);
  }

  return allPrice;
  // Change code below this line
// const allValues = [];
// for (const product of products) {
//   allValues.push(product.propName);
  
// }

// return allValues;
  
  
  
  // Change code above this line
}


console.log(getAllPropValues("price"))

