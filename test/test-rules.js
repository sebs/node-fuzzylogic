require('./common');
assert.ok(typeof rules != 'undefined');

assert.ok(rules.and(0.1, 0.2) == 0.1);
assert.ok(rules.or(0.1, 0.2)== 0.2);
assert.ok(rules.not(0.1) == 0.9);



