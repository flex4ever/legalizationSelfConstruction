let offset = 0;
const SliderLine = document.querySelector('.slider-line');
const ImgDecor = document.querySelectorAll('.img-slider-decor');
let i = 1;
let k = 0;
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




document.querySelector('.slider-next').addEventListener('click', function () {
    ImgDecor[i].classList.add('active');
    ImgDecor[k].classList.remove('active');
    if (i >= 0) {
        i++;
        if (k < i) {
            k++;
        }
    }
    if (i == 35) {
        i = 0;
    } if (i == 1) {
        k = 0;

    }
});
document.querySelector('.slider-prev').addEventListener('click', function () {
    ImgDecor[k].classList.add('active');
    ImgDecor[i].classList.remove('active');
    
    if (i > 0) {
        i--;
        k--;
        console.log(k);
        console.log(i);
    } 
    
    if (i <= 0) {
        i = 35;
        k = 34;
        console.log(k);
        console.log(i);
    } 
    
    if (i == 35 && k == 34) {
        i--;
        k--;
        console.log(k);
        console.log(i);
    } 
});