

window.onload = init;
var canvas;
var ctx;// This is a very bad name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate();
}

var x, y, dx, dy, radius;
x = Math.random()*window.innerWidth;
y= Math.random()*window.innerHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.strokeStyle = 'rgba(155,100,20)';
  ctx.beginPath();
  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.stroke();
  x += dx;
  y += dy;
    if(x > window.innerWidth || x < 0)  dx = -dx;
    if(y > window.innerHeight || y < 0)  dy = -dy;
}
// function practiceDraw(){
//   // Make rectangles
//    ctx.fillStyle = 'rgba(255,200,0,.5)'
//    ctx.fillRect(100,100,100,100);  // filleRect(x, y, width, height)
//    ctx.fillStyle = 'rgba(0,100,200,.5)'
//    ctx.fillRect(300,100,100,100);
//    ctx.fillStyle = 'rgba(255,11,200,.5)'
//    ctx.fillRect(200,300,100,100);
//
//    // Make line
//     ctx.strokeStyle = 'rgba(255,200,100,.8)'
//     ctx.beginPath();
//     ctx.moveTo(100,500);
//     ctx.lineTo(500,500);
//     ctx.lineTo(500,100);
//     ctx.lineTo(100,500);
//     ctx.stroke();
//
//     // Make Circles
//     ctx.strokeStyle = 'rgba(155,100,20,.8)';
//     ctx.beginPath();
//     ctx.arc(600,300, 130, Math.PI*2, 0, false);
//     ctx.stroke();
//     for(var i = 0; i < 35; i++){
//       ctx.strokeStyle = 'rgba(55,100,200,.8)';
//       ctx.beginPath();
//       ctx.arc(50*i+50,500, 50, Math.PI*2, 0, false);
//       ctx.stroke();
//     }
//
//     //  Draw Image
//     //
//     // var img=document.createElement("img");
//     //
//     // draw.drawImage(img,10,10);
//
//
// }
