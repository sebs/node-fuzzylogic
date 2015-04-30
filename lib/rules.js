'use strict';
var Promise = require('promise');

exports.and = function (a, b) {
  var ret = Math.min(a, b);
  return new Promise(function(fullFill, reject) {
    fullFill(ret);
  });
};

exports.or = function (a, b) {
  var ret = Math.max(a, b);
  return new Promise(function(fullFill, reject) {
    fullFill(ret);
  });
};

exports.not = function (a) {
  var ret = 1.0 - a;
  return new Promise(function(fullFill, reject) {
    fullFill(ret);
  });
};
