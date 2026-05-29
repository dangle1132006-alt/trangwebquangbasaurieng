$(function () {
    var $siteMenu = $('.site-menu').first();

    if ($siteMenu.length && !$('.mobile-menu-button').length) {
        var $button = $('<button class="mobile-menu-button" type="button" aria-label="Mo menu">&#9776;</button>');
        var $panel = $('<div class="mobile-menu-panel" aria-label="Menu điện thoại"></div>');

        $siteMenu.find('a').each(function () {
            var $link = $(this).clone();
            $link.removeClass().find('span, svg').remove();
            $panel.append($link);
        });

        $('header nav').append($button);
        $('body').append($panel);

        $button.on('click', function () {
            $panel.stop(true, true).slideToggle(180);
        });

        $panel.on('click', 'a', function () {
            $panel.slideUp(160);
        });

        $(window).on('resize', function () {
            if ($(window).width() >= 1024) {
                $panel.hide();
            }
        });
    }

    $('.origin-nav').each(function () {
        var $nav = $(this);
        var $panel = $nav.find('.origin-panel');

        $nav.on('mouseenter focusin', function () {
            $panel.stop(true, true).fadeIn(150).css('display', 'block');
        });

        $nav.on('mouseleave focusout', function () {
            $panel.stop(true, true).fadeOut(150);
        });

        $nav.find('.origin-trigger').on('click', function () {
            $panel.stop(true, true).fadeToggle(150);
        });
    });

});
