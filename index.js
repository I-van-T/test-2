function includes(array, value) {
  // Change code below this line
  for (let arr of array) {
    if (arr === value) {
      return true;
    }

    if (arr !== value) {
      return false;
    }
  }
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 17));
console.log(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
