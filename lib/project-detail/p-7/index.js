$(document).ready(function() {
    $('.canhcam-project-detail-7 .img-gallery').lightGallery({
        thumbnail: false,
        selector: '.item'
    });
})

$(document).ready(function() {

    $(".canhcam-project-detail-7 .vid-gallery").lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        width: '700px',
        height: '470px',
        mode: 'lg-fade',
        counter: false,
        share: false,
        zoom: false,
        fullscreen: false,
        download: false,
        startClass: '',
        enableSwipe: false,
        enableDrag: false,
        speed: 500,
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: '.item'
    });

});