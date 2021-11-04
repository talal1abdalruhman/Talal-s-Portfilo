$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 35) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    });

    // scroll-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl-carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Freelancer", "Designer", "Android Developer", "Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["Freelancer", "Designer", "Android Developer", "Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});