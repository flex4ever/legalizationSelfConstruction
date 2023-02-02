let offset = 0;
const SliderLine = document.querySelector('.slider-line');
const ImgDecor = document.querySelectorAll('.img-slider-decor');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 262;
    if (offset > 9150) {
        offset = 0;
    }
    SliderLine.style.left = -offset + 'px';


});
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 262;
    if (offset < 0) {
        offset = 8900;
    }

    SliderLine.style.left = -offset + 'px';
});


const imgDecor = document.querySelectorAll('.img-slider-decor');
let i = 1;
let k = 0;
const slideNext = document.querySelector('.slider-next')
const slidePrew = document.querySelector('.slider-prev')
slideNext.addEventListener('click', ()=>{
    if (i == imgDecor.length){
        i=0;
    }
    imgDecor[i].classList.add('active');
    imgDecor[k].classList.remove('active');
    i++;
    k++;
 
    if (k == imgDecor.length){
        k=0;
    }
})
slidePrew.addEventListener('click', ()=>{
    if (k == 0) {
        k = imgDecor.length;
    }
    i--;
    k--;
    imgDecor[i].classList.remove('active');
    imgDecor[k].classList.add('active');
   

    if (i == 0){
        i = imgDecor.length;
    }
   
})
