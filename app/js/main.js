$(function () {

    $(".header .menu-item-has-children > a").on("click", function(event) {
        event.preventDefault();
        var el = $(this),
        sm = el.next(".submenu");
        $(".header .submenu").not(sm).removeClass("open");
        sm.toggleClass("open");
    });

    //fixed menu
    var mmenu = $(".header"),
        admbar = $(".admin-bar .header");
	
	$(window).on('scroll', function() {
		var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (admbar && scrollTop > 1) {
            admbar.addClass("admbar");
        } else {
            admbar.removeClass("admbar");
        }

		if (scrollTop > 200) {
			mmenu.addClass("sm-header");
		} else {
			mmenu.removeClass("sm-header");
		}
		
	});

});
 
/* $(document).mouseup(function(e){ // событие клика по веб-документу
    var div = $(".header .submenu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass("open"); // скрываем его
    }
}); */