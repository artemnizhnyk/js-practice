function slider() {
    const slides = document.querySelectorAll(`.offer__slide`),
        slider = document.querySelector(`.offer__slider`),
        prevArrow = document.querySelector(`.offer__slider-prev`),
        nextArrow = document.querySelector(`.offer__slider-next`),
        totalCountOfSlides = document.querySelector(`#total`),
        currentSlide = document.querySelector(`#current`),
        slidesWrapper = document.querySelector(`.offer__slider-wrapper`),
        slidesField = document.querySelector(`.offer-slider-inner`),
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

    nextArrow.addEventListener(`click`, () => {
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

    prevArrow.addEventListener(`click`, () => {
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

module.exports = slider;