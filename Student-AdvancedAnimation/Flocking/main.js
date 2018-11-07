'use strict';
window.addEventListener("load",init);//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var flocking;
var sepSlider;
var sepValue;// inital value of speration
var coSlider;
var coValue;// inital value of cohesion
var alSlider;
var alValue ;//inital value of alignment
var radiusSlider;
var radiusValue;
//cohesion not wokring




function init(){
  //get the canvas
  sepSlider = document.getElementById("sep");
  sepSlider.addEventListener("input",handleSep);
  sepValue = sepSlider.value;
  coSlider = document.getElementById("coh");
  coSlider.addEventListener("input",handleCo);
  coValue = coSlider.value;
  alSlider = document.getElementById("align");
  alSlider.addEventListener("input",handleAl);
  alValue = alSlider.value;
  radiusSlider = document.getElementById("radius");
  radiusSlider.addEventListener("input",handleRadius);
  radiusValue= radiusSlider.value;
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
  sepValue = this.value;
}

function handleCo(){
  console.log(this.value);
  coValue = this.value;
}

function handleAl(){
  console.log(this.value);
  alValue = this.value;
}

function handleRadius(){
    console.log(this.value);
    radiusValue = this.value;
}
