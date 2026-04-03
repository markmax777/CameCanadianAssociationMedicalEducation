/**
 * CAME Revamp Theme Scripts
 *
 * @package CAME_Revamp
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        
        // Mobile menu toggle
        $('.menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.main-navigation').toggleClass('active');
        });

        // Smooth scroll for anchor links
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
                location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });

        // Back to top button
        var backToTop = $('<button class="back-to-top" aria-label="Back to Top">↑</button>');
        $('body').append(backToTop);

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                backToTop.addClass('show');
            } else {
                backToTop.removeClass('show');
            }
        });

        backToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 800);
        });

        // Add animation classes on scroll
        var animateElements = $('.animate-on-scroll');
        
        function checkAnimation() {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            animateElements.each(function() {
                var elementTop = $(this).offset().top;
                
                if (elementTop < scrollTop + windowHeight - 100) {
                    $(this).addClass('animated');
                }
            });
        }

        $(window).on('scroll', checkAnimation);
        checkAnimation(); // Check on page load

    });

})(jQuery);
