# Math.tanh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> :warning: This package is not published on `npm`, because it depends on https://github.com/es-shims/Math.expm1 which is not published yet.

An ESnext spec-compliant `Math.tanh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.tanh
```

## Usage/Examples

```js
console.log(Math.tanh(0)); // 0
console.log(Math.tanh(Infinity)); // 1
console.log(Math.tanh(1)); // 0.7615941559557649
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.tanh
[npm-version-svg]: https://versionbadg.es/es-shims/Math.tanh.svg
[deps-svg]: https://david-dm.org/es-shims/Math.tanh.svg
[deps-url]: https://david-dm.org/es-shims/Math.tanh
[dev-deps-svg]: https://david-dm.org/es-shims/Math.tanh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.tanh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.tanh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.tanh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.tanh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.tanh
[codecov-image]: https://codecov.io/gh/es-shims/Math.tanh/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.tanh/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Math.tanh
[actions-url]: https://github.com/es-shims/Math.tanh/actions
