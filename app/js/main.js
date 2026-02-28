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
        nextEl: '#cases-slide-next',
        prevEl: '#cases-slide-prev',
    },
});

const insSlider = new Swiper('#ins-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    speed: 1000,
    spaceBetween: 24,
    /* autoplay: {
        delay: 5000,
    }, */
    navigation: {
        nextEl: '#ins-slide-next',
        prevEl: '#ins-slide-prev',
    },
});

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

/* $(function () {


}); */

