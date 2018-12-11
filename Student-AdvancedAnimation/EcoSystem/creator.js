function Creator(){
  this.vehicles = [];
  this.snakes = [];
  this.buddies = [];
  this.amountOfBuddies = 3;
  this.amountOfVehicles = 3; // amount of vehicles flocking
  this.amountOfSnakes = 4;// number of snakes
  this.numOfSeg = 8; //number of segments

  this.makeCreatures();

}

Creator.prototype.makeCreatures = function () {
 for(let i = 0; i< this.amountOfBuddies;i++){
    this.buddies.push(new Buddies());
}

  for(let i = 0; i< this.amountOfSnakes;i++){
    this.snakes.push(new Snake(this.numOfSeg)); }

  for(let i = 0;i<this.amountOfVehicles;i++){
    var location = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
    this.vehicles.push(new Vehicle(location,this.vehicles,this.snakes));
  }




};

Creator.prototype.run = function () {
  for(let i = 0; i < this.buddies.length;i++){
    this.buddies[i].run();
  }

  for(let i = 0;i<this.snakes.length;i++){
    this.snakes[i].run();
}

  for(let i = 0;i<this.vehicles.length;i++){
    this.vehicles[i].run();
  }



}