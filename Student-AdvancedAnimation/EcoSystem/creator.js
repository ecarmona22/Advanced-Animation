function Creator(){
  this.vehicles = [];
  this.snakes = [];
  this.buddies = [];
  this.amountOfBuddies = 3;
  this.amountOfVehicles = 75; // amount of vehicles flocking
  this.amountOfSnakes = 5;// number of snakes
  this.numOfSeg = 8; //number of segments

  this.makeCreatures();

}

Creator.prototype.makeCreatures = function () {
  for(let i = 0;i<this.amountOfVehicles;i++){
    var location = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
    this.vehicles.push(new Vehicle(location,this.vehicles,this.snakes));
  }

  for(let i = 0; i< this.amountOfSnakes;i++){
<<<<<<< HEAD
    this.snakes.push(new Snake(this.numOfSeg,this.snakes)); }
=======
    this.snakes.push(new Snake(this.numOfSeg,this.vehicles)); }
>>>>>>> 5cd06763884b85e818100fe5769db1760c19956e

  for(let i = 0; i< this.amountOfBuddies;i++){
     this.buddies.push(new Buddies());
 }

};

Creator.prototype.run = function () {
  for(let i = 0; i < this.buddies.length;i++){
    this.buddies[i].run();
  }

  for(let i = 0;i<this.vehicles.length;i++){
    this.vehicles[i].run();
  }


  for(let i = 0;i<this.snakes.length;i++){
    this.snakes[i].run();
}




}
