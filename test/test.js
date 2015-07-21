var should = require('chai').should();
// var assert = require('assert')

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

