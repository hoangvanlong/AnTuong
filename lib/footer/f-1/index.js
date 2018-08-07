function CCFooter1() {

};

$(function() {
    CCFooter1();
})

$(window).resize(function() {})
$(function() {
    if ($('.canhcam-footer-1 .owl-carousel').length) {
        $('.canhcam-footer-1 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 2,
            loop: true,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,
            responsive: {
                480: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1140: {
                    items: 6
                }
            }
        });
    }

});