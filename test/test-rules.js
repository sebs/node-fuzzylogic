var assert = require("assert");
var rules = require("../index").rules;
describe('Rules', function () {
  it('should execute the right callback for and', function (done) {
    var res = rules.and(0.1, 0.2).then(function(res) {
      assert.equal(res, 0.1);
      done();
    });
  });
  it('should execute the right callback for or', function (done) {
    var res = rules.or(0.1, 0.2).then(function(res) {
      assert.equal(res, 0.2);
      done();
    });
  });
  it('should return the right value on not', function(done) {
    rules.not(0.1).then(function(res) {
      assert.equal(res, 0.9);
      done();
    })
  });
});
