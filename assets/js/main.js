jQuery(document).ready(function(){
  jQuery('.toggle-btn').click(function(){
    jQuery('.mobile-nav > .main-menu').slideToggle();
  });

  /* Initialize Swiper */
  var swiper = new Swiper(".twitter-feed-container", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
});
