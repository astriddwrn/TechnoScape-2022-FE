document.addEventListener('DOMContentLoaded', function () {
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

$( document ).ready(function() {
    $("#ask-us-button").click(() => {
      $("#ask-us-modal").toggleClass("hidden");
    })
    $("#close-ask-us-modal").click(() => {
      $("#ask-us-modal").toggleClass("hidden");
    })
    $("#navToggler").click(() => {
      $("#navMobile").slideToggle("slow");
    })
    $("#xButtonNav").click(() => {
      $("#navMobile").slideToggle("slow");
    })
});