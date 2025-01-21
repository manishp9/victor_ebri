////////////////// MANISH JS START////////////////////
 $(document).ready(function () {
   console.log("Hello World");
 });


///////////////////////////////////////// Banner2 section scale js start /////////////////////////////////////
$(document).ready(function () {
  let lastScrollTop = 0;
  let scalePercentage = 100; // Start at 100%

  // Function to check if the section is in viewport
  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return rect.top < $(window).height() && rect.bottom > 0;
  }

  $(window).on("scroll", function () {
    const currentScrollTop = $(this).scrollTop();
    const bannerSection = $(".banner2-section");
    const sectionHeight = bannerSection.outerHeight(); // Get the height of the section
    const windowHeight = $(window).height(); // Get the window height

    // Check if the section is in viewport
    if (isInViewport(bannerSection)) {
      // Calculate percentage of scroll
      let scrollPercentage =
        (currentScrollTop / (sectionHeight - windowHeight)) * 100;

      // Ensure the scale percentage stays within 25% and 100%
      scrollPercentage = Math.max(0, Math.min(100, scrollPercentage));

      // Calculate scale, starting from 100% and decreasing to 25%
      let scaleValue = 100 - (scrollPercentage * (100 - 65)) / 100;
      scaleValue = Math.max(65, scaleValue); // Ensure the scale doesn't go below 25%

      // Apply the transform based on the scroll percentage
      $(".banner-2-outer").css("transform", `scale(${scaleValue / 100})`);
    }

    lastScrollTop = currentScrollTop;
  });
});
///////////////////////////////////////// Banner2 section scale js end ////////////////////////////////////////////

///////////////////////////////////////// Banner2 section h1 translateY js start /////////////////////////////////////
$(document).ready(function () {
  let lastScrollTop = 0;
  let translateY = 0;
  const sectionHeight = $(".banner2-section").outerHeight(); // Get the height of the section

  // Function to check if the section is in viewport
  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return rect.top < $(window).height() && rect.bottom > 0;
  }

  $(window).on("scroll", function () {
    const currentScrollTop = $(this).scrollTop();
    const bannerSection = $(".banner2-section");

    // Check if the section is in viewport
    if (isInViewport(bannerSection)) {
      // Calculate the scroll percentage
      const scrollPercentage = (currentScrollTop / sectionHeight) * 100;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down: move the element up
        translateY = -Math.min(scrollPercentage, 100); // Ensure the value stays between 0% and -100%
      } else {
        // Scrolling up: move the element down
        translateY = -Math.max(scrollPercentage, 0); // Ensure the value stays between -100% and 0%
      }

      // Apply the transform
      $(".banner-2-outer h1").css("transform", `translateY(${translateY}%)`);
    }

    lastScrollTop = currentScrollTop;
  });
});
///////////////////////////////////////// Banner2 section h1 translateY js end /////////////////////////////////////

///////////////////////////////////////// Banner1 section add scrolled class js start /////////////////////////////////////
$(document).ready(function () {
  // Get the height of the target div
  var dynamicDivHeight = $(".banner2-section").outerHeight();
  $(window).scroll(function () {
    if ($(this).scrollTop() > dynamicDivHeight + 100) {
      // You can adjust the scroll position threshold
      $(".banner1-section").addClass("scrolled");
    } else {
      $(".banner1-section").removeClass("scrolled");
    }
  });
});
///////////////////////////////////////// Banner1 section add scrolled class js end /////////////////////////////////////

///////////////////////////////////////// Banner2 section body padding and add scrolled class js start /////////////////////////////////////
$(document).ready(function () {
  // Get the height of the target div
  var dynamicDivHeight = $(".banner2-section").outerHeight();

  // Set the body padding-bottom dynamically
  $("body").css("padding-top", dynamicDivHeight + "px");
  $(window).scroll(function () {
    if ($(this).scrollTop() > dynamicDivHeight + 50) {
      // You can adjust the scroll position threshold
      $(".banner2-section").addClass("scrolled");
    } else {
      $(".banner2-section").removeClass("scrolled");
    }
  });
});
///////////////////////////////////////// Banner2 section body padding and add scrolled class js end /////////////////////////////////////

///////////////////////////////////////// Banner1 section slider 1 js start /////////////////////////////////////
var swiper = new Swiper(".bannerSlider", {
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 80,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    reverseDirection: true,
    // pauseOnMouseEnter:true,
    disableOnInteraction: false,
  },
  loopAddBlankSlides: true,
  // cssMode: true,
  speed: 3000,
  grabCursor: true,
});
///////////////////////////////////////// Banner1 section slider 1 js end /////////////////////////////////////

///////////////////////////////////////// Banner1 section slider 2 js start /////////////////////////////////////
var swiper = new Swiper(".bannerSlider2", {
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 80,
  centeredSlides: true,
  reverseDirection: true,
  autoplay: {
    delay: 0,
    // pauseOnMouseEnter:true,
    disableOnInteraction: false,
  },
  loopAddBlankSlides: true,
  // cssMode: true,
  speed: 3000,
  grabCursor: true,
});
///////////////////////////////////////// Banner1 section slider 2 js end /////////////////////////////////////

///////////////////////////////////////////////// R&D Heading translateX js start ////////////////////////////////////////////
$(window).on("scroll", function () {
  const scrollPosition = $(window).scrollTop();

  const $section = $(".r-and-d-section");
  const sectionOffsetTop = $section.offset().top;
  const sectionHeight = $section.outerHeight();

  // Check if the section is in the viewport
  if (
    scrollPosition >= sectionOffsetTop - $(window).height() &&
    scrollPosition <= sectionOffsetTop + sectionHeight
  ) {
    const $span1 = $(".r-and-d-heading-span1");
    const $span2 = $(".r-and-d-heading-span2");

    // Calculate the translation based on scroll position, but only after entering the section
    const translateValue1 = -1 + (scrollPosition - sectionOffsetTop) / 10; // Modify the divisor for desired speed
    const translateValue2 = 40 - (scrollPosition - sectionOffsetTop) / 10; // Modify the divisor for desired speed

    // Apply the translation to each span
    $span1.css("transform", `translateX(${translateValue1}%)`);
    $span2.css("transform", `translateX(${translateValue2}%)`);
  }
});
////////////////////////////////////////////// R&D Heading translateX js end ///////////////////////////////////////////////////

///////////////////////////////////////// Footer section slider js start /////////////////////////////////////
var swiper = new Swiper(".footerSlider", {
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: 2,
  spaceBetween: 80,
  centeredSlides: true,
  reverseDirection: true,
  autoplay: {
    delay: 0,
    // pauseOnMouseEnter:true,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  loopAddBlankSlides: true,
  // cssMode: true,
  speed: 1000,
  grabCursor: true,
});
///////////////////////////////////////// Footer section slider js end /////////////////////////////////////

///////////////////////////////////////// Footer section body padding js start /////////////////////////////////////
$(document).ready(function () {
  // Get the height of the target div
  var dynamicDivHeight = $(".footer").outerHeight();

  // Set the body padding-bottom dynamically
  $("body").css("padding-bottom", dynamicDivHeight + "px");
});
///////////////////////////////////////// Footer section body padding js end /////////////////////////////////////

///////////////////////////// MANISH JS END////////////////////

// $(window).on("scroll", function () {
//   const scrollPosition = $(window).scrollTop();

//   const $section = $(".banner2-section");
//   const sectionOffsetTop = $section.offset().top;
//   const sectionHeight = $section.outerHeight();

//   // Check if the section is in the viewport
//   if (
//     scrollPosition >= sectionOffsetTop - $(window).height() &&
//     scrollPosition <= sectionOffsetTop + sectionHeight
//   ) {
//     const $h1 = $(".banner-heading-h1 h1");

//     // Calculate the translation value for translateY
//     const translateValue = (scrollPosition - sectionOffsetTop) / 10; // Adjust divisor for speed

//     // Apply the translation
//     $h1.css("transform", `translateY(${translateValue}px)`);
//   }
// });

///////////////////////////////////////// Banner section h1 translateY js end /////////////////////////////////////
