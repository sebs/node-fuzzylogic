
    _  _ ____ ___  ____    ____ _  _ ___  ___  _   _ _    ____ ____ _ ____
    |\ | |  | |  \ |___ __ |___ |  |   /    /   \_/  |    |  | | __ | |    
    | \| |__| |__/ |___    |    |__|  /__  /__   |   |___ |__| |__] | |___

# Fuzzy Logic for node.js

[![Build Status](https://travis-ci.org/sebs/node-fuzzylogic.png)](https://travis-ci.org/sebs/node-fuzzylogic)

** I have created a new fuzzylogic module, it is a bit more modern, simpler to extend and just new and shiny. Have a look at [es6-fuz](https://github.com/sebs/es6-fuzz) **

If yes or no is not enough

[Glossary](./glossary.md)

Code by: Sebastian Schürmann
License: MIT

Fuzzy logic is a form of many-valued logic; it deals with reasoning that is approximate rather than fixed and exact. In contrast with traditional logic theory, where binary sets have two-valued logic: true or false, fuzzy logic variables may have a truth value that ranges in degree between 0 and 1. Fuzzy logic has been extended to handle the concept of partial truth, where the truth value may range between completely true and completely false.[1] Furthermore, when linguistic variables are used, these degrees may be managed by specific functions.

from http://en.wikipedia.org/wiki/Fuzzy_logic

## Install & Dev

```
npm install fuzzylogic
```

Test
```
npm test
```

Api docs
```
npm test
```

## Basic Fuzzyfication`

```javascript
var resGrade = fuzzylogic.grade(3,0,1);
assert.ok(resGrade == 1);

var resReverseGrade = fuzzylogic.reverseGrade(3,0,1);
assert.ok(resReverseGrade === 0);

var resTriangle = fuzzylogic.triangle(3,0,1,2);
assert.ok(resTriangle === 0);
```
## Fuzzy Rulesets for Defuzzyfication
```javascript
assert.ok(rules.and(0.1, 0.2, cbA, cbB) == 0.1);
assert.ok(cbValue == 'a');
assert.ok(rules.or(0.1, 0.2, cbA, cbB)== 0.2);
assert.ok(cbValue == 'b');
assert.ok(rules.not(0.1) == 0.9);
```
## Threat Example

A Basic Function to create fuzzy decisions to
```javascript
var threatCalc = function(threat) {
    var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40);
    var probabNormalAttack      = fuzzylogic.trapezoid(threat, 20, 30, 90, 100);
    var probabEnragedAttack     = fuzzylogic.grade(threat, 90, 100);
    sys.log('Threat: ' + threat);
    sys.log('no attack: '       + probabNoAttack);
    sys.log('normal attack: '   + probabNormalAttack);
    sys.log('enraged attack: '  + probabEnragedAttack);
};
```
And then execute the code

```javascript
threatCalc(10);
threatCalc(20);
threatCalc(30);
```
