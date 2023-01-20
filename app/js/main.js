$(function () {

    //анимация цифр спидометра
    $('.meter .cols').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            easing: 'swing',
            duration: 20000,
            step: function (now) {
                $(this).text(Math.ceil(now).toFixed(0));
            }
        });
    });

    $(window).on('resize', function () {
        closeNav();
    });

});

function openNav() {
    $('body').addClass('modal-open');
    $('#right-menu').addClass("open-menu");
}

function closeNav() {
    $('body').removeClass('modal-open');
    $('#right-menu').removeClass("open-menu");
}