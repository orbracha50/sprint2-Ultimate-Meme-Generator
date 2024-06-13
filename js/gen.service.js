'use strict'
var gImgId = 1
var gImgs = []
_createImg('images/meme-imgs (square)/1.jpg')

function _createImg(imgUrl,keywords){
    let img = {
        id: gImgId++,
        url: imgUrl,
        keywords 
    }
    gImgs.push(img)
}