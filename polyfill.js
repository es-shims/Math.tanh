/* eslint-disable no-magic-numbers */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var original = Math.tanh;
	if (
		!original
		// Chrome 40 has an imprecise Math.tanh with very small numbers
		|| original(-2e-17) !== -2e-17
	) {
		return implementation;
	}

	return original;
};
