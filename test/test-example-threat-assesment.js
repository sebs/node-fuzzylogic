require('./common');

/* 
 *Rules: 0-10 Threat = NO Attack, 5-100 Attack Normal, 90-N Attack Enraged
 *
 */ 

var threatCalc = function(threat) {
    var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40); 
    var probabNormalAttack      = fuzzylogic.trapezoid(threat, 20, 30, 90, 100); 
    var probabEnragedAttack     = fuzzylogic.grade(threat, 90, 100);
    sys.log('Threat: ' + threat);
    sys.log('no attack: '       + probabNoAttack);
    sys.log('normal attack: '   + probabNormalAttack);
    sys.log('enraged attack: '  + probabEnragedAttack);    
};

threatCalc(10);
threatCalc(20);
threatCalc(30);