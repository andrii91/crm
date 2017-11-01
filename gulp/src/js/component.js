$(document).ready(function () {
  // init nav object from dom
  var nav = $('nav');
  // get heigth of the nav
  var navHeight = nav.outerHeight();

  // click-trigger
  $('a[href*="#"]:not([href="#"])').click(function (event) {
    scrollToSection(this);
    event.preventDefault();
  });

  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  // get target position and scrolls to it
  function scrollToSection(self) {
    // get the target href
    var href = $(self).attr('href');

    // get the target position
    var targetPos = $(href).offset().top - navHeight + 20;

    // scroll to target
    $('html, body').animate({
      scrollTop: targetPos
    }, 400);
  }

  /*
   * Updates active section on scroll
   */
  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  /*
   * Updates active section on scroll
   */
  function activateCurrentSection() {
    var id; // init the id of the element that will be activated

    // get all sections
    var sections = $('.section');

    // store current position on the page when scroll is triggered
    var pos = $(document).scrollTop();

    /*
     * Exception: if last section is <100% of the screen height
     * make it active when 50% of it is visible.
     * Otherwise the last section would never activate.
     */
    var lastSection = sections[sections.length - 1]; // get last section
    var lastSectionTooSmall = $(lastSection).height() < $(window).height();

    if (lastSectionTooSmall) {
      var lastSectionTopPos = $(lastSection).offset().top;
      // lastSectionTriggerPos is true if 50% of the last section is visible
      var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height() / 2);
      var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
    }

    if (lastSectionTooSmall && lastSectionInView) {
      id = $(lastSection).attr('id');

    } else { // else last section is >= 100% of the view check all sections to find the top one
      sections.each(function () {
        var top = $(this).offset().top - navHeight; // get the top & bottom position of the section
        var bottom = top + $(this).outerHeight();

        /*
         * if the current position is higher (deeper on the page) than the top of the section
         * and it is smaller (heiger on the page) than the bottom of the section
         * it is the active section.
         */
        if (pos >= top && pos <= bottom) {
          id = $(this).attr('id'); // store the id of this section
        }
      });
    }

    /*
     if an id was set before, activate the section in the nav
     */
    if (id) {
      nav.find('li').removeClass('active');
      nav.find('a[href="#' + id + '"]').parent('li').addClass('active');
    } else {
      nav.find('li').removeClass('active');
    }
  }

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.review-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: false,
    margin: 130,
    responsive:{
        600:{
            margin:27
        },
      1200:{
            margin:130
        }
    }
  });

  if ($(window).width() < 1200) {
    $('.carousel-automation').addClass('owl-carousel');

    $('.carousel-automation.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        // breakpoint from 768 up
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });
    $('.integration-carousel.owl-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        }
      }
    });

  } else {
    $('.carousel-automation').removeClass('owl-carousel')
  }
  if ($(window).width() < 768) {
    $('.integration-carousel').addClass('owl-carousel');
    $('.author-carousel').addClass('owl-carousel');
  } else {
    $('.integration-carousel').removeClass('owl-carousel');
    $('.author-carousel').removeClass('owl-carousel');
  }

  if ($(window).width() < 768) {
    $('.clients-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        }
      }
    });
    $('.author-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      navText: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        }
      }
    });

    $('.for_whom-carousel').addClass('owl-carousel')
  } else {
    $('.for_whom-carousel').removeClass('owl-carousel')
  }

  $('.carousel-automation.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: true,
    navText: false,
    margin: 0,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      }
    }
  });
  $('.integration-carousel.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    navText: false,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      }
    }
  });
  $('.for_whom-carousel.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    navText: false,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      }
    }
  });



  /*  $(window).resize(function () {
      $('.carousel-automation.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: true,
        navText: false,
        margin: 0,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: 1,
          },
          // breakpoint from 768 up
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          }
        }
      });
      $('.integration-carousel.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        navText: false,
        margin: 0,
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 2,
          }
        }
      });

      if ($(window).width() < 1200) {
        $('.carousel-automation').addClass('owl-carousel')
      } else {
        $('.carousel-automation').removeClass('owl-carousel')
      }
      if ($(window).width() < 768) {
        $('.integration-carousel').addClass('owl-carousel')
      } else {
        $('.integration-carousel').removeClass('owl-carousel')
      }

    });*/

  $('.more').click(function () {
    $(this).parents('p').toggleClass('active');
  });
  $('.scroll-btn').click(function () {
    var destination = $("#contacts").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });


  $('.mob-btn').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.mob-overflow').toggleClass('active');
  });
  if ($(window).width() < 1200) {
    $('.menu li, .mob-btn.active').click(function () {
      $('.mob-btn').removeClass('active');
      $('.menu').removeClass('active');
      $('.mob-overflow').removeClass('active');

    });

  }

});