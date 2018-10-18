'use strict';
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;

var particleSystems = [];


function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(84,85,86, .9)';
  canvas.addEventListener("click", makeParticleSystem);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  //ctx.translate(window.innerWidth/2,window.innerHeight/2)
  //ctx.rotate(Math.PI/2)

  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0; i<particleSystems.length;i++){
    particleSystems[i].run();
  }

}


function makeParticleSystem(event){
  particleSystems.push(new ParticleSystem(event.clientX, event.clientY));

}
