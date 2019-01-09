

function Ball(x, y, dx, dy, rad){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = rad;
}

Ball.prototype.run = function(){
  this.checkEdges();
  this.update();
}

Ball.prototype.checkEdges = function(){
  if(this.x > window.innerWidth || this.x < 0)  this.dx = -this.dx;
  if(this.y > window.innerHeight || this.y < 0)  this.dy = -this.dy;
}

Ball.prototype.update = function(){
  this.x += this.dx;
  this.y += this.dy;
  this.render();
}

Ball.prototype.render = function(){
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.fillStyle = "rgba(255,122,22)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(this.x,this.y, this.rad, Math.PI*2, 0, false);
  ctx.stroke();

}
