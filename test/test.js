var should = require('chai').should();
// var assert = require('assert')
var Animal = require(process.cwd() + '/lib/Animal.js');
var cp = require('child_process');
var name = require(process.cwd() + '/lib/name.js')



//tests for Cheer.js -----------------
// describe('CLI', function() {
//   it('should print the first half of the sentence', function (done) {
//     cp.execFile('./app.js', function (err, stdout) {
//       stdout.should.equal('Give me a ....!\n');
//       done();
//     })
//   });
// })


describe('String management', function () {
  it('should remove spaces from the string', function () {
    name.spaceBreaker('Mary Beth').should.eql(['M','A', 'R', 'Y', 'B', 'E', 'T', 'H'])
  })
})

describe('Printind from the array', function () {
  it('should print out messages for each letter', function () {
    name.cheerYeller(['A']).should.equal('Give me an A!\n');
    name.cheerYeller(['B']).should.equal('Give me a B!\n');
    name.cheerYeller(['C']).should.equal('Give me a C!\n');
    name.cheerYeller(['D']).should.equal('Give me a D!\n');
    name.cheerYeller(['E']).should.equal('Give me an E!\n');
    name.cheerYeller(['F']).should.equal('Give me an F!\n');
    name.cheerYeller(['G']).should.equal('Give me a G!\n');
    name.cheerYeller(['H']).should.equal('Give me an H!\n');
    name.cheerYeller(['I']).should.equal('Give me an I!\n');
    name.cheerYeller(['O']).should.equal('Give me an O!\n');
    name.cheerYeller(['U']).should.equal('Give me a U!\n');
    name.cheerYeller(['J', 'K']).should.equal('Give me a J!\nGive me a K!\n');
    name.cheerYeller(['L', 'P']).should.equal('Give me an L!\nGive me a P!\n');

  })
})


describe('CLI', function () {
  it('should print something to the terminal', function (done) {
    cp.execFile("./app.js", ["ca t"], function (err, stdout) {
      stdout.should.equal('Give me a C!\nGive me an A!\nGive me a T!\n')
      done();
    })
  })
})


//=================================

//INTEGRATION TESTS ---------------
// describe('CLI', function () {
//   it('should thank me for downloading', function (done) {
//     console.log('childprocess');
//     cp.execFile('./app.js', function (err, stdout) {
//       console.log('err', err);
//       console.log('stdout', stdout);
//       stdout.should.equal('Thanks for downloading my app!\n')
//       done();
//     })
//   })
// })




//UNIT TESTS -----============---------==========


describe('Animal', function () {
  describe('constructor', function () {
    it('should return an animal object', function () {
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal)
    })

    it('should be alive', function () {
      var animal = new Animal();
      animal.alive.should.be.true;
    })
    it('should have 100% health', function () {
      var animal = new Animal()
      animal.health.should.equal(1);
    })
    it('should accept a type', function () {
      var cat = new Animal('cat');
      var dog = new Animal('dog');

      cat.species.should.equal('cat');
      dog.species.should.equal('dog');
    });

    describe('#updateHealthStats()', function () {
      it('should change the health', function (done) {
        var animal = new Animal();
        var health = animal.health;

        animal.updateHealthStats(function () {
          animal.health.should.not.equal(1);
          done();
        });

      })


    })

    describe('#beCute()', function () {
      it('should be a prototype method', function () {
        var animal = new Animal();
        animal.should.respondTo('beCute');
        animal.should.not.have.ownProperty('beCute');
      })
      it('should make the animal cute', function () {
        var animal = new Animal();
        animal.isCute.should.not.be.true;
        animal.beCute();
        animal.isCute.should.be.true;
      })
    })

  });




});

describe('Tests', function() {
  it('truthyness', function () {
      true.should.equal(true)
      // [1,2,3].indexOf(0).should.equal(-1)
      // assert.equal(-1, [1,2,3].indexOf(5));
      // assert.equal(-1, [1,2,3].indexOf(0));
  });
});

describe('Array', function() {
  describe('#filter()', function () {
    it('should return an array of items that return truthy in the inner fn', function () {
      var array = [1, 2, 3, 4, 5]

      var output = array.filter(function (item) {
        return item%2;
      })

      output.should.eql([1, 3, 5]);
    })
  })
  describe('#map()', function () {
    var array = [1, 2, 3, 4, 5];
    it('should keep the same number of items', function () {

      var length = array.map(function(item) {return false}).length;

      length.should.equal(array.length);
    })

    it('should not mutate the original array', function () {
      var array2 = array.map(function(item) {return false})
      array.should.eql(array);
    })

    it('should create a new array which is correct based on the callback return', function () {
      var array3 = array.map(function(item){ return item*item})


      array3.should.eql([1,4,9,16,25])
    })


  });
});

