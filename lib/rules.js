module.exports.and = function (a, b, cbA, cbB) {
    'use strict';
    var ret = Math.min(a, b);
    if (ret === a) {
        cbA(ret);
    } else {
        cbB(ret);
    }
    return ret;
};

module.exports.or = function (a, b, cbA, cbB) {
    'use strict';
    var ret = Math.max(a, b);
    if (ret === a) {
        cbA(ret);
    } else {
        cbB(ret);
    }
    return ret;
};

module.exports.not = function (a) {
    'use strict';
    return 1.0 - a;
};
