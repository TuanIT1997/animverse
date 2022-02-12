$(function () {
  let timeLoad = 2500;
  if (sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer"))
    timeLoad = 1600;
  setTimeout(function () {
    $("#loading").hide();
  }, timeLoad);
});
// ===================================================================================================================================
function openDropdown() {
  if (
    document
      .getElementsByClassName("dropdown-content")[0]
      .classList.contains("show")
  ) {
    document
      .getElementsByClassName("dropdown-content")[0]
      .classList.remove("show");
  } else {
    document
      .getElementsByClassName("dropdown-content")[0]
      .classList.add("show");
  }
}
// ==================================================================================================
function openMobileMenu() {
  document.getElementsByClassName("bar")[0].classList.add("hide");
  document.getElementsByClassName("mobile-menu")[0].style.display = "flex";
}
function closeMobileMenu() {
  document.getElementsByClassName("bar")[0].classList.remove("hide");
  document.getElementsByClassName("mobile-menu")[0].style.display = "none";
}
function openDropdownMobi() {
  if (
    document
      .getElementsByClassName("dropdown-content")[1]
      .classList.contains("show")
  ) {
    document
      .getElementsByClassName("dropdown-content")[1]
      .classList.remove("show");
  } else {
    document
      .getElementsByClassName("dropdown-content")[1]
      .classList.add("show");
  }
}
// ================================================================================================
new fullpage("#fullPage", {
  licenseKey: "Animverse",
  menu: ".menu-list",
  anchors: [
    "home",
    "hot-news",
    "trailer",
    "story",
    "game-play",
    "nft",
    "evolve",
    "characters",
    "roadmap",
    "team",
    "advisors",
    "partner",
    "footer",
  ],
  dragAndMove: true,
  scrollBar: true,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  responsiveWidth: 835,
  afterLoad: function () {
    document.getElementById("bannerVideo").play();
    document.getElementById("trailerVideo").play();
  },
});
// ==============================================================================================
if ($(".news_slider").length > 0) {
  var $owl = $(".news_slider");
  $owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='arrow_left' ></i>", "<i class='arrow_right' ></i>"],
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 2,
    singleItem: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      414: {
        items: 1,
        margin: 20,
      },
      768: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 2,
      },
    },
  });
}
if ($(".game_slider").length > 0) {
  var $owl = $(".game_slider");
  $owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='arrow_left' ></i>", "<i class='arrow_right' ></i>"],
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    singleItem: true,
  });
}
if ($(".nft_slider").length > 0) {
  var $owl = $(".nft_slider");
  $owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='arrow_left' ></i>", "<i class='arrow_right' ></i>"],
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3,
    singleItem: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      414: {
        items: 2,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 3,
      },
    },
  });
}
if ($(".evolve_slider").length > 0) {
  var $owl = $(".evolve_slider");
  $owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='arrow_left' ></i>", "<i class='arrow_right' ></i>"],
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    singleItem: true,
  });
}
// ====================================================================================================================
new WOW().init();
// =====================================================================================================================