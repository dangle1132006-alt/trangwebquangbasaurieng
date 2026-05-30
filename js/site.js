$(function () {
    var $siteMenu = $('.menu-chinh').first();

    if ($siteMenu.length && !$('.nut-menu-di-dong').length) {
        var $button = $('<button class="nut-menu-di-dong" type="button" aria-label="Mo menu">&#9776;</button>');
        var $panel = $('<div class="bang-menu-di-dong" aria-label="Menu điện thoại"></div>');

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

    $('.dieu-huong-xuat-xu').each(function () {
        var $nav = $(this);
        var $panel = $nav.find('.bang-xuat-xu');

        $nav.on('mouseenter focusin', function () {
            $panel.stop(true, true).fadeIn(150).css('display', 'block');
        });

        $nav.on('mouseleave focusout', function () {
            $panel.stop(true, true).fadeOut(150);
        });

        $nav.find('.nut-xuat-xu').on('click', function () {
            $panel.stop(true, true).fadeToggle(150);
        });
    });

});
