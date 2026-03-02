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
    /* breakpoints: {
        575: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
    } */
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

/* window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
}); */


//paralax
/* gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.gswrap',
    content: '.gs-content'
});

const sections = gsap.utils.toArray("section"); */

/* sections.forEach((section, i) => {
  if (i === sections.length - 1) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false,
    }
  });

  // 🔹 Первая половина — лёгкое уменьшение
  tl.to(section, {
    scale: 1,
    ease: "none",
    duration: 0.5
  });

  // 🔹 Вторая половина — исчезновение + lift вверх
  tl.to(section, {
    y: -200,            // ← lift вверх (можно регулировать)
    scale: 0.98,
    opacity: 0,
    filter: "blur(1px)",
    ease: "none",
    duration: 0.5
  });
}); */


/* $(function () {


}); */

