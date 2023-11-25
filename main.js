/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

main {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100svh;
  box-sizing: border-box;
}

.side-bar {
  padding-left: 24px;
  padding-top: 64px;
  border-right: solid 1px gainsboro;
}

.side-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.side-bar li {
  box-sizing: border-box;
  padding: 8px;
}

.side-bar li:hover {
  background-color: rgb(229, 229, 229);
}

.side-bar a {
  color: rgb(95, 95, 95);
  width: 100%;
  text-decoration: none;
}

/* Style the content */

.content {
  padding: 24px;
}

.separator {
  height: 1px;
  background-color: gainsboro;
}

#newTask {
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: rgb(76, 70, 196);
  border: none;
  border-radius: 8px;
  color: white;
  padding: 16px;
}

#newTask:hover {
  background-color: rgb(111, 105, 235);
}

/* style the cards */

.taskList {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.taskCard {
  border: solid 1px gainsboro;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
}

.taskHeading,
.taskPrio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prionormal {
  font-size: 14px;
  color: white;
  background-color: rgb(24, 160, 96);
  padding: 8px;
  border-radius: 8px;
}
.priolow {
  font-size: 14px;
  color: white;
  background-color: rgb(190, 152, 16);
  padding: 8px;
  border-radius: 8px;
}
.priohigh {
  font-size: 14px;
  color: white;
  background-color: rgb(160, 24, 24);
  padding: 8px;
  border-radius: 8px;
}

#deadline,
#deadlineSelect {
  border: solid 1px gainsboro;
  padding: 8px;
  border-radius: 8px;
  color: gray;
}

/* form */

#dialogBox {
  /* position: fixed; */
  border: none;
  background-color: white;
  width: 400px;
  border: solid 1px gainsboro;
  border-radius: 1rem;
  padding: 1rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.textBox,
.selectBox,
.textArea {
  border: solid gainsboro 1px;
  padding: 8px;
  border-radius: 8px;
  width: 250px;
}

.btnDiv {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: rgb(76, 70, 196);
  border: none;
  border-radius: 8px;
  color: white;
  padding: 16px;
  width: 100%;
}
.btn.cancel {
  background-color: rgb(255, 255, 255);
  color: rgb(76, 70, 196);
  border: solid 2px rgb(76, 70, 196);
}

.taskDetails {
  position: fixed;
  top: 25%;
  left: 25%;
  border: none;
  background-color: white;
  width: 400px;
  border: solid 1px gainsboro;
  border-radius: 1rem;
  padding: 1rem;
}

.detailsDialogs {
  position: fixed;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;sDACoD;AACtD;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,qBAAqB;AACvB;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB","sourcesContent":["body {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  height: 100svh;\n  box-sizing: border-box;\n}\n\n.side-bar {\n  padding-left: 24px;\n  padding-top: 64px;\n  border-right: solid 1px gainsboro;\n}\n\n.side-bar ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.side-bar li {\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.side-bar li:hover {\n  background-color: rgb(229, 229, 229);\n}\n\n.side-bar a {\n  color: rgb(95, 95, 95);\n  width: 100%;\n  text-decoration: none;\n}\n\n/* Style the content */\n\n.content {\n  padding: 24px;\n}\n\n.separator {\n  height: 1px;\n  background-color: gainsboro;\n}\n\n#newTask {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n}\n\n#newTask:hover {\n  background-color: rgb(111, 105, 235);\n}\n\n/* style the cards */\n\n.taskList {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskCard {\n  border: solid 1px gainsboro;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n}\n\n.taskHeading,\n.taskPrio {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.prionormal {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(24, 160, 96);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priolow {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(190, 152, 16);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priohigh {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(160, 24, 24);\n  padding: 8px;\n  border-radius: 8px;\n}\n\n#deadline,\n#deadlineSelect {\n  border: solid 1px gainsboro;\n  padding: 8px;\n  border-radius: 8px;\n  color: gray;\n}\n\n/* form */\n\n#dialogBox {\n  /* position: fixed; */\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.textBox,\n.selectBox,\n.textArea {\n  border: solid gainsboro 1px;\n  padding: 8px;\n  border-radius: 8px;\n  width: 250px;\n}\n\n.btnDiv {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n\n.btn {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n  width: 100%;\n}\n.btn.cancel {\n  background-color: rgb(255, 255, 255);\n  color: rgb(76, 70, 196);\n  border: solid 2px rgb(76, 70, 196);\n}\n\n.taskDetails {\n  position: fixed;\n  top: 25%;\n  left: 25%;\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.detailsDialogs {\n  position: fixed;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDeleteToButton: () => (/* binding */ addDeleteToButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function deleteTask(event) {
  const index = event.target.parentElement.dataset.index;
  ___WEBPACK_IMPORTED_MODULE_0__.inbox.splice(index, 1);
  (0,___WEBPACK_IMPORTED_MODULE_0__.drawList)(___WEBPACK_IMPORTED_MODULE_0__.inbox);
}

function addDeleteToButton(index) {
  const deleteBtn = document.querySelector(`#deleteBtn${index}`);
  deleteBtn.addEventListener("click", deleteTask);
}
// event.parentelement.parentelement
// until we reach somewhere where we store the index as an attribute




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawList: () => (/* binding */ drawList),
/* harmony export */   inbox: () => (/* binding */ inbox)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTask */ "./src/deleteTask.js");
/* harmony import */ var _taskDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDetails */ "./src/taskDetails.js");




const btn = document.querySelector("#newTask");
const dialogbox = document.querySelector("#dialogBox");
const myForm = document.querySelector("#myForm");
btn.addEventListener("click", () => dialogbox.showModal());

// create class for tasks
class TaskObj {
  constructor(name, desc, priority, deadline) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
  }

  editTask(name, desc, priority, deadline) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
  }
}

// method to delete?? or this should be done through the array

// array for each project

// create task element from the object
function createTaskObject() {
  const taskName = document.querySelector("#taskName");
  const descField = document.querySelector("#descField");
  const prioritySelect = document.querySelector("#prioritySelect");
  const deadlineSelect = document.querySelector("#deadlineSelect");

  const newTaskObject = new TaskObj(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value
  );

  return newTaskObject;
}
const inbox = [];

function addToProjectArray(tasksArray, obj) {
  tasksArray.unshift(obj);
}

function createTask() {
  addToProjectArray(inbox, createTaskObject());

  myForm.reset();
  dialogbox.close();
  drawList(inbox);
  console.log(inbox);
}

function createTaskElement(obj, index, tasksArray) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskCard");
  taskElement.innerHTML = `<div class="taskHeading">
              <input type="checkbox" name="" id="" />
              <div>${obj.name}</div>
            </div>
            <div class="taskPrio" data-index="${index}" data-name="${obj.name}" data-desc="${obj.desc}">
              <ion-icon id="detailsBtn${index}" name="information-circle-outline"></ion-icon>
              <div class="prio${obj.priority}">${obj.priority}</div>
              <input type="date" name="" id="deadline" value="${obj.deadline}" disabled/>
              <ion-icon id="editBtn" name="create-outline"></ion-icon>
              <ion-icon id="deleteBtn${index}" name="trash-outline"></ion-icon>
            </div>`;
  return taskElement;
}
function drawList(tasksArray) {
  const taskListElements = tasksArray.map(createTaskElement);
  const taskList = document.querySelector(".taskList");

  taskList.innerHTML = "";
  taskListElements.map(function (element, index) {
    taskList.appendChild(element);

    // add logic to list buttons
    (0,_taskDetails__WEBPACK_IMPORTED_MODULE_2__.addDetailsFunctionTobutton)(index);
    (0,_deleteTask__WEBPACK_IMPORTED_MODULE_1__.addDeleteToButton)(index, tasksArray);
  });
}

const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  createTask();
});




/***/ }),

/***/ "./src/taskDetails.js":
/*!****************************!*\
  !*** ./src/taskDetails.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDetailsFunctionTobutton: () => (/* binding */ addDetailsFunctionTobutton),
/* harmony export */   createTaskDetails: () => (/* binding */ createTaskDetails)
/* harmony export */ });
function createTaskDetails(name, desc) {
  const taskDetails = document.createElement("dialog");
  taskDetails.classList.add("taskDetails");
  taskDetails.id = `detailsDialogBox`;
  taskDetails.innerHTML = `<form class="taskDetails">
        <div class="flex">
          <p>Task Name</p>
          <p id="detailsTaskName">${name}</p>
        </div>
        <div class="flex">
          <p>Task Description</p>
          <p id="detailsTaskdesc">${desc}</p>
        </div>
        <button type="cancel" id="detailsClose" class="btn cancel">Close</button>
        </form>
        `;
  return taskDetails;
}

function showTaskDetails(event) {
  // const index = event.target.parentElement.dataset.index;
  const name = event.target.parentElement.dataset.name;
  const desc = event.target.parentElement.dataset.desc;
  const detailsDialogs = document.querySelector(".detailsDialogs");

  const taskDetails = createTaskDetails(name, desc);

  detailsDialogs.innerHTML = "";
  detailsDialogs.appendChild(taskDetails);
  const detailsDialog = document.querySelector(`#detailsDialogBox`);
  detailsDialog.showModal();

  const closeDetailsButton = document.querySelector("#detailsClose");
  closeDetailsButton.addEventListener("click", function (event) {
    event.preventDefault();
    detailsDialog.close();
  });
}

function addDetailsFunctionTobutton(index) {
  const detailsBtn = document.querySelector(`#detailsBtn${index}`);
  detailsBtn.addEventListener("click", showTaskDetails);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGdDQUFnQyx3SUFBd0ksR0FBRyxVQUFVLGtCQUFrQixxQ0FB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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrRGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBoZWlnaHQ6IDEwMHN2aDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNpZGUtYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ2FpbnNib3JvO1xufVxuXG4uc2lkZS1iYXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuLnNpZGUtYmFyIGxpIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2lkZS1iYXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjksIDIyOSk7XG59XG5cbi5zaWRlLWJhciBhIHtcbiAgY29sb3I6IHJnYig5NSwgOTUsIDk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogU3R5bGUgdGhlIGNvbnRlbnQgKi9cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cblxuI25ld1Rhc2sge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4jbmV3VGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDEwNSwgMjM1KTtcbn1cblxuLyogc3R5bGUgdGhlIGNhcmRzICovXG5cbi50YXNrTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4udGFza0NhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4udGFza0hlYWRpbmcsXG4udGFza1ByaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnByaW9ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNjAsIDk2KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJpb2xvdyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxNTIsIDE2KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJpb2hpZ2gge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjQsIDI0KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNkZWFkbGluZSxcbiNkZWFkbGluZVNlbGVjdCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4vKiBmb3JtICovXG5cbiNkaWFsb2dCb3gge1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGV4dEJveCxcbi5zZWxlY3RCb3gsXG4udGV4dEFyZWEge1xuICBib3JkZXI6IHNvbGlkIGdhaW5zYm9ybyAxcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5idG5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3NiwgNzAsIDE5Nik7XG59XG5cbi50YXNrRGV0YWlscyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDI1JTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZXRhaWxzRGlhbG9ncyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO3NEQUNvRDtBQUN0RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDBzdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZy10b3A6IDY0cHg7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxufVxcblxcbi5zaWRlLWJhciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcbi5zaWRlLWJhciBsaSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uc2lkZS1iYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI5LCAyMjkpO1xcbn1cXG5cXG4uc2lkZS1iYXIgYSB7XFxuICBjb2xvcjogcmdiKDk1LCA5NSwgOTUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBjb250ZW50ICovXFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXG59XFxuXFxuI25ld1Rhc2sge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI25ld1Rhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTA1LCAyMzUpO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgY2FyZHMgKi9cXG5cXG4udGFza0xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udGFza0hlYWRpbmcsXFxuLnRhc2tQcmlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcmlvbm9ybWFsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYwLCA5Nik7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcmlvbG93IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE1MiwgMTYpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucHJpb2hpZ2gge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjQsIDI0KTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2RlYWRsaW5lLFxcbiNkZWFkbGluZVNlbGVjdCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLyogZm9ybSAqL1xcblxcbiNkaWFsb2dCb3gge1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGV4dEJveCxcXG4uc2VsZWN0Qm94LFxcbi50ZXh0QXJlYSB7XFxuICBib3JkZXI6IHNvbGlkIGdhaW5zYm9ybyAxcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5idG5EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bi5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzYsIDcwLCAxOTYpO1xcbn1cXG5cXG4udGFza0RldGFpbHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAyNSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsc0RpYWxvZ3Mge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW5ib3gsIGRyYXdMaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhldmVudCkge1xuICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gIGluYm94LnNwbGljZShpbmRleCwgMSk7XG4gIGRyYXdMaXN0KGluYm94KTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlVG9CdXR0b24oaW5kZXgpIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RlbGV0ZUJ0biR7aW5kZXh9YCk7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XG59XG4vLyBldmVudC5wYXJlbnRlbGVtZW50LnBhcmVudGVsZW1lbnRcbi8vIHVudGlsIHdlIHJlYWNoIHNvbWV3aGVyZSB3aGVyZSB3ZSBzdG9yZSB0aGUgaW5kZXggYXMgYW4gYXR0cmlidXRlXG5cbmV4cG9ydCB7IGFkZERlbGV0ZVRvQnV0dG9uIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYWRkRGVsZXRlVG9CdXR0b24gfSBmcm9tIFwiLi9kZWxldGVUYXNrXCI7XG5pbXBvcnQgeyBhZGREZXRhaWxzRnVuY3Rpb25Ub2J1dHRvbiB9IGZyb20gXCIuL3Rhc2tEZXRhaWxzXCI7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza1wiKTtcbmNvbnN0IGRpYWxvZ2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nQm94XCIpO1xuY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUZvcm1cIik7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZ2JveC5zaG93TW9kYWwoKSk7XG5cbi8vIGNyZWF0ZSBjbGFzcyBmb3IgdGFza3NcbmNsYXNzIFRhc2tPYmoge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBwcmlvcml0eSwgZGVhZGxpbmUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVhZGxpbmUgPSBkZWFkbGluZTtcbiAgfVxuXG4gIGVkaXRUYXNrKG5hbWUsIGRlc2MsIHByaW9yaXR5LCBkZWFkbGluZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZWFkbGluZSA9IGRlYWRsaW5lO1xuICB9XG59XG5cbi8vIG1ldGhvZCB0byBkZWxldGU/PyBvciB0aGlzIHNob3VsZCBiZSBkb25lIHRocm91Z2ggdGhlIGFycmF5XG5cbi8vIGFycmF5IGZvciBlYWNoIHByb2plY3RcblxuLy8gY3JlYXRlIHRhc2sgZWxlbWVudCBmcm9tIHRoZSBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjRmllbGRcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVNlbGVjdFwiKTtcbiAgY29uc3QgZGVhZGxpbmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWRsaW5lU2VsZWN0XCIpO1xuXG4gIGNvbnN0IG5ld1Rhc2tPYmplY3QgPSBuZXcgVGFza09iaihcbiAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICBkZXNjRmllbGQudmFsdWUsXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUsXG4gICAgZGVhZGxpbmVTZWxlY3QudmFsdWVcbiAgKTtcblxuICByZXR1cm4gbmV3VGFza09iamVjdDtcbn1cbmNvbnN0IGluYm94ID0gW107XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdEFycmF5KHRhc2tzQXJyYXksIG9iaikge1xuICB0YXNrc0FycmF5LnVuc2hpZnQob2JqKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgYWRkVG9Qcm9qZWN0QXJyYXkoaW5ib3gsIGNyZWF0ZVRhc2tPYmplY3QoKSk7XG5cbiAgbXlGb3JtLnJlc2V0KCk7XG4gIGRpYWxvZ2JveC5jbG9zZSgpO1xuICBkcmF3TGlzdChpbmJveCk7XG4gIGNvbnNvbGUubG9nKGluYm94KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQob2JqLCBpbmRleCwgdGFza3NBcnJheSkge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2FyZFwiKTtcbiAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrSGVhZGluZ1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj4ke29iai5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1ByaW9cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIiBkYXRhLW5hbWU9XCIke29iai5uYW1lfVwiIGRhdGEtZGVzYz1cIiR7b2JqLmRlc2N9XCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImRldGFpbHNCdG4ke2luZGV4fVwiIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvJHtvYmoucHJpb3JpdHl9XCI+JHtvYmoucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJcIiBpZD1cImRlYWRsaW5lXCIgdmFsdWU9XCIke29iai5kZWFkbGluZX1cIiBkaXNhYmxlZC8+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImVkaXRCdG5cIiBuYW1lPVwiY3JlYXRlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWljb24gaWQ9XCJkZWxldGVCdG4ke2luZGV4fVwiIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGRyYXdMaXN0KHRhc2tzQXJyYXkpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50cyA9IHRhc2tzQXJyYXkubWFwKGNyZWF0ZVRhc2tFbGVtZW50KTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tMaXN0RWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgLy8gYWRkIGxvZ2ljIHRvIGxpc3QgYnV0dG9uc1xuICAgIGFkZERldGFpbHNGdW5jdGlvblRvYnV0dG9uKGluZGV4KTtcbiAgICBhZGREZWxldGVUb0J1dHRvbihpbmRleCwgdGFza3NBcnJheSk7XG4gIH0pO1xufVxuXG5jb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtQnRuXCIpO1xuY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRhc2soKTtcbn0pO1xuXG5leHBvcnQgeyBpbmJveCwgZHJhd0xpc3QgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXRhaWxzKG5hbWUsIGRlc2MpIHtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidGFza0RldGFpbHNcIik7XG4gIHRhc2tEZXRhaWxzLmlkID0gYGRldGFpbHNEaWFsb2dCb3hgO1xuICB0YXNrRGV0YWlscy5pbm5lckhUTUwgPSBgPGZvcm0gY2xhc3M9XCJ0YXNrRGV0YWlsc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxwPlRhc2sgTmFtZTwvcD5cbiAgICAgICAgICA8cCBpZD1cImRldGFpbHNUYXNrTmFtZVwiPiR7bmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxwPlRhc2sgRGVzY3JpcHRpb248L3A+XG4gICAgICAgICAgPHAgaWQ9XCJkZXRhaWxzVGFza2Rlc2NcIj4ke2Rlc2N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiY2FuY2VsXCIgaWQ9XCJkZXRhaWxzQ2xvc2VcIiBjbGFzcz1cImJ0biBjYW5jZWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG4gIHJldHVybiB0YXNrRGV0YWlscztcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tEZXRhaWxzKGV2ZW50KSB7XG4gIC8vIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQubmFtZTtcbiAgY29uc3QgZGVzYyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuZGVzYztcbiAgY29uc3QgZGV0YWlsc0RpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNEaWFsb2dzXCIpO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY3JlYXRlVGFza0RldGFpbHMobmFtZSwgZGVzYyk7XG5cbiAgZGV0YWlsc0RpYWxvZ3MuaW5uZXJIVE1MID0gXCJcIjtcbiAgZGV0YWlsc0RpYWxvZ3MuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICBjb25zdCBkZXRhaWxzRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RldGFpbHNEaWFsb2dCb3hgKTtcbiAgZGV0YWlsc0RpYWxvZy5zaG93TW9kYWwoKTtcblxuICBjb25zdCBjbG9zZURldGFpbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNDbG9zZVwiKTtcbiAgY2xvc2VEZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRldGFpbHNEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERldGFpbHNGdW5jdGlvblRvYnV0dG9uKGluZGV4KSB7XG4gIGNvbnN0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGV0YWlsc0J0biR7aW5kZXh9YCk7XG4gIGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dUYXNrRGV0YWlscyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2tEZXRhaWxzLCBhZGREZXRhaWxzRnVuY3Rpb25Ub2J1dHRvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=