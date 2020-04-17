$('.header_slider').slick({
	autoplay: true,
	autoplaySpeed: 1500,
	speed: 1500,
	prevArrow: $('.prev'),
	nextArrow: $('.next')
});
$('.our_clints_slider').slick({
	autoplay: true,
	autoplaySpeed: 1500,
	speed: 1500,
	arrows: false,
	dots: true
});
$(function(){
	$('.circlestat').circliful();
});
