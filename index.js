'use strict';

// var strValue = String.prototype.valueOf;
// var tryStringObject = function tryStringObject(value) {
// 	try {
// 		strValue.call(value);
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// };
// var toStr = Object.prototype.toString;
// var strClass = '[object String]';
// var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;

module.exports = function isTest() {
	// if (typeof value === 'string') {
	// 	return true;
	// }
	// if (typeof value !== 'object') {
	// 	return false;
	// }
  console.log('testFunc: console.log');
  return 'return testFunc string';
	// return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};
