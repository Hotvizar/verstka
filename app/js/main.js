const headerSlider = new Swiper('#header-slider', {
    speed: 1000,
    spaceBetween: 24,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
});

const casesSlider = new Swiper('#cases-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    speed: 1000,
    spaceBetween: 24,
    /* autoplay: {
        delay: 5000,
    }, */
    navigation: {
        nextEl: '.btn-slider-next',
        prevEl: '.btn-slider-prev',
    },
});

$(function () {


});

