$(function() {
    if ($('.canhcam-sale-detail-1 .owl-carousel').length) {
        $('.canhcam-sale-detail-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: false,
            dot: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,

        });
    }

});