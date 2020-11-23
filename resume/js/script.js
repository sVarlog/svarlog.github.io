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
////////////////////////////////////////////////////
(() => {
	let headings = document.querySelectorAll('.works .worksWrap .headingItems'),
		items = document.querySelectorAll('.works .worksWrap .projects');

	items.forEach((el, i) => {
		let n = el.querySelectorAll('.workItem');
		headings[i].append(`( ${n.length} )`);
	});
})();