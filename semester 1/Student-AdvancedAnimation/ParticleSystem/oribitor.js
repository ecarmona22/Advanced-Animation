function Orbitor(otherBall){
  this.otherBall = otherBall;
  this.radiusOfOrbitor = 15;
  this.radiusFromBall = new JSVector(70,0);
  this.angularVel = .05;

  Orbitor.prototype.run = function(){
    this.update();

}

  Orbitor.prototype.update = function(){
    this.radiusFromBall.rotate(this.angularVel);
    this.render();
  }
  Orbitor.prototype.render = function(){
    var loc  = JSVector.addGetNew(this.radiusFromBall,this.otherBall.loc);
    ctx.strokeStyle = 'rgba(55,50,220)';
    ctx.fillStyle = "rgba(255,162,12)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(loc.x,loc.y, this.radiusOfOrbitor, Math.PI*2, 0, false);
    ctx.stroke();

  }
}
