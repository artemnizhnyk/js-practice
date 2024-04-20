"use strict";

window.addEventListener(`DOMContentLoaded`, () => {

    //tabs
    const tabs = document.querySelectorAll(`.tabheader__item`),
        tabsContent = document.querySelectorAll(`.tabcontent`),
        tabsParent = document.querySelector(`.tabheader__items`);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = `none`;
        });
        tabs.forEach(item => {
            item.classList.remove(`tabheader__item_active`);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = `block`;
        tabs[i].classList.add(`tabheader__item_active`);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener(`click`, (event) => {
        const target = event.target;

        if (target && target.classList.contains(`tabheader__item`)) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //timer
    const deadline = `2024-04-21`;

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const total = Date.parse(endTime) - Date.parse(new Date());

        if (total <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(total / (1000 * 60 * 60 * 24));
            hours = Math.floor((total / (1000 * 60 * 60) % 24));
            minutes = Math.floor((total / (1000 * 60) % 60));
            seconds = Math.floor((total / 1000) % 60);
        }
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector(`#days`),
            hours = timer.querySelector(`#hours`),
            minutes = timer.querySelector(`#minutes`),
            seconds = timer.querySelector(`#seconds`),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(`.timer`, deadline);
});