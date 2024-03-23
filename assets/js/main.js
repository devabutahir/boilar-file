
//- 01 --PreLoader---//
//- 02 --Custom Header Sticky---//
//- 03 --Window On Scroll---//
//- 04 --Odometer Counter---//
//- 05 --Magnifique Popup---//
//- 06 --Header Auto Active Class---//
//- 07 --Custom Navbar Header---//
//- 08 --Swipper Slider---//
//- 09 --Custom Reply Box---//
//- 10 --Accordion---//
//- 11 --Dropdown Toggle---//
//- 12 --Current Year---//


$(document).ready(() => {
  "use strict";

      //--== Preloader ==--//
      setTimeout(function() {
        $('#preloader').fadeToggle();
      }, 2500);
      //--== Preloader ==--//

      //--== Sticky Header ==--//
        var fixed_top = $(".one__header");
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }
      //--== Sticky Header ==--//
      
      //--== Window On Scroll ==--//
        $(window).on("scroll", function () {

        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }

        if ($(this).scrollTop() < 600) {
          ScrollTop.removeClass("active");
        } else {
          ScrollTop.addClass("active");
        }

      });
      //--== Window On Scroll ==--//

      //--== Aos Animation ==--//
      $(document).ready(function () {
        $('.title').attr({
           "data-aos": "zoom-in",
           "data-aos-duration": "2000"
        });
    
        AOS.init({
          once: true,
        });
     });
      //--== Aos Animation ==--//

      //--== Odometer Counter ==--//
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
      //--== Odometer Counter ==--//

      //--== Magnigiq Popup Initial ==--//
        $('.popup-video').magnificPopup({
          type: 'iframe'
        });

        $('.popup_img').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            }
        });
      //--== Magnigiq Popup Initial ==--//
      
      //--== Navbar Header Auto Active Class Added ==--//
      var curUrl = $(location).attr('href');
      var terSegments = curUrl.split("/");
      var desired_segment = terSegments[terSegments.length - 1];
      var removeGarbage = desired_segment.split(".html")[0] + ".html";
      var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
      var targetClass = checkLink.addClass('active');
      targetClass.parents('.menu-item').addClass('active-parents');
      $('.active-parents > button').addClass('active'); 
      //--== Navbar Header Auto Active Class Added ==--//

      //--== Custom Navbar Header ==--//
      $('.navbar-toggle-btn').on('click', function () {
        $('.navbar-toggle-item').slideToggle(300);
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('open');
      });
      $('.menu-item button').on('click', function () {
        $(this).siblings("ul").slideToggle(300);
      });
      //--== Custom Navbar Header ==--//
   
      //--== Swipper SLider Init Area ==--//
      //--Name: --/
      var swiper = new Swiper(".free__livewrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 48,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 1400,
        },
        breakpoints: {
          1400: {
              slidesPerView: 2,
              spaceBetween: 48,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 24,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          576: {
              slidesPerView: 1,
              spaceBetween: 14,
          },
      }
      });
      //--Name: --/
      var swiper = new Swiper(".educational__wrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 24,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
        autoplay: {
          delay: 1200,
        },
        breakpoints: {
          1400: {
              slidesPerView: 3,
              spaceBetween: 24,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 14,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 14,
          },
          576: {
              slidesPerView: 2,
              spaceBetween: 14,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
      }
      });
      //--Name: --/
      //--== Swipper SLider Init Area ==--//

      //--== Custom Comment / Review Reply Box ==--//
      $(".reply").on("click", function () {
        $(this).toggleClass("reply-active");
        $(this).parent().next(".reply__content").slideToggle();
      });
      //--== Custom Comment / Review Reply Box ==--//

      //--== Custom Accordion ==--//
      $('.accordion-single .header-area').on('click', function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
          $(this).closest(".accordion-single").removeClass("active");
          $(this).next(".content-area").slideUp();
        } else {
          $(".accordion-single").removeClass("active");
          $(this).closest(".accordion-single").addClass("active");
          $(".content-area").not($(this).next(".content-area")).slideUp();
          $(this).next(".content-area").slideToggle();
        }
      });
      //--== Custom Accordion ==--//

      //--== DropDown Toggle ==--//
      $('.dropdown-toggle').dropdown()
      //--== DropDown Toggle ==--//

      //--== Current Year ==--//
      $(".currentYear").text(new Date().getFullYear());
      //--== Current Year ==--//

});

