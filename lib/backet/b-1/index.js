$(document).ready(function() {
    $('.canhcam-backet-1 .info .nav li').on('click', function() {
            $(this).parents('.nav').find('li').removeClass('active')
            $(this).addClass('active')
        })
        // $(".button-wrap .btn.btn-ctv").hover(function() {
        //     alert("testing the mouseover");
        //     return false;
        // });
    $(".modal .button-wrap .btn.btn-ctv").mouseover(function() {
        $(this).css({
            "background": "#ffc71e"
        })
    });
    $(".modal .button-wrap .btn.btn-ctv").mouseout(function() {
        $(this).css({
            "background": "#ebebeb"
        })
    });
})