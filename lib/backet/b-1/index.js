$(document).ready(function() {
    $('.canhcam-backet-1 .info .nav li').on('click', function() {
        $(this).parents('.nav').find('li').removeClass('active')
        $(this).addClass('active')
    })
})