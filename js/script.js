/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  let changeCase = (arr) => {
    return arr.map((item) => item.toLowerCase());
  };

  movieDB.movies = [...changeCase(movieDB.movies)];

  const adv = document.querySelectorAll(".promo__adv img"),
    fun = document.querySelector(".promo__genre"),
    bgImg = document.querySelector(".promo__bg"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    inputForm = addForm.querySelector(".adding__input"),
    checkForm = addForm.querySelector('[type="checkbox"]');

  const deleteBlock = (item) => item.forEach((item) => item.remove());

  const changeBlock = () => {
    fun.innerHTML = "драма";
    bgImg.style.backgroundImage = 'url("./img/bg.jpg")';
  };

  const arrSort = (arr) => {
    arr.sort();
  };

  const createBlock = (arr, parent) => {
    if (arr.length) {
      parent.innerHTML = "";
      arrSort(arr);
      arr.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
          <div class="delete"></div>
        </li>
      `;
      });

      document.querySelectorAll(".delete").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
          movieDB.movies.splice(idx, 1);
          createBlock(arr, parent);
        });
      });
    } else {
      parent.innerHTML = "<h4>Список пуст</h4>";
    }
  };

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = inputForm.value.toLowerCase();
    const favorite = checkForm.checked;

    if (value) {
      if (value.length > 21) {
        value = `${value.slice(0, 21)}...`;
      }
      movieDB.movies.push(value);

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      createBlock(movieDB.movies, movieList);
    }
    // inputForm.value = ""; тоже самое ниже
    e.target.reset();
  });

  deleteBlock(adv);
  changeBlock();
  createBlock(movieDB.movies, movieList);
});
