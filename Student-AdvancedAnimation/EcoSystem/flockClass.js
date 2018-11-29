function Flocking(){
  this.vehicles = [];
  this.amountOfVehicles = 50;

  this.makeVehicles();
}

Flocking.prototype.makeVehicles = function () {
  for(let i = 0;i<this.amountOfVehicles;i++){
    var location = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
    this.vehicles.push(new Vehicle(location,this.vehicles));
  }
};

Flocking.prototype.run = function () {
  for(let i = 0;i<this.vehicles.length;i++){
    this.vehicles[i].run();
  }
};
