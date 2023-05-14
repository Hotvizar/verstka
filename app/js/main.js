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

});