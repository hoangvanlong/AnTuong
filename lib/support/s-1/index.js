$(document).ready(function() {
    $('.content:not(:first) .lead').hide();
    $('.lead').hide();
    $('.content').click(function() {
        if ($(this).next().is(':hidden') === true) {
            $('.lead').slideUp('fast');
            $('.content').removeClass('active');
            $(this).next().slideDown('fast');
            $(this).addClass('active');
        } else {
            $('.content').removeClass('active');
            $(this).next().slideUp('fast');
        }
    });
})