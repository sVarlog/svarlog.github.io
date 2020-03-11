$(document).ready(function(){
	// Init first carousel(header)
	$('.header .owl-carousel').owlCarousel({
	  	items: 1,
	  	dots: true,
	  	loop: true,
	  	margin: 120,
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
		margin: 20,
		loop: true,
		navText: ['','']
	});

	// Init third carousel(section5)
	$('.section5 .brands-carousel').owlCarousel({
		items: 6,
		dots: false,
		nav: false,
		loop: true,
		responsive:{
	        0:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }
	});

	// Init four carousel(section6)
	$('.section6 .review').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		navText: ['','']
	})

	// Modal window map
	$('.section9').click(function(){
		$('.section9 .modalWindow').toggleClass('active');
	});
});

// Tabs section4
const tabsHeaders = document.querySelectorAll('[data-tab]');
const tabsImgs = document.querySelectorAll('[data-wrap]');
tabsHeaders.forEach(tabsHandler);
function tabsHandler(item){
	item.addEventListener('click', tabsClick);
}
function tabsClick(){
	// remove class from all tab content
	tabsHeaders.forEach(function(item){
		item.classList.remove('active');
	});

	tabsImgs.forEach(function(item){
		item.classList.remove('active');
	});

	// add class to tab headline
	this.classList.add('active');

	const tabID = this.dataset.tab;

	// hide img
	document.querySelectorAll('[data-img]').forEach(function(item){
		item.style = 'opacity: 0';
	});

	// hide tabs content
	document.querySelectorAll('[data-content]').forEach(function(item){
		item.classList.remove('active');
		item.style = 'transform: rotateX(100%); height: 0px;';
	});

	// show tabs content
	document.getElementById(tabID).classList.add('active');
	document.getElementById(tabID).style = 'transform: rotateX(0);';

	// show img
	document.querySelector('[data-wrap=' + tabID + ']').classList.add('active');
	document.querySelector('[data-img=' + tabID + ']').style = 'opacity: 1; display: block;';
}

// Menu btn
const navBtn = document.querySelector('.navbarButton');
const menu = document.querySelector('.menu');
navBtn.addEventListener('click', showMenu);

function showMenu(){
	navBtn.classList.toggle('active');
	menu.classList.toggle('active');
}
// scroll
const anchors = document.querySelectorAll('.scroll-to');

for(let anchor of anchors){
	anchor.addEventListener('click', function(e){
		e.preventDefault();

		const blockID = anchor.getAttribute('href');

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}