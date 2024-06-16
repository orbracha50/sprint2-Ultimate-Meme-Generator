'use strict'
var gGalleryPage = 1
function renderGallery() {
    const elGallery = document.querySelector('.gallery-container')
    if (gGalleryPage === 1) {
        elGallery.innerHTML = ''
        for (var i = 0; i < 9; i++) {

            elGallery.innerHTML +=
                `<img onclick="onImgSelect(this)" src="${gImgs[i].url}" alt="" id="${gImgs[i].id}">`
        }
    }
    if (gGalleryPage === 2) {
        elGallery.innerHTML = ''
        for (var i = 9; i < 18; i++) {

            elGallery.innerHTML +=
                `<img onclick="onImgSelect(this)" src="${gImgs[i].url}" alt="" id="${gImgs[i].id}">`
        }
    }

}

function onImgSelect(elImg) {
    memePageShow()
    /* elGallery.hidden */
    const imgId = elImg.id
    console.log(imgId)
    setImg(imgId)
    renderMeme()
}

function homePageShow() {
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.main-editor')
    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'
}

function memePageShow() {
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.main-editor')
    elGallery.style.display = 'none'
    elGenerator.style.display = 'block'
}
function nextPage() {
    if (gGalleryPage === 1) {
        gGalleryPage = 2
    } else{
        gGalleryPage= 1
    }
    renderGallery()
}
function prePage() {
    if (gGalleryPage === 1) gGalleryPage = 2
    else gGalleryPage = 1
    renderGallery()
}