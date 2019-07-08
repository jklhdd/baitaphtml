$(document).ready(function() {

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });

})