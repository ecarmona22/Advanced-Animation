function Flocking(x,y){
  this.vehicles = [];
  this.amountOfVehicles = 100;
  this.spawn = new JSVector(x,y);
  this.makeVehicles();
}

Flocking.prototype.makeVehicles = function () {
  for(let i = 0;i<this.amountOfVehicles;i++){
    this.vehicles.push(new Vehicle(this.spawn));
  }
};

Flocking.prototype.run = function () {
  for(let i = 0;i<vehicles.length;i++){
    this.vehicles[i].run();
  }
};
