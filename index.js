const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const newArray = [];
  const keys = Object.keys(products);
  const values = Object.values(products);
  for (const key of keys) {
    if (propName === key) {
      newArray.push(products.values);

      return newArray;
    }
    console.log(newArray);
  }

  // Change code above this line
}
