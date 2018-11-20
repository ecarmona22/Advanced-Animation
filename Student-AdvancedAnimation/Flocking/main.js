'use strict';
window.addEventListener("load",init);//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var flocking;
var sepSlider;
var sepValue;
var sepRadiusSlider;
var sepRadiusValue;
var coSlider;
var coValue;
var alSlider;
var alValue;
var radiusSlider;
var radiusValue;
var maxForceSlider;
var maxForceValue;
var maxSpeedSlider;
var maxSpeedValue;
var edgeForceSlider;
var edgeForceValue;





function init(){
  //get the canvas
  sepSlider = document.getElementById("sep");
  sepSlider.addEventListener("input",handleSep);
  sepValue = sepSlider.value;
  sepRadiusSlider = document.getElementById("sepRadius");
  sepRadiusSlider.addEventListener("input",handleSepRadius)
  sepRadiusValue = sepRadiusSlider.value;///fix up slider
  coSlider = document.getElementById("coh");
  coSlider.addEventListener("input",handleCo);
  coValue = coSlider.value;
  alSlider = document.getElementById("align");
  alSlider.addEventListener("input",handleAl);
  alValue = alSlider.value;
  radiusSlider = document.getElementById("radius");
  radiusSlider.addEventListener("input",handleRadius);
  radiusValue= radiusSlider.value;
  maxForceSlider = document.getElementById("maxForce");
  maxForceSlider.addEventListener("input",handleMaxForce);
  maxForceValue = maxForceSlider.value;
  canvas = document.getElementById('cnv');
  maxSpeedSlider = document.getElementById('maxspeed');
  maxSpeedSlider.addEventListener('input',handleMaxSpeed);
  maxSpeedValue = maxSpeedSlider.value;
  ///edgeForceSlider = docu

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
function handleMaxForce(){
  console.log(this.value);
  maxForceValue = this.value;
}
function handleMaxSpeed(){
  console.log(this.value);
  maxSpeedValue = this.value;
}
function handleSepRadius(){
  console.log(this.value);
  sepRadiusValue = this.value;
}
