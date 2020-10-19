module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/people/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: people */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "people", function() { return people; });
const people = [{
  id: '1',
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  gender: 'male'
}, {
  id: '2',
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  gender: 'n/a'
}, {
  id: '3',
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  gender: 'n/a'
}, {
  id: '4',
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  gender: 'male'
}, {
  id: '5',
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  gender: 'female'
}, {
  id: '6',
  name: 'Owen Lars',
  height: '178',
  mass: '120',
  hair_color: 'brown, grey',
  skin_color: 'light',
  eye_color: 'blue',
  gender: 'male'
}, {
  id: '7',
  name: 'Beru Whitesun lars',
  height: '165',
  mass: '75',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'blue',
  gender: 'female'
}, {
  id: '8',
  name: 'R5-D4',
  height: '97',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, red',
  eye_color: 'red',
  gender: 'n/a'
}, {
  id: '9',
  name: 'Biggs Darklighter',
  height: '183',
  mass: '84',
  hair_color: 'black',
  skin_color: 'light',
  eye_color: 'brown',
  gender: 'male'
}, {
  id: '10',
  name: 'Obi-Wan Kenobi',
  height: '182',
  mass: '77',
  hair_color: 'auburn, white',
  skin_color: 'fair',
  eye_color: 'blue-gray',
  gender: 'male'
}];

/***/ }),

/***/ "./pages/api/people/index.js":
/*!***********************************!*\
  !*** ./pages/api/people/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ "./data.js");

function handler(req, res) {
  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__["people"]);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGVvcGxlL2luZGV4LmpzIl0sIm5hbWVzIjpbInBlb3BsZSIsImlkIiwibmFtZSIsImhlaWdodCIsIm1hc3MiLCJoYWlyX2NvbG9yIiwic2tpbl9jb2xvciIsImV5ZV9jb2xvciIsImdlbmRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBTyxNQUFNQSxNQUFNLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLGdCQUZSO0FBR0VDLFFBQU0sRUFBRSxLQUhWO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLFlBQVUsRUFBRSxPQUxkO0FBTUVDLFlBQVUsRUFBRSxNQU5kO0FBT0VDLFdBQVMsRUFBRSxNQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBRG9CLEVBV3BCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLFFBQU0sRUFBRSxLQUhWO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLFlBQVUsRUFBRSxLQUxkO0FBTUVDLFlBQVUsRUFBRSxNQU5kO0FBT0VDLFdBQVMsRUFBRSxRQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBWG9CLEVBcUJwQjtBQUNFUCxJQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxRQUFNLEVBQUUsSUFIVjtBQUlFQyxNQUFJLEVBQUUsSUFKUjtBQUtFQyxZQUFVLEVBQUUsS0FMZDtBQU1FQyxZQUFVLEVBQUUsYUFOZDtBQU9FQyxXQUFTLEVBQUUsS0FQYjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQXJCb0IsRUErQnBCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxhQUZSO0FBR0VDLFFBQU0sRUFBRSxLQUhWO0FBSUVDLE1BQUksRUFBRSxLQUpSO0FBS0VDLFlBQVUsRUFBRSxNQUxkO0FBTUVDLFlBQVUsRUFBRSxPQU5kO0FBT0VDLFdBQVMsRUFBRSxRQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBL0JvQixFQXlDcEI7QUFDRVAsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsUUFBTSxFQUFFLEtBSFY7QUFJRUMsTUFBSSxFQUFFLElBSlI7QUFLRUMsWUFBVSxFQUFFLE9BTGQ7QUFNRUMsWUFBVSxFQUFFLE9BTmQ7QUFPRUMsV0FBUyxFQUFFLE9BUGI7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0F6Q29CLEVBbURwQjtBQUNFUCxJQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxRQUFNLEVBQUUsS0FIVjtBQUlFQyxNQUFJLEVBQUUsS0FKUjtBQUtFQyxZQUFVLEVBQUUsYUFMZDtBQU1FQyxZQUFVLEVBQUUsT0FOZDtBQU9FQyxXQUFTLEVBQUUsTUFQYjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQW5Eb0IsRUE2RHBCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxvQkFGUjtBQUdFQyxRQUFNLEVBQUUsS0FIVjtBQUlFQyxNQUFJLEVBQUUsSUFKUjtBQUtFQyxZQUFVLEVBQUUsT0FMZDtBQU1FQyxZQUFVLEVBQUUsT0FOZDtBQU9FQyxXQUFTLEVBQUUsTUFQYjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQTdEb0IsRUF1RXBCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLFFBQU0sRUFBRSxJQUhWO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLFlBQVUsRUFBRSxLQUxkO0FBTUVDLFlBQVUsRUFBRSxZQU5kO0FBT0VDLFdBQVMsRUFBRSxLQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBdkVvQixFQWlGcEI7QUFDRVAsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxLQUhWO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLFlBQVUsRUFBRSxPQUxkO0FBTUVDLFlBQVUsRUFBRSxPQU5kO0FBT0VDLFdBQVMsRUFBRSxPQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBakZvQixFQTJGcEI7QUFDRVAsSUFBRSxFQUFFLElBRE47QUFFRUMsTUFBSSxFQUFFLGdCQUZSO0FBR0VDLFFBQU0sRUFBRSxLQUhWO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLFlBQVUsRUFBRSxlQUxkO0FBTUVDLFlBQVUsRUFBRSxNQU5kO0FBT0VDLFdBQVMsRUFBRSxXQVBiO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBM0ZvQixDQUFmLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hDQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmIsNENBQXJCO0FBQ0QsQyIsImZpbGUiOiJwYWdlcy9hcGkvcGVvcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcGVvcGxlL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IHBlb3BsZSA9IFtcclxuICB7XHJcbiAgICBpZDogJzEnLFxyXG4gICAgbmFtZTogJ0x1a2UgU2t5d2Fsa2VyJyxcclxuICAgIGhlaWdodDogJzE3MicsXHJcbiAgICBtYXNzOiAnNzcnLFxyXG4gICAgaGFpcl9jb2xvcjogJ2Jsb25kJyxcclxuICAgIHNraW5fY29sb3I6ICdmYWlyJyxcclxuICAgIGV5ZV9jb2xvcjogJ2JsdWUnLFxyXG4gICAgZ2VuZGVyOiAnbWFsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzInLFxyXG4gICAgbmFtZTogJ0MtM1BPJyxcclxuICAgIGhlaWdodDogJzE2NycsXHJcbiAgICBtYXNzOiAnNzUnLFxyXG4gICAgaGFpcl9jb2xvcjogJ24vYScsXHJcbiAgICBza2luX2NvbG9yOiAnZ29sZCcsXHJcbiAgICBleWVfY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgZ2VuZGVyOiAnbi9hJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMycsXHJcbiAgICBuYW1lOiAnUjItRDInLFxyXG4gICAgaGVpZ2h0OiAnOTYnLFxyXG4gICAgbWFzczogJzMyJyxcclxuICAgIGhhaXJfY29sb3I6ICduL2EnLFxyXG4gICAgc2tpbl9jb2xvcjogJ3doaXRlLCBibHVlJyxcclxuICAgIGV5ZV9jb2xvcjogJ3JlZCcsXHJcbiAgICBnZW5kZXI6ICduL2EnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc0JyxcclxuICAgIG5hbWU6ICdEYXJ0aCBWYWRlcicsXHJcbiAgICBoZWlnaHQ6ICcyMDInLFxyXG4gICAgbWFzczogJzEzNicsXHJcbiAgICBoYWlyX2NvbG9yOiAnbm9uZScsXHJcbiAgICBza2luX2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgZXllX2NvbG9yOiAneWVsbG93JyxcclxuICAgIGdlbmRlcjogJ21hbGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1JyxcclxuICAgIG5hbWU6ICdMZWlhIE9yZ2FuYScsXHJcbiAgICBoZWlnaHQ6ICcxNTAnLFxyXG4gICAgbWFzczogJzQ5JyxcclxuICAgIGhhaXJfY29sb3I6ICdicm93bicsXHJcbiAgICBza2luX2NvbG9yOiAnbGlnaHQnLFxyXG4gICAgZXllX2NvbG9yOiAnYnJvd24nLFxyXG4gICAgZ2VuZGVyOiAnZmVtYWxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNicsXHJcbiAgICBuYW1lOiAnT3dlbiBMYXJzJyxcclxuICAgIGhlaWdodDogJzE3OCcsXHJcbiAgICBtYXNzOiAnMTIwJyxcclxuICAgIGhhaXJfY29sb3I6ICdicm93biwgZ3JleScsXHJcbiAgICBza2luX2NvbG9yOiAnbGlnaHQnLFxyXG4gICAgZXllX2NvbG9yOiAnYmx1ZScsXHJcbiAgICBnZW5kZXI6ICdtYWxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNycsXHJcbiAgICBuYW1lOiAnQmVydSBXaGl0ZXN1biBsYXJzJyxcclxuICAgIGhlaWdodDogJzE2NScsXHJcbiAgICBtYXNzOiAnNzUnLFxyXG4gICAgaGFpcl9jb2xvcjogJ2Jyb3duJyxcclxuICAgIHNraW5fY29sb3I6ICdsaWdodCcsXHJcbiAgICBleWVfY29sb3I6ICdibHVlJyxcclxuICAgIGdlbmRlcjogJ2ZlbWFsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzgnLFxyXG4gICAgbmFtZTogJ1I1LUQ0JyxcclxuICAgIGhlaWdodDogJzk3JyxcclxuICAgIG1hc3M6ICczMicsXHJcbiAgICBoYWlyX2NvbG9yOiAnbi9hJyxcclxuICAgIHNraW5fY29sb3I6ICd3aGl0ZSwgcmVkJyxcclxuICAgIGV5ZV9jb2xvcjogJ3JlZCcsXHJcbiAgICBnZW5kZXI6ICduL2EnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc5JyxcclxuICAgIG5hbWU6ICdCaWdncyBEYXJrbGlnaHRlcicsXHJcbiAgICBoZWlnaHQ6ICcxODMnLFxyXG4gICAgbWFzczogJzg0JyxcclxuICAgIGhhaXJfY29sb3I6ICdibGFjaycsXHJcbiAgICBza2luX2NvbG9yOiAnbGlnaHQnLFxyXG4gICAgZXllX2NvbG9yOiAnYnJvd24nLFxyXG4gICAgZ2VuZGVyOiAnbWFsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzEwJyxcclxuICAgIG5hbWU6ICdPYmktV2FuIEtlbm9iaScsXHJcbiAgICBoZWlnaHQ6ICcxODInLFxyXG4gICAgbWFzczogJzc3JyxcclxuICAgIGhhaXJfY29sb3I6ICdhdWJ1cm4sIHdoaXRlJyxcclxuICAgIHNraW5fY29sb3I6ICdmYWlyJyxcclxuICAgIGV5ZV9jb2xvcjogJ2JsdWUtZ3JheScsXHJcbiAgICBnZW5kZXI6ICdtYWxlJyxcclxuICB9LFxyXG5dXHJcbiIsImltcG9ydCB7IHBlb3BsZSB9IGZyb20gJy4uLy4uLy4uL2RhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocGVvcGxlKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=