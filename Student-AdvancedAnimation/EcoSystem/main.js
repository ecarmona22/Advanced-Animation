'use strict';
window.addEventListener("load",init);//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var flocking;
var snakes = [];




function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  //set the dimentsions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(196, 196, 196, .8)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  flocking = new Flocking();
  makeSnakes(5,8);
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  flocking.run();
  for(let i = 0;i<snakes.length;i++){
    snakes[i].run();//updates snakes in array
  }

}

function makeSnakes(numSnakes,numOfSeg){
  for(let i = 0; i < numSnakes; i++){
    snakes.push(new Snake(numOfSeg));//creates snake objects and pushes them into snakes array

  }
}
