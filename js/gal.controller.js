'use strict'
var gGalleryPage = 1
function onInIt() {
    console.log('hi')
    gSavedMemes = JSON.parse(localStorage.getItem('savedMemes'))

    if (gSavedMemes === null) {
        gSavedMemes = []
    }
    console.log(gSavedMemes)
    renderGallery()
    /* renderMeme() */
}
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
    if (gGalleryPage === 'save') {
        elGallery.innerHTML = ''
        if (gSavedMemes.length === 0) {
            elGallery.innerHTML = '<p> NO SAVED MEMES...</p>'
          return 
        }
       
        gSavedMemes.forEach(img => {
            elGallery.innerHTML += `<img onclick="onImgSelect(this)" src="${img}" alt="" id="">`
        })

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
    gGalleryPage = 1
    renderGallery()
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.main-editor')
    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'
}

function memePageShow() {
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.main-editor')
    const elSaved = document.querySelector('.saved-memes')
    elGallery.style.display = 'none'
    elGenerator.style.display = 'block'
}
function savedMemeShow() {
    gGalleryPage = 'save'
    renderGallery()
    const elGallery = document.querySelector('.main-gallery')
    const elGenerator = document.querySelector('.main-editor')
    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'
}
function nextPage() {
    if (gGalleryPage === 1) {
        gGalleryPage = 2
    } else if (gGalleryPage === 2) {
        gGalleryPage = 1
    }
    renderGallery()
}
function prePage() {
    if (gGalleryPage === 1) gGalleryPage = 2
    else if (gGalleryPage === 2) gGalleryPage = 1
    renderGallery()
}
function saveToStorage(key, value) {
    const valueStr = JSON.stringify(value)
    localStorage.setItem(key, valueStr)
}