'use strict';
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;

var particle;
var particles = [];



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
  makeParicles(4);
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = particles.length-1; i>= 0 ; i--){
    particles[i].run()
    if(particles[i].isDead() == true){
      particles.splice(i);
    }
  }
}


function makeParicles(numOfPar){
  for(let i = 0; i < numOfPar; i++){
    particles.push(new Particle());//creates paritcle objects and pushes them into particles array

  }
}
