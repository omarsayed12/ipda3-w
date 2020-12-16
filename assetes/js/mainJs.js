$('.owl-services').owlCarousel({
    loop: true,
    margin: 26,
    rtl: true,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})
$('.owl-client').owlCarousel({
    loop: true,
    margin: 26,
    rtl: true,
    nav: true,
    responsiveClass: true,
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
            items: 4,
            nav: true,
            loop: true
        }
    }
})