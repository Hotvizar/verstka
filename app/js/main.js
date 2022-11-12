$(function () {

    $('#home-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
    });


    $('#affiche-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 800,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
        responsive: [
            {
                breakpoint: 1780,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1468,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });


    //scroll
    $("body").on('click', '[href*="#"]', function (e) {
        const fixedOffset = 20;
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top - fixedOffset
        }, 1000);
        e.preventDefault();
    });

    //Включение эффекта hover на мобильном при появлении блока на экране
    //https://webgolovolomki.com/poyavlenie-elementov-pri-skrolle/
    //https://snipp.ru/jquery/show-on-scroll


    var blockShow = null;

    function scrollTracking() {
        var target = $('.menu-image');
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = target.offset().top + 400;
        var eh = target.outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (blockShow == null || blockShow == false) {
                target.addClass('hover-block');
            }
            blockShow = true;
        } else {
            if (blockShow == null || blockShow == true) {
                target.removeClass('hover-block');
            }
            blockShow = false;
        }
    }

    $(window).on('scroll', function () {
        if ($(window).innerWidth() < 992) {
            scrollTracking();
        }
    });

    if ($(window).innerWidth() < 992) {
        scrollTracking();
    }

    $(window).on('resize', function () {
        if ($(window).innerWidth() < 992) {
            scrollTracking();
        }
    });


});