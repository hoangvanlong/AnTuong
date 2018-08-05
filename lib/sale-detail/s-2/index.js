$(function() {
    if ($('.canhcam-carousel-2 .owl-carousel').length) {
        $('.canhcam-carousel-2 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: false,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
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
                992: {
                    items: 3,
                    nav: true,
                    dots: false
                }
            }
        });
    }

});