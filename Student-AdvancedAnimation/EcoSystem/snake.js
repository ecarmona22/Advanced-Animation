
function Snake(numOfSeg,prey){

  this.loc = new JSVector( Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  this.vel = new JSVector(Math.random()*4,Math.random()*4);
  this.acc = new JSVector(0.01,-0.01);
  this.accR = Math.random()*300;//variable will create change in acceleration

  this.prey = prey;
  this.maxSpeed = 6;
  this.maxForce = 0.6

  this.numOfSeg = numOfSeg;

  this.segments = [];// array of segments
  this.distance = 20;
  this.radiusOfSeg = 10;
  this.segments.push(this.loc);
  this.generator = new Simple1DNoise();
  this.x = 1;// first segment given location
  for(let i = 0;i<numOfSeg-1;i++){
    this.segments.push(new JSVector(0,0));
  }
}




Snake.prototype.run = function () {
  this.checkEdges();
  this.food();
  this.update();
}

Snake.prototype.checkEdges = function () {
  if(this.loc.x > canvas.width || this.loc.x < 0)  this.vel.x = -this.vel.x;
  if(this.loc.y > canvas.height || this.loc.y < 0)  this.vel.y = -this.vel.y;
}


Snake.prototype.food = function () {
  var sum = new JSVector(0,0);
  for(let i = 0; i < this.prey.length; i++){
    var distanceFromPrey = this.loc.distance(this.prey[i].loc);
    if(distanceFromPrey < 45){
      var desiredVel = JSVector.subGetNew(this.loc,this.prey[i].loc);
      desiredVel.normalize();
      desiredVel.multiply(this.maxSpeed);
      var desiredacc = JSVector.subGetNew(desiredVel,this.vel);
      desiredacc.limit(this.maxForce);
      sum.add(desiredacc);

    }
  }
  this.acc.add(sum);
};

Snake.prototype.update = function () {
  this.accR++;//
  if (this.accR>500){//when variable reaches 100, the accleration is muliplied by -1
    this.acc = this.acc.multiply(-1);

  }
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.loc.add(this.vel);

  for(let i = 1;i<this.numOfSeg;i++){//gives the rest of segments location based on leader segment
    var temp = JSVector.subGetNew(this.segments[i],this.segments[i-1]);
    temp.setMagnitude(this.radiusOfSeg*2);
    var loc = JSVector.addGetNew(temp,this.segments[i-1]);
    this.segments[i] = loc;
  }


  this.render();
}

Snake.prototype.render = function () {
  for(let i = 0;i<this.numOfSeg;i++){
    ctx.strokeStyle = 'rgba('+this.generator.getVal(this.x)*255+',0,0,.5)';
    ctx.lineWidth = 22;
    ctx.fillStyle = 'rgba('+ this.generator.getVal(this.x)*250+','+ this.loc.x +','+this.loc.y+')';
    ctx.beginPath();
    ctx.arc(this.segments[i].x,this.segments[i].y, this.radiusOfSeg-i, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();


  }
  this.x+=0.01;
}
