// reviews button
(function(){
	let reviewContainer = document.querySelector('#section4 .reviews');
	let reviewBtn = document.querySelector('#section4 .button');
	reviewBtn.addEventListener('click', function(e){
		e.preventDefault();
		if(reviewBtn.classList.contains('show')){
			reviewBtn.classList.remove('show')
			reviewContainer.style.height = 'auto';
			reviewBtn.innerHTML = 'Сховати';
			reviewBtn.classList.add('hide');
		} else if(reviewBtn.classList.contains('hide')){
			reviewBtn.classList.remove('hide');
			reviewContainer.style.height = '600px';
			reviewBtn.innerHTML = 'Дивитися більше';
			reviewBtn.classList.add('show');
		}
	});
})();