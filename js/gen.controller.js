'use strict'
var gElCanvas
var gCtx
var gPreCtx
var gSelectedLine = 0
var gArrow0 = 70
var gArrow1 = 370
var gSavedMemes 

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.font = "50px Arial";
    gCtx.fillStyle = 'white'
    const meme = getMeme()
    console.log(meme.selectedImgId)
    const elImg = document.getElementById(`${meme.selectedImgId}`)
    drawImage(elImg)
}
function addLine() {

}

function setColor(val, line) {
    gMeme.lines[line].color = val
    setLineTxt(line)
}

function setFontSize(val, line) {
    gMeme.lines[line].size = val
    setLineTxt(line)
}

function drawImage(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    /* setLineTxt() */
}
function setLineTxt(line, val = 0) {
    gSelectedLine = line
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(document.getElementById(`${gMeme.selectedImgId}`), 0, 0, gElCanvas.width, gElCanvas.height)
    console.log(gMeme)
    /* text1 sutup */
    const text1 = document.querySelector(`.canvas-text0`).value
    gCtx.font = `${gMeme.lines[0].size}px ${gMeme.lines[0].font}`
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 3;
    gMeme.lines[0].txt = text1

    const alingPos = setPosALign(line)
    setByArrowsPos(line, val)
    console.log(gArrow0)
    gCtx.strokeText(gMeme.lines[0].txt, alingPos, gArrow0)
    gCtx.fillText(gMeme.lines[0].txt, alingPos, gArrow0)
    /* text2 sutup */
    const text2 = document.querySelector(`.canvas-text1`).value
    gCtx.font = `${gMeme.lines[1].size}px ${gMeme.lines[1].font}`
    gCtx.fillStyle = gMeme.lines[1].color
    gMeme.lines[1].txt = text2
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 3;
    gCtx.strokeText(gMeme.lines[1].txt, 130, gArrow1)
    gCtx.fillText(gMeme.lines[1].txt, 130, gArrow1)
}

function strokeborder(line) {
    var y = 0
    if (gMeme.lines[line].txt === '') return
    if (line === 0) y = 70
    if (line === 1) y = 370
    var textWidth = gCtx.measureText(gMeme.lines[line].txt).width
    console.log(textWidth)
    var frameWidth = textWidth * 2
    var frameHeight = gMeme.lines[1].size * 3
    var frameX = 130 - 50;
    var frameY = y - frameHeight / 2
    gCtx.strokeStyle = 'white'; // Frame color
    gCtx.lineWidth = 2; // Frame width
    if (textWidth > 175) textWidth = 175
    gCtx.strokeRect(frameX, frameY, textWidth * 2, frameHeight);
    gMeme.lines[line].pos = { x: frameX, y: frameY, h: frameHeight, w: frameWidth }
    console.log(gMeme.lines[line].pos)
}

function saveMeme() {
    gSavedMemes.push([gElCanvas.toDataURL('image/jpeg')])
    
    saveToStorage('savedMemes', gSavedMemes)
}
function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function getCursorPosition(canvas, event,) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
    const currLinePos = gMeme.lines[0].pos
    if (x > currLinePos.x && x < (currLinePos.x + currLinePos.w) && y > currLinePos.y && y < (currLinePos.y + currLinePos.h))
        strokeborder(0)
}

function setPosALign(line) {
    const aling = document.querySelector(`.alignment${line}`).value
    if (aling === 'center' || aling === '') return 130
    if (aling === 'left') return 60
    if (aling === 'right') return 200
}

function setByArrowsPos(line, val = 0) {
    if (line === 0) {
        gArrow0 += val
    }
    if (line === 1) {
        gArrow1 += val
    }
}

function setFont(line) {
    const font = document.querySelector(`.font-famliy${line}`).value
    gMeme.lines[line].font = font
    setLineTxt(line)



}

function clearBtn(line) {
    const text = document.querySelector(`.canvas-text${line}`)
    text.value = ''
    gMeme.lines[line].txt = 0
    setLineTxt(line)
}

function onUploadImg() {
    // Gets the image from the canvas
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

    function onSuccess(uploadedImgUrl) {
        // Handle some special characters
        const url = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
    }https://github.com/orbracha50/sprint2-Ultimate-Meme-Generator/branches

    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e)
})