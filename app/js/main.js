$(function () {

	$("#mobmenu .menu-item-has-children").on("click", function () {
		$(this).children("ul").slideToggle();
	});

	$('#product-img-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon slide-left"><use xlink:href="image/icons/symbol/sprite.svg#slide-left" /></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon slide-right"><use xlink:href="image/icons/symbol/sprite.svg#slide-right" /></svg></button>',
	});

	//$("#orderSuccess").modal('show');

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