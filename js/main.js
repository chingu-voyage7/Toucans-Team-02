$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    center: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:3
        },
        1200:{
            items:4
        },
        1500:{
            items:5
        },
        1900:{
            items:6
        }
    }
})
  });