exports.and = function(a,b) {
   return Math.min(a, b); 
}

exports.or = function(a, b) {
    return Math.max(a,b);
}

exports.not = function(a) {
    return 1.0 - a;
}

