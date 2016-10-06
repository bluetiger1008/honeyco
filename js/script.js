(function () {
    // Smooth scrolling of anchor links
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var headerOffset = 107;
                if (width = $(window).width() > 992) {
                    headerOffset = 78
                }
                $('html, body').animate({
                    scrollTop: target.offset().top - headerOffset
                }, 1000);
                return false;
            }
        }
    });

    // On page load:
    $(document).ready(function () {
        $(window).scroll(function () {
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

        $('.carousel').carousel({
            interval: false
        });
        $('.nav-link').click(function () {
            $('.menu-link').bigSlide({'state': 'closed'});
        });
    });
})();


