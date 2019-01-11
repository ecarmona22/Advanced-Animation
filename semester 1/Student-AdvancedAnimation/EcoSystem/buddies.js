function Buddies(snakes){
  this.boid;
  this.life = true;
  this.orbitors = [];
  this.snakes = snakes;
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
    this.orbitors.push(new Orbitor(this.boid,this.snakes));
  }


}

// Buddies.prototype.life = function () {
//   for(let i = 0; i < this.orbitors.length; i++){
//     for(let k = 0; k < this.snakes.length;k++){
//       var distance = this.orbitors[i].loc.distance(this.snakes[k].loc);
//       if(distance < 10){
//         this.orbitors.splice(i,1);
//       }
//     }
//
//   }
// };

Buddies.prototype.run = function(){
  this.boid.run();
   for(let i = 0; i < this.orbitors.length; i++){
    this.orbitors[i].run();
    if(this.orbitors[i].life === false){
      this.orbitors.splice(i,1);
    }

  }
  for(let i = 0; i < this.snakes.length;i++){
    if(this.orbitors.length === 0 && (this.boid.loc.distance(this.snakes[i].loc) < 20)){
    this.snakes[i].radiusOfSeg-=0.5;
    }
}
  //this.life();
}
