'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML += `<img onclick="onImgSelect(this)" src="images/meme-imgs (square)/2.jpg" alt="">`
    elGallery.innerHTML += `<img onclick="onImgSelect(this)" src="images/meme-imgs (square)/3.jpg" alt="">`
    const elmGallery = document.querySelector('.main-gallery')
}
function onImgSelect(elImg){
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.editor-container')
    memePageShow()
    /* elGallery.hidden */
    const imgUrl = elImg.src
    setImg(imgUrl)
    renderMeme()
}
function homePageShow(){
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.editor-container')
    elGallery.style.opacity = 1
    elGenerator.style.opacity= 0
}

function memePageShow(){
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.editor-container')
    elGallery.style.opacity = 0
    elGenerator.style.opacity= 1
}