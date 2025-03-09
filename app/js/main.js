$(function () {

    $(".slider-col").on("mouseenter mouseleave", function() {
        $(this).toggleClass("big");
        $(".slider-col").not(this).removeClass("big").toggleClass("min");
    });

    $('input[type=tel]').inputmask("+7 999 999-99-99",{ "placeholder": "_" });

});
