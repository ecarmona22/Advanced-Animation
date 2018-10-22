function Vehicle(x,y){//file has not been added to index.html
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(0,0);
  this.acc = new JSVector(0,0);
  this.maxSpeed;//book = 4
  this.maxForce;//book = 0.1
  this.desiredSeperation = 10;
  this.otherVehicles = ();
  //target  = average location
  //
}
//left of at example 6.7 group behavior: serpation working on first if statment 

//function for cohesion (find average location for neighboring vehicles)
// determine acceleration and call apply force
//function for allignmentz(average velocity of all neighbors )
//function for speration (steer away from really close vehicles )
// sum of accelerations and giving weights,magnitude by normalizing then mulitplying by a coefficent
//function checkedges(change direction of flock so it returns to screen  )
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
Vehicle.prototype.seperation = function () {
  var sum = new JSVector(0,0);
  var count = 0;
  for(let i = 0;i<otherVehicles.length;i++){
    var d = this.loc.distance(otherVehicles.loc);
    if((d>0)&&(d<this.desiredSeperation)){
      var diff =
    }
  }

};
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
