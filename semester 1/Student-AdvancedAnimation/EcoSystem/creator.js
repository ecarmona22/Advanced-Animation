function Creator(){
  this.vehicles = [];//array of vehicles
  this.snakes = [];//array of snakes
  this.buddies = [];//array of buddies
  this.amountOfBuddies = 3;// buddies
  this.amountOfVehicles = 75; // amount of vehicles flocking
  this.amountOfSnakes = 5;// number of snakes
  this.numOfSeg = 8; //number of segments
  this.live = true;

  this.makeCreatures();

}

Creator.prototype.makeCreatures = function () //initates all creatues
  for(let i = 0;i<this.amountOfVehicles;i++){//for loop for vehicles
    var location = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);//creates random location on canvas
    this.vehicles.push(new Vehicle(location,this.vehicles,this.snakes));// creates vehicle with input parameters(location to be created, array of vehicles, array of snakes)
  }

  for(let i = 0; i< this.amountOfSnakes;i++){//for loop to create snakes
    this.snakes.push(new Snake(this.numOfSeg,this.vehicles)); }//creates snakes with input paramters(number of segments,array of vehicles)

  for(let i = 0; i< this.amountOfBuddies;i++){//for loop to create buddies
     this.buddies.push(new Buddies(this.snakes));//creates buddies with input parameters(array of snakes)
 }

};

Creator.prototype.run = function () {//runs all creatures
  for(let i = 0; i < this.buddies.length;i++){//runs through array of buddies
    this.buddies[i].run();
    if(this.buddies[i].life === false){//if buddies.life = false,
      this.snakes.radiusOfSeg++;//snake grows in radius
      this.buddies.splice(i,1);//buddy is removed from array(buddy dies)
    }
  }

  for(let i = 0;i<this.vehicles.length;i++){//runs through array of vehicles

      this.vehicles[i].run();
      if(this.vehicles[i].life === false){//if vehicles.life= false,
        this.vehicles.splice(i,1);//vehicle is removed from array " vehicle dies"
      }
  }


  for(let i = 0;i<this.snakes.length;i++){//runs through array of snakes 
    this.snakes[i].run();
}




}
