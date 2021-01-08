'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.tanh.length, 1, 'Math.tanh has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.tanh.name, 'tanh', 'Math.tanh has name "tanh"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'tanh'), 'Math.tanh is not enumerable');
		et.end();
	});

	t.match(keys(Math.tanh).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.tanh, t);

	t.end();
});
