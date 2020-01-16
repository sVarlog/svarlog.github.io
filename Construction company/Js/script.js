$(document).ready(function(){
	$('.menu-button').on('click', function(){
		$('#nav').toggleClass('active');
		$('.menu-button').toggleClass('active');
	});
});

$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


$('.click .showText').on('click',function(){
	$(this).next('p').toggle(function(){
		$(this).css('transform', 'scaleX(0)');
	},
	function(){
		$(this).css('transform', 'scaleX(1)');
	});
});
$('.showText').on('click', function(){
	$(this).children('i').toggleClass('rotate1');
});

$(document).ready(function(){
	$('#section6 .owl-carousel').owlCarousel({
		responsive:{
			0:{
				items: 1
			},
			550:{
				items: 2
			},
			700:{
				items: 3
			},
			1000:{
				items: 4
			}
		},
		loop: true,
	});
});
$(document).ready(function(){
	$('#section7 .owl-carousel').owlCarousel({
		responsive:{
			0:{
				items: 1
			},
			1000:{
				items: 3
			}
		},
		loop: true,
		margin: 20,
	});
});