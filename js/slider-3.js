let swiperWrapper = document.querySelector('.swiper-wrapper');





var swiper = new Swiper('.cards-slider', {
 slidesPerView: "auto",
 spaceBetween: 30,
 centeredSlides: true,
 speed: 5000,
 autoplay:{
  delay: 3000,
 },
 loop: true,
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
 },
});

$(document).ready(function () {
 $(".play-button").click(function () {
  id = $(this).attr('data-id');
  $.ajax({
   url: 'https://code.projectroom.digital/request/',
   method: 'post',
   dataType: 'json',
   data: { id: id },
   success: function (data) {
    console.log(data);
   }
  });
 });
});