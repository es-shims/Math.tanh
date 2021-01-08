'use strict';

var tanh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(tanh, t);

	t.end();
});
