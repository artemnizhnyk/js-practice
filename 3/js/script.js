"use strict";

const numberOfFilms = +prompt("How many films have you already watched?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const movie = prompt("Write one movie you watched recently", "any"),
     rating = prompt("Write rating of this movie", "0.0");

personalMovieDB.movies[movie] = rating;

console.log(personalMovieDB);