
    _  _ ____ ___  ____    ____ _  _ ___  ___  _   _ _    ____ ____ _ ____ 
    |\ | |  | |  \ |___ __ |___ |  |   /    /   \_/  |    |  | | __ | |    
    | \| |__| |__/ |___    |    |__|  /__  /__   |   |___ |__| |__] | |___ 

Fuzzy Logic for node.js

If yes or no is not enough

Code by: Sebastian Schürmann 
License: MIT


Threat Example 
A Basic Function to create fuzzy decisions to 

    var threatCalc = function(threat) {
        var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40); 
        var probabNormalAttack      = fuzzylogic.trapezoid(threat, 20, 30, 90, 100); 
        var probabEnragedAttack     = fuzzylogic.grade(threat, 90, 100);
        sys.log('Threat: ' + threat);
        sys.log('no attack: '       + probabNoAttack);
        sys.log('normal attack: '   + probabNormalAttack);
        sys.log('enraged attack: '  + probabEnragedAttack);    
    };

And then execute the code 

    threatCalc(10);
    threatCalc(20);
    threatCalc(30)
