'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var ball;
var randomX;
var randomY;
var mousex;
var mousey;
var canvasLoc;
var center;

function init(){
  ball = [];
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mousex = canvas.width/2;
  mousey = canvas.height/2;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("mousemove", moveCanvas);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  canvasLoc = new JSVector(0,0);
  center = new JSVector(canvas.width/2,canvas.height/2);
  makeBalls();
  animate();
}

function animate(){
  var mouseV = new JSVector(mousex,mousey);
  var temp = JSVector.subGetNew(mouseV,center);
  temp.multiply(.05);
  canvasLoc.add(temp);
  console.log("canvasLoc: "+ canvasLoc.x+", "+canvasLoc.y)
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  for(let i = 0; i< ball.length;i++){
      ball[i].run();
  }
  ctx.restore();
  requestAnimationFrame(animate);
}





   function makeBalls(){
     for(let i = 0; i<10;i++){
       randomX = Math.random()* (1900+1900)-1900;
       randomY = Math.random() * (1000+1000)-1000;
        ball.push(new Objects(randomX,randomY));
     }

}
   function moveCanvas(event){
     mousex = event.clientX;
     mousey = event.clientY;
    console.log("x: "+mousex);
    console.log("y: "+mousey);

   }
