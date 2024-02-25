Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__flter-btn').on('click', function () {
    $('.directions__flter-btn').removeClass('directions__flter-btn--active')
    $(this).addClass('directions__flter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
          },
        },
      ]
  })

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    // responsive:
    // [
    //   {
    //     breakpoint: 700,
    //     settings: {

    //     },
    //   },
    // ]
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('program__acc-link--active')
    $(this).children('.program_acc-text').slideToggle()
  })

  $("a[href^='#']").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr("href"),
      top = $(id).offset().top
    $('html, body').animate({ scrollTop: top }, 1500)
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);


  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault()
    $(".header__top").toggleClass("header__top--open")
    $(".overlay").toggleClass("overlay--show")
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })

})