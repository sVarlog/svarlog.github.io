// gallery
const startGallery = () => {
	let gallery = document.querySelector('.productHeader .gallery');
	let galleryArea = gallery.querySelector('.mainArea');
	let galleryItems = gallery.querySelectorAll('.item');
	let createWrap = document.createElement('div');
	let createNav = document.createElement('div');
	createWrap.classList.add('navWrap');
	createNav.classList.add('slideNav');
	gallery.append(createWrap);
	createWrap.append(createNav);	

	galleryItems.forEach((el, index) => {
		el.setAttribute('data-slide', index + 1);
		let cloneImg = el.cloneNode(true);
		if(index == 0){
			el.classList.add('active');
			cloneImg.classList.add('active');
		}
		createNav.append(cloneImg);
	});
	

	const sizing = () => {
		let navItems = gallery.querySelectorAll('.navWrap .slideNav .item');
		navItems.forEach((el) => {
			el.style.width = `${(galleryArea.offsetWidth - 45) / 4}px`;
		});
		let navWrap = gallery.querySelector('.navWrap');
		navWrap.style.height = `${Math.round(navItems[0].offsetWidth / 1.724) + 20}px`;
		galleryArea.style.height = `${Math.round(gallery.offsetWidth / 1.724)}px`;
	}
	sizing();

	let navItems = gallery.querySelectorAll('.navWrap .slideNav .item');
	let navElement = gallery.querySelector('.slideNav');


	const navSwipe = () => {
		let step = 0;
		const moveTo = (num) => {
			navElement.style = `transform: translateX(${-(num * (((galleryArea.offsetWidth - 45) / 4) + 15))}px);`;
		}

		const swipe = () => {
			navElement.addEventListener('mousedown', handleMouseStart, false);
		 	navElement.addEventListener('mousemove', handleTouchMove, false);

		 	navElement.addEventListener('touchstart', handleTouchStart, false);
		 	navElement.addEventListener('touchmove', handleTouchMove, false);

			let xDown = null;                                                        
		    let yDown = null;

		    function getTouches(evt){
		    	if(evt.type == 'mousedown'){
		    		return evt;
		    	} else {
					return evt.touches;
		    	}
		    }

		    function handleTouchStart(evt){
		        const firstTouch = getTouches(evt)[0];                                      
		        xDown = firstTouch.clientX;                                      
		        yDown = firstTouch.clientY;                                      
		    };

		    function handleMouseStart(evt){
		        const firstTouch = getTouches(evt);                                      
		        xDown = firstTouch.clientX;                                      
		        yDown = firstTouch.clientY;                                      
		    };                                                

		    function handleTouchMove(evt){
		        if(! xDown || ! yDown){
		            return;
		        }

		        let xUp = null;
		        let yUp = null;

		        if(evt.type == 'mousemove'){
		        	xUp = evt.clientX;
		        	yUp = evt.clientY;
		        } else {
			        xUp = evt.touches[0].clientX;                                    
			        yUp = evt.touches[0].clientY;
			    }

		        let xDiff = xDown - xUp;
		        let yDiff = yDown - yUp;

		        if(Math.abs(xDiff) > Math.abs(yDiff)){
		            if(xDiff > 0){
		                // left
		                if(step >= (navItems.length - 4)){
		            		step;
		            	} else{
			                step += 1;
			            }
		                moveTo(step);
		            } else{
		                /* right swipe */
		                if(step >= 0){
		                	step = 0;
		                } else {
			                step -= 1;
			            }
		                moveTo(step);
		            }                       
		        } else{
		            if(yDiff > 0){
		                /* up swipe */ 
		            } else{ 
		                /* down swipe */
		            }                                                                 
		        }
		        /* reset values */
		        xDown = null;
		        yDown = null;                                           
		    };
		}
		swipe();
	}

	if(galleryItems.length > 4){
		navSwipe();
	}

	const changeItem = (num) => {
		galleryItems.forEach((el) => {
			el.classList.remove('active');
			if(el.dataset.slide == num){
				el.classList.add('active');
			}
		});
	}

	const navClick = (el) => {
		navItems.forEach((item) => {
			item.classList.remove('active');
		});
		el.classList.add('acitve');
		changeItem(el.dataset.slide);
	}

	navItems.forEach((el) => {
		el.onclick = () => {
			navClick(el);
		}
	});

	window.addEventListener('resize', function(){
		sizing()
	})
}
// show description
(() => {
	let currentWidth = checkWidth();
	const toggleText = (w) => {
		if(w > 992){
			let text = document.querySelector('.opportunities .right .hideText');
			let content = document.querySelector('.opportunities .content');
			let btnShow = document.querySelector('.opportunities .right a.showBtn');
			
			text.classList.add('hide');

			const checkClass = () => {
				if(text.classList.contains('hide')){
					text.style.height = 0;
					content.style.gridTemplateColumns = '1fr 1fr';
					btnShow.innerHTML = 'Читать далее';
				} else{
					text.style.height = `auto`;
					content.style.gridTemplateColumns = '1fr';
					btnShow.innerHTML = 'Скрыть';
				}
			}
			checkClass();

			btnShow.onclick = (e) => {
				e.preventDefault();
				text.classList.toggle('hide');
				checkClass();
			}
		} else{
			return false;
		}
	}
	toggleText(currentWidth);
	window.addEventListener('load', function(){
		window.addEventListener('resize', function(){
			currentWidth = checkWidth();
			toggleText(currentWidth);
		});
	});
})();
// opportunities stats
(() => {
	let currentWidth = checkWidth();
	const toggleStats = (w) => {
		let stats = document.querySelector('.opportunities .stats');
		let statsHeight = stats.offsetHeight;
		let statsTitle = document.querySelector('.opportunities h2.title');
		if(w < 576){
			stats.classList.add('hide');
			stats.style.height = 0;

			const showStats = () => {
				if(stats.classList.contains('hide')){
					stats.classList.remove('hide');
					stats.style.height = `${statsHeight}px`;
				} else{
					stats.classList.add('hide');
					stats.style.height = 0;
				}
			}

			statsTitle.onclick = () => {
				statsTitle.classList.toggle('active');
				showStats();
			}
		}
	}
	toggleStats(currentWidth);
	window.addEventListener('load', function(){
		window.addEventListener('resize', function(){
			currentWidth = checkWidth();
			toggleStats(currentWidth);
		})
	});
})();
window.onload = () => {
	startGallery();
	initDragSlider('.reviewSlider', 1, true, 1);
	initSlider('.payback', 576, true, 'whiteDots');
	initSlider('.advantages', 576, true, 'greyDots');
	initSlider('.recomendation', 576, true, 'whiteDots');
}