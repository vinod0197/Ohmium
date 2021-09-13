;(function () {
  "use strict"

  var ELTRON = {
    init: function () {
      this.Basic.init()
    },

    Basic: {
      init: function () {
        this.preloader()
        this.BackgroundImage()
        this.StickyMenu()
        this.MobileMenu()
        this.MianSlider()
        this.videoBox()
        this.bannerParalax()
        this.ProjectFilter()
        this.Animation()
        this.SerachForm()
        this.TestimonialSlider()
        this.counterUp()
        this.FeatureItemSlider()
        this.partnerItemSlider()
        this.scrollTop()
        this.GoogleMap()
      },
      preloader: function () {
        jQuery(window).on("load", function () {
          jQuery("#preloader").fadeOut("slow", function () {
            jQuery(this).remove()
          })
        })
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")"
          )
        })
      },
      StickyMenu: function () {
        jQuery(window).on("scroll", function () {
          if (jQuery(window).scrollTop() > 100) {
            jQuery(".header_style_one").addClass("stickymenu-on")
          } else {
            jQuery(".header_style_one").removeClass("stickymenu-on")
          }
        })
      },
      MobileMenu: function () {
        $(".s2-open_mobile_menu").on("click", function () {
          $(".el-mobile_menu_wrap").toggleClass("mobile_menu_on")
        })
        $(".s2-open_mobile_menu").on("click", function () {
          $("body").toggleClass("mobile_menu_overlay_on")
        })
        if ($(".el-mobile_menu li.dropdown ul").length) {
          $(".el-mobile_menu li.dropdown").append(
            '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
          )
          $(".el-mobile_menu li.dropdown .dropdown-btn").on(
            "click",
            function () {
              $(this).prev("ul").slideToggle(500)
            }
          )
        }
      },
      MianSlider: function () {
        jQuery("#slider-main").owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          dots: false,
          autoplay: true,
          navSpeed: 1000,
          smartSpeed: 2000,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>",
          ],
        })
      },
      bannerParalax: function () {
        jQuery(".el-parallax-section").jarallax({
          speed: 0.5,
        })
      },
      videoBox: function () {
        jQuery(".video_box").magnificPopup({
          disableOn: 200,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        })
      },
      ProjectFilter: function () {
        var $grid = $(".grid").imagesLoaded(function () {
          $grid.masonry({
            percentPosition: true,
            itemSelector: ".grid-item",
            columnWidth: ".grid-sizer",
          })
        })
        var $grid = $(".grid").isotope({
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        })
        var filterFns = {
          numberGreaterThan50: function () {
            var number = $(this).find(".number").text()
            return parseInt(number, 10) > 50
          },
          ium: function () {
            var name = $(this).find(".name").text()
            return name.match(/ium$/)
          },
        }
        $(".button-group").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter")
          filterValue = filterFns[filterValue] || filterValue
          $grid.isotope({ filter: filterValue })
        })

        $(".button-group").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup)
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked")
            $(this).addClass("is-checked")
          })
        })
      },

      Animation: function () {
        if ($(".wow").length) {
          var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          })
          wow.init()
        }
      },
      TestimonialSlider: function () {
        jQuery("#testimonial-slideid").owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          dots: false,
          autoplay: false,
          navSpeed: 800,
          smartSpeed: 1000,
          navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
          ],
        })
      },
      counterUp: function () {
        jQuery(".counter").counterUp({
          delay: 50,
          time: 2000,
        })
      },
      SerachForm: function () {
        $(".el-search-btn").on("click", function () {
          $(".search-body").toggleClass("search-open")
        })
      },
      FeatureItemSlider: function () {
        $("#features-slide-id").owlCarousel({
          margin: 30,
          responsiveClass: true,
          nav: false,
          dots: true,
          autoplay: false,
          smartSpeed: 1000,
          responsive: {
            0: {
              items: 1,
            },
            400: {
              items: 1,
            },
            600: {
              items: 1,
            },
            700: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          },
        })
      },
      partnerItemSlider: function () {
        $("#partner-slide-id").owlCarousel({
          margin: 70,
          responsiveClass: true,
          nav: false,
          dots: true,
          autoplay: false,
          smartSpeed: 1000,
          responsive: {
            0: {
              items: 1,
            },
            400: {
              items: 1,
            },
            600: {
              items: 1,
            },
            700: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          },
        })
      },
      scrollTop: function () {
        $(window).on("scroll", function () {
          if ($(this).scrollTop() > 200) {
            $(".scrollup").fadeIn()
          } else {
            $(".scrollup").fadeOut()
          }
        })

        $(".scrollup").on("click", function () {
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            800
          )
          return false
        })
      },
      GoogleMap: function () {
        function isMobile() {
          return "ontouchstart" in document.documentElement
        }
        function init_gmap() {
          if (typeof google == "undefined") return
          var options = {
            center: [40.712784, -74.005941],
            zoom: 10,
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            },
            navigationControl: true,
            scrollwheel: false,
            streetViewControl: true,
          }
          if (isMobile()) {
            options.draggable = false
          }
          $("#googleMaps").gmap3({
            map: {
              options: options,
            },
            marker: {
              latLng: [40.712776, -74.005974],
              options: { icon: "assets/img/map.png" },
            },
          })
        }
        init_gmap()
      },
    },
  }
  jQuery(document).ready(function () {
    ELTRON.init()
  })
})()

var burgerMenu = document.getElementById("burger-menu")
var overlay = document.getElementById("menu")
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close")
  overlay.classList.toggle("overlay")
  if (this.classList.contains("close")) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "auto"
  }
})
