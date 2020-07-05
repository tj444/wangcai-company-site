module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.ssr.js":
/*!******************************!*\
  !*** ./config/config.ssr.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var resolvePath = function resolvePath(path) {\n  return __webpack_require__(/*! path */ \"path\").resolve(__dirname, path);\n};\n\nmodule.exports = {\n  type: 'ssr',\n  // 指定运行类型可设置为csr切换为客户端渲染\n  routes: [{\n    path: '/',\n    exact: true,\n    Component: function Component() {\n      return __webpack_require__(/*! @/page/index */ \"./web/page/index/index.js\").default;\n    },\n    // 这里使用一个function包裹为了让它延迟require\n    controller: 'page',\n    handler: 'index'\n  }, {\n    path: '/news/:id',\n    exact: true,\n    Component: function Component() {\n      return __webpack_require__(/*! @/page/news */ \"./web/page/news/index.js\").default;\n    },\n    controller: 'page',\n    handler: 'index'\n  }],\n  baseDir: resolvePath('../'),\n  injectCss: [\"/static/css/Page.chunk.css\"],\n  // 客户端需要加载的静态样式表\n  injectScript: [\"<script src='/static/js/runtime~Page.js'></script>\", \"<script src='/static/js/vendor.chunk.js'></script>\", \"<script src='/static/js/Page.chunk.js'></script>\"],\n  // 客户端需要加载的静态资源文件表\n  serverJs: resolvePath(\"../dist/Page.server.js\"),\n  layout: resolvePath(\"../dist/Layout.server.js\"),\n  useCDN: false\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLnNzci5qcz8yNThiIl0sIm5hbWVzIjpbInJlc29sdmVQYXRoIiwicGF0aCIsInJlcXVpcmUiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInR5cGUiLCJyb3V0ZXMiLCJleGFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJjb250cm9sbGVyIiwiaGFuZGxlciIsImJhc2VEaXIiLCJpbmplY3RDc3MiLCJpbmplY3RTY3JpcHQiLCJzZXJ2ZXJKcyIsImxheW91dCIsInVzZUNETiJdLCJtYXBwaW5ncyI6IkFBQUEscURBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxTQUFVQyxtQkFBTyxDQUFDLGtCQUFELENBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCQyxTQUF4QixFQUFtQ0gsSUFBbkMsQ0FBVjtBQUFBLENBQXBCOztBQUVBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsTUFBSSxFQUFFLEtBRFM7QUFDRjtBQUNiQyxRQUFNLEVBQUUsQ0FDTjtBQUNFUCxRQUFJLEVBQUUsR0FEUjtBQUVFUSxTQUFLLEVBQUUsSUFGVDtBQUdFQyxhQUFTLEVBQUU7QUFBQSxhQUFPUixtQkFBTyxDQUFDLCtDQUFELENBQVAsQ0FBd0JTLE9BQS9CO0FBQUEsS0FIYjtBQUdzRDtBQUNwREMsY0FBVSxFQUFFLE1BSmQ7QUFLRUMsV0FBTyxFQUFFO0FBTFgsR0FETSxFQVFOO0FBQ0VaLFFBQUksRUFBRSxXQURSO0FBRUVRLFNBQUssRUFBRSxJQUZUO0FBR0VDLGFBQVMsRUFBRTtBQUFBLGFBQU9SLG1CQUFPLENBQUMsNkNBQUQsQ0FBUCxDQUF1QlMsT0FBOUI7QUFBQSxLQUhiO0FBSUVDLGNBQVUsRUFBRSxNQUpkO0FBS0VDLFdBQU8sRUFBRTtBQUxYLEdBUk0sQ0FGTztBQWtCZkMsU0FBTyxFQUFFZCxXQUFXLENBQUMsS0FBRCxDQWxCTDtBQW1CZmUsV0FBUyxFQUFFLDhCQW5CSTtBQXFCWjtBQUNIQyxjQUFZLEVBQUUsZ0tBdEJDO0FBMEJaO0FBQ0hDLFVBQVEsRUFBRWpCLFdBQVcsMEJBM0JOO0FBNEJma0IsUUFBTSxFQUFFbEIsV0FBVyw0QkE1Qko7QUE2QmZtQixRQUFNLEVBQUU7QUE3Qk8sQ0FBakIsQyIsImZpbGUiOiIuL2NvbmZpZy9jb25maWcuc3NyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVzb2x2ZVBhdGggPSAocGF0aCkgPT4gcmVxdWlyZSgncGF0aCcpLnJlc29sdmUoX19kaXJuYW1lLCBwYXRoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdHlwZTogJ3NzcicsIC8vIOaMh+Wumui/kOihjOexu+Wei+WPr+iuvue9ruS4umNzcuWIh+aNouS4uuWuouaIt+err+a4suafk1xuICByb3V0ZXM6IFtcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBleGFjdDogdHJ1ZSxcbiAgICAgIENvbXBvbmVudDogKCkgPT4gKHJlcXVpcmUoJ0AvcGFnZS9pbmRleCcpLmRlZmF1bHQpLCAvLyDov5nph4zkvb/nlKjkuIDkuKpmdW5jdGlvbuWMheijueS4uuS6huiuqeWug+W7tui/n3JlcXVpcmVcbiAgICAgIGNvbnRyb2xsZXI6ICdwYWdlJyxcbiAgICAgIGhhbmRsZXI6ICdpbmRleCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvbmV3cy86aWQnLFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBDb21wb25lbnQ6ICgpID0+IChyZXF1aXJlKCdAL3BhZ2UvbmV3cycpLmRlZmF1bHQpLFxuICAgICAgY29udHJvbGxlcjogJ3BhZ2UnLFxuICAgICAgaGFuZGxlcjogJ2luZGV4J1xuICAgIH1cbiAgXSxcbiAgYmFzZURpcjogcmVzb2x2ZVBhdGgoJy4uLycpLFxuICBpbmplY3RDc3M6IFtcbiAgICBgL3N0YXRpYy9jc3MvUGFnZS5jaHVuay5jc3NgXG4gIF0sIC8vIOWuouaIt+err+mcgOimgeWKoOi9veeahOmdmeaAgeagt+W8j+ihqFxuICBpbmplY3RTY3JpcHQ6IFtcbiAgICBgPHNjcmlwdCBzcmM9Jy9zdGF0aWMvanMvcnVudGltZX5QYWdlLmpzJz48L3NjcmlwdD5gLFxuICAgIGA8c2NyaXB0IHNyYz0nL3N0YXRpYy9qcy92ZW5kb3IuY2h1bmsuanMnPjwvc2NyaXB0PmAsXG4gICAgYDxzY3JpcHQgc3JjPScvc3RhdGljL2pzL1BhZ2UuY2h1bmsuanMnPjwvc2NyaXB0PmBcbiAgXSwgLy8g5a6i5oi356uv6ZyA6KaB5Yqg6L2955qE6Z2Z5oCB6LWE5rqQ5paH5Lu26KGoXG4gIHNlcnZlckpzOiByZXNvbHZlUGF0aChgLi4vZGlzdC9QYWdlLnNlcnZlci5qc2ApLFxuICBsYXlvdXQ6IHJlc29sdmVQYXRoKGAuLi9kaXN0L0xheW91dC5zZXJ2ZXIuanNgKSxcbiAgdXNlQ0ROOiBmYWxzZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/config.ssr.js\n");

/***/ }),

/***/ "./web/assets/common.less":
/*!********************************!*\
  !*** ./web/assets/common.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2NvbW1vbi5sZXNzP2VkNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3dlYi9hc3NldHMvY29tbW9uLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTkzOTkxNTQ4MTc1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/assets/common.less\n");

/***/ }),

/***/ "./web/entry.js":
/*!**********************!*\
  !*** ./web/entry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ \"./web/layout/index.js\");\n/* harmony import */ var ykfe_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ykfe-utils */ \"ykfe-utils\");\n/* harmony import */ var ykfe_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ykfe_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_config_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.ssr */ \"./config/config.ssr.js\");\n/* harmony import */ var _config_config_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_config_ssr__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar clientRender = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // 客户端渲染||hydrate\n            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a[window.__USE_SSR__ ? 'hydrate' : 'render']( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, // 使用高阶组件getWrappedComponent使得csr首次进入页面以及csr/ssr切换路由时调用getInitialProps\n            _config_config_ssr__WEBPACK_IMPORTED_MODULE_5__[\"routes\"].map(function (_ref2) {\n              var path = _ref2.path,\n                  exact = _ref2.exact,\n                  Component = _ref2.Component;\n              var ActiveComponent = Component();\n              var Layout = ActiveComponent.Layout || _layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n              var WrappedComponent = Object(ykfe_utils__WEBPACK_IMPORTED_MODULE_4__[\"getWrappedComponent\"])(ActiveComponent);\n              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n                exact: exact,\n                key: path,\n                path: path,\n                render: function render() {\n                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {\n                    key: window.location.pathname\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, null));\n                }\n              });\n            }))), document.getElementById('app'));\n\n            if (false) {}\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function clientRender() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar serverRender = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {\n    var ActiveComponent, Layout, serverData;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            // 服务端渲染 根据ctx.path获取请求的具体组件，调用getInitialProps并渲染\n            ActiveComponent = Object(ykfe_utils__WEBPACK_IMPORTED_MODULE_4__[\"getComponent\"])(_config_config_ssr__WEBPACK_IMPORTED_MODULE_5__[\"routes\"], ctx.path)();\n            Layout = ActiveComponent.Layout || _layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n            if (!ActiveComponent.getInitialProps) {\n              _context2.next = 8;\n              break;\n            }\n\n            _context2.next = 5;\n            return ActiveComponent.getInitialProps(ctx);\n\n          case 5:\n            _context2.t0 = _context2.sent;\n            _context2.next = 9;\n            break;\n\n          case 8:\n            _context2.t0 = {};\n\n          case 9:\n            serverData = _context2.t0;\n            ctx.serverData = serverData;\n            return _context2.abrupt(\"return\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n              location: ctx.req.url,\n              context: serverData\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {\n              layoutData: ctx\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveComponent, serverData))));\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function serverRender(_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ( false ? undefined : serverRender);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvZW50cnkuanM/ZDkwZSJdLCJuYW1lcyI6WyJjbGllbnRSZW5kZXIiLCJSZWFjdERPTSIsIndpbmRvdyIsIl9fVVNFX1NTUl9fIiwiUm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQ29tcG9uZW50IiwiQWN0aXZlQ29tcG9uZW50IiwiTGF5b3V0IiwiZGVmYXVsdExheW91dCIsIldyYXBwZWRDb21wb25lbnQiLCJnZXRXcmFwcGVkQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9jZXNzIiwic2VydmVyUmVuZGVyIiwiY3R4IiwiZ2V0Q29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwic2VydmVyRGF0YSIsInJlcSIsInVybCIsIl9faXNCcm93c2VyX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWTtBQUFBLHFFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQUMsNERBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLFNBQXJCLEdBQWlDLFFBQWxDLENBQVIsZUFDRSwyREFBQyw4REFBRCxxQkFDRSwyREFBQyx1REFBRCxRQUVFO0FBQ0VDLHFFQUFNLENBQUNDLEdBQVAsQ0FBVyxpQkFBZ0M7QUFBQSxrQkFBN0JDLElBQTZCLFNBQTdCQSxJQUE2QjtBQUFBLGtCQUF2QkMsS0FBdUIsU0FBdkJBLEtBQXVCO0FBQUEsa0JBQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDekMsa0JBQU1DLGVBQWUsR0FBR0QsU0FBUyxFQUFqQztBQUNBLGtCQUFNRSxNQUFNLEdBQUdELGVBQWUsQ0FBQ0MsTUFBaEIsSUFBMEJDLCtDQUF6QztBQUNBLGtCQUFNQyxnQkFBZ0IsR0FBR0Msc0VBQW1CLENBQUNKLGVBQUQsQ0FBNUM7QUFDQSxrQ0FBTywyREFBQyxzREFBRDtBQUFPLHFCQUFLLEVBQUVGLEtBQWQ7QUFBcUIsbUJBQUcsRUFBRUQsSUFBMUI7QUFBZ0Msb0JBQUksRUFBRUEsSUFBdEM7QUFBNEMsc0JBQU0sRUFBRTtBQUFBLHNDQUFNLDJEQUFDLE1BQUQ7QUFBUSx1QkFBRyxFQUFFSixNQUFNLENBQUNZLFFBQVAsQ0FBZ0JDO0FBQTdCLGtDQUF1QywyREFBQyxnQkFBRCxPQUF2QyxDQUFOO0FBQUE7QUFBcEQsZ0JBQVA7QUFDRCxhQUxELENBSEosQ0FERixDQURGLEVBY0lDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQWRKOztBQWdCQSxnQkFBSUMsS0FBSixFQUEwRCxFQUV6RDs7QUFwQmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpsQixZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCOztBQXVCQSxJQUFNbUIsWUFBWTtBQUFBLHNFQUFHLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjtBQUNNWCwyQkFGYSxHQUVLWSwrREFBWSxDQUFDakIseURBQUQsRUFBU2dCLEdBQUcsQ0FBQ2QsSUFBYixDQUFaLEVBRkw7QUFHYkksa0JBSGEsR0FHSkQsZUFBZSxDQUFDQyxNQUFoQixJQUEwQkMsK0NBSHRCOztBQUFBLGlCQUlBRixlQUFlLENBQUNhLGVBSmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSXdDYixlQUFlLENBQUNhLGVBQWhCLENBQWdDRixHQUFoQyxDQUp4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJCQUkrRSxFQUovRTs7QUFBQTtBQUliRyxzQkFKYTtBQUtuQkgsZUFBRyxDQUFDRyxVQUFKLEdBQWlCQSxVQUFqQjtBQUxtQiwyREFNWiwyREFBQyw2REFBRDtBQUFjLHNCQUFRLEVBQUVILEdBQUcsQ0FBQ0ksR0FBSixDQUFRQyxHQUFoQztBQUFxQyxxQkFBTyxFQUFFRjtBQUE5Qyw0QkFDTCwyREFBQyxNQUFEO0FBQVEsd0JBQVUsRUFBRUg7QUFBcEIsNEJBQ0UsMkRBQUMsZUFBRCxFQUFxQkcsVUFBckIsQ0FERixDQURLLENBTlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQjs7QUFhZU8scUVBQWEsR0FBRzFCLFNBQUgsR0FBb0JtQixZQUFoRCIsImZpbGUiOiIuL3dlYi9lbnRyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTdGF0aWNSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGRlZmF1bHRMYXlvdXQgZnJvbSAnQC9sYXlvdXQnXG5pbXBvcnQgeyBnZXRXcmFwcGVkQ29tcG9uZW50LCBnZXRDb21wb25lbnQgfSBmcm9tICd5a2ZlLXV0aWxzJ1xuaW1wb3J0IHsgcm91dGVzIGFzIFJvdXRlcyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc3NyJ1xuXG5jb25zdCBjbGllbnRSZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gIC8vIOWuouaIt+err+a4suafk3x8aHlkcmF0ZVxuICBSZWFjdERPTVt3aW5kb3cuX19VU0VfU1NSX18gPyAnaHlkcmF0ZScgOiAncmVuZGVyJ10oXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICB7XG4gICAgICAgIC8vIOS9v+eUqOmrmOmYtue7hOS7tmdldFdyYXBwZWRDb21wb25lbnTkvb/lvpdjc3LpppbmrKHov5vlhaXpobXpnaLku6Xlj4pjc3Ivc3Ny5YiH5o2i6Lev55Sx5pe26LCD55SoZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgUm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgQ29tcG9uZW50IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEFjdGl2ZUNvbXBvbmVudCA9IENvbXBvbmVudCgpXG4gICAgICAgICAgICBjb25zdCBMYXlvdXQgPSBBY3RpdmVDb21wb25lbnQuTGF5b3V0IHx8IGRlZmF1bHRMYXlvdXRcbiAgICAgICAgICAgIGNvbnN0IFdyYXBwZWRDb21wb25lbnQgPSBnZXRXcmFwcGVkQ29tcG9uZW50KEFjdGl2ZUNvbXBvbmVudClcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUgZXhhY3Q9e2V4YWN0fSBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IHJlbmRlcj17KCkgPT4gPExheW91dCBrZXk9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0+PFdyYXBwZWRDb21wb25lbnQgLz48L0xheW91dD59IC8+XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB9XG59XG5cbmNvbnN0IHNlcnZlclJlbmRlciA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8g5pyN5Yqh56uv5riy5p+TIOagueaNrmN0eC5wYXRo6I635Y+W6K+35rGC55qE5YW35L2T57uE5Lu277yM6LCD55SoZ2V0SW5pdGlhbFByb3Bz5bm25riy5p+TXG4gIGNvbnN0IEFjdGl2ZUNvbXBvbmVudCA9IGdldENvbXBvbmVudChSb3V0ZXMsIGN0eC5wYXRoKSgpXG4gIGNvbnN0IExheW91dCA9IEFjdGl2ZUNvbXBvbmVudC5MYXlvdXQgfHwgZGVmYXVsdExheW91dFxuICBjb25zdCBzZXJ2ZXJEYXRhID0gQWN0aXZlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IEFjdGl2ZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9XG4gIGN0eC5zZXJ2ZXJEYXRhID0gc2VydmVyRGF0YVxuICByZXR1cm4gPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17Y3R4LnJlcS51cmx9IGNvbnRleHQ9e3NlcnZlckRhdGF9PlxuICAgIDxMYXlvdXQgbGF5b3V0RGF0YT17Y3R4fT5cbiAgICAgIDxBY3RpdmVDb21wb25lbnQgey4uLnNlcnZlckRhdGF9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIDwvU3RhdGljUm91dGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBfX2lzQnJvd3Nlcl9fID8gY2xpZW50UmVuZGVyKCkgOiBzZXJ2ZXJSZW5kZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/entry.js\n");

/***/ }),

/***/ "./web/layout/index.js":
/*!*****************************!*\
  !*** ./web/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/common.less */ \"./web/assets/common.less\");\n/* harmony import */ var _assets_common_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_common_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./web/layout/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar commonNode = function commonNode(props) {\n  return (// 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ?  props.children  : ''\n    props.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"normal\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/\"\n    }, \"Egg + React + SSR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"author\"\n    }, \"by ykfe\")), props.children) : ''\n  );\n};\n\nvar Layout = function Layout(props) {\n  if (false) {} else {\n    var serverData = props.layoutData.serverData;\n    var _props$layoutData$app = props.layoutData.app.config,\n        injectCss = _props$layoutData$app.injectCss,\n        injectScript = _props$layoutData$app.injectScript;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n      lang: \"en\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      charSet: \"utf-8\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"theme-color\",\n      content: \"#000000\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React App\"), injectCss && injectCss.map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"stylesheet\",\n        href: item,\n        key: item\n      });\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"app\"\n    }, commonNode(props)), serverData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: \"window.__USE_SSR__=true; window.__INITIAL_DATA__ =\".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(serverData)) // 使用pathname作为组件初始化数据的隔离，防止props污染\n\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: injectScript && injectScript.join('')\n      }\n    })));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4LmpzP2JjNGIiXSwibmFtZXMiOlsiY29tbW9uTm9kZSIsInByb3BzIiwiY2hpbGRyZW4iLCJMYXlvdXQiLCJfX2lzQnJvd3Nlcl9fIiwic2VydmVyRGF0YSIsImxheW91dERhdGEiLCJhcHAiLCJjb25maWciLCJpbmplY3RDc3MiLCJpbmplY3RTY3JpcHQiLCJtYXAiLCJpdGVtIiwiX19odG1sIiwic2VyaWFsaXplIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQ3RCO0FBQ0FBLFNBQUssQ0FBQ0MsUUFBTixnQkFDSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUF3QjtBQUFJLGVBQVMsRUFBQztBQUFkLG9CQUFzQiwyREFBQyxxREFBRDtBQUFNLFFBQUUsRUFBQztBQUFULDJCQUF0QixlQUEyRDtBQUFLLGVBQVMsRUFBQztBQUFmLGlCQUEzRCxDQUF4QixFQUE4SEQsS0FBSyxDQUFDQyxRQUFwSSxDQURKLEdBRUk7QUFKa0I7QUFBQSxDQUF4Qjs7QUFPQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDRixLQUFELEVBQVc7QUFDeEIsTUFBSUcsS0FBSixFQUFtQixFQUFuQixNQUVPO0FBQUEsUUFDR0MsVUFESCxHQUNrQkosS0FBSyxDQUFDSyxVQUR4QixDQUNHRCxVQURIO0FBQUEsZ0NBRStCSixLQUFLLENBQUNLLFVBQU4sQ0FBaUJDLEdBQWpCLENBQXFCQyxNQUZwRDtBQUFBLFFBRUdDLFNBRkgseUJBRUdBLFNBRkg7QUFBQSxRQUVjQyxZQUZkLHlCQUVjQSxZQUZkO0FBR0wsd0JBQ0U7QUFBTSxVQUFJLEVBQUM7QUFBWCxvQkFDRSxzRkFDRTtBQUFNLGFBQU8sRUFBQztBQUFkLE1BREYsZUFFRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QixNQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUM7QUFBakMsTUFIRixlQUlFLHNGQUpGLEVBTUlELFNBQVMsSUFBSUEsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLDBCQUFJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFFQSxJQUE3QjtBQUFtQyxXQUFHLEVBQUVBO0FBQXhDLFFBQUo7QUFBQSxLQUFsQixDQU5qQixDQURGLGVBVUUsc0ZBQ0U7QUFBSyxRQUFFLEVBQUM7QUFBUixPQUFnQlosVUFBVSxDQUFDQyxLQUFELENBQTFCLENBREYsRUFHSUksVUFBVSxpQkFBSTtBQUFRLDZCQUF1QixFQUFFO0FBQzdDUSxjQUFNLDhEQUF1REMsMkRBQVMsQ0FBQ1QsVUFBRCxDQUFoRSxDQUR1QyxDQUN3Qzs7QUFEeEM7QUFBakMsTUFIbEIsZUFPRTtBQUFLLDZCQUF1QixFQUFFO0FBQzVCUSxjQUFNLEVBQUVILFlBQVksSUFBSUEsWUFBWSxDQUFDSyxJQUFiLENBQWtCLEVBQWxCO0FBREk7QUFBOUIsTUFQRixDQVZGLENBREY7QUF3QkQ7QUFDRixDQS9CRDs7QUFpQ2VaLHFFQUFmIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0ICdAL2Fzc2V0cy9jb21tb24ubGVzcydcbmltcG9ydCAnLi9pbmRleC5sZXNzJ1xuXG5jb25zdCBjb21tb25Ob2RlID0gcHJvcHMgPT4gKFxuICAvLyDkuLrkuoblkIzml7blhbzlrrlzc3IvY3Ny6K+35L+d55WZ5q2k5Yik5pat77yM5aaC5p6c5L2g55qEbGF5b3V05rKh5pyJ5YaF5a656K+35L2/55SoIHByb3BzLmNoaWxkcmVuID8gIHByb3BzLmNoaWxkcmVuICA6ICcnXG4gIHByb3BzLmNoaWxkcmVuXG4gICAgPyA8ZGl2IGNsYXNzTmFtZT0nbm9ybWFsJz48aDEgY2xhc3NOYW1lPSd0aXRsZSc+PExpbmsgdG89Jy8nPkVnZyArIFJlYWN0ICsgU1NSPC9MaW5rPjxkaXYgY2xhc3NOYW1lPSdhdXRob3InPmJ5IHlrZmU8L2Rpdj48L2gxPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA6ICcnXG4pXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBpZiAoX19pc0Jyb3dzZXJfXykge1xuICAgIHJldHVybiBjb21tb25Ob2RlKHByb3BzKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgc2VydmVyRGF0YSB9ID0gcHJvcHMubGF5b3V0RGF0YVxuICAgIGNvbnN0IHsgaW5qZWN0Q3NzLCBpbmplY3RTY3JpcHQgfSA9IHByb3BzLmxheW91dERhdGEuYXBwLmNvbmZpZ1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubycgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nIzAwMDAwMCcgLz5cbiAgICAgICAgICA8dGl0bGU+UmVhY3QgQXBwPC90aXRsZT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbmplY3RDc3MgJiYgaW5qZWN0Q3NzLm1hcChpdGVtID0+IDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj17aXRlbX0ga2V5PXtpdGVtfSAvPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD0nYXBwJz57IGNvbW1vbk5vZGUocHJvcHMpIH08L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZXJ2ZXJEYXRhICYmIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93Ll9fVVNFX1NTUl9fPXRydWU7IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0ke3NlcmlhbGl6ZShzZXJ2ZXJEYXRhKX1gIC8vIOS9v+eUqHBhdGhuYW1l5L2c5Li657uE5Lu25Yid5aeL5YyW5pWw5o2u55qE6ZqU56a777yM6Ziy5q2icHJvcHPmsaHmn5NcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogaW5qZWN0U2NyaXB0ICYmIGluamVjdFNjcmlwdC5qb2luKCcnKVxuICAgICAgICAgIH19IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.js\n");

/***/ }),

/***/ "./web/layout/index.less":
/*!*******************************!*\
  !*** ./web/layout/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvbGF5b3V0L2luZGV4Lmxlc3M/MWM3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6Ii4vd2ViL2xheW91dC9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5Mzk5MTU0ODE2N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/layout/index.less\n");

/***/ }),

/***/ "./web/page/index/index.js":
/*!*********************************!*\
  !*** ./web/page/index/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./web/page/index/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction Page(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"normal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"welcome\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list\"\n  }, props.news && props.news.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6587\\u7AE0\\u6807\\u9898: \", item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"toDetail\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/news/\".concat(item.id)\n    }, \"\\u70B9\\u51FB\\u67E5\\u770B\\u8BE6\\u60C5\")));\n  })));\n}\n\nPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (true) {\n              _context.next = 6;\n              break;\n            }\n\n            _context.next = 3;\n            return window.fetch('/api/getIndexData');\n\n          case 3:\n            _context.t0 = _context.sent.json();\n            _context.next = 7;\n            break;\n\n          case 6:\n            _context.t0 = ctx.service.api.index();\n\n          case 7:\n            return _context.abrupt(\"return\", _context.t0);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvcGFnZS9pbmRleC9pbmRleC5qcz80ZDIwIl0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9wcyIsIm5ld3MiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndpbmRvdyIsImZldGNoIiwianNvbiIsInNlcnZpY2UiLCJhcGkiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLGVBRUU7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUVJQSxLQUFLLENBQUNDLElBQU4sSUFBY0QsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFBQyxJQUFJO0FBQUEsd0JBQy9CO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQWQsb0JBQ0Usc0dBQVlELElBQUksQ0FBQ0UsS0FBakIsQ0FERixlQUVFO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQTBCLDJEQUFDLHFEQUFEO0FBQU0sUUFBRSxrQkFBV0YsSUFBSSxDQUFDQyxFQUFoQjtBQUFSLDhDQUExQixDQUZGLENBRCtCO0FBQUEsR0FBbkIsQ0FGbEIsQ0FGRixDQURGO0FBZUQ7O0FBRURMLElBQUksQ0FBQ08sZUFBTDtBQUFBLHFFQUF1QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFFU0MsTUFBTSxDQUFDQyxLQUFQLENBQWEsbUJBQWIsQ0FGVDs7QUFBQTtBQUFBLHdDQUU0Q0MsSUFGNUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBRXFESCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsR0FBWixDQUFnQkMsS0FBaEIsRUFGckQ7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZWQsbUVBQWYiLCJmaWxlIjoiLi93ZWIvcGFnZS9pbmRleC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5cbmZ1bmN0aW9uIFBhZ2UgKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25vcm1hbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZScgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QnPlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMubmV3cyAmJiBwcm9wcy5uZXdzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8ZGl2PuaWh+eroOagh+mimDoge2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b0RldGFpbCc+PExpbmsgdG89e2AvbmV3cy8ke2l0ZW0uaWR9YH0+54K55Ye75p+l55yL6K+m5oOFPC9MaW5rPjwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBzc3LmuLLmn5PmqKHlvI/lj6rlnKjmnI3liqHnq6/pgJrov4dOb2Rl6I635Y+W5pWw5o2u77yMY3Ny5riy5p+T5qih5byP5Y+q5Zyo5a6i5oi356uv6YCa6L+HaHR0cOivt+axguiOt+WPluaVsOaNru+8jGdldEluaXRpYWxQcm9wc+aWueazleWcqOaVtOS4qumhtemdoueUn+WRveWRqOacn+WPquS8muaJp+ihjOS4gOasoVxuICByZXR1cm4gX19pc0Jyb3dzZXJfXyA/IChhd2FpdCB3aW5kb3cuZmV0Y2goJy9hcGkvZ2V0SW5kZXhEYXRhJykpLmpzb24oKSA6IGN0eC5zZXJ2aWNlLmFwaS5pbmRleCgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/page/index/index.js\n");

/***/ }),

/***/ "./web/page/index/index.less":
/*!***********************************!*\
  !*** ./web/page/index/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvcGFnZS9pbmRleC9pbmRleC5sZXNzPzFlZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3dlYi9wYWdlL2luZGV4L2luZGV4Lmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTkzOTkxNTQ4MjI0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/page/index/index.less\n");

/***/ }),

/***/ "./web/page/news/index.js":
/*!********************************!*\
  !*** ./web/page/news/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./web/page/news/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mockData = {\n  1: \"Racket-on-Chez continues to improve. Snapshot builds are currently available at pre.racket-lang.org, and we expect that Racket-on-Chez will be included as a download option in the next release.\",\n  2: \"This means anyone with more than three devices connected doesn't have to worry right this instant. That will change, however, when it comes time to replace one of your current devices or if you add another device to your collection. At that point, you will have to make a decision.\",\n  3: \"World's most mysterious text is finally cracked: Bristol academic deciphers lost language of 600-year-old Voynich manuscript to reveal astrological sex tips, herbal remedies and other pagan beliefs\",\n  4: \"After a successful test in Mexico City, fast-food chain Burger King will begin delivering food to drivers caught in traffic in Los Angeles in what they have dubbed The Traffic Jam Whopper.\",\n  5: \"Product advertisement and promotion on YouTube is a function of the dedicated audience (or influence) of the individual (influencer) anchoring the advertising or promotion.\"\n};\n\nfunction News(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"news-container\"\n  }, \"\\u6587\\u7AE0\\u8BE6\\u60C5: \", props.newsDetail);\n}\n\nNews.getInitialProps = function (ctx) {\n  var newsId =  false ? undefined : ctx.params.id;\n  return Promise.resolve({\n    newsDetail: mockData[newsId]\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvcGFnZS9uZXdzL2luZGV4LmpzP2RkMGEiXSwibmFtZXMiOlsibW9ja0RhdGEiLCJOZXdzIiwicHJvcHMiLCJuZXdzRGV0YWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibmV3c0lkIiwiX19pc0Jyb3dzZXJfXyIsInBhcmFtcyIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2Ysd01BRGU7QUFFZixnU0FGZTtBQUdmLDRNQUhlO0FBSWYsbU1BSmU7QUFLZjtBQUxlLENBQWpCOztBQVFBLFNBQVNDLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLG1DQUNTQSxLQUFLLENBQUNDLFVBRGYsQ0FERjtBQUtEOztBQUVERixJQUFJLENBQUNHLGVBQUwsR0FBdUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsTUFBYSxHQUFHRixTQUFILEdBQXlCQSxHQUFHLENBQUNHLE1BQUosQ0FBV0MsRUFBaEU7QUFDQSxTQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFDckJSLGNBQVUsRUFBRUgsUUFBUSxDQUFDTSxNQUFEO0FBREMsR0FBaEIsQ0FBUDtBQUdELENBTEQ7O0FBT2VMLG1FQUFmIiwiZmlsZSI6Ii4vd2ViL3BhZ2UvbmV3cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9pbmRleC5sZXNzJ1xuXG5jb25zdCBtb2NrRGF0YSA9IHtcbiAgMTogYFJhY2tldC1vbi1DaGV6IGNvbnRpbnVlcyB0byBpbXByb3ZlLiBTbmFwc2hvdCBidWlsZHMgYXJlIGN1cnJlbnRseSBhdmFpbGFibGUgYXQgcHJlLnJhY2tldC1sYW5nLm9yZywgYW5kIHdlIGV4cGVjdCB0aGF0IFJhY2tldC1vbi1DaGV6IHdpbGwgYmUgaW5jbHVkZWQgYXMgYSBkb3dubG9hZCBvcHRpb24gaW4gdGhlIG5leHQgcmVsZWFzZS5gLFxuICAyOiBgVGhpcyBtZWFucyBhbnlvbmUgd2l0aCBtb3JlIHRoYW4gdGhyZWUgZGV2aWNlcyBjb25uZWN0ZWQgZG9lc24ndCBoYXZlIHRvIHdvcnJ5IHJpZ2h0IHRoaXMgaW5zdGFudC4gVGhhdCB3aWxsIGNoYW5nZSwgaG93ZXZlciwgd2hlbiBpdCBjb21lcyB0aW1lIHRvIHJlcGxhY2Ugb25lIG9mIHlvdXIgY3VycmVudCBkZXZpY2VzIG9yIGlmIHlvdSBhZGQgYW5vdGhlciBkZXZpY2UgdG8geW91ciBjb2xsZWN0aW9uLiBBdCB0aGF0IHBvaW50LCB5b3Ugd2lsbCBoYXZlIHRvIG1ha2UgYSBkZWNpc2lvbi5gLFxuICAzOiBgV29ybGQncyBtb3N0IG15c3RlcmlvdXMgdGV4dCBpcyBmaW5hbGx5IGNyYWNrZWQ6IEJyaXN0b2wgYWNhZGVtaWMgZGVjaXBoZXJzIGxvc3QgbGFuZ3VhZ2Ugb2YgNjAwLXllYXItb2xkIFZveW5pY2ggbWFudXNjcmlwdCB0byByZXZlYWwgYXN0cm9sb2dpY2FsIHNleCB0aXBzLCBoZXJiYWwgcmVtZWRpZXMgYW5kIG90aGVyIHBhZ2FuIGJlbGllZnNgLFxuICA0OiBgQWZ0ZXIgYSBzdWNjZXNzZnVsIHRlc3QgaW4gTWV4aWNvIENpdHksIGZhc3QtZm9vZCBjaGFpbiBCdXJnZXIgS2luZyB3aWxsIGJlZ2luIGRlbGl2ZXJpbmcgZm9vZCB0byBkcml2ZXJzIGNhdWdodCBpbiB0cmFmZmljIGluIExvcyBBbmdlbGVzIGluIHdoYXQgdGhleSBoYXZlIGR1YmJlZCBUaGUgVHJhZmZpYyBKYW0gV2hvcHBlci5gLFxuICA1OiBgUHJvZHVjdCBhZHZlcnRpc2VtZW50IGFuZCBwcm9tb3Rpb24gb24gWW91VHViZSBpcyBhIGZ1bmN0aW9uIG9mIHRoZSBkZWRpY2F0ZWQgYXVkaWVuY2UgKG9yIGluZmx1ZW5jZSkgb2YgdGhlIGluZGl2aWR1YWwgKGluZmx1ZW5jZXIpIGFuY2hvcmluZyB0aGUgYWR2ZXJ0aXNpbmcgb3IgcHJvbW90aW9uLmBcbn1cblxuZnVuY3Rpb24gTmV3cyAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cy1jb250YWluZXInID5cbiAgICAgIOaWh+eroOivpuaDhToge3Byb3BzLm5ld3NEZXRhaWx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTmV3cy5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG5ld3NJZCA9IF9faXNCcm93c2VyX18gPyBjdHgubWF0Y2gucGFyYW1zLmlkIDogY3R4LnBhcmFtcy5pZFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICBuZXdzRGV0YWlsOiBtb2NrRGF0YVtuZXdzSWRdXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/page/news/index.js\n");

/***/ }),

/***/ "./web/page/news/index.less":
/*!**********************************!*\
  !*** ./web/page/news/index.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvcGFnZS9uZXdzL2luZGV4Lmxlc3M/ZDBhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6Ii4vd2ViL3BhZ2UvbmV3cy9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5Mzk5MTU0ODI0MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/page/news/index.less\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ }),

/***/ "ykfe-utils":
/*!*****************************!*\
  !*** external "ykfe-utils" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ykfe-utils\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5a2ZlLXV0aWxzXCI/NDBlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ5a2ZlLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieWtmZS11dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ykfe-utils\n");

/***/ })

/******/ });