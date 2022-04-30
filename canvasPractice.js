let canvas  = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API
let tool = canvas.getContext("2d");

tool.strokeStyle = "orange";
tool.lineWidth = "10"


tool.beginPath();       //new graphic (path)(line)
tool.moveTo(200,200);   //start point
tool.lineTo(600,600);   //end point
tool.stroke();          //fill color
tool.moveTo(600,600);
tool.lineTo(1200,200);
tool.stroke()
tool.lineTo(1400,200);
tool.stroke();