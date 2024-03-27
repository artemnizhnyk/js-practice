'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector(`.promo__adv`),
    poster = document.querySelector(`.promo__bg`),
    genre = poster.querySelector(`.promo__genre`),
    movieList = document.querySelector(`.promo__interactive-list`);

adv.remove();

genre.textContent = `ДРАМА`;

poster.style.backgroundImage = `url("img/bg.jpg")`;

movieList.innerHTML = ``;
movieDB.movies.sort();
movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${movie}
                            <div class="delete"></div>
                        </li>
    `;
})