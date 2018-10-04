function Particle() {
  this.loc = new JSVector( Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  this.vel = new JSVector((Math.random()*((2+1)-1)),(Math.random()*(-2-2)));
  this.acc = new JSVector(0,05);
  this.lifeSpan = 255;
  this.isDead1 = false;
}


Particle.prototype.run = function () {
  this.update();
};

Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifeSpan-=2.0;
  this.render();


Particle.prototype.render = function () {
  ctx.strokeStyle = 'rgba(0,0,0, .9)';
  ctx.fillStyle = "rgba(55,55,0, .9)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
  ctx.stroke();
};

Particle.prototype.isDead = function () {
  if(this.lifeSpan<0.0){
    this.isDead1 = true
  }
  return this.isDead1;
}
