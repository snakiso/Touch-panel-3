



let slides = document.querySelectorAll('.slide-picture');

for(let i = 0; i < slides.length; i++){
 slides[i].addEventListener('click', ()=> {
  console.log(slides.dataset.id)
 })
}