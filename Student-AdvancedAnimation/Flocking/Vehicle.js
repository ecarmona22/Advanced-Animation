function Vehicle(loc,neighbors){
  this.loc = loc;
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.acc = new JSVector(0,0);
  this.steerV;
  this.maxSpeed = 4;//book = 4
  this.maxForce = .1;//book = 0.1
  this.radiusOfFreinds = 75;//radius for alignment, cohesion, and sepration
  this.otherVehicles = neighbors;

}

//function for cohesion (find average location for neighboring vehicles)
// determine acceleration and call apply force
//function for allignmentz(average velocity of all neighbors )
//function for speration (steer away from really close vehicles )sum of acceletatino
// sum of accelerations and giving weights,magnitude by normalizing then mulitplying by a coefficent
//function checkedges(change direction of flock so it returns to screen  )
Vehicle.prototype.run = function () {
  this.checkedges();
};

Vehicle.prototype.checkedges = function () {
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.y < 0) this.loc.y = canvas.height;

  this.update();
};

Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.loc.add(this.vel);
  this.acc.multiply(0);
  this.seperation();
  this.cohesion();
  this.align();
  this.render();

};

Vehicle.prototype.applyforce = function (force) {
    this.acc.add(force);
};

Vehicle.prototype.steer = function (target) {
  this.desired = JSVector.subGetNew(this.loc,this.target);
  //this.maxSpeed = this.desired.getMagnitude();
  this.desired.normalize();
  this.desired.multiply(this.maxspeed);
  this.steerV = JSVector.subGetNew(this.vel,this.desired);
  this.steerV.limit(this.maxForce);
  return this.steerV;
}

Vehicle.prototype.seperation = function() {
  var sum = new JSVector(0,0);
  for(let i = 0;i<this.otherVehicles.length;i++){//looks for vehicles that are close
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
    if((distanceFromNeighbor>0)&&(distanceFromNeighbor<this.radiusOfFreinds)){
      var desiredVel = JSVector.subGetNew(this.loc,this.otherVehicles[i].loc);
      desiredVel.normalize();
      desiredVel.multiply(this.maxSpeed);
      var desiredacc = JSVector.subGetNew(desiredVel,this.vel);
      desiredacc.normalize();
      desiredacc.multiply(sepValue);//weight factor
      sum.add(desiredacc);
    }
  }
  this.applyforce(sum);
};


Vehicle.prototype.cohesion = function () {
  var sum = new JSVector(0,0);
  var count = 0;
  for(let i = 0;i<this.otherVehicles.lenght;i++){
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
    if ((distanceFromNeighbor>0)&&(distanceFromNeighbor<this.radiusOfFreinds)) {
      sum.add(this.otherVehicles[i].loc);
      count++;
    }
  }
  if(count>0){
    sum.divide(count);
    this.applyforce(this.steer(sum));
  }else{
    this.applyforce(new JSVector(0,0));
  }
};

Vehicle.prototype.align = function () {
  var sum = new JSVector(0,0);
  var count = 0;
  for(let i = 0;i<this.otherVehicles.length;i++){
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
    if((distanceFromNeighbor>0)&&(distanceFromNeighbor<this.radiusOfFreinds)){
      sum.add(this.otherVehicles[i].vel);
      count++;
    }
  }
  if(count>0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);//weight
    var desiredacc = JSVector.subGetNew(sum,this.vel);
    desiredacc.limit(this.maxForce);
    this.applyforce(desiredacc);
  }else {
    this.applyforce(new JSVector(0,0));
  }
};

Vehicle.prototype.render = function () {
    ctx.save();
    ctx.strokeStyle = 'rgba(0,0,0, .9)';
    ctx.fillStyle = "rgba(140,138,138,.9)";
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
