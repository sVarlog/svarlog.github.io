$(document).ready(function() {
var offeRslider = $('.offer');
  offeRslider.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});
    
$(document).ready(function() {
  var newsSlider = $('.owl-news');
  newsSlider.owlCarousel({
    loop: true,
    nav: true,
    navText : ["<img src='img/prev-arrow.png'>","<img src='img/next-arrow.png'>"],
    stagePadding: 5,
    responsive:{
        1000:{
            items:1
        },
        1100:{
            items:3,
            center: true
        }
    }
  });
});

$(document).ready(function() {
  var review = $('.rev__cards');
  review.owlCarousel({
    loop: true,
    nav : true,
    navText : ["<img src='img/arrow-prev-black.png'>","<img src='img/arrow-next-black.png'>"],
    dots: false,
    margin: 20,
    items:1 
  });
});

