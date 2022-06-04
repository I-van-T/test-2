for (let i = 0; i <= 7; i += 1) {
  console.log(i);

  if (i === 6) {
    console.log("Нашли число 6, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");