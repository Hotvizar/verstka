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
        slidesToScroll: 1
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
        slidesToScroll: 1
    });

});
