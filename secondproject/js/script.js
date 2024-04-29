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
    const deadline = `2024-06-18`;

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

    //modal
    const modalTrigger = document.querySelectorAll(`[data-modal]`),
        modal = document.querySelector(`.modal`);

    function openModal() {
        modal.classList.add(`show`);
        modal.classList.remove(`hide`);
        document.body.style.overflow = `hidden`;
        clearTimeout(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener(`click`, openModal);
    });

    function closeModal() {
        modal.classList.add(`hide`);
        modal.classList.remove(`show`);
        document.body.style.overflow = "";
    }

    modal.addEventListener(`click`, (e) => {
        if (e.target === modal || e.target.getAttribute(`data-close`) === ``) {
            closeModal();
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modal.classList.contains(`show`)) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener(`scroll`, showModalByScroll);
        }
    }

    window.addEventListener(`scroll`, showModalByScroll);

//menu items
    class MenuItem {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 35;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = +this.price * this.transfer;
        }

        render() {
            const element = document.createElement(`div`);
            if (this.classes.length === 0) {
                this.element = `menu_item`;
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        `;
            this.parent.append(element);
        }
    }

    // const getResource = async (url) => {
    //     const res = await fetch(url);
    //
    //     if (!res.ok) {
    //         throw new Error(`Something is wrong, couldn't fetch ${url}, status: ${res.status}`);
    //     }
    //     return await res.json();
    // };

    // getResource(`http://localhost:3000/menu`)
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuItem(
    //                 img,
    //                 altimg,
    //                 title,
    //                 descr,
    //                 price,
    //                 `.menu .container`,
    //                 `menu__item`
    //             )
    //                 .render();
    //         });
    //     });

    axios.get(`http://localhost:3000/menu`)
        .then(res => res.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuItem(
                img,
                altimg,
                title,
                descr,
                price,
                `.menu .container`,
                `menu__item`
            ).render();
        }
        ));

    // getResource(`http://localhost:3000/menu`)
    //     .then(data => createCards(data));
    //
    // function createCards(data) {
    //     data.forEach(({img, altimg, title, descr, price})=>{
    //         const element = document.createElement(`div`);
    //
    //         element.classList.add(`menu__item`);
    //
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //                 <h3 class="menu__item-subtitle">${title}</h3>
    //                 <div class="menu__item-descr">${descr}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //                 </div>
    //         `;
    //         document.querySelector(`.menu .container`).append(element);
    //     });
    // }

    //forms
    const forms = document.querySelectorAll(`form`);
    const message = {
        loading: `img/form/spinner.svg`,
        success: `Thank you, We'll call you back soon`,
        failure: `Something goes wrong...`
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: `POST`,
            headers: {
                "Content-type": `application/json`
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener(`submit`, (e) => {
            e.preventDefault();

            const statusMessage = document.createElement(`img`);
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto
            `;
            form.insertAdjacentElement(`afterend`, statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData(`http://localhost:3000/requests`, json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(`.modal__dialog`);

        prevModalDialog.classList.add(`hide`);
        openModal();

        const thanksModal = document.createElement(`div`);
        thanksModal.classList.add(`modal__dialog`);
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
</div>
        `;

        document.querySelector(`.modal`).append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add(`show`);
            prevModalDialog.classList.remove(`hide`);
            closeModal();
        }, 4000);
    }

    fetch(`http://localhost:3000/menu`)
        .then(value => value.json())
        .then(value => console.log(value));
});