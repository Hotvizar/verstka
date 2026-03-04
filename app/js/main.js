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

if (typeof gsap !== 'undefined') {
    //paralax
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        wrapper: '.gswrap',
        content: '.gs-content',
    });

    const sections = gsap.utils.toArray("section");

    sections.forEach((section, i) => {
        if (i === sections.length - 1) return;

        //    console.log(window.innerHeight - section.offsetHeight);

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
}



//ВТОРОЙ ВАРИАНТ
/* gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.gswrap',
    content: '.gs-content'
});

const sections = gsap.utils.toArray("section");

sections.forEach((section, i) => {
  if (i === sections.length - 1) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=100%",
      scrub: 1,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1
    }
  });

  const lift = window.innerHeight * 0.25; // 25% высоты экрана

  // 🔹 0–50% — лёгкое уменьшение
  tl.to(section, {
    scale: 0.985,
    ease: "none",
    duration: 0.5
  });

  // 🔹 50–100% — уход вверх + fade
  tl.to(section, {
    y: -lift,
    scale: 0.96,
    opacity: 0,
    ease: "none",
    duration: 0.5
  });
}); */


/* $(function () {


}); */

