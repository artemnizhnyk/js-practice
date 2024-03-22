"use strict";


start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: () => {
        this.count = +prompt('How many movies have you already watched', '');

        while (this.count == null || this.count === '' || isNaN(this.count)) {
            this.count = +prompt('How many movies have you already watched', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Enter one movie's name you watched recently`),
                b = prompt('Rate it, please', '');

            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (this.count < 10) {
            console.log("Watched quite a few films");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("You a classic viewer");
        } else if (this.count >= 30) {
            console.log("You a film buff");
        } else {
            console.log("Error happened");
        }
    },
    showMyDB: () => {
        if (!this.private) {
            console.log(this);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre at number ${i}`);
            if (genre === '' || genre === null) {
                console.log("You entered bad data");
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Favorite genre №${i + 1} is - ${item}`);
        })
    },
    toggleVisibleMyDB: () => {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    }
};


personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();