function Particle(spawn,color) {
  this.loc = spawn.copy() //JSVector( Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  var angle = Math.random() * (Math.PI/2);
  angle -= (3*Math.PI)/4;
  var magnitude = Math.random()+2;
  this.vel = new JSVector(magnitude * Math.cos(angle),magnitude*Math.sin(angle));//new JSVector((Math.random()*((2+1)-1)),(Math.random()*(-2-2)));
  this.acc = new JSVector(0,.08);
  this.lifeSpan = (Math.random()*100)+300;
  this.isDead1 = false;
  this.color = color
}


Particle.prototype.run = function () {
  this.update();
}

Particle.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifeSpan-=2.0;
  this.render();
}


Particle.prototype.render = function () {
  ctx.save();
  ctx.strokeStyle = 'rgba(0,0,0, .9)';
  ctx.fillStyle = " "+this.color+"";
  ctx.translate(this.loc.x,this.loc.y);
  ctx.rotate(this.vel.getDirection());
  ctx.beginPath();
  ctx.moveTo(-10,-10);
  ctx.lineTo(10,0);
  ctx.lineTo(-10,10);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

}

Particle.prototype.isDead = function () {
  if(this.lifeSpan<0.0){
    this.isDead1 = true
  }
  return this.isDead1;
}
