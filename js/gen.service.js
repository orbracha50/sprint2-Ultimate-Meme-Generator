'use strict'
var gImgId = 1
var gImgs = []

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

function setImg(imgUrl){
    gMeme.selectedImgId = _createImg(imgUrl)
}
function getMeme(){
    return gMeme
}
function _createImg(imgUrl, keywords) {
    let img = {
        id: gImgId++,
        url: imgUrl,
        keywords
    }
    gImgs.push(img)
    return img.id
}