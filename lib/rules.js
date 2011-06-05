exports.and = function(a,b, cbA, cbB) {
   var ret = Math.min(a, b); 
   if (ret == a) {
       cbA(ret);
   } else {
       cbB(ret);
   }
   return ret;
};

exports.or = function(a, b, cbA, cbB) {
   var ret = Math.max(a,b);
   if (ret == a) {
        cbA(ret);
   } else {
        cbB(ret);
   }
   return ret;
};

exports.not = function(a) {
    return 1.0 - a;
};