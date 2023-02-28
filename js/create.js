


async function createElem() {
 // 
 let swiperWrapper = document.querySelector('.swiper-wrapper');
 let url = `./files/cards.json`
 let response = await fetch(url)
 let json = await response.json();
 //
 // итерация по json файлу
 for (i = 0; i < json.length; i++) {

  // создание карточки   
  let card = document.createElement("div");
  card.className = 'swiper-slide';


  //Добавление фото 
  let img = document.createElement('img');
  img.className = 'slide-picture';
  img.dataset.id = json[i].ID;
  img.src = json[i].Picture;


  //Добавление в верстку
  swiperWrapper.appendChild(card)
  card.appendChild(img)

 }

 var swiper = new Swiper('.cards-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 7000,
  loop: true,
  autoplay: {
   delay: 0
  },
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },
 });



 $(document).ready(function () {
  $(".slide-picture").click(function () {
   id = $(this).attr('data-id');
   console.log(id)
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

}
createElem()