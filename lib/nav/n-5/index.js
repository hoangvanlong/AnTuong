function checkTab2() {
    $('.canhcam-nav-5 a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        console.log(e)
    })
}

$(document).ready(function() {
    checkTab2()
});