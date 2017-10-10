var assert = require("assert");
var Park = require("../park");
var Dinosaur = require("../dinosaur");

var park1;
var dinosaur1;
var dinosaur2;
var dinosaur3;

describe("Park", function () {

  beforeEach(function (){
    park1 = new Park("Jurassic Park");
    dinosaur1 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaur("Velociraptor", 3);
    dinosaur3 = new Dinosaur("Triceratops", 3);
  });

  it("park has name", function () {
    assert.strictEqual(park1.name, "Jurassic Park");
  });

  it("park enclosure starts empty", function () {
    assert.strictEqual(park1.enclosure.length, 0);
  });

  it("should be able to add dinosaur to enclosure", function () {
    park1.addDinosaur(dinosaur1);
    assert.strictEqual(park1.enclosure.length, 1);
  });

  // it("remove dinosaurs of one type", function () {
  //   park1.addDinosaur(dinosaur1);
  //   park1.addDinosaur(dinosaur1);
  //   park1.addDinosaur(dinosaur2);
  //   assert.strictEqual(park1.enclosure.get);
  // });

  it("remove dinosaurs of one type", function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.removeDinosOfType("Tyrannosaurus")
    assert.strictEqual(park1.enclosure.length, 1);
  });

  it("get dinosaurs with more than 2 offspring per year", function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.getDinosMoreThan2Offspring()
    assert.strictEqual(park1.getDinosMoreThan2Offspring().length, 2);
  });

  it("dinosaurs after one year", function () {
    park1.addDinosaur(dinosaur1);
    assert.strictEqual(park1.dinosAfter1Year(), 2);
  });

  it("dinosaurs after two years", function () {
    park1.addDinosaur(dinosaur1);
    assert.strictEqual(park1.dinosAfterXYears(2), 4);
  });

  it("dinosaurs after four years", function () {
    park1.addDinosaur(dinosaur1);
    assert.strictEqual(park1.dinosAfterXYears(4), 8);
  });

  it("year 2 population starting with 2 dinosaurs", function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    assert.strictEqual(park1.dinosAfterXYears(2), 20);
  });





});
