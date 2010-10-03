require('./common');

var resGrade = fuzzylogic.grade(3,0,1);
assert.ok(resGrade == 1);

var resReverseGrade = fuzzylogic.reverseGrade(3,0,1);
assert.ok(resReverseGrade == 0);



var resTriangle = fuzzylogic.triangle(3,0,1,2);
assert.ok(resTriangle == 0);



