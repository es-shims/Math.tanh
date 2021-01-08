import tanh, * as tanhModule from 'math.tanh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(tanh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(tanhModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = tanhModule;
	t.equal(await import('math.tanh/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.tanh/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.tanh/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
