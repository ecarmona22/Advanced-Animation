function ParticleSystem(x, y){
this.particles = [];
this.spawn = new JSVector(x,y);
this.color = color;
this.makeParticles();


}

ParticleSystem.prototype.run = function () {
  for(let i = this.particles.length-1; i>= 0 ; i--){
    this.particles[i].run()
    if(this.particles[i].isDead() == true){
      this.particles.splice(i,1);
      this.particles.push(new Particle(this.spawn));
    }
  }
};

ParticleSystem.prototype.makeParticles = function () {
  for(let i = 0; i < 20; i++){
    this.particles.push(new Particle(this.spawn,this.color));//creates paritcle objects and pushes them into particles array

  }
};
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}//fixcolor change
