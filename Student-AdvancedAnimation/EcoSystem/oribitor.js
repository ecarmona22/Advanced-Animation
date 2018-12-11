function Orbitor(otherBall){
  this.otherBall = otherBall;
  this.radiusOfOrbitor = 5;
  this.postition = (Math.random()*4)*(Math.PI/2);
  this.radius = Math.random()* (110-40)+40;
  this.radiusFromBall = new JSVector(this.radius,this.postition);
  this.angularVel = Math.random() * (.09 -.02)+.02;

  Orbitor.prototype.run = function(){
    this.update();

}

  Orbitor.prototype.update = function(){
    this.radiusFromBall.rotate(this.angularVel);
    this.render();
  }
  Orbitor.prototype.render = function(){
    var temp = this.otherBall.loc.copy();
    temp.x+= 15;
    temp.y-= 15;
    var loc  = JSVector.addGetNew(this.radiusFromBall,temp);
    ctx.strokeStyle = 'rgba(0,0,0)';
    ctx.fillStyle = "rgba(2,54,244)";
    ctx.beginPath();
    ctx.arc(loc.x,loc.y, this.radiusOfOrbitor, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();

  }
}
