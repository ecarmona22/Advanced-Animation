

function Ball(loc, vel, acc, rad){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.rad = rad;
}

Ball.prototype.run = function(){
  this.checkEdges();
  this.update();
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width || this.loc.x < 0)  this.vel.x = -this.vel.x;// add radius to location
  if(this.loc.y > canvas.height || this.loc.y < 0)  this.vel.y = -this.vel.y;//add radius to loction
}

Ball.prototype.update = function(){
  this.vel.x += this.acc.x;
  this.vel.y += this.acc.y;
  this.vel.limit(10);
  this.loc.x += this.vel.x;
  this.loc.y += this.vel.y;
  this.render();
}

Ball.prototype.render = function(){
  ctx.strokeStyle = 'rgba(0,0,0, .9)';
  ctx.fillStyle = "rgba(4,0,255, .9)";
  ctx.beginPath();
  ctx.rect(this.loc.x,this.loc.y, this.rad, this.rad);
  ctx.stroke();
  ctx.fill();

}
