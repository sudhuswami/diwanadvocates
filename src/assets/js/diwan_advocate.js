// $(document).ready(function () {
//   $(".customer-logos").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     arrows: false,
//     dots: false,
//     pauseOnHover: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

// ================= nav bar sticky================>

window.addEventListener("scroll", function () {
  var header = document.getElementById("isSticky");

  header.classList.toggle("position-fixed", window.scrollY > 0);
});

// ================= nav bar toggle================>

$(".menu-pages li").click(function (event) {
  event.stopPropagation();
  $(this).children(".about-sub-menu").slideToggle("slow");
});

// <================= wow animation================>

new WOW().init();

// <========scroll to target=====================>

function scrollToForm() {
  document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
}

// <========scroll to top=====================>

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#bacck2top").fadeIn();
  } else {
    $("#bacck2top").fadeOut();
  }
});
$(document).ready(function () {
  $("#bacck2top").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

// <-----slider------>

// var owl = $(".bnnar-slider");

// $(".bnnar-slider").owlCarousel({
//   items: 1,
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 4000,
//   autoplayHoverPause: false,
//   animateOut: "fadeOut",
//   animateIn: "fadeIn",
// });
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     autoplayHoverPause: false,
//     animateOut: "fadeOut",
//     animateIn: "fadeIn",
//   });
// });
// <-----logo image------>

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var scrolltop = $(this).scrollTop();
  if (scrolltop > lastScrollTop) {
    $("#logo").css({ height: "43px" });
  } else {
    $("#logo").css({ height: "50px", padding: "0" });
  }
  lastScrollTop = scrolltop;
});

// // Cookies js
// const cookieContainer = document.querySelector(".cookie-container");
// const cookieButton = document.querySelector(".cookie-btn");

// cookieButton.addEventListener("click", () => {
//   cookieContainer.classList.remove("active");
//   localStorage.setItem("cookieBannerDisplayed", "true");
// });

// setTimeout(() => {
//   if (!localStorage.getItem("cookieBannerDisplayed")) {
//     cookieContainer.classList.add("active");
//   }
// }, 2000);
