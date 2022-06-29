const canvas=document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");
const saveBtn=document.getElementById("jsSave");

canvas.height = 700;
canvas.width = 700;

ctx.fillStyle = "white";
ctx.fillRect(0,0,700,700)

ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";

let painting = false;

function startPainting(){
    painting = true;
}

 function onMouseMove (event) {
    x = event.offsetX;
    y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();   
    }
    // if (mode.innerText =="FILL") {
    //     ctx.fillStyle =ctx.strokeStyle;
    //     ctx.fillRect(0,0,800,800);}
 }    

 function onMouseDown (event) {
    painting = true;

        // if (mode.innerText =="FILL") {
        // ctx.fillStyle =ctx.strokeStyle;
        // ctx.fillRect(0,0,800,800);}

 }
 
 function stopPainting (event) {
    painting = false;
 }

function changeColor(event) {
    const color= event.target.style.backgroundColor;
    ctx.strokeStyle = color;

        if (mode.innerText =="FILL") {
        ctx.fillStyle =ctx.strokeStyle;
        ctx.fillRect(0,0,800,800);}
        mode.style.background=color;


}
function lineChange(event) {
    // console.log(event);
    ctx.lineWidth = event.target.value;

}
function modeClick(){
    if (mode.innerText=="FILL") mode.innerText="Paint"
    else mode.innerText="FILL"
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick(event) {
    const image=canvas.toDataURL();
    const link=document.createElement("a");
    link.href=image;
    link.download="Paint";
    link.click();

}

     if (canvas) {
         canvas.addEventListener('mousemove', onMouseMove);
         canvas.addEventListener("mousedown", onMouseDown);
         canvas.addEventListener("mouseup", stopPainting);
         canvas.addEventListener("mouseleave", stopPainting);
         canvas.addEventListener("contextmenu",handleCM)   
     }


     Array.from(colors).forEach(color=>color.addEventListener("click",changeColor));
     range.addEventListener("input", lineChange); 
     mode.addEventListener("click", modeClick);
     saveBtn.addEventListener("click", handleSaveClick);