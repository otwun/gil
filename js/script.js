$(document).ready(function () {
  $(".flip").on("click", function () {
    $(".intro").css("opacity", "0%");
    $(".intro").css("z-index", "0");
    $(".main").css("opacity", "100%");
    // $(".star").css("opacity", "100%");
  });
  $(".go-p").on("click", function () {
    $(".star").css("opacity", "100%");
    $(".star").css("z-index", "15");
    $(".st1, .st2, .st3, .st4, .st5").addClass("star-ani");
    $(".star-title, .t1, .t2, .t3, .t4, .t5, .t6, .t7").addClass("text");
    // $(".text").css("animation-play-state", "running");
  });
  $(".go-b").on("click", function () {
    $(".star").css("opacity", "0%");
    $(".star").css("z-index", "-5");
    $(".star-title, .t1, .t2, .t3, .t4, .t5, .t6, .t7").removeClass("text");
    $(".st1, .st2, .st3, .st4, .st5").removeClass("star-ani");
  });
});
