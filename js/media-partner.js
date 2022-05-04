$( document ).ready(function() {
    new Splide('.top', {
        type   : 'loop',
        drag   : false,
        perPage: 5,
        arrows: false,
        pagination: false,
        direction: 'rtl',
        gap: '1rem',
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount(window.splide.Extensions);

    new Splide('.bot', {
        type   : 'loop',
        drag   : false,
        perPage: 5,
        arrows: false,
        pagination: false,
        direction: 'ltr',
        gap: '1rem',
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount(window.splide.Extensions);
});