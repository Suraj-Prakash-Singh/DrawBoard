let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let optionFlag = true;

let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");

let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencilFlag = false;
let eraserFlag = false;

let stickyCont = document.querySelector(".sticky-cont");
let sticky = document.querySelector(".sticky");
let stickyFlag = false;
let stickyCloseBtn = document.querySelector(".remove");

// true -> tools show, false -> hide tools
optionsCont.addEventListener("click", (e) => {
    optionFlag = !optionFlag;
    // let iconElem = optionsCont.children[0];

    if (optionFlag) openTools();
    else closeTools();
})

function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "none";

    pencilToolCont.style.display = "none";
    eraserToolCont.style.display ="none";
}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "flex";
}

pencil.addEventListener("click",(e)=>{
    //true -> show pencil tool, false -> hide pencil

    pencilFlag = !pencilFlag;

    if(pencilFlag){
        pencilToolCont.style.display = "block";
    }
    else{
        pencilToolCont.style.display = "none";
    }
})


eraser.addEventListener("click",(e)=>{
    //true -> show pencil tool, false -> hide pencil

    eraserFlag = !eraserFlag;

    if(eraserFlag){
        eraserToolCont.style.display = "flex";
    }
    else{
        eraserToolCont.style.display = "none";
    }
})

sticky.addEventListener("click",(e)=>{
    stickyFlag = !stickyFlag;

    if(stickyFlag) stickyCont.style.display = "block";
    else stickyCont.style.display = "none";
})

stickyCloseBtn.addEventListener("click",(e)=>{
    stickyCont.style.display = "none";
})