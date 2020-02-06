$(document).ready(function() {
 /*
        ################
        Add navbar background color when scrolled
        */
       $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
          $(".navbar").addClass("bg-primary");
        } else {
          $(".navbar").removeClass("bg-primary");
        }
      });
      // If Mobile, add background color when toggler is clicked
      $(".navbar-toggler").click(function() {
        if (!$(".navbar-collapse").hasClass("show")) {
          $(".navbar").addClass("bg-primary");
        } else {
          if ($(window).scrollTop() < 56) {
            $(".navbar").removeClass("bg-primary");
          } else {
          }
        }
      });
      // ############
    });