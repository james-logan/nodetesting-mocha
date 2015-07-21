module.exports = function Animal (species) {
  this.alive = true;
  this.species = species;
  Animal.prototype.beCute = function () {
    this.isCute = true;
  }
  this.isCute = false;

};
