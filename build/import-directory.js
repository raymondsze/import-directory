'use strict';

/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-17 17:27:23
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 17:59:25
*/

module.exports = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	const importModule = require('require-directory').apply(null, args);
	for (const moduleName in importModule) {
		if (importModule.hasOwnProperty(moduleName)) {
			const childModule = importModule[moduleName];
			if (childModule.default) {
				importModule[moduleName] = childModule.default;
			}
		}
	}
	return importModule;
};
