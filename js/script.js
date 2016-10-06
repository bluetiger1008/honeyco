$(document).ready(function () {
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
    $('.swipebox-video').click(function (e) {
        e.preventDefault();
        $.swipebox([
            {href: 'https://vimeo.com/29193046', title: 'My Caption', rel: 'vimeo'}
        ]);
    });
});

$('.carousel').carousel({
    interval: false
});

$('.btn-learn').click(function () {
    $('html, body').animate({
        scrollTop: $('.connect').offset().top
    }, 1000);
});

var close_setting = {
    'state': 'closed'
};

var width = $(window).width();
var headeroffset;
if (width > 992) {
    headeroffset = 78;
    mobile_flag = 0;
}
else {
    headeroffset = 107;
    mobile_flag = 1;
}

$(window).on('resize', function () {
    width = $(window).width();
    if (width > 992) {
        headeroffset = 78;
        mobile_flag = 0;
    }
    else {
        headeroffset = 107;
        mobile_flag = 1;
    }
});

$('.nav-join').click(function () {
    scrolling(mobile_flag, $('.connect'));
    $('.menu-link').bigSlide(close_setting);
});

$('.btn-discover').click(function () {
    $('html, body').animate({
        scrollTop: $('.connect').offset().top
    }, 1000);
});

function scrolling(mobile_flag, element) {
    if (mobile_flag == 1) {
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: element.offset().top - headeroffset
            }, 1000);
        }, 300);
    }
    else {
        $('html, body').animate({
            scrollTop: element.offset().top - headeroffset
        }, 1000);
    }
}

$('.nav-about').click(function () {
    scrolling(mobile_flag, $('.retirement'));
    $('.menu-link').bigSlide(close_setting);
});

$('.nav-home').click(function () {
    $('.menu-link').bigSlide(close_setting);
    scrolling(mobile_flag, $('.security'));
});

$('.nav-tech').click(function () {
    $('.menu-link').bigSlide(close_setting);
    scrolling(mobile_flag, $('.gallery'));
});

$('.nav-community').click(function () {
    $('.menu-link').bigSlide(close_setting);
    scrolling(mobile_flag, $('.community'));
});
