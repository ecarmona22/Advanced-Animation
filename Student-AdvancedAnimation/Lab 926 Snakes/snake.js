function Snake(numOfSeg){
  this.numOfSeg = numOfSeg;
  this.segments = [];// array of segments
  this.distance = 70;
  this.radiusOfSeg = 10;
  this.colorNumR = Math.random()*250;
  this.colorNumG = Math.random()*250;
  this.colorNumB = Math.random()*250;
  for(let i = 0;i<numOfSeg;i++){
    this.segments.push(new JSVector(0,0));
  }
}




Snake.prototype.run = function () {
  this.update();
}

Snake.prototype.update = function () {
  var temp = JSVector.subGetNew(this.segments[0],leader.loc);
  temp.setMagnitude(this.distance);
  var loc = JSVector.addGetNew(temp,leader.loc);
  this.segments[0] = loc;
  for(let i = 1;i<this.numOfSeg;i++){
    var temp = JSVector.subGetNew(this.segments[i],this.segments[i-1]);
    temp.setMagnitude(this.radiusOfSeg*2);
    var loc = JSVector.addGetNew(temp,this.segments[i-1]);
    this.segments[i] = loc;
  }


  this.render();
}

Snake.prototype.render = function () {
  this.colorNumR++;
  this.colorNumG++;
  this.colorNumB++;
  if(this.colorNumR>255){
    this.colorNumR = 0;
  }
  if(this.colorNumG>255){
    this.colorNumG = 0;
  }
  if(this.colorNumB>255){
    this.colorNumB = 0;
  }
  for(let i = 0;i<this.numOfSeg;i++){
    ctx.strokeStyle = 'rgba(255,255,255)';
    ctx.fillStyle = "rgba("+this.colorNumR+","+this.colorNumG+","+this.colorNumB+")";
    ctx.beginPath();
    ctx.arc(this.segments[i].x,this.segments[i].y, this.radiusOfSeg, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();


  }
}
