'use strict';
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var balls = [];
var ballAttractor;



function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  makeBalls(20);
  attactorBall(30);
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
  ballAttractor.run();
}

function makeBalls(numBalls){

  for(let i = 0; i < numBalls; i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var loc = new JSVector(x, y);
    var dx = 2//Math.random()*10-5;//-constant velocity only changed by acceleration
    var dy = 2//Math.random()*10-5;//-constant velocity only changed by acceleration
    var vel = new JSVector(dx, dy);
    var ax = 0;
    var ay = 0;//Math.random()*10-5;
    var acc = new JSVector(ax,ay);
    var r = Math.random()*20 + 10;
    balls.push(new Ball(loc, vel, acc, 15))
  }
}

function attactorBall(radius){
  var x = Math.random()*window.innerWidth;
  var y = Math.random()*window.innerHeight;
  var loc = new JSVector(x, y);
  var dx = 1;
  var dy = 1;
  var vel = new JSVector(dx, dy);
  var ax = 0;
  var ay = 0;
  var acc = new JSVector(ax, ay);
  ballAttractor = new Ball(loc, vel, acc, radius);
}

function acttraction(){

}
