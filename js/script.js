/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  fun = document.querySelector(".promo__genre"),
  bgImg = document.querySelector(".promo__bg"),
  items = document.querySelectorAll(".promo__interactive-item");

console.dir(adv);
console.dir(fun);
console.dir(bgImg);
console.dir(items);

adv.forEach((item) => item.remove());

const newGenre = "драма";
fun.innerHTML = newGenre;

bgImg.style.backgroundImage = 'url("../img/bg.jpg")';

const sortMovies = movieDB.movies.sort();
console.log(sortMovies);

for (let i = 0; i < items.length; i++) {
  items[i].innerHTML = `${i + 1}. ${sortMovies[i]}`;
}
