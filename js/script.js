(function () {
    // Smooth scrolling of anchor links
    $('a[href*="#"]:not([href="#"])[data-scroll]').click(function () {
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

        if($(window).scrollTop() > 59) {
            $('.nav-bar').addClass('navbar-scrolled');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 59) {
                $('.nav-bar').addClass('navbar-scrolled');
            }
            if ($(window).scrollTop() < 60) {
                $('.nav-bar').removeClass('navbar-scrolled');
            }
        });

        var bigSlideAPI = ($('.mobile-menu-btn').bigSlide()).bigSlideAPI;

        $('.big-slide-nav-link').on('click', 'touchstart', function() {
            bigSlideAPI.view.toggleClose();
        });
       
        $("#connectForm").submit(function(event) {
          $("#connectSubmit").html('<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i><span class="sr-only">Loading...</span>');
          $("#connectSubmit").prop( "disabled", true );
          var formData = $("#connectForm").serialize();
          $.ajax({
            type : 'POST', // HTTP method, always use POST for our form
            url : 'https://visitor2.constantcontact.com/api/signup',
            data : formData, // serialized form data
            dataType : 'json', // the type of data we expect back from the server
            success: function(data){
              $("#connectForm").replaceWith("<p>Thank you for joining our mailing list!</p>");
            },
            error: function(response) {
              $("#connectForm").replaceWith("<p>Something went wrong! Please try again later.</p>");
            }
          });
          event.preventDefault();
        });
    });
})();


