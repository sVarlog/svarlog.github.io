const timerInterval = 3000;
// show menu function
function showMenu(){
	let menu1 = document.querySelector('#header .menu1');
	let menu2 = document.querySelector('#header .blackout');
	let menuMob = document.querySelector('#header .menuMob');

	menu1.classList.add('show');
	menu2.classList.add('show');
	menuMob.classList.add('show');
}
// close menu function
function closeMenu(){
	let menu1 = document.querySelector('#header .menu1');
	let menu2 = document.querySelector('#header .blackout');
	let menuMob = document.querySelector('#header .menuMob');

	menu1.classList.remove('show');
	menu2.classList.remove('show');
	menuMob.classList.remove('show');
}
// show menu
	let menuBtn = document.querySelector('#header .mainMenuSmall .menuButton');
	let btnClose = document.querySelector('#header .menuMob .menuButton.mob');

	menuBtn.addEventListener('click', showMenu);
	btnClose.addEventListener('click', closeMenu);
// fixed menu
(function(){
	window.addEventListener('scroll', function(){
		let fixedMenu = document.querySelector('#header .blackout');
		let logo = document.querySelector('#header .logo');
		let flagBlock = document.querySelector('#header .langFlag');
		let lang = document.querySelector('#header .mainMenuSmall .lang');

		if(pageYOffset >= document.documentElement.clientHeight){
			fixedMenu.classList.add('fixed');
			if(document.documentElement.clientWidth > 992){
				flagBlock.innerHTML = 
				`<div class="logo d-flex align-items-center">
					<img src="img/logo.png" alt="Logo">
					<a href="#" class="logoText">Світ<br> косметолога</a>
				</div>`;
			} else if(document.documentElement.clientWidth <= 992){
				lang.innerHTML = 
				`<div class="logo d-flex align-items-center">
					<img src="img/logo.png" alt="Logo">
					<a href="#" class="logoText">Світ<br> косметолога</a>
				</div>`;
			}
		} else if(pageYOffset <= document.documentElement.clientHeight){
			fixedMenu.classList.remove('fixed');
			if(document.documentElement.clientWidth > 992){
				flagBlock.innerHTML = 
				`<div class="langFlag">
					<img src="img/lang/flagUA.svg" alt="UA flag" class="flagIMG">
				</div>`
			} else if(document.documentElement.clientWidth <= 992){
				lang.innerHTML = 
				`<a href="#">УКР</a>`
			}
		}
	})
})();
// adaptive header
(function(){
	let flag = document.querySelector('#header .langFlag');
	let lang = document.querySelector('#header .lang');
	let menu = document.querySelector('#header .mainMenu');
	let smallMenu = document.querySelector('#header .mainMenuSmall');

	function checkWidth(){
		if(document.documentElement.clientWidth <= 992){
			menu.style.display = 'none';
			smallMenu.style.display = 'flex';
		} else {
			menu.style.display = 'flex';
			smallMenu.style.display = 'none';
		}
	}
	checkWidth()

	window.addEventListener('resize', checkWidth)
})();
// scroll animate
window.onload = function(){
	let link = document.querySelectorAll('.menuItem');

	link.forEach(function(el){
		el.addEventListener('click', function(e){
			e.preventDefault();
			let id = el.getAttribute('href');
			let top = document.querySelector(`${id}`).offsetTop;
			window.scrollTo({top: top, behavior: 'smooth'});
			closeMenu()
		});
	});
};
// reviews button
(function(){
	let reviewContainer = document.querySelector('#section4 .reviews');
	let reviewBtn = document.querySelector('#section4 .button');
	let reviewBtnText = document.querySelector('#section4 .button span');
	reviewBtn.addEventListener('click', function(e){
		e.preventDefault();
		if(reviewBtn.classList.contains('show')){
			reviewBtn.classList.remove('show')
			reviewContainer.style.height = 'auto';
			reviewBtnText.innerHTML = 'Сховати';
			reviewBtn.classList.add('hide');
		} else if(reviewBtn.classList.contains('hide')){
			reviewBtn.classList.remove('hide');
			reviewContainer.style.height = '600px';
			reviewBtnText.innerHTML = 'Дивитися більше';
			reviewBtn.classList.add('show');
		}
	});
})();
// advantages slider
(function(){
	let area = document.querySelector('#section2 #areaForSlider');
	let items = document.querySelectorAll('#section2 #areaForSlider .advantageCol');
	
	function checkWidth(){
		if(document.documentElement.clientWidth <= 575){
			area.classList.add('mob');
			createDots();
		} else if(document.documentElement.clientWidth >= 576){
			area.classList.remove('mob');
		}
	}
	checkWidth();
	window.addEventListener('resize', checkWidth);

	for(let i = 0; i < items.length; i++){
		items[i].setAttribute('data-card-number', i + 1);
	}

	function createDots(){
		let dots = document.createElement('div');
		dots.classList.add('dots');
		area.append(dots);
		for(let i = 0; i < items.length; i++){
			let dot = document.createElement('div');
			dot.classList.add('dot');
			if(i == 0){
				dot.classList.add('active');
			}
			dot.setAttribute('data-dot-number', i + 1);
			dots.append(dot);
		}
	}

	let dots = document.querySelectorAll('#section2 #areaForSlider .dots .dot');
	dots.forEach(function(el){
		el.addEventListener('click', function(){
			changeDot(el.dataset.dotNumber);
			changeSlide(el.dataset.dotNumber);
		});
	});

	function changeSlide(item){
		items.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.cardNumber == item){
				el.classList.add('active');
			}
		});
	}

	function changeDot(item){
		dots.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.dotNumber == item){
				el.classList.add('active');
			}
		});
	}


})();
// modal reviews
(function(){
	let reviewModal = document.querySelector('.modal#reviewsModal');
	let reviewBtns = document.querySelectorAll('.section4 .openModal');
	let close = document.querySelector('.modal .close')
	reviewBtns.forEach(function(el){
		el.addEventListener('click', function(){
			reviewModal.classList.add('active');
		});
	});
	close.addEventListener('click', function(){
		reviewModal.classList.remove('active');
	})
})();
// reviews photo slider
(function(){
	let reviewBtn = document.querySelector('#section4 .button');
	let reviewWrap = document.querySelector('#section4 .reviews');
	let photoPos = document.querySelector('#section4 .reviews .photo');
	let photos = document.querySelectorAll('#section4 .reviews .photo .item');
	let currentItem = 1;

	function checkWidth(){
		if(document.documentElement.clientWidth <= 768){
			reviewWrap.classList.add('mob');
			reviewBtn.style.display = 'none';
			createDotsArea();
		} else if(document.documentElement.clientWidth > 768){
			reviewWrap.classList.remove('mob');
			reviewBtn.style.display = 'block';
		}
	}

	checkWidth();

	window.addEventListener('resize', checkWidth);

	function createDotsArea(){
		if(!photoPos.querySelector('div.dots')){
			let dots = document.createElement('div');
			dots.classList.add('dots');
			photoPos.append(dots);
			for(let i = 1; i <= photos.length; i++){
			let dot = document.createElement('div');
				dot.classList.add('dot');
				if(i == 1){
					dot.classList.add('active');
				}
				dot.setAttribute('data-dot-number', i);
				dots.append(dot);
			}			
		} else {
			return false;
		}
	}

	let dots = document.querySelectorAll('#section4 .reviews .photo .dots .dot');

	function changeSlide(item){
		photos.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.slideValue == item){
				el.classList.add('active');
			}
		});
	}

	function changeDot(item){
		dots.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.dotNumber == item){
				el.classList.add('active');
			}
		});
	}

	photos.forEach(function(el){
		el.setAttribute('data-slide-value', currentItem);
		currentItem = currentItem + 1;
	});

	dots.forEach(function(el){
		el.addEventListener('click', function(){
			currentItem = el.dataset.dotNumber;
			clearInterval(timerTime);
			timerTime = setInterval(timer, timerInterval);
			changeDot(el.dataset.dotNumber);
			changeSlide(el.dataset.dotNumber);
			return currentItem;
		});
	});

	let timerTime = setInterval(timer, timerInterval)
	function timer(item){
		currentItem += 1;
		if(currentItem > photos.length){
			currentItem = 1;
		}
		changeDot(currentItem);
		changeSlide(currentItem);
	}
	timerTime
})();
// reviews video slider
(function(){
	let videos = document.querySelectorAll('#section4 .reviews .video .item');
	let currentItem = 1;

	for(let i = 0; i < videos.length; i++){
		videos[i].setAttribute('data-video-number', i + 1)
		if(i == 0){
			videos[0].classList.add('active')
		}
	}

	function changeVideo(item){
		videos.forEach(function(el){
			el.classList.remove('active');
			if(el.dataset.videoNumber == item){
				el.classList.add('active');
			}
		});
	}

	let timerTime = setInterval(timer, timerInterval)
	function timer(item){
		currentItem += 1;
		if(currentItem > videos.length){
			currentItem = 1;
		}
		changeVideo(currentItem)
	}
	timerTime
})()