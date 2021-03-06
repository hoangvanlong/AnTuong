$(document).ready(function() {
    // Cache selectors
    var lastId,
        topMenu = $("#greenland-scroll"),
        topMenuHeight = topMenu.outerHeight() + $('header').outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        allHeight = $('.fixedheader').height() + $('.canhcam-nav-1').height(),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop - allHeight
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 60;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class -- This is the part.
            menuItems
                .parent().find('a').removeClass("active")
                .find('a').end().filter("[href='#" + id + "']").addClass("active");
        }
    });
})