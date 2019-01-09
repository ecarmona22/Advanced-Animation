function Orbitor(otherBall,snakes){
  this.otherBall = otherBall;
  this.snakes = snakes;
  this.radiusOfOrbitor = 5;
  this.postition = (Math.random()*4)*(Math.PI/2);
  this.radius = Math.random()* (110-40)+40;
  this.radiusFromBall = new JSVector(this.radius,0);
  this.angularVel = Math.random() * (.09 -.02)+.02;
  this.loc;
  this.life = true;

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
    temp.y+= 15;
    this.loc  = JSVector.addGetNew(this.radiusFromBall,temp);
    for(let i=0;i<this.snakes.length;i++){
      if(this.loc.distance(this.snakes[i].loc) < 20){
        this.life = false;
      }
    }
    ctx.strokeStyle = 'rgba(250,250,250)';
    ctx.fillStyle = "rgba(2,54,244)";
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radiusOfOrbitor, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();

  }
}
