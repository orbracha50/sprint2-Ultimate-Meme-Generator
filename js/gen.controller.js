'use strict'
var gElCanvas
var gCtx
function onInIt() {
    renderMeme()
}
function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.font = "50px Arial";
    gCtx.fillStyle = 'white'
    const meme = getMeme(1)
    const img = gImgs.find(img => img.id === meme.selectedImgId)
    const elImg = document.querySelector('.meme-img')
    elImg.src = img.url
    elImg.onload = () => {
        drawImage(elImg)
    }
}

function drawImage(elImg) {
    console.log(elImg)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.font = "50px Arial";
    gCtx.fillStyle = 'white'
    setLineTxt()
}

function setLineTxt(text) {
    if (text) {
        gMeme.lines[0].txt = text
        gCtx.fillText(text, 150, 70)
        /* renderMeme() */
    }
}