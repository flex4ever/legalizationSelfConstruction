const exlimation = document.querySelector('.exclimation-marker');
const descriptionTxt = document.querySelector('.description_help-you');
const wellTxt = document.querySelector('.heading-text_well-help_txt');
const upTxt = document.querySelectorAll('.crite_will-help_txt');
const line = document.querySelector('.line_will-help-you_block');
const block = document.querySelector('.will-help-you_block');
console.log(exlimation);
console.log(descriptionTxt);
console.log(wellTxt);
console.log(upTxt);
console.log(line);
function focus (el){
    el.classList.add('active');
}
function upTxtt(){
    for(let i = 2100, a = 0; a <= upTxt.length; i+100, a++){
        setTimeout(focus, i, upTxt[a])
    }
}
block.addEventListener('mouseover', ()=>{
    setTimeout(focus, 900, descriptionTxt);
    setTimeout(focus, 1200, exlimation);
    setTimeout(focus, 1600, wellTxt);
    setTimeout(focus, 1800, line);
    setTimeout(upTxtt, 2000);
})


