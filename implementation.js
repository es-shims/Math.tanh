'use strict';

var expm1 = require('math.expm1');
var isNaN = require('is-nan');

var exp = Math.exp;

// at +-20 as JS loses precision for true value, so we can return +-1
var BIG_TREESHOLD = 20;

module.exports = function tanh(value) {
	var x = Number(value);
	if (isNaN(x) || x === 0) {
		return x;
	}
	if (x >= BIG_TREESHOLD) {
		return 1;
	}
	if (x <= -BIG_TREESHOLD) {
		return -1;
	}

	return (expm1(x) - expm1(-x)) / (exp(x) + exp(-x));
};
