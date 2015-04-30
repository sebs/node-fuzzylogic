var assert = require("assert");
var fuzzylogic = require("../index").fuzzylogic;;
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
});
