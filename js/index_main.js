let mySwiper = new Swiper('.waimai-container', {
  direction: 'vertical',
  onSlideChangeEnd: function(e) {
    $(".swiper-slide").eq(e.activeIndex).addClass("animate").siblings().removeClass("animate active");
  }
});

$(function() {
  $(".loading").addClass("animate").on("animationend", function() {
    $(this).fadeOut(600);
    $(".welcome").addClass("animate");
  });
  $(".welcome .circle .btn").on("longTap", function() {
    let rider_box = document.querySelector(".welcome .rider_box");
    rider_box.style.transition = "all 1s linear";
    rider_box.style.transform = "translateY(250%) scale(2,2)";
    rider_box.style.opacity = 0;
    rider_box.addEventListener("transitionend", function() {
      $(".welcome").fadeOut(600);
      $(".swiper-wrapper .page1").addClass("animate");
    }, false);
  });

  $(".page3").on("click", function() {
    $(".page3").addClass("active");
  });
});
