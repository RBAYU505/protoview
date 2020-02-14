$(document).ready(function() {

      //Navbar header section

      /* Add navbar background color when scrolled */
       $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
          $(".navbar").addClass("bg-bpd");
        } else {
          $(".navbar").removeClass("bg-bpd");
        }
      });

      /* If Mobile, add background color when toggler is clicked */
      $(".navbar-toggler").click(function() {
        if (!$(".navbar-collapse").hasClass("show")) {
          $(".navbar").addClass("bg-bpd");
        } else {
          if ($(window).scrollTop() < 56) {
            $(".navbar").removeClass("bg-bpd");
          } else {
          }
        }
      });
      // #####

      // Card Slider Section
      $("#carousel-2").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $(".carousel-item").length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $(".carousel-item")
                .eq(i)
                .appendTo(".carousel-inner");
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });
      // #####

    });