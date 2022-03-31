$('.education #wp').on('click', function(){
	$('#wpModal iframe').attr('src', $('#wpModal iframe').data('src'));
	$('#wpModal').show(500);
});
$('.education #stepikJS').on('click', function () {
	$('#stepikJSModal iframe').attr('src', $('#stepikJSModal iframe').data('src'));
	$('#stepikJSModal').show(500);
});
$('.education #stepikLayout').on('click', function(){
	$('#stepikModal iframe').attr('src', $('#stepikModal iframe').data('src'));
	$('#stepikModal').show(500);
});
$('.education #udemyJS').on('click', function () {
	$('#udemyModal iframe').attr('src', $('#udemyModal iframe').data('src'));
	$('#udemyModal').show(500);
});
$('.education #layoutWayup').on('click', function () {
	$('#layoutWModal iframe').attr('src', $('#layoutWModal iframe').data('src'));
	$('#layoutWModal').show(500);
});
$('.education #udemyVueJs').on('click', function () {
	$('#udemyVueModal iframe').attr('src', $('#udemyVueModal iframe').data('src'));
	$('#udemyVueModal').show(500);
});
$('.education #udemyVueJs').on('click', function () {
	$('#udemyVueModal iframe').attr('src', $('#udemyVueModal iframe').data('src'));
	$('#udemyVueModal').show(500);
});
$('.education #nodeJS').on('click', function () {
	$('#nodeJSModal iframe').attr('src', $('#nodeJSModal iframe').data('src'));
	$('#nodeJSModal').show(500);
});
$('.education #gitUdemy').on('click', function () {
	$('#gitUdemyModal iframe').attr('src', $('#gitUdemyModal iframe').data('src'));
	$('#gitUdemyModal').show(500);
});
$('.education #reactNativeUdemy').on('click', function () {
	$('#reactNativeUdemyModal iframe').attr('src', $('#reactNativeUdemyModal iframe').data('src'));
	$('#reactNativeUdemyModal').show(500);
});
$('.modal .close').on('click', function(){
	$('.modal').hide(500);
});
(() => {
	let headings = document.querySelectorAll('.works .worksWrap .headingItems'),
		items = document.querySelectorAll('.works .worksWrap .projects');

	items.forEach((el, i) => {
		let n = el.querySelectorAll('.workItem');
		headings[i].append(`( ${n.length} )`);
	});
})();