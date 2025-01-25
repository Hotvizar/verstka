$(function () {

    $(".header .menu-item-has-children > a").on("click", function(event) {
        event.preventDefault();
        var el = $(this),
        sm = el.next(".submenu");
        $(".header .submenu").not(sm).removeClass("open");
        sm.toggleClass("open");
    });

    //fixed menu
    var menu = $(".header"),
        admbar = $(".admin-bar .header");
	
	$(window).on('scroll', function() {
		var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (admbar && scrollTop > 1) {
            admbar.addClass("admbar");
        } else {
            admbar.removeClass("admbar");
        }

		if (scrollTop > 200) {
			menu.addClass("sm-header");
		} else {
			menu.removeClass("sm-header");
		}
		
	});

    $('#courses-slider').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        nextArrow: false,
        prevArrow: '<button type="button" class="slick-prev btn btn-link"><svg class="arrow-next"><use xlink:href="image/icons/symbol/sprite.svg#arrow-next" /></svg></button>',
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
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

});
 
/* $(document).mouseup(function(e){ // событие клика по веб-документу
    var div = $(".header .submenu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass("open"); // скрываем его
    }
}); */