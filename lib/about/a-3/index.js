$(function() {
    if ($('.canhcam-about-3 .owl-carousel').length) {
        $('.canhcam-about-3 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: false,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                480: {
                    items: 2
                },
                768: {
                    items: 3,
                    nav: true,
                    dots: false
                },
                992: {
                    items: 4
                }
            }
        });
    }

});