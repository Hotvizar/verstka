"use strict"

const headerSlider = new Swiper('#header-slider', {
    speed: 1000,
    spaceBetween: 24,
    pagination: {
        el: '.swiper-pagination',
    },
    /* autoplay: {
        delay: 5000,
    }, */
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

//получаем ширину container
function updateContainerWidth() {
    const container = document.querySelector('.container');
    const width = container.offsetWidth;

    document.documentElement.style.setProperty(
        '--container-width',
        width + 'px'
    );
}

updateContainerWidth();
window.addEventListener('resize', updateContainerWidth);

const techSlider = new Swiper('#technology-slider', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 24,
    //freeMode: true,
    //slidesOffsetAfter: -49,
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
        // when window width is >= 320px
        1980: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        655: {
            slidesPerView: 2,
        },
    },

    /* autoplay: {
        delay: 5000,
    }, */
    navigation: {
        nextEl: '#tech-slide-next',
        prevEl: '#tech-slide-prev',
    },
    pagination: {
        el: "#tech-slide-pagination",
        type: "progressbar",
    },
});

/* techSlider.on('slideChangeTransitionEnd', () => {
  techSlider.update();
}); */

if (typeof gsap !== 'undefined') {
    //paralax
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        ScrollSmoother.create({
            wrapper: '.gswrap',
            content: '.gs-content',
        });

        const sections = gsap.utils.toArray("section");

        sections.forEach((section, i) => {
            if (i === sections.length - 1) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "40% top",
                    end: "+=100%",
                    //markers: true,
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                }
            });

            // Первая половина — лёгкое уменьшение
            tl.to(section, {
                scale: 1,
                ease: "none",
                duration: 0.5
            });

            // Вторая половина — исчезновение + lift вверх
            tl.to(section, {
                y: -200,            // ← lift вверх (можно регулировать)
                scale: 0.98,
                opacity: 0,
                filter: "blur(2px)",
                ease: "none",
                duration: 0.5
            });

            ScrollTrigger.refresh();
        });
    });

}

//cases classes toggle
const items = () => document.querySelectorAll('.cases-list .case-item');

document.addEventListener('click', (e) => {
    const item = e.target.closest('.cases-list .case-item');

    if (item) {
        items().forEach(el => {
            el.classList.add('opacity');
            el.classList.remove('more-active');
        });

        item.classList.remove('opacity');
        item.classList.add('more-active');
        return;
    }

    items().forEach(el => {
        el.classList.remove('opacity', 'more-active');
    });
});

