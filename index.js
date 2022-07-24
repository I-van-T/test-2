function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach(function (number, index) {
    if (secondArray.includes(firstArray[index])) {
      commonElements.push(firstArray[index]);
    }
  });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
