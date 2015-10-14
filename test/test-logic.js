var assert = require("assert");
var fuzzylogic = require("../lib/fuzzylogic");

describe('Logic', function(){
  it('grade', function(){
    var resGrade = fuzzylogic.grade(3,0,1);
    assert.equal(resGrade, 1);
  });
  it('reverse grade', function(){
    var resReverseGrade = fuzzylogic.reverseGrade(3,0,1);
    assert.equal(resReverseGrade, 0);
  });
  it('triangle', function(){
    var resTriangle = fuzzylogic.triangle(3,0,1,2);
    assert.equal(resTriangle, 0);
  });
  it('trapezoid', function(){
    var resTrapezoid = fuzzylogic.trapezoid(3,0,1,2,3);
    assert.equal(resTrapezoid, 0);
  });

  describe('demo works', function() {
    var attackCalc = function(threat) {
      var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40);
      var probabNormalAttack      = fuzzylogic.trapezoid(threat, 20, 30, 90, 100);
      var probabEnragedAttack     = fuzzylogic.grade(threat, 90, 100);
      return {
        no: probabNoAttack,
        normal: probabEnragedAttack,
        enraged: probabEnragedAttack
      }
    }

    it('calculates no attack for 10', function() {
      var res = attackCalc(10);
      assert.equal(res.no, 0.5);
    });

    it('calculates normal attack for 10', function() {
      var res = attackCalc(10);
      assert.equal(res.normal, 0);
    });

    it('calculates enraged attack for 10', function() {
      var res = attackCalc(10);
      assert.equal(res.enraged, 0);
    });
  });
});
