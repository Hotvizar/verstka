$(function () {

    $("#group-search").on("click", function () {
        $(this).addClass("active");
    });

    $(document).on("mouseup", function (e) { // событие клика по веб-документу
        var div = $("#group-search"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("active");
        }
    });

    $('#products-slider').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        appendDots: $("#slider-progress"),
        arrows: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });

    $('#partners-slider').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        appendDots: $("#pslider-progress"),
        arrows: true,
        prevArrow: $("#parrow-prev"),
        nextArrow: $("#parrow-next"),
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ],
    });

    $("#attention").modal('show');

});

const content = document.querySelector('.text-instruct');
scrollnav.init(content, {
    sections: 'h4', 
    easingStyle: "linear",
});