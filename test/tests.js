'use strict';

var almostEqual = function (actual, expected) {
	return actual - expected < 1e-6 && expected - actual < 1e-6;
};

module.exports = function (tanh, t) {
	t.test('should be correct', function (st) {
		st.equal(tanh(NaN), NaN, 'tanh(NaN)');
		st.equal(tanh(+0), +0, 'tanh(+0)');
		st.equal(tanh(-0), -0, 'tanh(-0)');
		st.equal(tanh(Infinity), 1, 'tanh(Infinity)');
		st.equal(tanh(-Infinity), -1, 'tanh(-Infinity)');
		st.ok(almostEqual(tanh(19), 1), 'tanh(19)');
		st.ok(almostEqual(tanh(-19), -1), 'tanh(-19)');
		st.equal(tanh(20), 1, 'tanh(20)'); // JS loses precision for true value at this integer
		st.equal(tanh(-20), -1, 'tanh(-20)'); // JS loses precision for true value at this integer
		st.ok(almostEqual(tanh(10), 0.9999999958776927), 'tanh(10)');
		st.equal(tanh(-2e-17), -2e-17, 'tanh(-2e-17)');
		st.end();
	});
};
