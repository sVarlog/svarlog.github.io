$(document).ready(function(){
	// Init first carousel(header)
	$('.header .owl-carousel').owlCarousel({
	  	items: 1,
	  	dots: true,
	  	loop: true,
	  	autoplay:true,
    	autoplayTimeout:10000,
	  	dotsContainer: '#carousel-custom-dots'
	});

	// Custom dots owl-carousel
	$('.owl-dot').click(function (){
	  	$('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
	});

	// Init second carousel(section4)
	$('.section4 .quotes').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		navText: ['','']
	});

	// Init third carousel(section5)
	$('.section5 .brands-carousel').owlCarousel({
		items: 6,
		dots: false,
		nav: false,
		loop: true
	});

	// Init four carousel(section6)
	$('.section6 .review').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		navText: ['','']
	})

	// About block animate cards
	let card1 = $('.section1 .card1'),
		card2 = $('.section1 .card2'),
		card3 = $('.section1 .card3');

	// Card1
	$(card1).hover(function(){
		card1.addClass('moveLeftTop');
		card2.addClass('moveRight');
		card3.addClass('moveRight');
	}, function(){
		card1.removeClass('moveLeftTop');
		card2.removeClass('moveRight');
		card3.removeClass('moveRight');
	});
	// Card2
	$(card2).hover(function(){
		card2.addClass('moveTop');
		card1.addClass('moveLeft');
		card3.addClass('moveRight');
	}, function(){
		card2.removeClass('moveTop');
		card1.removeClass('moveLeft');
		card3.removeClass('moveRight');
	});
	// Card3
	$(card3).hover(function(){
		card3.addClass('moveRightTop');
		card2.addClass('moveLeft');
		card1.addClass('moveLeft');
	}, function(){
		card3.removeClass('moveRightTop');
		card2.removeClass('moveLeft');
		card1.removeClass('moveLeft');
	});

	// Tabs(section4)
	

	// Modal window map
	$('.section9').click(function(){
		$('.section9 .modalWindow').toggleClass('active');
	});
});