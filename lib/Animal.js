function Animal (species) {
  this.alive = true;
  this.species = species;
  this.health = 1;
  this.isCute = false;
};

Animal.prototype.beCute = function () {
  this.isCute = true;
}

Animal.prototype.updateHealthStats = function (cb) {
  // this.health = Math.random();
  var self = this
  setTimeout(function () {
    self.health = Math.random;
    cb();
  }, 1000);
}

module.exports = Animal;
