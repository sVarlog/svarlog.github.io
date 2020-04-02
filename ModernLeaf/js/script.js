new function(){
	// Scroll function
	var linkNav = document.querySelectorAll('[href^="#"]'),
	    V = .2;  
	for (var i = 0; i < linkNav.length; i++) {
	    linkNav[i].addEventListener('click', function(e) { 
	        e.preventDefault(); 
	        var w = window.pageYOffset,  
	            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
	        t = document.querySelector(hash).getBoundingClientRect().top, 
	            start = null;
	        requestAnimationFrame(step); 
	        function step(time) {
	            if (start === null) start = time;
	            var progress = time - start,
	                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
	            window.scrollTo(0,r);
	            if (r != w + t) {
	                requestAnimationFrame(step)
	            } else {
	                location.hash = hash 
	            }
	        }
	    }, false);
	}

}

new function(){
	// Open menu function
	let menu = document.querySelector('.menu'),
		menuBtn = document.querySelector('.navBtn');

	menuBtn.addEventListener('click', openMenu);

	function openMenu(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	}
}()

new function(){
	// Slider 1
	let slides = document.querySelectorAll('.leafSlider .item'),
		dots = document.querySelectorAll('[data-dot]'),
		dotsArea = document.querySelector('#dotsBlock'),
		slideIndex = 1;

	showSlide(slideIndex);

	// Show one active slide and dot
	function showSlide(n){
		if(n < 1){
			slideIndex = slides.length;
		} else if(n > slides.length){
			slideIndex = 1;
		}
		for(let i = 0; i < slides.length; i++){
			slides[i].classList.remove('show');
		}
		for(let i = 0; i < slides.length; i++){
			dots[i].classList.remove('active');
		}
		slides[slideIndex - 1].classList.add('show');
		dots[slideIndex - 1].classList.add('active');
	}

	// Fint button data attr and send it to showSlide()
	dots.forEach(function(item){
		item.addEventListener('click', function(){
			slideIndex = this.dataset.dot;
			showSlide(slideIndex);
		});
	});

	// Change slides every 5s
	// setInterval(function(){
	// 	slideIndex += 1;
	// 	showSlide(slideIndex);
	// }, 5000);
}()


new function(){
	// Add anim delay when site is load(for fix height section1)
	let cards = document.querySelectorAll('.section1 .cardItem');
	cards.forEach(function(item){
		item.addEventListener('mouseover', function(){
			this.style = 'transition: all 0.5s ease;'
		})
		item.addEventListener('mouseout', function(){
			this.style = 'transition: all 0.5s ease;'
		})
	})
}

new function(){
	// Create classes for progressbars
	class Progress{
		constructor(progress, spanData){
			this.progress = progress;
			this.span = spanData;
		}
	}

	let progress = document.querySelectorAll('.progressBar'),
		progressQuantity = [];

	for(let i = 0; i < progress.length; i++){
		let progressList = progress[i].querySelector('progress'),
			progressSpan = progress[i].querySelector('span.value');

		progressQuantity[i] = new Progress(
			progressList,
			progressSpan
		);
	}

	for(i = 0; i < progressQuantity.length; i++){
		let progValue = progressQuantity[i]['progress'],
			spanVal = progressQuantity[i]['span'];
		let loading = function(){
			progValue['value'] += 1;
			addValue = progValue.value = progValue['value'];
			spanVal.innerHTML = progValue['value'] + '%';	
			if(progValue['value'] == progValue.dataset.customMax){
				clearInterval(animate)
			}
		}

		let animate = setInterval(function(){
			loading();
		}, 25);
	}
}

new function(){
	// Slider block (Who we are)
	class TeamSlide{
		constructor(item, left, right){
			this.item = item;
			this.left = left;
			this.right = right;
		}
	}

	let teamSlide = document.querySelectorAll('.teamSlider .item'),
		teamSlideObj = [],
		dots = document.querySelector('.section2 .dots'),
		dot = [],
		slideIndex = 1;
	for(let i = 0; i < teamSlide.length; i++){
		let slideLeft = teamSlide[i].querySelector('.colLeft'),
			slideItem = teamSlide[i],
			slideRight = teamSlide[i].querySelector('.colRight');
		teamSlideObj[i] = new TeamSlide(slideItem, slideLeft, slideRight);
		dot[i] = i;
		dot.forEach(function(){
			dot[i] = '<span data-item-number="' + (i + 1) + '"></span>';
		})
		dots.innerHTML = dot.join(' ');
	}

	let dotsArea = document.querySelectorAll('.section2 [data-dots-area] span');

	showSLide(slideIndex);

	function showSLide(n){
		if(n < 1){
			slideIndex = teamSlideObj.length;
		} else if(n > teamSlideObj.length){
			slideIndex = 1;
		}
		for(let i = 0; i < teamSlideObj.length; i++){
			teamSlideObj[i]['item'].classList.remove('show');
			dotsArea[i].classList.remove('active');
		}
		teamSlideObj[slideIndex - 1]['item'].classList.add('show');
		dotsArea[slideIndex - 1].classList.add('active');
	}

	dotsArea.forEach(function(item){
		item.addEventListener('click', function(){
			slideIndex = this.dataset.itemNumber;
			showSLide(slideIndex);
		})
	})
}()

new function(){
	// Move background when change mouse position section7
	let sect = document.querySelector('.section7');
	sect.addEventListener('mousemove', function(e) {
		const posY = e.layerY, posX = e.layerX;
		sect.style.backgroundPositionY = -posY/5 + 'px';
		sect.style.backgroundPositionX = -posX/20 + 'px';
	});

	// Open modal window section7
	let mapModal = document.querySelector('.modal-window');
	sect.addEventListener('click', function(e){
		mapModal.style = 'transform: translateX(0)';
	});
	mapModal.addEventListener('click', function(e){
		let clickItem = e.path;
		if(e.path[0].classList.contains('modal-window') || (e.path[0].classList.contains('close'))){
			mapModal.style = 'transform: translateX(100vw)';
		}
	})
}