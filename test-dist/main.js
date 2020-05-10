/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../test/main.test.js":
/*!****************************!*\
  !*** ../test/main.test.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsdom_global_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsdom-global/register */ "../node_modules/jsdom-global/register.js");
/* harmony import */ var jsdom_global_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsdom_global_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/js/swiper */ "../node_modules/swiper/js/swiper.js");
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min.js */ "../node_modules/@fortawesome/fontawesome-free/js/all.min.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assert */ "../node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_models_main_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/models/main/main */ "./models/main/main.js");





describe('mocha tests', function () {
  // const currentMain = new Main(document.body.querySelector('main'));
  it('concatenateStrings should return concatenation of two strings', function () {
    assert__WEBPACK_IMPORTED_MODULE_3___default.a.equal(2, 1 + 1);
  });
});

/***/ }),

/***/ "./assets/star.png":
/*!*************************!*\
  !*** ./assets/star.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80f2460b998a8deddb14cf9f74c70003.png");

/***/ }),

/***/ "./models/main/main.js":
/*!*****************************!*\
  !*** ./models/main/main.js ***!
  \*****************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./models/main/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movie_list_movie_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-list/movie-list */ "./models/main/movie-list/movie-list.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search */ "./models/main/search/search.js");
/* harmony import */ var _spinner_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner.html */ "./models/main/spinner.html");
/* harmony import */ var _spinner_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spinner_html__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Main = /*#__PURE__*/function () {
  function Main(rootNode) {
    _classCallCheck(this, Main);

    this.rootNode = rootNode;
    this.movieListNode = null;
    this.infoMessagesNode = null;
    this.search = null;
    this.moviesList = null;
    this.moviesData = null;
    this.page = 1;
    this.searchInputValue = 'dream';
    this.isMoviesFetch = false;
    this.firstBuildMain();
  }

  _createClass(Main, [{
    key: "firstBuildMain",
    value: function firstBuildMain() {
      this.buildSearch();
      this.firstBuildMovieList();
    }
  }, {
    key: "buildSearch",
    value: function buildSearch() {
      var _this = this;

      this.searchNode = document.createElement('div');
      this.searchNode.classList.add('search-block');
      this.rootNode.append(this.searchNode);
      this.search = new _search_search__WEBPACK_IMPORTED_MODULE_2__["Search"](this.searchNode);

      this.search.searchSubmit = function (value) {
        _this.page = 1;
        _this.searchInputValue = value.trim();

        _this.reBuildMovieList();
      };

      this.infoMessagesNode = document.createElement('div');
      this.infoMessagesNode.classList.add('info');
      this.infoMessagesNode.textContent = 'No Result';
      this.searchNode.append(this.infoMessagesNode);
    }
  }, {
    key: "firstBuildMovieList",
    value: function () {
      var _firstBuildMovieList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.movieListNode = document.createElement('div');
                this.movieListNode.classList.add('movie-list-block');
                this.rootNode.append(this.movieListNode);
                this.movieListNode.innerHTML = _spinner_html__WEBPACK_IMPORTED_MODULE_3___default.a;
                _context.next = 6;
                return this.getMovies();

              case 6:
                this.moviesData = _context.sent;
                this.movieListNode.innerHTML = '';
                this.setMovieList();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function firstBuildMovieList() {
        return _firstBuildMovieList.apply(this, arguments);
      }

      return firstBuildMovieList;
    }()
  }, {
    key: "reBuildMovieList",
    value: function () {
      var _reBuildMovieList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.movieListNode.innerHTML = _spinner_html__WEBPACK_IMPORTED_MODULE_3___default.a;
                _context2.next = 3;
                return this.getMovies();

              case 3:
                this.moviesData = _context2.sent;
                this.movieListNode.innerHTML = '';

                if (this.moviesData) {
                  this.setMovieList();
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reBuildMovieList() {
        return _reBuildMovieList.apply(this, arguments);
      }

      return reBuildMovieList;
    }()
  }, {
    key: "setMovieList",
    value: function setMovieList() {
      var _this2 = this;

      this.moviesList = new _movie_list_movie_list__WEBPACK_IMPORTED_MODULE_1__["MovieList"](this.movieListNode, this.moviesData);

      this.moviesList.getMoreMovies = function () {
        _this2.page++;

        _this2.appendMovieListSlides();
      };
    }
  }, {
    key: "appendMovieListSlides",
    value: function () {
      var _appendMovieListSlides = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.isMoviesFetch) {
                  _context3.next = 7;
                  break;
                }

                this.isMoviesFetch = true;
                _context3.next = 4;
                return this.getMovies();

              case 4:
                this.moviesData = _context3.sent;
                this.isMoviesFetch = false;
                this.moviesList.addNewSlides(this.moviesData.Search);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function appendMovieListSlides() {
        return _appendMovieListSlides.apply(this, arguments);
      }

      return appendMovieListSlides;
    }()
  }, {
    key: "getMovies",
    value: function () {
      var _getMovies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var searchValue, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.infoMessagesNode.innerHTML = '';
                searchValue = this.searchInputValue;

                if (!/[А-Яа-я]/.test(searchValue)) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 5;
                return this.getTranslate(searchValue);

              case 5:
                searchValue = _context4.sent;

              case 6:
                if (searchValue) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", null);

              case 8:
                _context4.next = 10;
                return this.getOMDBMovies(searchValue);

              case 10:
                data = _context4.sent;

                if (data) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", null);

              case 13:
                _context4.next = 15;
                return this.setRatingMovies(data);

              case 15:
                data = _context4.sent;

                if (data) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt("return", null);

              case 18:
                return _context4.abrupt("return", data);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getMovies() {
        return _getMovies.apply(this, arguments);
      }

      return getMovies;
    }()
  }, {
    key: "getTranslate",
    value: function getTranslate(value) {
      var _this3 = this;

      var TRANSLATE_API_KEY = 'trnsl.1.1.20170506T133756Z.d523dbf15945aee5.28e6bba8287e893a63b6e59990a007a82116e5e1';
      var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=".concat(TRANSLATE_API_KEY, "&text=").concat(value, "&lang=ru-en");
      return fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.infoMessagesNode.innerHTML = "Showing results for '".concat(value, "'");
        return data.text[0];
      })["catch"](function (error) {
        _this3.infoMessagesNode.innerHTML = "Error: ".concat(error.message);
        return null;
      });
    }
  }, {
    key: "getOMDBMovies",
    value: function getOMDBMovies(value) {
      var _this4 = this;

      var OMDB_API_KEY = '5a8359a3';
      var url = "https://www.omdbapi.com/?s=".concat(value, "&page=").concat(this.page, "&apikey=").concat(OMDB_API_KEY);
      return fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        var outputData = data;

        if (data.Response === 'False') {
          _this4.infoMessagesNode.innerHTML = data.Error;
          outputData = null;
        }

        return outputData;
      })["catch"](function (error) {
        _this4.infoMessagesNode.innerHTML = "Error: ".concat(error.message);
        return null;
      });
    }
  }, {
    key: "setRatingMovies",
    value: function setRatingMovies(data) {
      var outputData = data;

      for (var index = 0; index < outputData.Search.length; index++) {
        var imdbData = this.getRatingMovies(outputData.Search[index].imdbID);
        if (!imdbData) return null;
        outputData.Search[index].rating = imdbData.imdbRating;
      }

      return outputData;
    }
  }, {
    key: "getRatingMovies",
    value: function getRatingMovies(value) {
      var _this5 = this;

      var OMDB_API_KEY = '5a8359a3';
      var url = "https://www.omdbapi.com/?i=".concat(value, "&apikey=").concat(OMDB_API_KEY);
      return fetch(url).then(function (res) {
        return res.json();
      })["catch"](function (error) {
        _this5.infoMessagesNode.innerHTML = "Error: ".concat(error.message);
        return null;
      });
    }
  }]);

  return Main;
}();

/***/ }),

/***/ "./models/main/main.scss":
/*!*******************************!*\
  !*** ./models/main/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./models/main/movie-list/movie-list.js":
/*!**********************************************!*\
  !*** ./models/main/movie-list/movie-list.js ***!
  \**********************************************/
/*! exports provided: MovieList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieList", function() { return MovieList; });
/* harmony import */ var _movie_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-list.scss */ "./models/main/movie-list/movie-list.scss");
/* harmony import */ var _movie_list_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_movie_list_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/star.png */ "./assets/star.png");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _spinner_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner.html */ "./models/main/spinner.html");
/* harmony import */ var _spinner_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spinner_html__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var MovieList = /*#__PURE__*/function () {
  function MovieList(rootNode, moviesData) {
    _classCallCheck(this, MovieList);

    this.rootNode = rootNode;
    this.moviesData = moviesData;
    this.movies = [];
    this.moviesTotalResults = moviesData.totalResults;
    this.swiper = null;
    this.buildSwiper();

    this.getMoreMovies = function () {};

    this.isFetchMovies = false;
  }

  _createClass(MovieList, [{
    key: "buildSwiper",
    value: function buildSwiper() {
      var self = this;
      var swiper = this.getSwiperHtml();
      this.rootNode.append(swiper);
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        // Optional parameters
        direction: 'horizontal',
        keyboard: {
          enabled: true
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
      this.appendSwiperSlides(this.moviesData.Search);
      this.swiper.on('reachEnd', function () {
        if (!self.isFetchMovies && self.moviesTotalResults > self.movies) {
          self.isFetchMovies = true;
          self.appendSpinnerSlide();
          self.getMoreMovies();
        }
      });
    }
  }, {
    key: "getSwiperHtml",
    value: function getSwiperHtml() {
      var container = document.createElement('div');
      container.classList.add('swiper-container');
      var wrapper = document.createElement('div');
      wrapper.classList.add('swiper-wrapper');
      container.append(wrapper);
      var pagination = document.createElement('div');
      pagination.classList.add('swiper-pagination');
      container.append(pagination);
      var buttonPrev = document.createElement('div');
      buttonPrev.classList.add('swiper-button-prev');
      container.append(buttonPrev);
      var buttonNext = document.createElement('div');
      buttonNext.classList.add('swiper-button-next');
      container.append(buttonNext);
      return container;
    }
  }, {
    key: "appendSpinnerSlide",
    value: function appendSpinnerSlide() {
      var slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = _spinner_html__WEBPACK_IMPORTED_MODULE_3___default.a;
      this.swiper.appendSlide(slide);
    }
  }, {
    key: "addNewSlides",
    value: function addNewSlides(movies) {
      this.swiper.removeSlide(this.movies.length);
      this.appendSwiperSlides(movies);
      this.isFetchMovies = false;
    }
  }, {
    key: "appendSwiperSlides",
    value: function appendSwiperSlides(movies) {
      var _this = this;

      this.movies = [].concat(_toConsumableArray(this.movies), _toConsumableArray(movies));
      var slides = [];
      movies.forEach(function (item) {
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.append(_this.getMovieNode(item));
        slides.push(slide);
      });
      this.swiper.appendSlide(slides);
    }
  }, {
    key: "getMovieNode",
    value: function getMovieNode(movieData) {
      var movie = document.createElement('div');
      movie.classList.add('swiper-movie');
      var titleLink = document.createElement('a');
      titleLink.textContent = movieData.Title;
      titleLink.href = "https://www.imdb.com/title/".concat(movieData.imdbID);
      movie.append(titleLink);
      var img = document.createElement('img');
      img.alt = "The movie titled: ".concat(movieData.Title);
      img.src = movieData.Poster;
      movie.append(img);
      var year = document.createElement('p');
      year.textContent = movieData.Year;
      movie.append(year);
      var ratingBlock = document.createElement('div');
      ratingBlock.classList.add('rating');
      var imgRating = document.createElement('img');
      imgRating.classList.add('star');
      imgRating.src = _assets_star_png__WEBPACK_IMPORTED_MODULE_1__["default"];
      ratingBlock.append(imgRating);
      var rating = document.createElement('p');
      rating.textContent = movieData.rating;
      ratingBlock.append(rating);
      movie.append(ratingBlock);
      return movie;
    }
  }]);

  return MovieList;
}();

/***/ }),

/***/ "./models/main/movie-list/movie-list.scss":
/*!************************************************!*\
  !*** ./models/main/movie-list/movie-list.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./models/main/search/search.html":
/*!****************************************!*\
  !*** ./models/main/search/search.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form>\r\n  <input type=\"search\" name=\"movie\" placeholder=\"&#xf002;  Movie search\" autofocus />\r\n  <button class=\"search__keyboard\" type=\"button\"><i class=\"fas fa-keyboard\"></i></button>\r\n  <button class=\"search__speak\" type=\"button\">Eng</button>\r\n  <button class=\"search__submit\" type=\"submit\">Search</button>\r\n</form>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./models/main/search/search.js":
/*!**************************************!*\
  !*** ./models/main/search/search.js ***!
  \**************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.scss */ "./models/main/search/search.scss");
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.html */ "./models/main/search/search.html");
/* harmony import */ var _search_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_keyboard_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-keyboard/virtual-keyboard */ "./models/main/search/virtual-keyboard/virtual-keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Search = /*#__PURE__*/function () {
  function Search(rootNode) {
    _classCallCheck(this, Search);

    this.rootNode = rootNode;
    this.inputNode = null;
    this.isKeyboardOpen = false;
    this.isSpeakActive = false;
    this.buildSearch();
    this.recognition = null;
    this.initRecognition();

    this.searchSubmit = function () {};
  }

  _createClass(Search, [{
    key: "buildSearch",
    value: function buildSearch() {
      var _this = this;

      this.rootNode.innerHTML = _search_html__WEBPACK_IMPORTED_MODULE_1___default.a;
      this.inputNode = this.rootNode.querySelector('input');
      this.rootNode.querySelector('form').addEventListener('submit', function (event) {
        return _this.onSubmit(event);
      });
      this.rootNode.querySelector('.search__keyboard').addEventListener('click', function (event) {
        return _this.onClickKeyboard(event);
      });
      this.rootNode.querySelector('.search__speak').addEventListener('click', function (event) {
        return _this.onClickSpeak(event);
      });
    }
  }, {
    key: "initRecognition",
    value: function initRecognition() {
      var _this2 = this;

      this.recognition = new webkitSpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.continuous = true;

      this.recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; i += 1) {
          if (event.results[i].isFinal) {
            console.log(event.results[i][0].transcript.trim());
            _this2.inputNode.value = event.results[i][0].transcript.trim();
          }
        }
      };

      this.recognition.stop();
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      var value = event.target.elements.movie.value;
      if (!value) return;
      this.searchSubmit(value);
    }
  }, {
    key: "onClickKeyboard",
    value: function onClickKeyboard(event) {
      var _this3 = this;

      event.stopPropagation();
      if (this.isKeyboardOpen) return;
      this.isKeyboardOpen = true;
      var wrapper = document.createElement('div');
      wrapper.classList.add('wrapper__virtual-keyboard');
      var close = document.createElement('button');
      close.innerHTML = '<i class="fas fa-times"></i>';
      close.classList.add('wrapper__virtual-close');
      close.addEventListener('click', function (event) {
        event.stopPropagation();
        wrapper.remove();
        _this3.isKeyboardOpen = false;
      });
      wrapper.append(close);
      var virtualKeyboard = new _virtual_keyboard_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__["VirtualKeyboard"](wrapper);
      document.body.append(wrapper);

      virtualKeyboard.onChangeValue = function (value) {
        _this3.inputNode.value = value;
      };
    }
  }, {
    key: "onClickSpeak",
    value: function onClickSpeak(event) {
      event.stopPropagation();
      this.isSpeakActive = !this.isSpeakActive;
      event.target.classList.toggle('active');
      this.isSpeakActive ? this.recognition.start() : this.recognition.stop();
    }
  }]);

  return Search;
}(); //TODO: set thorttle
// const throttle = (func, ms) => {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;
//   function wrapper() {
//     if (isThrottled) {
//       // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//     func.apply(this, arguments); // (1)
//     isThrottled = true;
//     setTimeout(function () {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }
//   return wrapper;
// };

/***/ }),

/***/ "./models/main/search/search.scss":
/*!****************************************!*\
  !*** ./models/main/search/search.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./models/main/search/virtual-keyboard/keyboard-layout.js":
/*!****************************************************************!*\
  !*** ./models/main/search/virtual-keyboard/keyboard-layout.js ***!
  \****************************************************************/
/*! exports provided: keyboardLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardLayout", function() { return keyboardLayout; });
var keyboardLayout = [{
  key: 'Backquote',
  classes: ['keyboard__key'],
  text: {
    eng: '`',
    ru: 'ё'
  },
  shift: {
    eng: '~',
    ru: 'ё'.toUpperCase()
  }
}, {
  key: 'Digit1',
  classes: ['keyboard__key'],
  text: {
    eng: '1',
    ru: '1'
  },
  shift: {
    eng: '!',
    ru: '!'
  }
}, {
  key: 'Digit2',
  classes: ['keyboard__key'],
  text: {
    eng: '2',
    ru: '2'
  },
  shift: {
    eng: '@',
    ru: '"'
  }
}, {
  key: 'Digit3',
  classes: ['keyboard__key'],
  text: {
    eng: '3',
    ru: '3'
  },
  shift: {
    eng: '№',
    ru: '#'
  }
}, {
  key: 'Digit4',
  classes: ['keyboard__key'],
  text: {
    eng: '4',
    ru: '4'
  },
  shift: {
    eng: '$',
    ru: ';'
  }
}, {
  key: 'Digit5',
  classes: ['keyboard__key'],
  text: {
    eng: '5',
    ru: '5'
  },
  shift: {
    eng: '%',
    ru: '%'
  }
}, {
  key: 'Digit6',
  classes: ['keyboard__key'],
  text: {
    eng: '6',
    ru: '6'
  },
  shift: {
    eng: '^',
    ru: ':'
  }
}, {
  key: 'Digit7',
  classes: ['keyboard__key'],
  text: {
    eng: '7',
    ru: '7'
  },
  shift: {
    eng: '?',
    ru: '&'
  }
}, {
  key: 'Digit8',
  classes: ['keyboard__key'],
  text: {
    eng: '8',
    ru: '8'
  },
  shift: {
    eng: '*',
    ru: '*'
  }
}, {
  key: 'Digit9',
  classes: ['keyboard__key'],
  text: {
    eng: '9',
    ru: '9'
  },
  shift: {
    eng: '(',
    ru: '('
  }
}, {
  key: 'Digit0',
  classes: ['keyboard__key'],
  text: {
    eng: '0',
    ru: '0'
  },
  shift: {
    eng: ')',
    ru: ')'
  }
}, {
  key: 'Minus',
  classes: ['keyboard__key'],
  text: {
    eng: '-',
    ru: '-'
  },
  shift: {
    eng: '_',
    ru: '_'
  }
}, {
  key: 'Equal',
  classes: ['keyboard__key'],
  text: {
    eng: '=',
    ru: '='
  },
  shift: {
    eng: '+',
    ru: '+'
  }
}, {
  key: 'Backspace',
  classes: ['keyboard__key', 'keyboard__key_two-grid-column'],
  text: {
    eng: 'Backspace',
    ru: 'Backspace'
  },
  shift: {
    eng: 'Backspace',
    ru: 'Backspace'
  }
}, {
  key: 'Empty',
  classes: ['keyboard__key']
}, {
  key: 'KeyQ',
  classes: ['keyboard__key'],
  text: {
    eng: 'q',
    ru: 'й'
  },
  shift: {
    eng: 'q'.toUpperCase(),
    ru: 'й'.toUpperCase()
  }
}, {
  key: 'KeyW',
  classes: ['keyboard__key'],
  text: {
    eng: 'w',
    ru: 'ц'
  },
  shift: {
    eng: 'w'.toUpperCase(),
    ru: 'ц'.toUpperCase()
  }
}, {
  key: 'KeyE',
  classes: ['keyboard__key'],
  text: {
    eng: 'e',
    ru: 'у'
  },
  shift: {
    eng: 'e'.toUpperCase(),
    ru: 'у'.toUpperCase()
  }
}, {
  key: 'KeyR',
  classes: ['keyboard__key'],
  text: {
    eng: 'r',
    ru: 'к'
  },
  shift: {
    eng: 'r'.toUpperCase(),
    ru: 'к'.toUpperCase()
  }
}, {
  key: 'KeyT',
  classes: ['keyboard__key'],
  text: {
    eng: 't',
    ru: 'е'
  },
  shift: {
    eng: 't'.toUpperCase(),
    ru: 'е'.toUpperCase()
  }
}, {
  key: 'KeyY',
  classes: ['keyboard__key'],
  text: {
    eng: 'y',
    ru: 'н'
  },
  shift: {
    eng: 'y'.toUpperCase(),
    ru: 'н'.toUpperCase()
  }
}, {
  key: 'KeyU',
  classes: ['keyboard__key'],
  text: {
    eng: 'u',
    ru: 'г'
  },
  shift: {
    eng: 'u'.toUpperCase(),
    ru: 'г'.toUpperCase()
  }
}, {
  key: 'KeyI',
  classes: ['keyboard__key'],
  text: {
    eng: 'i',
    ru: 'ш'
  },
  shift: {
    eng: 'i'.toUpperCase(),
    ru: 'ш'.toUpperCase()
  }
}, {
  key: 'KeyO',
  classes: ['keyboard__key'],
  text: {
    eng: 'o',
    ru: 'щ'
  },
  shift: {
    eng: 'o'.toUpperCase(),
    ru: 'щ'.toUpperCase()
  }
}, {
  key: 'KeyP',
  classes: ['keyboard__key'],
  text: {
    eng: 'p',
    ru: 'з'
  },
  shift: {
    eng: 'p'.toUpperCase(),
    ru: 'з'.toUpperCase()
  }
}, {
  key: 'BracketLeft',
  classes: ['keyboard__key'],
  text: {
    eng: '[',
    ru: 'х'
  },
  shift: {
    eng: '{',
    ru: 'х'.toUpperCase()
  }
}, {
  key: 'BracketRight',
  classes: ['keyboard__key'],
  text: {
    eng: ']',
    ru: 'ъ'
  },
  shift: {
    eng: '}',
    ru: 'ъ'.toUpperCase()
  }
}, {
  key: 'Backslash',
  classes: ['keyboard__key'],
  text: {
    eng: '\\',
    ru: '\\'
  },
  shift: {
    eng: '|',
    ru: '/'
  }
}, {
  key: 'Empty',
  classes: ['keyboard__key']
}, {
  key: 'CapsLock',
  classes: ['keyboard__key', 'keyboard__key_two-grid-column'],
  text: {
    eng: 'Caps Lock',
    ru: 'Caps Lock'
  },
  shift: {
    eng: 'Caps Lock',
    ru: 'Caps Lock'
  }
}, {
  key: 'KeyA',
  classes: ['keyboard__key'],
  text: {
    eng: 'a',
    ru: 'ф'
  },
  shift: {
    eng: 'a'.toUpperCase(),
    ru: 'ф'.toUpperCase()
  }
}, {
  key: 'KeyS',
  classes: ['keyboard__key'],
  text: {
    eng: 's',
    ru: 'ы'
  },
  shift: {
    eng: 's'.toUpperCase(),
    ru: 'ы'.toUpperCase()
  }
}, {
  key: 'KeyD',
  classes: ['keyboard__key'],
  text: {
    eng: 'd',
    ru: 'в'
  },
  shift: {
    eng: 'd'.toUpperCase(),
    ru: 'в'.toUpperCase()
  }
}, {
  key: 'KeyF',
  classes: ['keyboard__key'],
  text: {
    eng: 'f',
    ru: 'а'
  },
  shift: {
    eng: 'f'.toUpperCase(),
    ru: 'а'.toUpperCase()
  }
}, {
  key: 'KeyG',
  classes: ['keyboard__key'],
  text: {
    eng: 'g',
    ru: 'п'
  },
  shift: {
    eng: 'g'.toUpperCase(),
    ru: 'п'.toUpperCase()
  }
}, {
  key: 'KeyH',
  classes: ['keyboard__key'],
  text: {
    eng: 'h',
    ru: 'р'
  },
  shift: {
    eng: 'h'.toUpperCase(),
    ru: 'р'.toUpperCase()
  }
}, {
  key: 'KeyJ',
  classes: ['keyboard__key'],
  text: {
    eng: 'j',
    ru: 'о'
  },
  shift: {
    eng: 'j'.toUpperCase(),
    ru: 'о'.toUpperCase()
  }
}, {
  key: 'KeyK',
  classes: ['keyboard__key'],
  text: {
    eng: 'k',
    ru: 'л'
  },
  shift: {
    eng: 'k'.toUpperCase(),
    ru: 'л'.toUpperCase()
  }
}, {
  key: 'KeyL',
  classes: ['keyboard__key'],
  text: {
    eng: 'l',
    ru: 'д'
  },
  shift: {
    eng: 'l'.toUpperCase(),
    ru: 'д'.toUpperCase()
  }
}, {
  key: 'Semicolon',
  classes: ['keyboard__key'],
  text: {
    eng: ';',
    ru: 'ж'
  },
  shift: {
    eng: ':',
    ru: 'ж'.toUpperCase()
  }
}, {
  key: 'Quote',
  classes: ['keyboard__key'],
  text: {
    eng: "'",
    ru: 'э'
  },
  shift: {
    eng: '"',
    ru: 'э'.toUpperCase()
  }
}, {
  key: 'Empty',
  classes: ['keyboard__key']
}, {
  key: 'Empty',
  classes: ['keyboard__key']
}, {
  key: 'ShiftLeft',
  classes: ['keyboard__key', 'keyboard__key_three-grid-column'],
  text: {
    eng: 'Shift',
    ru: 'Shift'
  },
  shift: {
    eng: 'Shift',
    ru: 'Shift'
  }
}, {
  key: 'KeyZ',
  classes: ['keyboard__key'],
  text: {
    eng: 'z',
    ru: 'я'
  },
  shift: {
    eng: 'z'.toUpperCase(),
    ru: 'я'.toUpperCase()
  }
}, {
  key: 'KeyX',
  classes: ['keyboard__key'],
  text: {
    eng: 'x',
    ru: 'ч'
  },
  shift: {
    eng: 'x'.toUpperCase(),
    ru: 'ч'.toUpperCase()
  }
}, {
  key: 'KeyC',
  classes: ['keyboard__key'],
  text: {
    eng: 'c',
    ru: 'с'
  },
  shift: {
    eng: 'c'.toUpperCase(),
    ru: 'с'.toUpperCase()
  }
}, {
  key: 'KeyV',
  classes: ['keyboard__key'],
  text: {
    eng: 'v',
    ru: 'м'
  },
  shift: {
    eng: 'v'.toUpperCase(),
    ru: 'м'.toUpperCase()
  }
}, {
  key: 'KeyB',
  classes: ['keyboard__key'],
  text: {
    eng: 'b',
    ru: 'и'
  },
  shift: {
    eng: 'b'.toUpperCase(),
    ru: 'и'.toUpperCase()
  }
}, {
  key: 'KeyN',
  classes: ['keyboard__key'],
  text: {
    eng: 'n',
    ru: 'т'
  },
  shift: {
    eng: 'n'.toUpperCase(),
    ru: 'т'.toUpperCase()
  }
}, {
  key: 'KeyM',
  classes: ['keyboard__key'],
  text: {
    eng: 'm',
    ru: 'ь'
  },
  shift: {
    eng: 'm'.toUpperCase(),
    ru: 'ь'.toUpperCase()
  }
}, {
  key: 'Comma',
  classes: ['keyboard__key'],
  text: {
    eng: ',',
    ru: 'б'
  },
  shift: {
    eng: '<',
    ru: 'б'.toUpperCase()
  }
}, {
  key: 'Period',
  classes: ['keyboard__key'],
  text: {
    eng: '.',
    ru: 'ю'
  },
  shift: {
    eng: '>',
    ru: 'ю'.toUpperCase()
  }
}, {
  key: 'Slash',
  classes: ['keyboard__key'],
  text: {
    eng: '/',
    ru: '.'
  },
  shift: {
    eng: '?',
    ru: ','
  }
}, {
  key: 'ArrowUp',
  classes: ['keyboard__key'],
  text: {
    eng: '<i class="fas fa-arrow-up"></i>',
    ru: '<i class="fas fa-arrow-up"></i>'
  },
  shift: {
    eng: '<i class="fas fa-arrow-up"></i>',
    ru: '<i class="fas fa-arrow-up"></i>'
  }
}, {
  key: 'Empty',
  classes: ['keyboard__key']
}, {
  key: 'Empty',
  classes: ['keyboard__key', 'keyboard__key_two-grid-column']
}, {
  key: 'AltLeft',
  classes: ['keyboard__key'],
  text: {
    eng: 'Alt',
    ru: 'Alt'
  },
  shift: {
    eng: 'Alt',
    ru: 'Alt'
  }
}, {
  key: 'Space',
  classes: ['keyboard__key', 'keyboard__key_nine-grid-column'],
  text: {
    eng: ' ',
    ru: ' '
  },
  shift: {
    eng: ' ',
    ru: ' '
  }
}, {
  key: 'ArrowLeft',
  classes: ['keyboard__key'],
  text: {
    eng: '<i class="fas fa-arrow-left"></i>',
    ru: '<i class="fas fa-arrow-left"></i>'
  },
  shift: {
    eng: '<i class="fas fa-arrow-left"></i>',
    ru: '<i class="fas fa-arrow-left"></i>'
  }
}, {
  key: 'ArrowDown',
  classes: ['keyboard__key'],
  text: {
    eng: '<i class="fas fa-arrow-down"></i>',
    ru: '<i class="fas fa-arrow-down"></i>'
  },
  shift: {
    eng: '<i class="fas fa-arrow-down"></i>',
    ru: '<i class="fas fa-arrow-down"></i>'
  }
}, {
  key: 'ArrowRight',
  classes: ['keyboard__key'],
  text: {
    eng: '<i class="fas fa-arrow-right"></i>',
    ru: '<i class="fas fa-arrow-right"></i>'
  },
  shift: {
    eng: '<i class="fas fa-arrow-right"></i>',
    ru: '<i class="fas fa-arrow-right"></i>'
  }
}];

/***/ }),

/***/ "./models/main/search/virtual-keyboard/virtual-keyboard.js":
/*!*****************************************************************!*\
  !*** ./models/main/search/virtual-keyboard/virtual-keyboard.js ***!
  \*****************************************************************/
/*! exports provided: VirtualKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualKeyboard", function() { return VirtualKeyboard; });
/* harmony import */ var _virtual_keyboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-keyboard.scss */ "./models/main/search/virtual-keyboard/virtual-keyboard.scss");
/* harmony import */ var _virtual_keyboard_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtual_keyboard_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keyboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-layout */ "./models/main/search/virtual-keyboard/keyboard-layout.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var VirtualKeyboard = /*#__PURE__*/function () {
  function VirtualKeyboard(rootNode) {
    _classCallCheck(this, VirtualKeyboard);

    this.rootNode = rootNode;
    this.language = 'eng';
    this.capsLock = false;
    this.keysPressed = {};
    this.value = '';
    this.keyboardNode = null;
    this.isInputFocus = false;
    var localStorageLanguage = JSON.parse(localStorage.getItem('virtual-keyboard-lang'));
    this.language = localStorageLanguage || 'eng';
    this.keyboardLayout = _keyboard_layout__WEBPACK_IMPORTED_MODULE_1__["keyboardLayout"];
    this.initKeyBoard();
    this.initKeyBoardEvents();

    this.onChangeValue = function () {};
  }

  _createClass(VirtualKeyboard, [{
    key: "initKeyBoard",
    value: function initKeyBoard() {
      this.keyboardNode = document.createElement('div');
      this.keyboardNode.classList.add('keyboard');
      this.keyboardNode.append(this.createKeyboard());
      this.rootNode.append(this.keyboardNode);
    }
  }, {
    key: "createKeyboard",
    value: function createKeyboard() {
      var _this = this;

      var fragment = document.createDocumentFragment();
      this.keyboardLayout.forEach(function (item, index) {
        if (item.key === 'Empty') {
          var _empty$classList;

          var empty = document.createElement('div');

          (_empty$classList = empty.classList).add.apply(_empty$classList, _toConsumableArray(item.classes));

          empty.dataset.key = "".concat(item.key);
          empty.dataset.index = "".concat(index);
          fragment.appendChild(empty);
        } else {
          var _keyElement$classList;

          var keyElement = document.createElement('button'); // Add attributes/classes

          keyElement.setAttribute('type', 'button');
          keyElement.dataset.index = "".concat(index);
          keyElement.dataset.key = "".concat(item.key);

          (_keyElement$classList = keyElement.classList).add.apply(_keyElement$classList, _toConsumableArray(item.classes));

          var text = '';

          switch (item.key) {
            case 'Backspace':
              {
                text = item.text.eng;
                keyElement.textContent = text;
                keyElement.addEventListener('click', function () {
                  _this.value = _this.value.substring(0, _this.value.length - 1);

                  _this.onChangeValue(_this.value);
                });
                break;
              }

            case 'CapsLock':
              {
                text = item.text.eng;
                keyElement.addEventListener('click', function () {
                  _this.toggleCapsLock();
                });
                break;
              }

            case 'Space':
              {
                text = item.text.eng;
                keyElement.addEventListener('click', function () {
                  _this.value += text;

                  _this.onChangeValue(_this.value);
                });
                break;
              }

            case 'ArrowLeft':
            case 'ArrowDown':
            case 'ArrowRight':
            case 'ArrowUp':
              {
                text = item.text.eng;
                break;
              }

            case 'ControlLeft':
            case 'ControlRight':
            case 'MetaLeft':
            case 'AltLeft':
            case 'AltRight':
            case 'ShiftRight':
            case 'ShiftLeft':
              {
                text = item.text.eng;
                break;
              }

            default:
              {
                text = _this.capsLock ? item.shift[_this.language] : item.text[_this.language];
                keyElement.addEventListener('click', function (event) {
                  if (_this.hasKeyPressed(/Shift/)) {
                    _this.value += !_this.capsLock ? item.shift[_this.language] : item.text[_this.language];
                  } else {
                    _this.value += event.currentTarget.textContent;
                  }

                  _this.onChangeValue(_this.value);
                });
                break;
              }
          }

          keyElement.innerHTML = text;
          fragment.appendChild(keyElement);
        }
      });
      return fragment;
    }
  }, {
    key: "toggleCapsLock",
    value: function toggleCapsLock() {
      this.capsLock = !this.capsLock;
      this.rewriteKeyboardContentText();
    }
  }, {
    key: "rewriteKeyboardContentText",
    value: function rewriteKeyboardContentText() {
      var _this2 = this;

      this.keyboardNode.childNodes.forEach(function (element) {
        var dataKey = element.dataset.key;

        if (!['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Empty'].includes(dataKey)) {
          var keyboardLayoutItem = _this2.keyboardLayout[+element.dataset.index];

          if (/Digit/.test(dataKey) || dataKey === 'Minus' || dataKey === 'Equal') {
            element.textContent = keyboardLayoutItem.text.eng;
          } else {
            element.textContent = _this2.capsLock ? keyboardLayoutItem.shift[_this2.language] : keyboardLayoutItem.text[_this2.language];
          }
        }
      });
    }
  }, {
    key: "initKeyBoardEvents",
    value: function initKeyBoardEvents() {
      var _this3 = this;

      document.addEventListener('keydown', function (event) {
        if (_this3.keysPressed[event.code]) return;
        _this3.keysPressed[event.code] = _this3.keyboardNode.querySelector("[data-key=".concat(event.code, "]"));
        if (!_this3.keysPressed[event.code]) return;

        _this3.keysPressed[event.code].classList.add('keyboard__key_active');

        if (_this3.isInputFocus) return;

        _this3.keysPressed[event.code].click();
      });
      document.addEventListener('keyup', function (event) {
        var node = _this3.keysPressed[event.code];
        if (!node) return;
        node.classList.remove('keyboard__key_active');

        if (_this3.hasKeyPressed(/Shift/) && _this3.hasKeyPressed(/Alt/)) {
          _this3.toggleLanguage();
        }

        delete _this3.keysPressed[event.code];
      });
    }
  }, {
    key: "toggleLanguage",
    value: function toggleLanguage() {
      var language = this.language === 'eng' ? 'ru' : 'eng';
      localStorage.setItem('virtual-keyboard-lang', JSON.stringify(language));
      this.language = language;
      this.rewriteKeyboardContentText();
    }
  }, {
    key: "hasKeyPressed",
    value: function hasKeyPressed(regexp) {
      return Object.keys(this.keysPressed).some(function (element) {
        return regexp.test(element);
      });
    }
  }, {
    key: "keyPressedLength",
    value: function keyPressedLength() {
      return Object.keys(this.keysPressed).length;
    }
  }]);

  return VirtualKeyboard;
}();

/***/ }),

/***/ "./models/main/search/virtual-keyboard/virtual-keyboard.scss":
/*!*******************************************************************!*\
  !*** ./models/main/search/virtual-keyboard/virtual-keyboard.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./models/main/spinner.html":
/*!**********************************!*\
  !*** ./models/main/spinner.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"spinner__wrapper\">\r\n  <div class=\"lds-spinner\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n</div>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ../test/main.test.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:/Users/Alexy/Documents/my/rolling-scope/MovieSearch/test/main.test.js */"../test/main.test.js");


/***/ }),

/***/ 1:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map