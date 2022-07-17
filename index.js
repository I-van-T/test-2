// Change code below this line
function addOverNum(...args) {
  let total = 0;
  const start = args[0];

  for (const arg of args) {
    if (start < arg) {
      total += arg;
    }
  }
  console.log(total);
  console.log(start);

  return total;

  // Change code above this line
}
addOverNum(10, 12, 4, 11, 48, 10, 8);
