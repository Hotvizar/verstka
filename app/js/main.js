$(function () {

    $(".slider-col").on("mouseenter mouseleave", function() {
        $(this).toggleClass("big");
        $(".slider-col").not(this).removeClass("big").toggleClass("min");
    });

});
