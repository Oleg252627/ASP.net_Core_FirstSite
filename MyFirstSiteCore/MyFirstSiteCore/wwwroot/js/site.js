// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {

    var top = $(document).scrollTop();
    var batas = 200;
    var navbar = $('.navbar-main');
    var navbarnav = $('.navbar-nav');
    var header = $('.header');


    if (top > batas) {
        navbar.addClass('stiky');
    }
    $(window).scroll(function () {
        top = $(document).scrollTop();


        if (top > batas) {
            navbar.addClass('stiky');
        } else {
            navbar.removeClass('stiky');
            if (header.hasClass('header-2')) {
                navbarnav.removeClass('ml-auto');
            }
            if (header.hasClass('header-5')) {
                navbarnav.removeClass('ml-auto');
            }
        }

    });

    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });

    $("#oc-fullslider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'rollOut',
        pagination: false,
        nav: true,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"]
    });
    var icon = $(".rs-icon-info-3");
    icon.mouseover(function(parameters) {
        icon.find('.bounce').removeClass('bounce');
        var e = $(this).find('.info-icon');
        console.log(e);
        e.addClass('bounce');
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        removalDelay: 300,
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '';
            }
        }
    });
    $('#contactForm').submit(function(event) {
        $('.opovechenie').css('display', 'block');
        event.preventDefault();
    });
})
