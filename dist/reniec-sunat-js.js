(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TecactusApi", [], factory);
	else if(typeof exports === 'object')
		exports["TecactusApi"] = factory();
	else
		root["TecactusApi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpClient = function () {
  function HttpClient(options) {
    _classCallCheck(this, HttpClient);

    this.options = options;
    this.baseUrl = 'https://tecactus.com/';
  }

  _createClass(HttpClient, [{
    key: 'send',
    value: function send() {
      var options = this.options;
      options.url = this.baseUrl + options.url;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve({
              code: this.status,
              status: xhr.statusText,
              data: JSON.parse(xhr.response)
            });
          } else {
            reject({
              code: this.status,
              status: xhr.statusText,
              data: JSON.parse(xhr.response)
            });
          }
        };
        xhr.onerror = function () {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        if (options.headers) {
          Object.keys(options.headers).forEach(function (key) {
            xhr.setRequestHeader(key, options.headers[key]);
          });
        }
        var params = options.params;
        if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
          params = JSON.stringify(params);
        }
        xhr.send(params);
      });
    }
  }]);

  return HttpClient;
}();

exports.default = HttpClient;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reniec = __webpack_require__(2);

var _reniec2 = _interopRequireDefault(_reniec);

var _sunat = __webpack_require__(3);

var _sunat2 = _interopRequireDefault(_sunat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TecactusApi = function TecactusApi(token) {
	_classCallCheck(this, TecactusApi);

	this.token = token;
	this.Reniec = new _reniec2.default(this.token);
	this.Sunat = new _sunat2.default(this.token);
};

exports.default = TecactusApi;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HttpClient = __webpack_require__(0);

var _HttpClient2 = _interopRequireDefault(_HttpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reniec = function () {
  function Reniec(token) {
    _classCallCheck(this, Reniec);

    this.options = {
      method: 'POST',
      url: 'api/reniec/dni',
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      params: {
        dni: null
      }
    };
  }

  _createClass(Reniec, [{
    key: 'getDni',
    value: function getDni(dni, callback, error) {
      if (this.validate(dni)) {
        this.options.params.dni = dni;
        var http = new _HttpClient2.default(this.options);
        return http.send();
      } else {
        console.error("debe de especificar un número de DNI válido.");
      }
    }
  }, {
    key: 'validate',
    value: function validate(dni) {
      if (dni) {
        return !isNaN(parseFloat(dni)) && isFinite(dni) && dni.toString().length == 8;
      }
      return false;
    }
  }]);

  return Reniec;
}();

exports.default = Reniec;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HttpClient = __webpack_require__(0);

var _HttpClient2 = _interopRequireDefault(_HttpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sunat = function () {
  function Sunat(token) {
    _classCallCheck(this, Sunat);

    this.options = {
      method: 'POST',
      url: null,
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      params: {
        ruc: null,
        dni: null
      }
    };
  }

  _createClass(Sunat, [{
    key: 'getByRuc',
    value: function getByRuc(ruc, callback, error) {
      if (this.validateRuc(ruc)) {
        this.options.url = 'api/sunat/query/ruc';
        this.options.params.ruc = ruc;
        var http = new _HttpClient2.default(this.options);
        return http.send();
      } else {
        console.error("debe de especificar un número de RUC válido.");
      }
    }
  }, {
    key: 'getByDni',
    value: function getByDni(dni, callback, error) {
      if (this.validateDni(dni)) {
        this.options.url = 'api/sunat/query/dni';
        this.options.params.dni = dni;
        var http = new _HttpClient2.default(this.options);
        return http.send();
      } else {
        console.error("debe de especificar un número de DNI válido.");
      }
    }
  }, {
    key: 'validateDni',
    value: function validateDni(dni) {
      if (dni) {
        return !isNaN(parseFloat(dni)) && isFinite(dni) && dni.toString().length == 8;
      }
      return false;
    }
  }, {
    key: 'validateRuc',
    value: function validateRuc(ruc) {
      if (ruc) {
        return !isNaN(parseFloat(ruc)) && isFinite(ruc) && ruc.toString().length == 11;
      }
      return false;
    }
  }]);

  return Sunat;
}();

exports.default = Sunat;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(1).default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reniec-sunat-js.js.map