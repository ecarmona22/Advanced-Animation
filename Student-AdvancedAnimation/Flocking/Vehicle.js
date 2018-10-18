function Vehicle(x,y){//file has not been added to index.html
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(0,0);
  this.acc = new JSVector(0,0);
  this.maxSpeed;//book = 4
  this.maxForce;//book = 0.1
}
//left of beefore6.4 nature of code 


};
Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.loc.add(this.vel);
  this.acc.multiply(0);
};

Vehicle.prototype.applyforce = function (force) {
    this.acc.add(force);
};
Vehicle.prototype.steer = function (target) {
  this.desired = JSVector.subGetNew(this.loc,this.target);
  this.maxSpeed = this.desired.getMagnitude();
  this.desired.normalize();
  this.desired.multiply(this.maxspeed);
  this.steer = JSVector.subGetNew(this.vel,this.desired);
  this.steer.limit(this.maxForce);
  this.applyforce(this.steer);
  //apply force by adding to loc? or vel?

  Vehicle.prototype.render = function () {
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
  };
