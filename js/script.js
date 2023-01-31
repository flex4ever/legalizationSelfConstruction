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
    imgDecor[i].classList.add('active');
    imgDecor[k].classList.remove('active');
    i++;
    k++;
    console.log(i)
    console.log(k)
    if (i == imgDecor.length){
        i=0;
    }
    if (k == imgDecor.length){
        k=0;
    }
})
slidePrew.addEventListener('click', ()=>{
    i--;
    k--;
    imgDecor[i].classList.remove('active');
    imgDecor[k].classList.add('active');
    console.log(i)
    console.log(k)
    // console.log(imgDecor)

    if (i == 0){
        i = imgDecor.length;
    }
    if (k == 0){
        k = imgDecor.length;
    }
   
})