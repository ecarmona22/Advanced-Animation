function Vehicle(loc,neighbors,otherCreatures){// set parameters (location where vehicles is to be rendered, array of vehicles, array of snakes )
  this.loc = loc;//location vector
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);//random velocity vector between 2 and 1
  this.acc = new JSVector(0,0);//accleration vector
  this.steerV;
  this.maxSpeed =4 // maxSpeedValue;//book = 4 // maximum magnitude
  this.maxForce = 0.4 //maxForceValue;//book = 0.1 //maximum
  //this.radiusOfFreinds = radiusValue;//radius for alignment, cohesion, and sepration
  this.otherVehicles = neighbors;// array of vehicles
  this.creatures = otherCreatures;//array of snakes
  this.distanceFromSnakes = 50;
  this.seperationRadius = 60;//radius of other vehicles for seperation
  this.seperationFactor = .05;// amount of force to repel from other vehicles
  this.cohesionFactor =.02;// amount of force to attract to average location of other vehicles
  this.alignmentFactor = .04;//amount of force to attract to average velocity to other vehicles
  this.radiusOfAlAndCo = 210;//radius of other vehicles for alignment and cohesion
  this.distanceFromCreature;//
  this.colorB = 255;//amount of blue in RGB
  this.colorG = 255;//amount of Green in RGB
  this.life = true;//
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

Vehicle.prototype.checkedges = function () {//checks if vehicles is on canvas, if not will appear on opposite side of canvas
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.y <0) this.loc.y = canvas.height;


  this.update();
};

Vehicle.prototype.update = function () {
  this.vel.add(this.acc);//adds accleration to velocity
  this.vel.limit(this.maxSpeed);//assures velocity does not excced maximum speed
  this.loc.add(this.vel);//adds velocity to locaiton
  this.acc.multiply(0);//resets accleration
  this.seperation();// causes vehicles to keep a distance from each other
  this.cohesion();// attracts vehicles to average locaiton of other vehicles
  this.align();//attracts vehicles to average velocity of other vehicles
  this.otherCreatures();//causes vehicles to run away from snakes when in certain range
  this.render();//draws,or renders, vehicle on canvas

};

Vehicle.prototype.applyforce = function (force) {// applies force to accleration
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

Vehicle.prototype.seperation = function() {//causes vehicles to keep a distance from each other
  var sum = new JSVector(0,0);//local vector to add all vectors too.
  for(let i = 0;i<this.otherVehicles.length;i++){//runs through array of all vehicles
    if(this.otherVehicles[i] === this) continue;//if array of vehicles is this vehicle it skips
    var distanceFromNeighbor = this.loc.distance(this.otherVehicles[i].loc);//calculates distance from this vehicle to other vehicles
    if(distanceFromNeighbor< this.seperationRadius){//if distance calculated is in range runs through
      var desiredVel = JSVector.subGetNew(this.loc,this.otherVehicles[i].loc);// subtracts to find distance(vector)
      desiredVel.normalize();//sets magnitude to 1. more info in jsvector.js
      desiredVel.multiply(this.maxSpeed);//multiply by maximumspeed
      var desiredacc = JSVector.subGetNew(desiredVel,this.vel);//subtracts vectors to achieve accleration
      desiredacc.normalize();
      desiredacc.multiply(this.seperationFactor);//sepValue);//multiply by weight factor
      sum.add(desiredacc);//adds to local vector
    }
  }
  this.applyforce(sum);//adds to accleration
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
