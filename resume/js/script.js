$('.education #wp').on('click', function(){
	$('#wpModal').show(500);
});
$('.education #stepikJS').on('click', function () {
	$('#stepikJSModal').show(500);
});
$('.education #stepikLayout').on('click', function(){
	$('#stepikModal').show(500);
});
$('.modal .close').on('click', function(){
	$('.modal').hide(500);
});