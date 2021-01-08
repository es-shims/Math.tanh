/* eslint-disable no-magic-numbers */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.tanh;
	if (!native
		// Chrome 40 has an imprecise Math.tanh with very small numbers
		|| native(-2e-17) !== -2e-17
	) {
		return implementation;
	}

	return native;
};
