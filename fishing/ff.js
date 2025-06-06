let showRodCards = document.querySelector('.show-rod');
let hideWrapRod = document.querySelector('.hide-wrap-rod')

let showRod2 = document.querySelector('.show-rod-2');
let hideWrapReel = document.querySelector('.hide-wrap-reel')


let showRod3 = document.querySelector('.show-rod-3');
let hideWrap3 = document.querySelector('.hide-wrap-lure')


showRodCards.onclick = () => {
    hideWrapRod.classList.toggle('show');
    if (hideWrapReel.classList.contains) {
        hideWrapReel.classList.remove('show');
    }
    if (hideWrap3.classList.contains) {
        hideWrap3.classList.remove('show');
    }
}

showRod3.onclick = () => {
    hideWrap3.classList.toggle('show');
    if (hideWrapRod.classList.contains) {
        hideWrapRod.classList.remove('show');
    }
    if (hideWrapReel.classList.contains) {
        hideWrapReel.classList.remove('show');
    }
}




showRod2.onclick = () => {
    hideWrapReel.classList.toggle('show');
    if (hideWrapRod.classList.contains) {
        hideWrapRod.classList.remove('show');
    }
    if (hideWrap3.classList.contains) {
        hideWrap3.classList.remove('show');
    }
}






