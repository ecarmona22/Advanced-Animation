function Buddies(){
  this.boid;
  this.orbitors = [];
  this.amoutOfOrbitors = Math.random()*(4-1)+1;
  this.boidCreater= function(){
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var loc = new JSVector(x,y);
    var dx =.02;
    var dy = .02;
    var vel = new JSVector(dx,dy);
    var ax = .001;
    var ay = .001;
    var acc = new JSVector(ax,ay);
    this.boid = new Ball(loc,vel,acc,30);
  };
  this.boidCreater();
  for(let i =0; i < this.amoutOfOrbitors; i++){
    this.orbitors.push(new Orbitor(this.boid));
  }


}

Buddies.prototype.run = function(){
  this.boid.run();
   for(let i = 0; i < this.orbitors.length; i++){
    this.orbitors[i].run();
   }
}
