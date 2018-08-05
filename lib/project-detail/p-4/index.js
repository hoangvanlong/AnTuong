function changeItemBoxes5() {
    if ($(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
        var geth = $('.canhcam-project-detail-4 .tabs-content .part-list').outerHeight();
        $('.canhcam-project-detail-4 .tabs-content .top-project').each(function() {
            var countitem = $(this).find('.item ').length
            $(this).find('.item figure').each(function() {
                $(this).css({
                    'height': geth
                })
            });
        })
    } else {
        $('.canhcam-project-detail-4 .tabs-content .part-list .item figure').each(function() {
            $(this).css({
                'height': 'initial'
            })
        });
    }
}

$(document).ready(function() {
    changeItemBoxes5()
});

$(window).resize(function() {
    changeItemBoxes5()
})

$(document).ready(function() {
    $('.canhcam-project-detail-4 .tab-content').lightGallery({
        thumbnail: false,
        selector: '.item'
    });
})