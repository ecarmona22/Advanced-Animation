'use strict';
window.addEventListener("load",init);//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var flocking;
var sepSlider;
var coSlider;
var alSlider;




function init(){
  //get the canvas
  sepSlider = document.getElementById("sep");
  sepSlider.addEventListener("input",handleSep);

  coSlider = document.getElementById("coh");
  coSlider.addEventListener("input",handleCo);

  alSlider = document.getElementById("align");
  alSlider.addEventListener("input",handleAl);

  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas

  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(250,250,250, .8)';
  //canvas.addEventListener("click", makeVehicles);
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

function handleSep(){
  console.log(this.value);
}

function handleCo(){
  console.log(this.value);
  //cohestion = this.value
}

function handleAl(){
  console.log(this.value);
}
