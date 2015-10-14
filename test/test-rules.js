var assert = require("assert");
var rules = require("../lib/rules");
describe('Rules', function () {
  it('should execute the right callback for and', function (done) {
    var res = rules.and(0.1, 0.2, function () {
      done();
    }, function () {
      assert.ok(false);
    });
    assert.equal(res, 0.1);
  });
  it('should execute the right callback for or', function (done) {
    var res = rules.or(0.1, 0.2, function () {
      assert.ok(false);
    }, function () {
      done();
    });
    assert.equal(res, 0.2);
  });
  it('should return the right value on not', function() {
    assert.equal(rules.not(0.1), 0.9);
  });
});
