$(function () {

    $('#home-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: true
				}
			},
		],
	});
    
	$('#about-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		],
	});

	//mobile menu
	$("#mobile-menu .menu-item-has-children").on("click", function(e){
		e.preventDefault();

   		var $this = $(this);

		$this.children("ul").slideToggle(350);
		$this.toggleClass('show');
	});

	$(window).on('resize', function () {
        closeNav();
    });

});

function openNav() {
	$('body').addClass('modal-open');
	$('#mobile-menu').addClass("open-menu");
	$('.backdrop').addClass('open-drop');
 }
 
 function closeNav() {
	$('body').removeClass('modal-open');
	$('#mobile-menu').removeClass("open-menu");
	$('.backdrop').removeClass('open-drop');
 }