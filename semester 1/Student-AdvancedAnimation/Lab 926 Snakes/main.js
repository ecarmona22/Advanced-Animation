'use strict';
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var snakes = [];



function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context

  makeSnakes(5,8);
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0;i<snakes.length;i++){
    snakes[i].run();//updates snakes in array
  }
}


function makeSnakes(numSnakes,numOfSeg){
  for(let i = 0; i < numSnakes; i++){
    snakes.push(new Snake(numOfSeg));//creates snake objects and pushes them into snakes array

  }
}
