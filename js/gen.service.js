'use strict'
var gImgId = 1
var gImgs = []
_createImgs()
console.log(gImgs)
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 26,
            color: '',
            pos: {},
            font: 'Impact'
        },
        {
            txt: '',
            size: 26,
            color: '',
            pos: {},
            font: 'Impact'
        }
    ]
}

function setImg(imgId) {
            gMeme.selectedImgId = imgId
    console.log(gMeme.selectedImgId)
}
function getMeme() {
    return gMeme
}
function _createImg(imgUrl, keywords) {
    var img = {
        id: gImgId++,
        url: imgUrl,
        keywords
    }
    return img
}
function _createImgs() {
    for (var i = 1; i < 19; i++) {
        gImgs.push(_createImg(`images/meme-imgs (square)/${i}.jpg` ))
    }
}