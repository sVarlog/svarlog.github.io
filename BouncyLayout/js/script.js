$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var add_id = ('#active');
		var get_current = $('.posts .' + get_id);
		
		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function() {
		$('.post').show(500);
	});
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	margin: 40,
  	dots: true,
  	loop: true
  });
});

$('#map').hover(function () {
   $('.mapShadow').fadeOut();
},
	function(){
		$('.mapShadow').fadeIn();
});

$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.myTopnav').toggleClass('menu_active');
	$('.menu-btn').toggleClass('move');
	$('.myTopnav').toggleClass('style');
}); 