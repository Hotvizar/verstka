$(function () {

    //slick counter
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
            autoplay: true,
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

});