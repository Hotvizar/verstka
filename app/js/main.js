$(function () {

	$("#mobmenu .menu-item-has-children").on("click", function(){
		$(this).children("ul").slideToggle();
	});

});


Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
      },
});

/* function openNav() {
	$('body').addClass('modal-open');
	$('#mobile-menu').addClass("open-menu");
	$('.backdrop').addClass('open-drop');
}

function closeNav() {
	$('body').removeClass('modal-open');
	$('#mobile-menu').removeClass("open-menu");
	$('.backdrop').removeClass('open-drop');
} */