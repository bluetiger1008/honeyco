$(document).ready(function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 130) {
      $('.nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 131) {
      $('.nav-bar').removeClass('navbar-fixed');
    }
  });
  $('.menu-link').bigSlide();
});
$('.carousel').carousel({
    interval: false
});
$('.btn-yellow').click(function() {
    $('html, body').animate({
        scrollTop: $('.connect').offset().top
    }, 1000);
});
$('.nav-about').click(function() {
    $('html, body').animate({
        scrollTop: $('.retirement').offset().top
    }, 1000);
});
$('.nav-home').click(function() {
    $('html, body').animate({
        scrollTop: $('.security').offset().top
    }, 1000);
});
$('.nav-tech').click(function() {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 1000);
});
$('.nav-community').click(function() {
    $('html, body').animate({
        scrollTop: $('.community').offset().top
    }, 1000);
});