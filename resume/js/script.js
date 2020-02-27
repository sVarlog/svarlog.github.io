$('.education #wp').on('click', function(e){
	e.preventDefault();
	$('#wpModal').show(500);
});
$('.modal .close').on('click', function(){
	$('.modal').hide(500);
});