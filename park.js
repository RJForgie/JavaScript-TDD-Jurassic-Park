var Park = function (name) {
  this.name = name;
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosOfType = function(type) {
  var dinosToKeep = [];
  for (var dinosaur of this.enclosure){
    if ( dinosaur.type !== type ){
      dinosToKeep.push(dinosaur);
    }
  }
  this.enclosure = dinosToKeep;
};

Park.prototype.getDinosMoreThan2Offspring = function(limit) {
  var dinosFound = [];
  for (var dinosaur of this.enclosure){
    if ( dinosaur.offspringPerYear > 2 ){
      dinosFound.push(dinosaur);
    }
  }
  console.log("dinosFound", dinosFound);
  return dinosFound;
};

Park.prototype.dinosAfter1Year = function () {
    var total = 0
    for (var dinosaur of this.enclosure){
      total += dinosaur.offspringPerYear;
    };
  return total += this.enclosure.length;
};

Park.prototype.nextYear = function (dinoType) {
  var total = 0;
  var count = 0;
  for (var dinosaur of this.enclosure){
    if (dinosaur.type === dinoType) {
      count += dinosaur.offspringPerYear
    }
    return count +=
  }


}

Park.prototype.dinosAfterXYears = function (years) {
  var startPop = this.enclosure.length;
  var nextYear = this.dinosAfter1Year();
  var growthRate = this.growthRate(nextYear, startPop);
  console.log(growthRate);
  return (nextYear * growthRate) * years;
}

Park.prototype.growthRate = function (pop1, pop2) {
  return ((pop1 - pop2) / pop2);
}






module.exports = Park;
