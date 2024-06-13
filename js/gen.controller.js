'use strict'
var gElCanvas
var gCtx
function onInIt() {
    renderMeme()
}
function renderMeme(text) {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    const meme = getMeme(1)
    meme.lines[0].txt = text
    const img = gImgs.find(img => img.id === meme.selectedImgId)
    const elImg = document.querySelector('.meme-img')
    elImg.src = img.url
    elImg.onload = () => {
        drawImage(elImg,text)
    }
    gCtx.font = "50px Arial";
    gCtx.fillStyle = 'white'
    if (text) {
        gCtx.fillText(text, 170, 80)
    }

    /* elImg.src = ImgUrl */


}

function drawImage(elImg,text) {
    console.log(elImg)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.font = "50px Arial";
    gCtx.fillStyle = 'white'
    if (text) {
        gCtx.fillText(text, 170, 80)
    }
}