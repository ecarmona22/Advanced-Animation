function Vehicle(loc,neighbors,otherCreatures){
  this.loc = loc;
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
  this.acc = new JSVector(0,0);
  this.steerV;
  this.maxSpeed =4 // maxSpeedValue;//book = 4
  this.maxForce = 0.4 //maxForceValue;//book = 0.1
  //this.radiusOfFreinds = radiusValue;//radius for alignment, cohesion, and sepration
  this.otherVehicles = neighbors;
  this.creatures = otherCreatures;
  this.distanceFromSnakes = 50;
  this.seperationRadius = 60;
  this.seperationFactor = .05;
  this.cohesionFactor =.02;
  this.alignmentFactor = .04;
  this.radiusOfAlAndCo = 210;
  this.distanceFromCreature;
  this.colorB = 255;
  this.colorG = 255;
  this.life = true;
  this.count= 0;
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
    if(this.loc.y <0) this.loc.y = canvas.height;


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
  this.otherCreatures();
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
    if(this.otherVehicles[i] === this) continue;
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
    if(distanceFromNeighbor< this.seperationRadius){
      var desiredVel = JSVector.subGetNew(this.loc,this.otherVehicles[i].loc);
      desiredVel.normalize();
      desiredVel.multiply(this.maxSpeed);
      var desiredacc = JSVector.subGetNew(desiredVel,this.vel);
      desiredacc.normalize();
      desiredacc.multiply(this.seperationFactor);//sepValue);//weight factor
      sum.add(desiredacc);
    }
  }
  this.applyforce(sum);
};

Vehicle.prototype.otherCreatures = function () {
  var sum = new JSVector(0,0);
  for(let i = 0; i<this.creatures.length;i++){
    var distanceFromCreature = this.loc.distance(this.creatures[i].loc);
    if(distanceFromCreature<this.distanceFromSnakes){
      var desiredVel = JSVector.subGetNew(this.loc,this.creatures[i].loc);
      desiredVel.normalize();
      desiredVel.multiply(this.maxSpeed);
      var desiredacc = JSVector.subGetNew(desiredVel,this.vel);
      sum.add(desiredacc);
    }
    if((distanceFromCreature < 30) || (this.creatures[i].loc === this.loc)){
          this.life = false;
          this.creatures[i].radiusOfSeg++;
        }

      }

  this.applyforce(sum);
};

Vehicle.prototype.cohesion = function () {
  var sum = new JSVector(0,0);
  var count = 0;
  for(let i = 0;i<this.otherVehicles.length;i++){
    if(this.otherVehicles[i] != this){
      var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
      if(distanceFromNeighbor<this.radiusOfAlAndCo) {
        sum.add(this.otherVehicles[i].loc);
        count++;
      }
    }
  }
  if(count>0){
    sum.divide(count);
    var desiredVel = JSVector.subGetNew(sum,this.loc);
     desiredVel.normalize();
     desiredVel.multiply(this.maxSpeed);
     var desiredacc = JSVector.subGetNew(desiredVel,this.vel);
     desiredacc.normalize();
     desiredacc.multiply(this.cohesionFactor);//(covalue)
     desiredacc.limit(this.maxForce);
     this.applyforce(desiredacc);
  //this.applyforce(this.steer(sum));
  }else{
    this.applyforce(new JSVector(0,0));
  }
};

Vehicle.prototype.align = function () {
  var sum = new JSVector(0,0);
  var count = 0;
  for(let i = 0;i<this.otherVehicles.length;i++){
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);
    if((distanceFromNeighbor>0)&&(distanceFromNeighbor<this.radiusOfAlAndCo)){
      sum.add(this.otherVehicles[i].vel);
      count++;
    }
  }
  if(count>0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);//weight
    var desiredacc = JSVector.subGetNew(sum,this.vel);
    desiredacc.normalize();
    desiredacc.multiply(this.alignmentFactor);//(alValue);
    desiredacc.limit(this.maxForce);
    this.applyforce(desiredacc);
  }else {
    this.applyforce(new JSVector(0,0));
  }
};

Vehicle.prototype.render = function () {
    ctx.save();
    ctx.strokeStyle = 'rgba(0,0,0, .1)';
    for(let i = 0; i < this.creatures.length;i++){
      var distanceFromCreature = this.loc.distance(this.creatures[i].loc);
      if(distanceFromCreature<= 75){
        this.colorG-= 5.1;
        this.colorB-=5.1;
        this.count = 0;
      } else{
        this.count++;
      }

    }
    if(this.count > 800){
      this.colorG+= 2.55;
      this.colorB+= 2.55;
    }
    if(this.colorB > 255){
      this.colorB = 255;
    }
    if(this.colorG > 255){
      this.colorG = 255;
    }

    ctx.fillStyle = "rgba(255,"+this.colorG+","+this.colorB+", .9)";
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
