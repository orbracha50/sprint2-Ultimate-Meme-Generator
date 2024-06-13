'use strict'
var gImgId = 1
var gImgs = []
_createImg('images/meme-imgs (square)/1.jpg')

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            color: 'white'
        }
    ]
}

function getMeme(imgId){
    gMeme.selectedImgId = imgId
    return gMeme
}
function _createImg(imgUrl, keywords) {
    let img = {
        id: gImgId++,
        url: imgUrl,
        keywords
    }
    gImgs.push(img)
}