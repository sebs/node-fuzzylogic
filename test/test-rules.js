require('./common');
assert.ok(typeof rules != 'undefined');

var cbValue = 'none';
var cbA = function() {
    cbValue = 'a';
}

var cbB = function() {
    cbValue = 'b';
}

assert.ok(rules.and(0.1, 0.2, cbA, cbB) == 0.1);
assert.ok(rules.or(0.1, 0.2, cbA, cbB)== 0.2);
assert.ok(rules.not(0.1) == 0.9);



