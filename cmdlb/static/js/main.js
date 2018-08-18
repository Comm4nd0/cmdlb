/* ================================================

Template Name: MTheme
Description: Multi-Purpose One Page HTML5 Template
Template URI: 
Author: MTheme
Author URI: https://m-theme.com
Version: 1.0.0

================================================ */

(function($) {
    'use strict';

    // scrollspy
    $('body').scrollspy({ target: '#navigation' });

    // smooth scrolling
    $(function() {
        $(".navbar-nav a, .scroll-icon a, .go-to-top a, .go-to-top-skew a, #scroll-down-btn a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });
    
    // Start preloader
    $(window).on('load', function() {
        $('#preloader-container .preloader').fadeOut();
        $('#preloader-container').delay(150).fadeOut('slow');
    });

    // Start got to top button
    if ($('.go-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.go-to-top').fadeIn('slow');
                } else {
                    $('.go-to-top').fadeOut('slow');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }

    // Option box
    $(document).ready(function(){
        $('.switcher-btn').on('click', function(e){
            e.preventDefault();
            if ($('.option-box').hasClass('opened')) {
                $('.option-box').animate({left: -200 +"px"}, 100).removeClass('opened');
            } else {
                $('.option-box').animate({left: 0 +"px"}, 100).addClass('opened');
            }
        });
    });

    // color options
    $("li.change-color").click(function(){
        $("link[href*='theme-color']").attr("href", $(this).attr("data-value"));
    });

    // Nicescroll
    $("html").niceScroll({
        cursorcolor: "#00171f", // change cursor color in hex
        cursorborder: "1px solid #00171f", // css definition for cursor border
        autohidemode: false // do not hide
    });

    // WOW animation
    new WOW().init();
    
    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    //Initialize filterizr with default options
    $(function() {
        $('.filtr-container').filterizr();
    });

    // Magnific Popup
    // Image Popup initialization
    $('.filtr-item-preview').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    // Video Popup initialization
    $('.video-play-icon a').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    // Portfolio load more btn
    $(function() {
        $("#portfolio-btn").click(function() {
            var btn = $(this);
            btn.button('loading');
            var resetButton = function() {
                btn.button('reset');
            };
            window.setTimeout(resetButton, 3000);
        });
    });

    // skills circles
    // first skill
  	$("#graphic-design").circliful({
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        percent: 92,
        backgroundColor: '#00171f',
        foregroundColor: '#ffffff',
        fontColor: '#ffffff',
        icon: 'f1fc',
        iconSize: 40,
        iconColor: '#ffffff',
        iconPosition: 'middle',
        text: 'graphic design',
        textColor: '#ffffff',
        textStyle: 'font-size: 16px; text-transform: uppercase',
        textBelow: true
    });

    // second skill
  	$("#web-design").circliful({
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        percent: 96,
        backgroundColor: '#00171f',
        foregroundColor: '#ffffff',
        fontColor: '#ffffff',
        icon: 'f108',
        iconSize: 40,
        iconColor: '#ffffff',
        iconPosition: 'middle',
        text: 'web design',
        textColor: '#ffffff',
        textStyle: 'font-size: 16px; text-transform: uppercase',
        textBelow: true
    });

    // third skill
  	$("#web-dev").circliful({
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        percent: 85,
        backgroundColor: '#00171f',
        foregroundColor: '#ffffff',
        fontColor: '#ffffff',
        icon: 'f121',
        iconSize: 45,
        iconColor: '#ffffff',
        iconPosition: 'middle',
        text: 'web development',
        textColor: '#ffffff',
        textStyle: 'font-size: 16px; text-transform: uppercase',
        textBelow: true
    });

    // fourth skill
  	$("#mobile-dev").circliful({
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        percent: 80,
        backgroundColor: '#00171f',
        foregroundColor: '#ffffff',
        fontColor: '#ffffff',
        icon: 'f10b',
        iconSize: 50,
        iconColor: '#ffffff',
        iconPosition: 'middle',
        text: 'mobile development',
        textColor: '#ffffff',
        textStyle: 'font-size: 16px; text-transform: uppercase',
        textBelow: true
      });

     // Initialize Swiper
     // Initialize swiper
     var swiper = new Swiper('.slider-swiper', {
         autoplay: {
            delay: 4000,
            disableOnInteraction: false,
         }
     });
    
     // Initialize Testimonials Swiper
     var swiper = new Swiper('.testimonials-swiper', {
         slidesPerView: 1,
         spaceBetween: 30,
         loop: true,
         autoplay: {
             delay: 3000,
         },
         pagination: {
             el: '.testimonials-swiper .swiper-pagination',
             clickable: true,
         }
     });

     // Initialize Brands Swiper
      var swiper = new Swiper('.brands-swiper', {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }
      });

      // Bar skills
      $('.skillbar').skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
      });

})(jQuery);
