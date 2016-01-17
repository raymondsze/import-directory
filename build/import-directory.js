'use strict';

/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-17 17:27:23
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 22:29:55
*/
const _ = require('lodash');

function preVisit(obj) {
	return typeof obj === 'object' && typeof obj.default !== 'undefined' ? obj.default : obj;
}

module.exports = function () {
	// find the argument that is option
	let index = 1;
	let options = {};

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (args.length === 3) {
		index = 2;
		options = args[index];
	} else if (args.length === 2) {
		options = args[1];
	}
	args.length = args.length < 2 ? 2 : args.length;
	args[index] = options;

	// markdown the optins.visit, and aop it with preVisit
	const visit = options.visit;
	options.visit = function (obj) {
		const result = preVisit(obj);
		return _.isFunction(visit) ? visit(result) : result;
	};

	// apply the function
	return require('require-directory').apply(null, args);
};
