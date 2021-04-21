$(document).ready(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
  });

  // Sticky Nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#nav").addClass("bg-white");
      $("#nav a").addClass("text-primary");
    } else {
      $("#nav").removeClass("bg-white");
      $("#nav a").removeClass("text-primary");
    }
  });

  // navbar toggler
  $(".navbar-toggler").click(function () {
    $("#nav").toggleClass("bg-white");
    $("#nav a").toggleClass("text-primary");
  });

  // Go Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#go-top").fadeIn();
    } else {
      $("#go-top").fadeOut();
    }
  });
  $("#go-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 600);
  });
});