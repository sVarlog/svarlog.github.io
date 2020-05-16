document.addEventListener("DOMContentLoaded", function(){
	let dotArea = document.querySelector('#slider .dots');
	let items = document.querySelectorAll('#slider .right .sliderItem');
	let slides = document.querySelectorAll('#slider .left .slide');
	let prev = document.querySelector('#slider .pagination .arrows .prev');
	let next = document.querySelector('#slider .pagination .arrows .next');
	let currentItem = 1;

	// Create dots while left slideItem exists
	for(let i = 1; i <= items.length; i++){
		let dot = document.createElement('div');
		dot.classList.add('dotItem');
		if(i == 1){
			dot.classList.add('active');
		}
		dot.setAttribute('data-dot-number', i);
		dotArea.append(dot);
	}

	// Create dotList
	let dotItems = document.querySelectorAll('#slider .dots .dotItem');

	// Tracking click on dot
	dotItems.forEach(function(el){
		el.addEventListener('click', function(){
			currentItem = el.dataset.dotNumber;
			changeDot(currentItem);
			changeCurrentItem(currentItem);
		});
	});

	// Tracking click prev arrow
	prev.addEventListener('click', function(){
		currentItem = currentItem - 1;
		if(currentItem <= 0){
			currentItem = items.length;
		}
		changeDot(currentItem);
		changeCurrentItem(currentItem);
	});

	// Tracking click next arrow
	next.addEventListener('click', function(){
		currentItem = currentItem + 1;
		if(currentItem > items.length){
			currentItem = 1;
		}
		changeDot(currentItem);
		changeCurrentItem(currentItem);
	});

	// Tracking click on left item
	items.forEach(function(el){
		el.addEventListener('click', function(){
			currentItem = el.dataset.itemNumber;
			changeDot(currentItem);
			changeCurrentItem(currentItem);
		});
	});

	// Change active dot 
	function changeDot(item){
		dotItems.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.dotNumber == item){
				el.classList.add('active');
			}
		});
	}

	// Change active class slider items
	function changeCurrentItem(slideNumber){
		items.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.itemNumber == slideNumber){
				el.classList.add('active');
			}
		});
		showSlide(slideNumber);
		clearInterval(timer);
	}

	// Show slide
	function showSlide(item){
		slides.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.slideNumber == item){
				el.classList.add('active');
			}
		});
	}

	// Change slide timer
	function timer(){ 
		setInterval(function(){
			currentItem = Number(currentItem) + 1;
			if(currentItem > items.length){
				currentItem = 1;
			}
			changeCurrentItem(currentItem);
			changeDot(currentItem);
		}, 2500)
	}
	timer();
});