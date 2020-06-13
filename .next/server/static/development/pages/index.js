module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ \"@shopify/polaris-icons\");\n/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/abhishek/Documents/Anuj 3d References/gatsby/nexter/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction App() {\n  const {\n    0: first,\n    1: setFirst\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: last,\n    1: setLast\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: checkboxes,\n    1: setCheckboxes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: connected,\n    1: setConnected\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const handleFirstChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setFirst(value), []);\n  const handleLastChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setLast(value), []);\n  const handleEmailChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setEmail(value), []);\n  const handleCheckboxesChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setCheckboxes(value), []);\n  const toggleConnection = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setConnected(!connected);\n  }, [connected]);\n  const breadcrumbs = [{\n    content: 'Sample apps'\n  }, {\n    content: 'next.js'\n  }];\n  const primaryAction = {\n    content: 'New product'\n  };\n  const secondaryActions = [{\n    content: 'Import',\n    icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__[\"ImportMinor\"]\n  }];\n  const choiceListItems = [{\n    label: 'I accept the Terms of Service',\n    value: 'false'\n  }, {\n    label: 'I consent to receiving emails',\n    value: 'false2'\n  }];\n  const accountSectionDescription = connected ? 'Disconnect your account from your Shopify store.' : 'Connect your account to your Shopify store.';\n  const accountMarkup = connected ? __jsx(DisconnectAccount, {\n    onAction: toggleConnection,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }) : __jsx(ConnectAccount, {\n    onAction: toggleConnection,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  });\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    title: \"Polaris\",\n    breadcrumbs: breadcrumbs,\n    primaryAction: primaryAction,\n    secondaryActions: secondaryActions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Style\",\n    description: \"Customize the style of your checkout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"SettingToggle\"], {\n    action: {\n      content: 'Customize Checkout'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"Upload your store\\u2019s logo, change colors and fonts, and more.\")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Account\",\n    description: accountSectionDescription,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, accountMarkup), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Form\",\n    description: \"A sample form using Polaris components.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    sectioned: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    value: first,\n    label: \"First name\",\n    placeholder: \"Tom\",\n    onChange: handleFirstChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    value: last,\n    label: \"Last name\",\n    placeholder: \"Ford\",\n    onChange: handleLastChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    value: email,\n    label: \"Email\",\n    placeholder: \"example@email.com\",\n    onChange: handleEmailChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"ChoiceList\"], {\n    allowMultiple: true,\n    choices: choiceListItems,\n    selected: checkboxes,\n    onChange: handleCheckboxesChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    primary: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  }, \"Submit\")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FooterHelp\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, \"For more details on Polaris, visit our\", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    url: \"https://polaris.shopify.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, \"style guide\"), \".\"))));\n}\n\nfunction ConnectAccount({\n  onAction\n}) {\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"AccountConnection\"], {\n    action: {\n      content: 'Connect',\n      onAction\n    },\n    details: \"No account connected\",\n    termsOfService: __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }\n    }, \"By clicking Connect, you are accepting Sample\\u2019s\", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      url: \"https://polaris.shopify.com\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 11\n      }\n    }, \"Terms and Conditions\"), \", including a commission rate of 15% on sales.\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }\n  });\n}\n\nfunction DisconnectAccount({\n  onAction\n}) {\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"AccountConnection\"], {\n    connected: true,\n    action: {\n      content: 'Disconnect',\n      onAction\n    },\n    accountName: \"Tom Ford\",\n    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      url: \"http://google.com\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 14\n      }\n    }, \"Tom Ford\"),\n    details: \"Account id: d587647ae4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 5\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJ1c2VTdGF0ZSIsImxhc3QiLCJzZXRMYXN0IiwiZW1haWwiLCJzZXRFbWFpbCIsImNoZWNrYm94ZXMiLCJzZXRDaGVja2JveGVzIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiaGFuZGxlRmlyc3RDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwiaGFuZGxlTGFzdENoYW5nZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlQ2hlY2tib3hlc0NoYW5nZSIsInRvZ2dsZUNvbm5lY3Rpb24iLCJicmVhZGNydW1icyIsImNvbnRlbnQiLCJwcmltYXJ5QWN0aW9uIiwic2Vjb25kYXJ5QWN0aW9ucyIsImljb24iLCJJbXBvcnRNaW5vciIsImNob2ljZUxpc3RJdGVtcyIsImxhYmVsIiwiYWNjb3VudFNlY3Rpb25EZXNjcmlwdGlvbiIsImFjY291bnRNYXJrdXAiLCJDb25uZWN0QWNjb3VudCIsIm9uQWN0aW9uIiwiRGlzY29ubmVjdEFjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTixzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sU0FBRDtBQUFBLE9BQVlD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QUVFLE1BQUMscURBQUQ7QUFBTSxPQUFHLEVBQUMsNkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixNQURGLENBN0RGLENBTkYsQ0FERjtBQTZFRDs7QUFFRCxTQUFTWSxjQUFULENBQXdCO0FBQUNDO0FBQUQsQ0FBeEIsRUFBb0M7QUFDbEMsU0FDRSxNQUFDLGtFQUFEO0FBQ0UsVUFBTSxFQUFFO0FBQUNWLGFBQU8sRUFBRSxTQUFWO0FBQXFCVTtBQUFyQixLQURWO0FBRUUsV0FBTyxFQUFDLHNCQUZWO0FBR0Usa0JBQWMsRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQUNrRCxHQURsRCxFQUVFLE1BQUMscURBQUQ7QUFBTSxTQUFHLEVBQUMsNkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRixtREFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFhRDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQjtBQUFDRDtBQUFELENBQTNCLEVBQXVDO0FBQ3JDLFNBQ0UsTUFBQyxrRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFVBQU0sRUFBRTtBQUFDVixhQUFPLEVBQUUsWUFBVjtBQUF3QlU7QUFBeEIsS0FGVjtBQUdFLGVBQVcsRUFBQyxVQUhkO0FBSUUsU0FBSyxFQUFFLE1BQUMscURBQUQ7QUFBTSxTQUFHLEVBQUMsbUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKVDtBQUtFLFdBQU8sRUFBQyx3QkFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBMYXlvdXQsXG4gIFBhZ2UsXG4gIEZvb3RlckhlbHAsXG4gIENhcmQsXG4gIExpbmssXG4gIEJ1dHRvbixcbiAgRm9ybUxheW91dCxcbiAgVGV4dEZpZWxkLFxuICBBY2NvdW50Q29ubmVjdGlvbixcbiAgQ2hvaWNlTGlzdCxcbiAgU2V0dGluZ1RvZ2dsZSxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQge0ltcG9ydE1pbm9yfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xhc3QsIHNldExhc3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NoZWNrYm94ZXMsIHNldENoZWNrYm94ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUZpcnN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRGaXJzdCh2YWx1ZSksIFtdKTtcbiAgY29uc3QgaGFuZGxlTGFzdENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0TGFzdCh2YWx1ZSksIFtdKTtcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldEVtYWlsKHZhbHVlKSwgW10pO1xuICBjb25zdCBoYW5kbGVDaGVja2JveGVzQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlKSA9PiBzZXRDaGVja2JveGVzKHZhbHVlKSxcbiAgICBbXSxcbiAgKTtcblxuICBjb25zdCB0b2dnbGVDb25uZWN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4ge1xuICAgICAgc2V0Q29ubmVjdGVkKCFjb25uZWN0ZWQpO1xuICAgIH0sXG4gICAgW2Nvbm5lY3RlZF0sXG4gICk7XG5cbiAgY29uc3QgYnJlYWRjcnVtYnMgPSBbe2NvbnRlbnQ6ICdTYW1wbGUgYXBwcyd9LCB7Y29udGVudDogJ25leHQuanMnfV07XG4gIGNvbnN0IHByaW1hcnlBY3Rpb24gPSB7Y29udGVudDogJ05ldyBwcm9kdWN0J307XG4gIGNvbnN0IHNlY29uZGFyeUFjdGlvbnMgPSBbe2NvbnRlbnQ6ICdJbXBvcnQnLCBpY29uOiBJbXBvcnRNaW5vcn1dO1xuXG4gIGNvbnN0IGNob2ljZUxpc3RJdGVtcyA9IFtcbiAgICB7bGFiZWw6ICdJIGFjY2VwdCB0aGUgVGVybXMgb2YgU2VydmljZScsIHZhbHVlOiAnZmFsc2UnfSxcbiAgICB7bGFiZWw6ICdJIGNvbnNlbnQgdG8gcmVjZWl2aW5nIGVtYWlscycsIHZhbHVlOiAnZmFsc2UyJ30sXG4gIF07XG5cbiAgY29uc3QgYWNjb3VudFNlY3Rpb25EZXNjcmlwdGlvbiA9IGNvbm5lY3RlZFxuICAgID8gJ0Rpc2Nvbm5lY3QgeW91ciBhY2NvdW50IGZyb20geW91ciBTaG9waWZ5IHN0b3JlLidcbiAgICA6ICdDb25uZWN0IHlvdXIgYWNjb3VudCB0byB5b3VyIFNob3BpZnkgc3RvcmUuJztcblxuICBjb25zdCBhY2NvdW50TWFya3VwID0gY29ubmVjdGVkID8gKFxuICAgIDxEaXNjb25uZWN0QWNjb3VudCBvbkFjdGlvbj17dG9nZ2xlQ29ubmVjdGlvbn0gLz5cbiAgKSA6IChcbiAgICA8Q29ubmVjdEFjY291bnQgb25BY3Rpb249e3RvZ2dsZUNvbm5lY3Rpb259IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZVxuICAgICAgdGl0bGU9XCJQb2xhcmlzXCJcbiAgICAgIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic31cbiAgICAgIHByaW1hcnlBY3Rpb249e3ByaW1hcnlBY3Rpb259XG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXtzZWNvbmRhcnlBY3Rpb25zfVxuICAgID5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiU3R5bGVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VzdG9taXplIHRoZSBzdHlsZSBvZiB5b3VyIGNoZWNrb3V0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgY29udGVudDogJ0N1c3RvbWl6ZSBDaGVja291dCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwbG9hZCB5b3VyIHN0b3Jl4oCZcyBsb2dvLCBjaGFuZ2UgY29sb3JzIGFuZCBmb250cywgYW5kIG1vcmUuXG4gICAgICAgICAgPC9TZXR0aW5nVG9nZ2xlPlxuICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuXG4gICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiQWNjb3VudFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249e2FjY291bnRTZWN0aW9uRGVzY3JpcHRpb259XG4gICAgICAgID5cbiAgICAgICAgICB7YWNjb3VudE1hcmt1cH1cbiAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cblxuICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIkZvcm1cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQSBzYW1wbGUgZm9ybSB1c2luZyBQb2xhcmlzIGNvbXBvbmVudHMuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3R9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb21cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpcnN0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhc3R9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZvcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhc3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxuXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxDaG9pY2VMaXN0XG4gICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVxuICAgICAgICAgICAgICAgIGNob2ljZXM9e2Nob2ljZUxpc3RJdGVtc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17Y2hlY2tib3hlc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hlc0NoYW5nZX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVySGVscD5cbiAgICAgICAgICAgIEZvciBtb3JlIGRldGFpbHMgb24gUG9sYXJpcywgdmlzaXQgb3VyeycgJ31cbiAgICAgICAgICAgIDxMaW5rIHVybD1cImh0dHBzOi8vcG9sYXJpcy5zaG9waWZ5LmNvbVwiPnN0eWxlIGd1aWRlPC9MaW5rPi5cbiAgICAgICAgICA8L0Zvb3RlckhlbHA+XG4gICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbm5lY3RBY2NvdW50KHtvbkFjdGlvbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8QWNjb3VudENvbm5lY3Rpb25cbiAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdDb25uZWN0Jywgb25BY3Rpb259fVxuICAgICAgZGV0YWlscz1cIk5vIGFjY291bnQgY29ubmVjdGVkXCJcbiAgICAgIHRlcm1zT2ZTZXJ2aWNlPXtcbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgY2xpY2tpbmcgQ29ubmVjdCwgeW91IGFyZSBhY2NlcHRpbmcgU2FtcGxl4oCZc3snICd9XG4gICAgICAgICAgPExpbmsgdXJsPVwiaHR0cHM6Ly9wb2xhcmlzLnNob3BpZnkuY29tXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L0xpbms+LFxuICAgICAgICAgIGluY2x1ZGluZyBhIGNvbW1pc3Npb24gcmF0ZSBvZiAxNSUgb24gc2FsZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEaXNjb25uZWN0QWNjb3VudCh7b25BY3Rpb259KSB7XG4gIHJldHVybiAoXG4gICAgPEFjY291bnRDb25uZWN0aW9uXG4gICAgICBjb25uZWN0ZWRcbiAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdEaXNjb25uZWN0Jywgb25BY3Rpb259fVxuICAgICAgYWNjb3VudE5hbWU9XCJUb20gRm9yZFwiXG4gICAgICB0aXRsZT17PExpbmsgdXJsPVwiaHR0cDovL2dvb2dsZS5jb21cIj5Ub20gRm9yZDwvTGluaz59XG4gICAgICBkZXRhaWxzPVwiQWNjb3VudCBpZDogZDU4NzY0N2FlNFwiXG4gICAgLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abhishek/Documents/Anuj 3d References/gatsby/nexter/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCI/ZWNiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLWljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris-icons\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });