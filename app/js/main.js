$(function () {

    $('#home-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
    });

    
    $('#affiche-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: true,
        arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon chevron-left"><use xlink:href="image/icons/symbol/sprite.svg#chevron-left" /></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon chevron-right"><use xlink:href="image/icons/symbol/sprite.svg#chevron-right" /></svg></button>',
    });



});