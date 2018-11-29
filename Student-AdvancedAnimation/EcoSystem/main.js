'use strict';
window.addEventListener("load",init);//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var flocking;





function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  //set the dimentsions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(9, 181, 43, .8)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  flocking = new Flocking();
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  flocking.run();

}
