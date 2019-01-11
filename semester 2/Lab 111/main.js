'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var ball;
var randomX;
var randomY;

function init(){
  ball = [];
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("click", moveCanvas);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  makeBalls();
  animate();
}

function animate(){


  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0; i< ball.length;i++){
      ball[i].run();
}



   }

   function makeBalls(){
     for(let i = 0; i<8;i++){
       randomX = Math.random()* (1900+1900)-1900;
       randomY = Math.random() * (1000+1000)-1000;
        ball.push(new Objects(randomX,randomY));
     }

   }

   function moveCanvas(event){
     ctx.save();
     ctx.translate((canvas.width/2)-event.clientX,(canvas.height/2)-event.clientY);
     ctx.restore();
   }
