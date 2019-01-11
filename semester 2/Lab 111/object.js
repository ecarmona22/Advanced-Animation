function Objects(locX, locY){
this.locX = locX;
this.locY = locY;
this.rad = 45;


}


Objects.prototype.run = function () {
  ctx.strokeStyle = 'rgba(0,0,0,.9)';
  ctx.fillStyle = 'rgba(55,55,0,.9)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(this.locX,this.locY,this.rad,Math.PI*2,0,false);
  ctx.stroke();
};
