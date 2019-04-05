/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n// import _ from 'lodash';\r\n\r\n(function() {\r\n    let navigatioHover = e =>{\r\n\r\n    };\r\n    document.querySelector()\r\n    let obj = document.querySelector('.slider');\r\n    let o = obj.getBoundingClientRect();\r\n    // console.log(o.width);\r\n    // console.log(__dirname+'src/fonts/beyno');\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nconst doc  = document;\r\nvar multiItemSlider = (function () {\r\n\r\n    function _isElementVisible(element) {\r\n        var rect = element.getBoundingClientRect(),\r\n            vWidth = window.innerWidth || doc.documentElement.clientWidth,\r\n            vHeight = window.innerHeight || doc.documentElement.clientHeight,\r\n            elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };\r\n        if (rect.right < 0 || rect.bottom < 0\r\n            || rect.left > vWidth || rect.top > vHeight)\r\n            return false;\r\n        return (\r\n            element.contains(elemFromPoint(rect.left, rect.top))\r\n            || element.contains(elemFromPoint(rect.right, rect.top))\r\n            || element.contains(elemFromPoint(rect.right, rect.bottom))\r\n            || element.contains(elemFromPoint(rect.left, rect.bottom))\r\n        );\r\n    }\r\n\r\n    return function (selector, config) {\r\n        var\r\n            _mainElement = document.querySelector(selector), // основний елемент блоку\r\n            _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обгортка .slider-item\r\n            _sliderItems = _mainElement.querySelectorAll('.slider__item'), // елемент (.slider-item)\r\n            _sliderControls = _mainElement.querySelectorAll('.slider__control'), // елементи управіління\r\n            _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка \"LEFT\"\r\n            _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка \"RIGHT\"\r\n            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обгортки\r\n            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного елемента\r\n            _positionLeftItem = 0, // позиция лівого активного елемента\r\n            _transform = 0, // значення трансформації .slider_wrapper\r\n            _step = _itemWidth / _wrapperWidth * 100, // величина кроку (для трансформації)\r\n            _items = [], // масив елементів\r\n            _interval = 0,\r\n            _html = _mainElement.innerHTML,\r\n            _states = [\r\n                { active: false, minWidth: 0, count: 1 },\r\n                { active: false, minWidth: 980, count: 2 }\r\n            ],\r\n            _config = {\r\n                isCycling: false, // автоматична зміна сайтів\r\n                direction: 'right', // напрямок зміни слайдів\r\n                interval: 5000, // інтервали зміни слайдів\r\n                pause: true, // встановлення паузи при наближенні курсору\r\n                controls: true // навігація знизу\r\n            };\r\n\r\n        for (var key in config) {\r\n            if (key in _config) {\r\n                _config[key] = config[key];\r\n            }\r\n        }\r\n\r\n        // заповнення масиву _items\r\n        _sliderItems.forEach(function (item, index) {\r\n            _items.push({ item: item, position: index, transform: 0 });\r\n        });\r\n\r\n        var _setActive = function () {\r\n            var _index = 0;\r\n            var width = parseFloat(document.body.clientWidth);\r\n            _states.forEach(function (item, index, arr) {\r\n                _states[index].active = false;\r\n                if (width >= _states[index].minWidth)\r\n                    _index = index;\r\n            });\r\n            _states[_index].active = true;\r\n        }\r\n\r\n        var _getActive = function () {\r\n            var _index;\r\n            _states.forEach(function (item, index, arr) {\r\n                if (_states[index].active) {\r\n                    _index = index;\r\n                }\r\n            });\r\n            return _index;\r\n        };\r\n\r\n        var position = {\r\n            getItemMin: function () {\r\n                var indexItem = 0;\r\n                _items.forEach(function (item, index) {\r\n                    if (item.position < _items[indexItem].position) {\r\n                        indexItem = index;\r\n                    }\r\n                });\r\n                return indexItem;\r\n            },\r\n            getItemMax: function () {\r\n                var indexItem = 0;\r\n                _items.forEach(function (item, index) {\r\n                    if (item.position > _items[indexItem].position) {\r\n                        indexItem = index;\r\n                    }\r\n                });\r\n                return indexItem;\r\n            },\r\n            getMin: function () {\r\n                return _items[position.getItemMin()].position;\r\n            },\r\n            getMax: function () {\r\n                return _items[position.getItemMax()].position;\r\n            }\r\n        };\r\n\r\n        var _transformItem = function (direction) {\r\n            var nextItem;\r\n            if (!_isElementVisible(_mainElement)) {\r\n                return;\r\n            }\r\n            if (direction === 'right') {\r\n                _positionLeftItem++;\r\n                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {\r\n                    nextItem = position.getItemMin();\r\n                    _items[nextItem].position = position.getMax() + 1;\r\n                    _items[nextItem].transform += _items.length * 100;\r\n                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';\r\n                }\r\n                _transform -= _step;\r\n            }\r\n            if (direction === 'left') {\r\n                _positionLeftItem--;\r\n                if (_positionLeftItem < position.getMin()) {\r\n                    nextItem = position.getItemMax();\r\n                    _items[nextItem].position = position.getMin() - 1;\r\n                    _items[nextItem].transform -= _items.length * 100;\r\n                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';\r\n                }\r\n                _transform += _step;\r\n            }\r\n            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';\r\n        };\r\n\r\n        var _cycle = function (direction) {\r\n            if (!_config.isCycling) {\r\n                return;\r\n            }\r\n            _interval = setInterval(function () {\r\n                _transformItem(direction);\r\n            }, _config.interval);\r\n        }\r\n\r\n\r\n        // let _control = e =>{\r\n        //   e.preventDefault();\r\n        //   if(e.target.classList.contains('active_control')){\r\n        //       let direction = e.target.classList.contains()\r\n        //   }\r\n        // };\r\n\r\n        // обробние event click для вперед і назад\r\n        var _controlClick = function (e) {\r\n            e.preventDefault();\r\n            if (e.target.classList.contains('slider__control')) {\r\n                var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';\r\n                _transformItem(direction);\r\n                clearInterval(_interval);\r\n                _cycle(_config.direction);\r\n            }\r\n        };\r\n\r\n        /* обробка event зміни видимості сторінки*/\r\n        var _handleVisibilityChange = function () {\r\n            if (document.visibilityState === \"hidden\") {\r\n                clearInterval(_interval);\r\n            } else {\r\n                clearInterval(_interval);\r\n                _cycle(_config.direction);\r\n            }\r\n        };\r\n\r\n        var _refresh = function () {\r\n            clearInterval(_interval);\r\n            _mainElement.innerHTML = _html;\r\n            _sliderWrapper = _mainElement.querySelector('.slider__wrapper');\r\n            _sliderItems = _mainElement.querySelectorAll('.slider__item');\r\n            _sliderControls = _mainElement.querySelectorAll('.slider__control');\r\n            _sliderControlLeft = _mainElement.querySelector('.slider__control_left');\r\n            _sliderControlRight = _mainElement.querySelector('.slider__control_right');\r\n            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);\r\n            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);\r\n            _positionLeftItem = 0;\r\n            _transform = 0;\r\n            _step = _itemWidth / _wrapperWidth * 100;\r\n            _items = [];\r\n            _sliderItems.forEach(function (item, index) {\r\n                _items.push({ item: item, position: index, transform: 0 });\r\n            });\r\n        };\r\n\r\n        var _setUpListeners = function () {\r\n            _mainElement.addEventListener('click', _controlClick);\r\n            if (_config.pause && _config.isCycling) {\r\n                _mainElement.addEventListener('mouseenter', function () {\r\n                    clearInterval(_interval);\r\n                });\r\n                _mainElement.addEventListener('mouseleave', function () {\r\n                    clearInterval(_interval);\r\n                    _cycle(_config.direction);\r\n                });\r\n            }\r\n            document.addEventListener('visibilitychange', _handleVisibilityChange, false);\r\n            window.addEventListener('resize', function () {\r\n                var\r\n                    _index = 0,\r\n                    width = parseFloat(document.body.clientWidth);\r\n                _states.forEach(function (item, index, arr) {\r\n                    if (width >= _states[index].minWidth)\r\n                        _index = index;\r\n                });\r\n                if (_index !== _getActive()) {\r\n                    _setActive();\r\n                    _refresh();\r\n                }\r\n            });\r\n        };\r\n\r\n        // ініціалізація\r\n        _setUpListeners();\r\n        if (document.visibilityState === \"visible\") {\r\n            _cycle(_config.direction);\r\n        }\r\n        _setActive();\r\n\r\n        return {\r\n            right: function () { // метод right\r\n                _transformItem('right');\r\n            },\r\n            left: function () { // метод left\r\n                _transformItem('left');\r\n            },\r\n            stop: function () { // метод stop\r\n                _config.isCycling = false;\r\n                clearInterval(_interval);\r\n            },\r\n            cycle: function () { // метод cycle\r\n                _config.isCycling = true;\r\n                clearInterval(_interval);\r\n                _cycle();\r\n            }\r\n        }\r\n\r\n    }\r\n}());\r\n\r\nvar slider = multiItemSlider('.slider', {\r\n    isCycling: true,\r\n    interval: 3000\r\n});\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });