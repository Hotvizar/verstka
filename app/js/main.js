$(function () {

    //scroll
    $("body").on('click', '[href*="#"]', function (e) {
        const fixedOffset = 0;
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top - fixedOffset
        }, 1000);
        e.preventDefault();
    });

    $('.modal').on('show.bs.modal', function (event) {
		closeNav();
	});

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