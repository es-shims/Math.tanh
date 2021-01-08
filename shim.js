'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathTanh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ tanh: polyfill },
		{ tanh: function () { return Math.tanh !== polyfill; } }
	);
	return polyfill;
};
