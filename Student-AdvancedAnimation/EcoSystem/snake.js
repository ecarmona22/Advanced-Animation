function Snake(numOfSeg){
  this.loc = new JSVector( Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  this.vel = new JSVector(Math.random()*4,Math.random()*4);
  this.acc = new JSVector(0.01,-0.01);
  this.accR = Math.random()*300;//variable will create change in acceleration

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
  this.update();
}

Snake.prototype.checkEdges = function () {
  if(this.loc.x > canvas.width || this.loc.x < 0)  this.vel.x = -this.vel.x;
  if(this.loc.y > canvas.height || this.loc.y < 0)  this.vel.y = -this.vel.y;
}


Snake.prototype.update = function () {
  this.accR++;//
  if (this.accR>500){//when variable reaches 100, the accleration is muliplied by -1
    this.acc = this.acc.multiply(-1);

  }
  this.vel.x += this.acc.x;
  this.vel.y += this.acc.y;
  this.vel.limit(10);
  this.loc.x += this.vel.x;
  this.loc.y += this.vel.y;

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
