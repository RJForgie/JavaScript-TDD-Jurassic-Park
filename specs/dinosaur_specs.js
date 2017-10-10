var assert = require("assert");
var Dinosaur = require("../dinosaur");

var dinosaur;

describe("Dinosaur", function () {

  beforeEach(function (){
    dinosaur = new Dinosaur("Tyrannosaurus", 1);
  });

  it("dinosaur has type", function () {
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it("dinosaur has number of offspring per year", function () {
    assert.strictEqual(dinosaur.offspringPerYear, 1);
  });

});
