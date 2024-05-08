/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
    const result = document.querySelector(`.calculating__result span`);
    let sex, height, weight, age, ratio;

    if (localStorage.getItem(`sex`)) {
        sex = localStorage.getItem(`sex`);
    } else {
        sex = `female`;
        localStorage.setItem(`sex`, sex);
    }

    if (localStorage.getItem(`ratio`)) {
        ratio = localStorage.getItem(`ratio`);
    } else {
        ratio = 1.375;
        localStorage.setItem(`ratio`, ratio);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(e => {
            e.classList.remove(activeClass);
            if (e.getAttribute(`id`) === localStorage.getItem(`sex`)) {
                e.classList.add(activeClass);
            }
            if (e.getAttribute(`data-ratio`) === localStorage.getItem(`ratio`)) {
                e.classList.add(activeClass);
            }
        });
    }

    initLocalSettings(`#gender div`, `calculating__choose-item_active`);
    initLocalSettings(`.calculating__choose_big div`, `calculating__choose-item_active`);

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = `____`;
            return;
        }
        if (sex === `female`) {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInfo(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(e => {
                e.addEventListener(`click`, (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem(`ratio`, ratio);
                    } else {
                        sex = e.target.getAttribute(`id`);
                        localStorage.setItem(`sex`, sex);
                    }

                    elements.forEach(e => e.classList.remove(activeClass));

                    e.target.classList.add(activeClass);
                    calcTotal();
                });
            }
        );
        document.querySelector(selector);
    }

    getStaticInfo(`#gender div`, `calculating__choose-item_active`);
    getStaticInfo(`.calculating__choose_big div`, `calculating__choose-item_active`);

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener(`input`, () => {

            if (input.value.match(/\D/g)) {
                input.style.border = `1px solid red`;
            } else {
                input.style.border = `none`;
            }

            switch (input.getAttribute(`id`)) {
                case `height`:
                    height = +input.value;
                    break;
                case `weight`:
                    weight = +input.value;
                    break;
                case `age`:
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }

    getDynamicInfo(`#height`);
    getDynamicInfo(`#weight`);
    getDynamicInfo(`#age`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: `img/form/spinner.svg`,
        success: `Thank you, We'll call you back soon`,
        failure: `Something goes wrong...`
    };

    forms.forEach(item => {
        bindPostData(item);
    });

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

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(`http://localhost:3000/requests`, json)
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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(`.modal`, modalTimerId);

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(`.modal`);
        }, 4000);
    }

    fetch(`http://localhost:3000/menu`)
        .then(value => value.json())
        .then(value => console.log(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add(`show`);
    modal.classList.remove(`hide`);
    document.body.style.overflow = `hidden`;
    if (modalTimerId) {
        clearTimeout(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add(`hide`);
    modal.classList.remove(`show`);
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener(`click`, () => openModal(modalSelector, modalTimerId));
    });


    modal.addEventListener(`click`, (e) => {
        if (e.target === modal || e.target.getAttribute(`data-close`) === ``) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modal.classList.contains(`show`)) {
            closeModal(modalSelector);
        }
    });
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener(`scroll`, showModalByScroll);
        }
    }

    window.addEventListener(`scroll`, showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        totalCountOfSlides = document.querySelector(totalCounter),
        currentSlide = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        widthForSlider = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    if (slides.length < 10) {
        totalCountOfSlides.textContent = `0${slides.length}`;
        currentSlide.textContent = `0${slideIndex}`;
    } else {
        totalCountOfSlides.textContent = slides.length;
        currentSlide.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + `%`;
    slidesField.style.display = `flex`;
    slidesField.style.transition = `0.5s all`;

    slidesWrapper.style.overflow = `hidden`;

    slides.forEach(slide => {
        slide.style.width = widthForSlider;
    });

    slider.style.position = `relative`;

    const indicators = document.createElement(`ol`),
        dots = [];

    indicators.classList.add(`carousel-indicators`);
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement(`li`);
        dot.setAttribute(`data-slide-to`, i + 1);
        dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`;
        if (i === 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return str.replace(/\D/g, ``);
    }

    next.addEventListener(`click`, () => {
        if (offset === +deleteNotDigits(widthForSlider) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +deleteNotDigits(widthForSlider);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = `.5`);
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener(`click`, () => {
        if (offset === 0) {
            offset = +deleteNotDigits(widthForSlider) * (slides.length - 1);
        } else {
            offset -= +deleteNotDigits(widthForSlider);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = `.5`);
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener(`click`, (e) => {
            const slideTo = e.target.getAttribute(`data-slide-to`);

            slideIndex = slideTo;
            offset = +deleteNotDigits(widthForSlider) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.opacity = `.5`);
            dots[slideIndex - 1].style.opacity = 1;

            if (slides.length < 10) {
                currentSlide.textContent = `0${slideIndex}`;
            } else {
                currentSlide.textContent = slideIndex;
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = `none`;
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = `block`;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener(`click`, (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
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

    setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









window.addEventListener(`DOMContentLoaded`, () => {
    const modalTimerId = setTimeout(()=> (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(`.modal`, modalTimerId), 30000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(`.tabheader__item`, `.tabcontent`, `.tabheader__items`, `tabheader__item_active`);
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(`[data-modal]`, `.modal`, modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(`.timer`,`2024-06-18`);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])(`.form`, modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
        container: `.offer__slider`,
        slide: `.offer__slide`,
        nextArrow:`.offer__slider-next`,
        prevArrow: `.offer__slider-prev`,
        totalCounter: `#total`,
        currentCounter: `#current`,
        wrapper: `.offer__slider-wrapper`,
        field: `.offer-slider-inner`
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map