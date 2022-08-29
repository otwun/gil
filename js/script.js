$(document).ready(function () {
  // $(".explain").hide();
  $(".main-img").on("click", function () {
    $(".explain").toggle();
  });

  $(".go-p").on("click", function () {
    $(".star").css("opacity", "100%");
    $(".star").css("z-index", "15");
  });
  $(".go-b").on("click", function () {
    $(".star").css("opacity", "0%");
    $(".star").css("z-index", "-5");
  });
});
