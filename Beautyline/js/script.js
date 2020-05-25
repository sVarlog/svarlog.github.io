// show menu
(function(){
	let menu1 = document.querySelector('#header .menu1');
	let menu2 = document.querySelector('#header .blackout');
	let menuMob = document.querySelector('#header .menuMob');
	let menuBtn = document.querySelector('#header .mainMenuSmall .menuButton');
	let btnClose = document.querySelector('#header .menuMob .menuButton.mob');

	menuBtn.addEventListener('click', function(){
		menu1.classList.add('show');
		menu2.classList.add('show');
		menuMob.classList.add('show');
	});
	btnClose.addEventListener('click', function(){
		menu1.classList.remove('show');
		menu2.classList.remove('show');
		menuMob.classList.remove('show');
	})
})();
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

	window.addEventListener('resize', function(){
		checkWidth()
	})
})();
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
// reviews slider
