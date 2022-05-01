let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;
let mouseDown  = false;

let download = document.querySelector(".download");
let undo = document.querySelector(".undo");
let redo = document.querySelector(".redo");

let undoRedoTracker = []; //Data
let track = 0; //Represent which action from tracker array
// API
let tool =  canvas.getContext("2d");

tool.strokeStyle = penColor;
tool.lineWidth = penWidth;

// mousedown -> start new path, mousemove -> path fill (grpahics)

canvas.addEventListener("mousedown",(e)=>{
    mouseDown = true;
    beginPath({
        x: e.clientX,
        y: e.clientY
    })
})

canvas.addEventListener("mousemove",(e)=>{
    if(mouseDown){
       drawStroke({
           x: e.clientX,
           y: e.clientY,
           color: eraserFlag ? eraserColor : penColor,
           width: eraserFlag ? eraserWidth : penWidth
       })
    }
})

canvas.addEventListener("mouseup",(e)=>{
    mouseDown = false;

    let url = canvas.toDataURL();
    undoRedoTracker.push(url);
    track = undoRedoTracker.length-1;
})

undo.addEventListener("click",(e)=>{
    if(track > 0) track--;
    // action
    let trackObj = {
        trackValue : track,
        undoRedoTracker
    }
    undoRedoCanvas(trackObj);
})

redo.addEventListener("click",(e)=>{
    if(track < undoRedoTracker.length-1) track++;

    //trackAction
    let trackObj = {
        trackValue : track,
        undoRedoTracker
    }
    undoRedoCanvas(trackObj);
})

function undoRedoCanvas(trackObj){
    track = trackObj.trackValue;
    undoRedoTracker = trackObj.undoRedoTracker; 

    let url = undoRedoTracker[track];
    let img = new Image(); // New image reference element
    img.src = url;
    img.onload = (e)=>{
        tool.drawImage(img,0,0,canvas.width,canvas.height);
    }
}

function beginPath(strokeobj){
    tool.beginPath();
    tool.moveTo(strokeobj.x, strokeobj.y);
}
function drawStroke(strokeobj){
    tool.strokeStyle = strokeobj.color;
    tool.lineWidth = strokeobj.width;
    tool.lineTo(strokeobj.x, strokeobj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem)=>{
    colorElem.addEventListener("click",(e)=>{
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})

pencilWidthElem.addEventListener("change",(e)=>{
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})

eraserWidthElem.addEventListener("change",(e)=>{
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})

eraser.addEventListener("click",(e)=>{
    if(eraserFlag){
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth; 
    }
    else{
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    }
})

download.addEventListener("click",(e)=>{
    let url = canvas.toDataURL();

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
})