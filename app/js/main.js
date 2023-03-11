$(function () {

    //slick counter home slider
    var $slider = $('#home-slider');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider-counter');

        var updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;

            //0 before
            if (currentSlide < 10) {
                currentSlide = "0" + currentSlide;
            }
            if (slidesCount < 10) {
                slidesCount = "0" + slidesCount;
            }
            $(sliderCounter).html('<span>' + currentSlide + '</span>/' + slidesCount);
        };

        $slider.on('init', function (event, slick) {
            $('.slide-count').prepend(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);

            //next/prev thumb
            get_prev_slick_img();
            get_next_slick_img();
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            pauseOnDotsHover: true,
            arrows: true,
            prevArrow: $('#prev-slide'),
            nextArrow: $('#next-slide'),
        });


        //Для кнопок слайдера

        setTimeout(function () {
            get_prev_slick_img();
            get_next_slick_img();
        }, 500);

        $('.footer-home-slider').on('click', '#prev-slide', function () {
            get_prev_slick_img();
        });
        $('.footer-home-slider').on('click', '#next-slide', function () {
            get_next_slick_img();
        });

        $slider.on('swipe', function (event, slick, direction) {
            if (direction == 'left') {
                get_prev_slick_img();
            } else {
                get_next_slick_img();
            }
        });
        /* $('.slick-dots').on('click', 'li button', function () {
            var li_no = $(this).parent('li').index();
            if ($(this).parent('li').index() > li_no) {
                get_prev_slick_img()
            } else {
                get_next_slick_img()
            }
        }); */

        function get_prev_slick_img() {
            // For prev img
            var prevSlickImg = $('.slick-current').prev('.slick-slide').find('img').attr('src');
            $('#prev-slide img').attr('src', prevSlickImg);

            // For next img
            var prevNextSlickImg = $('.slick-current').next('.slick-slide').find('img').attr('src');
            $('#next-slide img').attr('src', prevNextSlickImg);

        }

        function get_next_slick_img() {
            // For next img
            var nextSlickImg = $('.slick-current').next('.slick-slide').find('img').attr('src');
            $('#next-slide img').attr('src', nextSlickImg);

            // For prev img
            var nextPrevSlickImg = $('.slick-current').prev('.slick-slide').find('img').attr('src');
            $('#prev-slide img').attr('src', nextPrevSlickImg);
        }

    }


    //reviews
    $('#reviews-slider').slick({
        centerMode: true,
        centerPadding: '380px',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false,
        pauseOnDotsHover: true,
        arrows: true,
        prevArrow: $('#review-prev'),
        nextArrow: $('#review-next'),
        responsive: [
            {
                breakpoint: 1740,
                settings: {
                    centerPadding: '250px',
                }
            },
            {
                breakpoint: 1480,
                settings: {
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '320px',
                }
            },
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '250px',
                }
            },
            {
                breakpoint: 979,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ],
    });

    //product thumbs slider

    $('#productBigSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#productSliderNav'
    });
    $('#productSliderNav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#productBigSlider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
    });

    ////////

    //crossSellSlider
    $('#crossSellSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" id="cross-prev"><svg class="icon chevron-left"><use xlink:href="/image/icons/symbol/sprite.svg#arrow-left" /></svg></button>',
        nextArrow: '<button type="button" id="cross-next"><svg class="icon chevron-right"><use xlink:href="/image/icons/symbol/sprite.svg#arrow-right" /></svg></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });

    //Слайдер больших фото в корзине
    $('#cartProductBigSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });

    //Навигация по клику на фото продукта
    $(".product-in-cart-item .prod-img img").on("mouseenter mouseleave", function(e){
        e.preventDefault();
        var slideIndex = $(this).data('index');
        $( '#cartProductBigSlider' ).slick("slickGoTo", parseInt(slideIndex) );
    });
    /////

    $('.modal').on('show.bs.modal', function (event) {
        closeNav();
    });

    function cartClick() {
        if ($(window).innerWidth() < 625) {
            $('.link-cart').on('click', function (e) {
                $(this).toggleClass('block');
            });
        }
    }

    //Удаление стиля блока при клике вне его
    $(document).on('mouseup', function (e) {
        let s = $('.link-cart.block');
        if (!s.is(e.target) && s.has(e.target).length === 0) {

            s.removeClass('block');
        }
    });

    $(window).on('resize', function () {
        cartClick();
        closeNav();
    });

    cartClick();

    //plus/minus quantity
    $('.btn-number').on('click', function (e) {
        e.preventDefault();

        var fieldName = $(this).attr('data-field');
        var type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').on('focusin', function () {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').on('change', function () {

        var minValue = parseInt($(this).attr('min'));
        var maxValue = parseInt($(this).attr('max'));
        var valueCurrent = parseInt($(this).val());

        var name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
        } else {
            alert('Извините, достигнуто минимальное значение');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
        } else {
            alert('Извините, достигнуто максимальное значение');
            $(this).val($(this).data('oldValue'));
        }


    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    //===================

    //динамический размер скрытого блока заголовка

    function floatHide() {
        var h1 = $(".product-page h1").outerHeight() - 67;

        $("#float-hide").css('margin-top', "-" + h1 + "px");
    }

    $(window).on('load', function () {
        floatHide()
    });

    $(window).on('resize', function () {
        floatHide();
    });


});



function openNav() {
    $('body').addClass('modal-open');
    $('#slide-menu').addClass("open-menu");
}

function closeNav() {
    $('body').removeClass('modal-open');
    $('#slide-menu').removeClass("open-menu");
}