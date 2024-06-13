'use strict'
var gElCanvas
var gCtx
function onInIt() {
    renderMeme()
}
function renderMeme(text) {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    const elImg = document.querySelector('.meme-img')
    drawImage(elImg,gCtx,gElCanvas)
    gCtx.font = "50px Arial";
    gCtx.fillStyle= 'white'
    if(text){
        gCtx.fillText(text,170,80)
    }
    
    /* elImg.src = ImgUrl */
    
   
}

function drawImage(elImg,gCtx,gElCanvas){
    console.log(elImg)
     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}