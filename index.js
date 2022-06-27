const main = document.querySelector("#main");


// создаем элемент
const title = document.createElement("h1");
const figure = document.createElement("figure")

// вставляем элемент
title.id = "title";
figure.id = "img-div"

// вставляем текст
title.textContent = "- Michel Legrand -"


//выводим на страницу

main.append(title);
main.append(figure);