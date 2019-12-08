// Tabs code
$(function(){

$('.section6 .tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.section6 .tab-content li').css('display', 'none').eq(index).css('display', 'flex');
});

    $('.section6 .tab-title li:first').addClass('active');
    $('.section6 .tab-content li:first').css('display', 'flex');

    $('.section12 .tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.section12 .tab-content li').css('display', 'none').eq(index).css('display', 'flex');
});

    $('.section12 .tab-title li:first').addClass('active');
    $('.section12 .tab-content li:first').css('display', 'flex');
});

// Testimonial carousel
$(document).ready(function(){
  var owl = $(".testimonial-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    nav: false,
    dot: true
  });
}
// Tabs code
$(function(){

$('.section6 .tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.section6 .tab-content li').css('display', 'none').eq(index).css('display', 'flex');
});

    $('.section6 .tab-title li:first').addClass('active');
    $('.section6 .tab-content li:first').css('display', 'flex');

    $('.section12 .tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.section12 .tab-content li').css('display', 'none').eq(index).css('display', 'flex');
});

    $('.section12 .tab-title li:first').addClass('active');
    $('.section12 .tab-content li:first').css('display', 'flex');
});

// Testimonial carousel
$(document).ready(function(){
  var owl = $(".testimonial-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    nav: false,
    dot: true
  });
});