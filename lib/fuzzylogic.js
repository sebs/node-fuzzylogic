
/**
 * Grade Type
 * @param val Value to check on 
 * @param x0 left/lower side 
 * @param x1 right upper side 
 * @return
 */
exports.grade = function (val, x0, x1) {
    var result = 0;
    var x = val;
    
    if (x <= x0) {
        result = 0;
    } else if (x >= x1) {
        result = 1;
    } else {
        result = (x/(x1-x0))-(x0/(x1-x0));
    }
    return result;
}

/**
 * Reverse Grade 
 * @param val value to check on 
 * @param x0 left/upper side 
 * @param x1 right/lower side
 * @return
 */
exports.reverseGrade = function(val, x0, x1) {
    var result = 0; 
    var x = val;
    
    if (x <= x0) {
        result = 1;
    } else if (x >= x1) {
        result = 0;
    } else {
        result = (-x/(x1-x0))+(x1/(x1-x0));
    }
    return result;
}
/**
 * Triangle fuzzyfication
 * @param val Value to check on 
 * @param x0 left start of triangle 
 * @param x1 top  
 * @param x2 right side 
 * @return
 */
exports.triangle = function(val, x0, x1, x2) {
    var result = 0; 
    var x = val;
    
    if (x <= x0) {
        result = 0;
    } else if (x >= x2) {
        result = 0;
    } else if (x == x1) {
        result = 1; 
    } else if ((x>x0) && (x<x1)) {
        result = (x/(x1-x0))-(x0/(x1-x0));
    } else {
        result = (-x/(x2-x1))+(x2/(x2-x1));
    }
    return result; 
}
/**
 * trapezoid fuzzyfication
 * @param val Value to check on 
 * @param x0 left start of the trapezoid
 * @param x1 upper left  
 * @param x2 upper right  
 * @param x3 lower rigth side
 * @return
 */
exports.trapezoid = function(val, x0, x1, x2, x3) {
    var result = 0; 
    var x = val;
    
    if (x <= x0) {
        result = 0;
    } else if (x >= x3) {
        result = 0;
    } else if ((x>=x1) && (x<=x2)) {
        result = 1;
    } else if ((x>x0) && (x<x1)) {
        result = (x/(x1-x0))-(x0/(x1-x0))
    } else {
        result = (-x/(x3-x2))+(x3/(x3-x2));
    }
    return result;
}

