function Creator(){
  this.vehicles = [];
  this.snakes = [];
  //this.boid = [];
  this.boid;
  this.boidRadius = 30;
  this.orbitor;
  this.amountOfVehicles = 100; // amount of vehicles flocking
  this.amountOfSnakes = 4;// number of snakes
  this.numOfSeg = 8; //number of segments

  this.ballCreater= function(){
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

  this.makeCreatures();

}

Creator.prototype.makeCreatures = function () {
  for(let i = 0;i<this.amountOfVehicles;i++){
    var location = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
    this.vehicles.push(new Vehicle(location,this.vehicles,this.snakes));
  }
  for(let i = 0; i< this.amountOfSnakes;i++){
    this.snakes.push(new Snake(this.numOfSeg)); }

    this.ballCreater();
    this.orbitor = new Orbitor(this.boid);

};

Creator.prototype.run = function () {
  for(let i = 0;i<this.vehicles.length;i++){
    this.vehicles[i].run();
  }
  for(let i = 0;i<this.snakes.length;i++){
    this.snakes[i].run();
}

  this.boid.run();
  this.orbitor.run();
}
