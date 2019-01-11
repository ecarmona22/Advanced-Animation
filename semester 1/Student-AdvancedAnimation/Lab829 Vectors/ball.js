

function Ball(loc, vel, rad){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
}

Ball.prototype.run = function(){
  this.checkEdges();
  this.update();
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x > window.innerWidth || this.loc.x < 0)  this.vel.x = -this.vel.x;
  if(this.loc.y > window.innerHeight || this.loc.y < 0)  this.vel.y = -this.vel.y;
}

Ball.prototype.update = function(){
  this.loc.x += this.vel.x;
  this.loc.y += this.vel.y;
  this.render();
}

Ball.prototype.render = function(){
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.fillStyle = "rgba(255,162,12)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
  ctx.stroke();

}
