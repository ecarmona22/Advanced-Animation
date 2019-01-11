window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var balls = [];


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
  makeBalls(83);

  animate();
}

function animate(){

  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function makeBalls(numBalls){

  for(let i = 0; i < numBalls; i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var loc = new JSVector(x, y);
    var dx = Math.random()*10-5;
    var dy = Math.random()*10-5;
    var vel = new JSVector(dx, dy);
    var r = Math.random()*20 + 10;
    balls.push(new Ball(loc, vel, r))
  }
}
