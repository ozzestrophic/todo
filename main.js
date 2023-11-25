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

.side-bar li.selected {
  background-color: rgb(76, 70, 196);
  color: white;
}

.side-bar a {
  /* color: rgb(95, 95, 95); */
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
  cursor: pointer;
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

#dialogBox,
#editDialogBox,
#newProjectDialogBox {
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
  align-items: center;
}

.textBox,
.selectBox,
.textArea {
  border: solid gainsboro 1px;
  padding: 8px;
  border-radius: 8px;
  width: 250px;
}

.side-bar .textBox {
  flex: 1;
  margin-left: 16px;
}

.btnDiv {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn,
.newPrjBtn {
  cursor: pointer;
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

.side-bar .btn {
  /* margin-right: 24px; */
  border: none;
  border-radius: 0;
  text-align: left;
  font-size: 1rem;
  color: gray;
  border-top: solid 1px gainsboro;
}

.side-bar .btn:hover {
  background-color: rgb(76, 70, 196);
  color: white;
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

ion-icon {
  font-size: 20px;
}

ion-icon:hover {
  cursor: pointer;
  color: rgb(76, 70, 196);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;sDACoD;AACtD;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,qBAAqB;AACvB;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA,SAAS;;AAET;;;EAGE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;EAGE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB","sourcesContent":["body {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  height: 100svh;\n  box-sizing: border-box;\n}\n\n.side-bar {\n  padding-left: 24px;\n  padding-top: 64px;\n  border-right: solid 1px gainsboro;\n}\n\n.side-bar ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.side-bar li {\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.side-bar li:hover {\n  background-color: rgb(229, 229, 229);\n}\n\n.side-bar li.selected {\n  background-color: rgb(76, 70, 196);\n  color: white;\n}\n\n.side-bar a {\n  /* color: rgb(95, 95, 95); */\n  width: 100%;\n  text-decoration: none;\n}\n\n/* Style the content */\n\n.content {\n  padding: 24px;\n}\n\n.separator {\n  height: 1px;\n  background-color: gainsboro;\n}\n\n#newTask {\n  cursor: pointer;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n}\n\n#newTask:hover {\n  background-color: rgb(111, 105, 235);\n}\n\n/* style the cards */\n\n.taskList {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskCard {\n  border: solid 1px gainsboro;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n}\n\n.taskHeading,\n.taskPrio {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.prionormal {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(24, 160, 96);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priolow {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(190, 152, 16);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priohigh {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(160, 24, 24);\n  padding: 8px;\n  border-radius: 8px;\n}\n\n#deadline,\n#deadlineSelect {\n  border: solid 1px gainsboro;\n  padding: 8px;\n  border-radius: 8px;\n  color: gray;\n}\n\n/* form */\n\n#dialogBox,\n#editDialogBox,\n#newProjectDialogBox {\n  /* position: fixed; */\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.textBox,\n.selectBox,\n.textArea {\n  border: solid gainsboro 1px;\n  padding: 8px;\n  border-radius: 8px;\n  width: 250px;\n}\n\n.side-bar .textBox {\n  flex: 1;\n  margin-left: 16px;\n}\n\n.btnDiv {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n\n.btn,\n.newPrjBtn {\n  cursor: pointer;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n  width: 100%;\n}\n.btn.cancel {\n  background-color: rgb(255, 255, 255);\n  color: rgb(76, 70, 196);\n  border: solid 2px rgb(76, 70, 196);\n}\n\n.side-bar .btn {\n  /* margin-right: 24px; */\n  border: none;\n  border-radius: 0;\n  text-align: left;\n  font-size: 1rem;\n  color: gray;\n  border-top: solid 1px gainsboro;\n}\n\n.side-bar .btn:hover {\n  background-color: rgb(76, 70, 196);\n  color: white;\n}\n\n.taskDetails {\n  position: fixed;\n  top: 25%;\n  left: 25%;\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.detailsDialogs {\n  position: fixed;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-icon:hover {\n  cursor: pointer;\n  color: rgb(76, 70, 196);\n}\n"],"sourceRoot":""}]);
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




/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEditToButton: () => (/* binding */ addEditToButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function addEditToButton(index) {
  const editBtn = document.querySelector(`#editBtn${index}`);
  editBtn.myParam = index;
  editBtn.addEventListener("click", openEditDialog);
}

function openEditDialog(event) {
  const editDialogBox = document.querySelector("#editDialogBox");
  editDialogBox.showModal();

  const index = event.target.myParam;

  const projectSelect = document.querySelector("#projectSelectEdit");
  projectSelect.innerHTML = "";

  for (let x in ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects) {
    const option = document.createElement("option");
    option.innerText = ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects[x];
    option.value = ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects[x];
    projectSelect.appendChild(option);
  }
  setPreviousParametersInEdit(index);

  const cancelBtn = document.querySelector("#cancelEditBtn");

  cancelBtn.removeEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);

  createConfirmBtn(event);
}

function closeModal(event) {
  event.preventDefault();
  editDialogBox.close();
}

function setPreviousParametersInEdit(index) {
  const taskName = document.querySelector("#taskNameEdit");
  const descField = document.querySelector("#descFieldEdit");
  const prioritySelect = document.querySelector("#prioritySelectEdit");
  const deadlineSelect = document.querySelector("#deadlineSelectEdit");
  const projectSelect = document.querySelector("#projectSelectEdit");
  taskName.value = ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].name;
  descField.value = ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].desc;
  prioritySelect.value = ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].priority;
  deadlineSelect.value = ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].deadline;
  projectSelect.value = ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].project;
}

function editTask(event) {
  event.preventDefault();
  const editForm = document.querySelector("#editForm");

  editDialogBox.close();
  const index = event.target.myParam;

  loadEditorMethod(index);
  editForm.reset();

  (0,___WEBPACK_IMPORTED_MODULE_0__.drawList)(___WEBPACK_IMPORTED_MODULE_0__.inbox);
}

function loadEditorMethod(index) {
  const taskName = document.querySelector("#taskNameEdit");
  const descField = document.querySelector("#descFieldEdit");
  const prioritySelect = document.querySelector("#prioritySelectEdit");
  const deadlineSelect = document.querySelector("#deadlineSelectEdit");
  const projectSelect = document.querySelector("#projectSelectEdit");

  ___WEBPACK_IMPORTED_MODULE_0__.inbox[index].editTask(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value,
    projectSelect.value
  );
}

function createConfirmBtn(event) {
  const confirmEditBtn = document.querySelector("#confirmEditBtn");
  const index = event.target.parentElement.dataset.index;

  confirmEditBtn.myParam = index;
  confirmEditBtn.addEventListener("click", editTask);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayOfProjects: () => (/* binding */ arrayOfProjects),
/* harmony export */   changeCurrentProject: () => (/* binding */ changeCurrentProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   drawList: () => (/* binding */ drawList),
/* harmony export */   inbox: () => (/* binding */ inbox)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTask */ "./src/deleteTask.js");
/* harmony import */ var _taskDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDetails */ "./src/taskDetails.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");
/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideBar */ "./src/sideBar.js");






const btn = document.querySelector("#newTask");
const dialogbox = document.querySelector("#dialogBox");
const myForm = document.querySelector("#myForm");
btn.addEventListener("click", openNewTaskDialog);

// create class for tasks
class TaskObj {
  constructor(name, desc, priority, deadline, project) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
    this.project = project;
  }

  editTask(name, desc, priority, deadline, project) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.deadline = deadline;
    this.project = project;
  }
}

function openNewTaskDialog() {
  dialogbox.showModal();
  const projectSelect = document.querySelector("#projectSelect");
  projectSelect.innerHTML = "";

  for (let x in arrayOfProjects) {
    const option = document.createElement("option");
    option.innerText = arrayOfProjects[x];
    option.value = arrayOfProjects[x];
    projectSelect.appendChild(option);
    console.log(arrayOfProjects[x]);
  }

  const cancelBtn = document.querySelector("#cancelBtn");

  cancelBtn.removeEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
}

function closeModal(event) {
  event.preventDefault();
  dialogbox.close();
}

// create task element from the object
function createTaskObject() {
  const taskName = document.querySelector("#taskName");
  const descField = document.querySelector("#descField");
  const prioritySelect = document.querySelector("#prioritySelect");
  const deadlineSelect = document.querySelector("#deadlineSelect");
  const projectSelect = document.querySelector("#projectSelect");

  const newTaskObject = new TaskObj(
    taskName.value,
    descField.value,
    prioritySelect.value,
    deadlineSelect.value,
    projectSelect.value
  );

  return newTaskObject;
}

const inbox = [];
const arrayOfProjects = ["inbox", "project 1"];
let currentProject = arrayOfProjects[0];

function changeCurrentProject(event) {
  currentProject = event.target.innerHTML;
  (0,_sideBar__WEBPACK_IMPORTED_MODULE_4__.createSideBarList)();
  drawList(inbox);
}

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
  if (obj.project !== currentProject) {
    return;
  }
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskCard");
  taskElement.innerHTML = `<div class="taskHeading">
              <input type="checkbox" name="" id="" />
              <div>${obj.name}</div>
            </div>
            <div class="taskPrio" data-index="${index}"
            data-name="${obj.name}" data-desc="${obj.desc}"
            data-priority="${obj.priority}" data-deadline="${obj.deadline}" data-project="${obj.project}">
              <ion-icon id="detailsBtn${index}" name="information-circle-outline"></ion-icon>
              <div class="prio${obj.priority}">${obj.priority}</div>
              <input type="date" name="" id="deadline" value="${obj.deadline}" disabled/>
              <ion-icon id="editBtn${index}" name="create-outline"></ion-icon>
              <ion-icon id="deleteBtn${index}" name="trash-outline"></ion-icon>
            </div>`;
  return taskElement;
}

function drawList(tasksArray) {
  const taskListElements = tasksArray.map(createTaskElement);
  const taskList = document.querySelector(".taskList");

  taskList.innerHTML = "";
  taskListElements.map(function (element, index) {
    if (!element) {
      return;
    }
    taskList.appendChild(element);

    // add logic to list buttons
    (0,_taskDetails__WEBPACK_IMPORTED_MODULE_2__.addDetailsFunctionTobutton)(index);
    (0,_deleteTask__WEBPACK_IMPORTED_MODULE_1__.addDeleteToButton)(index);
    (0,_editTask__WEBPACK_IMPORTED_MODULE_3__.addEditToButton)(index);
  });
}

const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  createTask();
});

// edit function

// open array at index to get the object
// open the dialog box passing the old values
// apply method passing new values
// drawList again
(0,_sideBar__WEBPACK_IMPORTED_MODULE_4__.createSideBarList)();




/***/ }),

/***/ "./src/sideBar.js":
/*!************************!*\
  !*** ./src/sideBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSideBarList: () => (/* binding */ createSideBarList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function createSideBarList() {
  const projectUList = document.querySelector("#projectUList");
  projectUList.innerHTML = "";

  for (let x in ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects) {
    const listItem = document.createElement("li");
    listItem.classList.add("projects");
    listItem.innerHTML = ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects[x];
    listItem.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.changeCurrentProject);
    if (___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects[x] == ___WEBPACK_IMPORTED_MODULE_0__.currentProject) {
      listItem.classList.add("selected");
    }

    projectUList.appendChild(listItem);
  }

  const addProjectButton = document.createElement("button");
  addProjectButton.innerText = "+ add project";
  addProjectButton.classList.add("btn");
  addProjectButton.classList.add("cancel");
  addProjectButton.addEventListener("click", showNewProjectDialog);

  projectUList.appendChild(addProjectButton);
}

function showNewProjectDialog() {
  const newProjectDialog = createNewProjectDialog();
  const projectUList = document.querySelector("#projectUList");

  projectUList.appendChild(newProjectDialog);
  newProjectDialog.showModal();
}

function addNewProjectToArray(event) {
  event.preventDefault();
  const textBox = document.querySelector("#newProjectTextBox");
  confirmBtn.myParam = textBox.value;
  for (let x in ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects) {
    if (textBox.value == ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects[x]) {
      const newProjectDialogBox = document.querySelector(
        "#newProjectDialogBox"
      );

      newProjectDialogBox.close();
      createSideBarList();
      return;
    }
  }
  ___WEBPACK_IMPORTED_MODULE_0__.arrayOfProjects.push(textBox.value);
  createSideBarList();
}

function createNewProjectDialog() {
  const newProjectDialog = document.createElement("dialog");
  newProjectDialog.id = "newProjectDialogBox";
  const newProjectForm = document.createElement("form");
  newProjectDialog.appendChild(newProjectForm);

  const newDiv = document.createElement("div");
  newDiv.classList.add("flex");
  const newLabel = document.createElement("label");
  newLabel.for = "newProject";
  newLabel.innerText = "New Project Name";
  const textBox = document.createElement("input");
  textBox.required = true;
  textBox.type = "text";
  textBox.name = "newProject";
  textBox.id = "newProjectTextBox";
  textBox.classList.add("textBox");

  newDiv.appendChild(newLabel);
  newDiv.appendChild(textBox);
  newProjectForm.appendChild(newDiv);

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("newPrjBtn");
  confirmBtn.innerText = "Create Project";
  confirmBtn.addEventListener("click", addNewProjectToArray);
  newProjectForm.appendChild(confirmBtn);

  return newProjectDialog;
}




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
function createTaskDetails(name, desc, priority, deadline, project) {
  const taskDetails = document.createElement("dialog");
  taskDetails.classList.add("taskDetails");
  taskDetails.id = `detailsDialogBox`;
  taskDetails.innerHTML = `<div class="taskDetails">
        <div class="flex">
          <p>Task Name</p>
          <p id="detailsTaskName">${name}</p>
        </div>
        <div class="flex">
          <p>Task Description</p>
          <p id="detailsTaskdesc">${desc}</p>
        </div>
        <div class="flex">
          <p>Priority</p>
          <p id="detailsTaskdesc">${priority}</p>
        </div>
        <div class="flex">
          <p>Deadline</p>
          <p id="detailsTaskdesc">${deadline}</p>
        </div>
        <div class="flex">
          <p>Project</p>
          <p id="detailsTaskdesc">${project}</p>
        </div>
        <button type="cancel" id="detailsClose" class="btn cancel">Close</button>
        </div>
        `;
  return taskDetails;
}

function showTaskDetails(event) {
  // const index = event.target.parentElement.dataset.index;
  const name = event.target.parentElement.dataset.name;
  const desc = event.target.parentElement.dataset.desc;
  const priority = event.target.parentElement.dataset.priority;
  const deadline = event.target.parentElement.dataset.deadline;
  const project = event.target.parentElement.dataset.project;
  const detailsDialogs = document.querySelector(".detailsDialogs");

  const taskDetails = createTaskDetails(
    name,
    desc,
    priority,
    deadline,
    project
  );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2lkZUJhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tEZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGhlaWdodDogMTAwc3ZoO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2lkZS1iYXIge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBnYWluc2Jvcm87XG59XG5cbi5zaWRlLWJhciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG4uc2lkZS1iYXIgbGkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zaWRlLWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyOSwgMjI5KTtcbn1cblxuLnNpZGUtYmFyIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZS1iYXIgYSB7XG4gIC8qIGNvbG9yOiByZ2IoOTUsIDk1LCA5NSk7ICovXG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFN0eWxlIHRoZSBjb250ZW50ICovXG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbiNuZXdUYXNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4jbmV3VGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDEwNSwgMjM1KTtcbn1cblxuLyogc3R5bGUgdGhlIGNhcmRzICovXG5cbi50YXNrTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4udGFza0NhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4udGFza0hlYWRpbmcsXG4udGFza1ByaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnByaW9ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNjAsIDk2KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJpb2xvdyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxNTIsIDE2KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJpb2hpZ2gge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjQsIDI0KTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNkZWFkbGluZSxcbiNkZWFkbGluZVNlbGVjdCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4vKiBmb3JtICovXG5cbiNkaWFsb2dCb3gsXG4jZWRpdERpYWxvZ0JveCxcbiNuZXdQcm9qZWN0RGlhbG9nQm94IHtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHRCb3gsXG4uc2VsZWN0Qm94LFxuLnRleHRBcmVhIHtcbiAgYm9yZGVyOiBzb2xpZCBnYWluc2Jvcm8gMXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uc2lkZS1iYXIgLnRleHRCb3gge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmJ0bkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5idG4sXG4ubmV3UHJqQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDc2LCA3MCwgMTk2KTtcbn1cblxuLnNpZGUtYmFyIC5idG4ge1xuICAvKiBtYXJnaW4tcmlnaHQ6IDI0cHg7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGdhaW5zYm9ybztcbn1cblxuLnNpZGUtYmFyIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YXNrRGV0YWlscyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDI1JTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZXRhaWxzRGlhbG9ncyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO3NEQUNvRDtBQUN0RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSxTQUFTOztBQUVUOzs7RUFHRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMHN2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogNjRweDtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdhaW5zYm9ybztcXG59XFxuXFxuLnNpZGUtYmFyIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuLnNpZGUtYmFyIGxpIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5zaWRlLWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjksIDIyOSk7XFxufVxcblxcbi5zaWRlLWJhciBsaS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZS1iYXIgYSB7XFxuICAvKiBjb2xvcjogcmdiKDk1LCA5NSwgOTUpOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBjb250ZW50ICovXFxuXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXG59XFxuXFxuI25ld1Rhc2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI25ld1Rhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTA1LCAyMzUpO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgY2FyZHMgKi9cXG5cXG4udGFza0xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udGFza0hlYWRpbmcsXFxuLnRhc2tQcmlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcmlvbm9ybWFsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYwLCA5Nik7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcmlvbG93IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE1MiwgMTYpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucHJpb2hpZ2gge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjQsIDI0KTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2RlYWRsaW5lLFxcbiNkZWFkbGluZVNlbGVjdCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLyogZm9ybSAqL1xcblxcbiNkaWFsb2dCb3gsXFxuI2VkaXREaWFsb2dCb3gsXFxuI25ld1Byb2plY3REaWFsb2dCb3gge1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRleHRCb3gsXFxuLnNlbGVjdEJveCxcXG4udGV4dEFyZWEge1xcbiAgYm9yZGVyOiBzb2xpZCBnYWluc2Jvcm8gMXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uc2lkZS1iYXIgLnRleHRCb3gge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4uYnRuRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmJ0bixcXG4ubmV3UHJqQnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bi5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzYsIDcwLCAxOTYpO1xcbn1cXG5cXG4uc2lkZS1iYXIgLmJ0biB7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDI0cHg7ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGdhaW5zYm9ybztcXG59XFxuXFxuLnNpZGUtYmFyIC5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tEZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMjUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmRldGFpbHNEaWFsb2dzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuaW9uLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pb24taWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGluYm94LCBkcmF3TGlzdCB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICBpbmJveC5zcGxpY2UoaW5kZXgsIDEpO1xuICBkcmF3TGlzdChpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGFkZERlbGV0ZVRvQnV0dG9uKGluZGV4KSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZWxldGVCdG4ke2luZGV4fWApO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xufVxuXG5leHBvcnQgeyBhZGREZWxldGVUb0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgaW5ib3gsIGFycmF5T2ZQcm9qZWN0cywgZHJhd0xpc3QgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBhZGRFZGl0VG9CdXR0b24oaW5kZXgpIHtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0QnRuJHtpbmRleH1gKTtcbiAgZWRpdEJ0bi5teVBhcmFtID0gaW5kZXg7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0RGlhbG9nKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXREaWFsb2coZXZlbnQpIHtcbiAgY29uc3QgZWRpdERpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdERpYWxvZ0JveFwiKTtcbiAgZWRpdERpYWxvZ0JveC5zaG93TW9kYWwoKTtcblxuICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5teVBhcmFtO1xuXG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RFZGl0XCIpO1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgeCBpbiBhcnJheU9mUHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBhcnJheU9mUHJvamVjdHNbeF07XG4gICAgb3B0aW9uLnZhbHVlID0gYXJyYXlPZlByb2plY3RzW3hdO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuICBzZXRQcmV2aW91c1BhcmFtZXRlcnNJbkVkaXQoaW5kZXgpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsRWRpdEJ0blwiKTtcblxuICBjYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gIGNyZWF0ZUNvbmZpcm1CdG4oZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXREaWFsb2dCb3guY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJldmlvdXNQYXJhbWV0ZXJzSW5FZGl0KGluZGV4KSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZUVkaXRcIik7XG4gIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY0ZpZWxkRWRpdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5U2VsZWN0RWRpdFwiKTtcbiAgY29uc3QgZGVhZGxpbmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWRsaW5lU2VsZWN0RWRpdFwiKTtcbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdEVkaXRcIik7XG4gIHRhc2tOYW1lLnZhbHVlID0gaW5ib3hbaW5kZXhdLm5hbWU7XG4gIGRlc2NGaWVsZC52YWx1ZSA9IGluYm94W2luZGV4XS5kZXNjO1xuICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IGluYm94W2luZGV4XS5wcmlvcml0eTtcbiAgZGVhZGxpbmVTZWxlY3QudmFsdWUgPSBpbmJveFtpbmRleF0uZGVhZGxpbmU7XG4gIHByb2plY3RTZWxlY3QudmFsdWUgPSBpbmJveFtpbmRleF0ucHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRGb3JtXCIpO1xuXG4gIGVkaXREaWFsb2dCb3guY2xvc2UoKTtcbiAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQubXlQYXJhbTtcblxuICBsb2FkRWRpdG9yTWV0aG9kKGluZGV4KTtcbiAgZWRpdEZvcm0ucmVzZXQoKTtcblxuICBkcmF3TGlzdChpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRFZGl0b3JNZXRob2QoaW5kZXgpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lRWRpdFwiKTtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjRmllbGRFZGl0XCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlTZWxlY3RFZGl0XCIpO1xuICBjb25zdCBkZWFkbGluZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhZGxpbmVTZWxlY3RFZGl0XCIpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0RWRpdFwiKTtcblxuICBpbmJveFtpbmRleF0uZWRpdFRhc2soXG4gICAgdGFza05hbWUudmFsdWUsXG4gICAgZGVzY0ZpZWxkLnZhbHVlLFxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgIGRlYWRsaW5lU2VsZWN0LnZhbHVlLFxuICAgIHByb2plY3RTZWxlY3QudmFsdWVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uZmlybUJ0bihldmVudCkge1xuICBjb25zdCBjb25maXJtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybUVkaXRCdG5cIik7XG4gIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcblxuICBjb25maXJtRWRpdEJ0bi5teVBhcmFtID0gaW5kZXg7XG4gIGNvbmZpcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG59XG5cbmV4cG9ydCB7IGFkZEVkaXRUb0J1dHRvbiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFkZERlbGV0ZVRvQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlVGFza1wiO1xuaW1wb3J0IHsgYWRkRGV0YWlsc0Z1bmN0aW9uVG9idXR0b24gfSBmcm9tIFwiLi90YXNrRGV0YWlsc1wiO1xuaW1wb3J0IHsgYWRkRWRpdFRvQnV0dG9uIH0gZnJvbSBcIi4vZWRpdFRhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVNpZGVCYXJMaXN0IH0gZnJvbSBcIi4vc2lkZUJhclwiO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tcIik7XG5jb25zdCBkaWFsb2dib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZ0JveFwiKTtcbmNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlGb3JtXCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3VGFza0RpYWxvZyk7XG5cbi8vIGNyZWF0ZSBjbGFzcyBmb3IgdGFza3NcbmNsYXNzIFRhc2tPYmoge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVhZGxpbmUgPSBkZWFkbGluZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgZWRpdFRhc2sobmFtZSwgZGVzYywgcHJpb3JpdHksIGRlYWRsaW5lLCBwcm9qZWN0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuTmV3VGFza0RpYWxvZygpIHtcbiAgZGlhbG9nYm94LnNob3dNb2RhbCgpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0XCIpO1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgeCBpbiBhcnJheU9mUHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBhcnJheU9mUHJvamVjdHNbeF07XG4gICAgb3B0aW9uLnZhbHVlID0gYXJyYXlPZlByb2plY3RzW3hdO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHNbeF0pO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxCdG5cIik7XG5cbiAgY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkaWFsb2dib3guY2xvc2UoKTtcbn1cblxuLy8gY3JlYXRlIHRhc2sgZWxlbWVudCBmcm9tIHRoZSBvYmplY3RcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjRmllbGRcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVNlbGVjdFwiKTtcbiAgY29uc3QgZGVhZGxpbmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWRsaW5lU2VsZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0XCIpO1xuXG4gIGNvbnN0IG5ld1Rhc2tPYmplY3QgPSBuZXcgVGFza09iaihcbiAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICBkZXNjRmllbGQudmFsdWUsXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUsXG4gICAgZGVhZGxpbmVTZWxlY3QudmFsdWUsXG4gICAgcHJvamVjdFNlbGVjdC52YWx1ZVxuICApO1xuXG4gIHJldHVybiBuZXdUYXNrT2JqZWN0O1xufVxuXG5jb25zdCBpbmJveCA9IFtdO1xuY29uc3QgYXJyYXlPZlByb2plY3RzID0gW1wiaW5ib3hcIiwgXCJwcm9qZWN0IDFcIl07XG5sZXQgY3VycmVudFByb2plY3QgPSBhcnJheU9mUHJvamVjdHNbMF07XG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRQcm9qZWN0KGV2ZW50KSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcbiAgY3JlYXRlU2lkZUJhckxpc3QoKTtcbiAgZHJhd0xpc3QoaW5ib3gpO1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RBcnJheSh0YXNrc0FycmF5LCBvYmopIHtcbiAgdGFza3NBcnJheS51bnNoaWZ0KG9iaik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gIGFkZFRvUHJvamVjdEFycmF5KGluYm94LCBjcmVhdGVUYXNrT2JqZWN0KCkpO1xuXG4gIG15Rm9ybS5yZXNldCgpO1xuICBkaWFsb2dib3guY2xvc2UoKTtcbiAgZHJhd0xpc3QoaW5ib3gpO1xuICBjb25zb2xlLmxvZyhpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KG9iaiwgaW5kZXgsIHRhc2tzQXJyYXkpIHtcbiAgaWYgKG9iai5wcm9qZWN0ICE9PSBjdXJyZW50UHJvamVjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2FyZFwiKTtcbiAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrSGVhZGluZ1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj4ke29iai5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1ByaW9cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiJHtvYmoubmFtZX1cIiBkYXRhLWRlc2M9XCIke29iai5kZXNjfVwiXG4gICAgICAgICAgICBkYXRhLXByaW9yaXR5PVwiJHtvYmoucHJpb3JpdHl9XCIgZGF0YS1kZWFkbGluZT1cIiR7b2JqLmRlYWRsaW5lfVwiIGRhdGEtcHJvamVjdD1cIiR7b2JqLnByb2plY3R9XCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImRldGFpbHNCdG4ke2luZGV4fVwiIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvJHtvYmoucHJpb3JpdHl9XCI+JHtvYmoucHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJcIiBpZD1cImRlYWRsaW5lXCIgdmFsdWU9XCIke29iai5kZWFkbGluZX1cIiBkaXNhYmxlZC8+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImVkaXRCdG4ke2luZGV4fVwiIG5hbWU9XCJjcmVhdGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImRlbGV0ZUJ0biR7aW5kZXh9XCIgbmFtZT1cInRyYXNoLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIHRhc2tFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkcmF3TGlzdCh0YXNrc0FycmF5KSB7XG4gIGNvbnN0IHRhc2tMaXN0RWxlbWVudHMgPSB0YXNrc0FycmF5Lm1hcChjcmVhdGVUYXNrRWxlbWVudCk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcblxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrTGlzdEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAvLyBhZGQgbG9naWMgdG8gbGlzdCBidXR0b25zXG4gICAgYWRkRGV0YWlsc0Z1bmN0aW9uVG9idXR0b24oaW5kZXgpO1xuICAgIGFkZERlbGV0ZVRvQnV0dG9uKGluZGV4KTtcbiAgICBhZGRFZGl0VG9CdXR0b24oaW5kZXgpO1xuICB9KTtcbn1cblxuY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybUJ0blwiKTtcbmNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVUYXNrKCk7XG59KTtcblxuLy8gZWRpdCBmdW5jdGlvblxuXG4vLyBvcGVuIGFycmF5IGF0IGluZGV4IHRvIGdldCB0aGUgb2JqZWN0XG4vLyBvcGVuIHRoZSBkaWFsb2cgYm94IHBhc3NpbmcgdGhlIG9sZCB2YWx1ZXNcbi8vIGFwcGx5IG1ldGhvZCBwYXNzaW5nIG5ldyB2YWx1ZXNcbi8vIGRyYXdMaXN0IGFnYWluXG5jcmVhdGVTaWRlQmFyTGlzdCgpO1xuXG5leHBvcnQge1xuICBpbmJveCxcbiAgYXJyYXlPZlByb2plY3RzLFxuICBjdXJyZW50UHJvamVjdCxcbiAgY2hhbmdlQ3VycmVudFByb2plY3QsXG4gIGRyYXdMaXN0LFxufTtcbiIsImltcG9ydCB7IGFycmF5T2ZQcm9qZWN0cywgY3VycmVudFByb2plY3QsIGNoYW5nZUN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJhckxpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RVTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFVMaXN0XCIpO1xuICBwcm9qZWN0VUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBmb3IgKGxldCB4IGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBhcnJheU9mUHJvamVjdHNbeF07XG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUN1cnJlbnRQcm9qZWN0KTtcbiAgICBpZiAoYXJyYXlPZlByb2plY3RzW3hdID09IGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvamVjdFVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiKyBhZGQgcHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd05ld1Byb2plY3REaWFsb2cpO1xuXG4gIHByb2plY3RVTGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2hvd05ld1Byb2plY3REaWFsb2coKSB7XG4gIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBjcmVhdGVOZXdQcm9qZWN0RGlhbG9nKCk7XG4gIGNvbnN0IHByb2plY3RVTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFVMaXN0XCIpO1xuXG4gIHByb2plY3RVTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGlhbG9nKTtcbiAgbmV3UHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvQXJyYXkoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvamVjdFRleHRCb3hcIik7XG4gIGNvbmZpcm1CdG4ubXlQYXJhbSA9IHRleHRCb3gudmFsdWU7XG4gIGZvciAobGV0IHggaW4gYXJyYXlPZlByb2plY3RzKSB7XG4gICAgaWYgKHRleHRCb3gudmFsdWUgPT0gYXJyYXlPZlByb2plY3RzW3hdKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjbmV3UHJvamVjdERpYWxvZ0JveFwiXG4gICAgICApO1xuXG4gICAgICBuZXdQcm9qZWN0RGlhbG9nQm94LmNsb3NlKCk7XG4gICAgICBjcmVhdGVTaWRlQmFyTGlzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBhcnJheU9mUHJvamVjdHMucHVzaCh0ZXh0Qm94LnZhbHVlKTtcbiAgY3JlYXRlU2lkZUJhckxpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdERpYWxvZygpIHtcbiAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIG5ld1Byb2plY3REaWFsb2cuaWQgPSBcIm5ld1Byb2plY3REaWFsb2dCb3hcIjtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbmV3UHJvamVjdERpYWxvZy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3TGFiZWwuZm9yID0gXCJuZXdQcm9qZWN0XCI7XG4gIG5ld0xhYmVsLmlubmVyVGV4dCA9IFwiTmV3IFByb2plY3QgTmFtZVwiO1xuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0ZXh0Qm94LnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGV4dEJveC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRleHRCb3gubmFtZSA9IFwibmV3UHJvamVjdFwiO1xuICB0ZXh0Qm94LmlkID0gXCJuZXdQcm9qZWN0VGV4dEJveFwiO1xuICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0Qm94XCIpO1xuXG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3UHJqQnRuXCIpO1xuICBjb25maXJtQnRuLmlubmVyVGV4dCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdFRvQXJyYXkpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICByZXR1cm4gbmV3UHJvamVjdERpYWxvZztcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2lkZUJhckxpc3QgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXRhaWxzKG5hbWUsIGRlc2MsIHByaW9yaXR5LCBkZWFkbGluZSwgcHJvamVjdCkge1xuICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGV0YWlsc1wiKTtcbiAgdGFza0RldGFpbHMuaWQgPSBgZGV0YWlsc0RpYWxvZ0JveGA7XG4gIHRhc2tEZXRhaWxzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFza0RldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8cD5UYXNrIE5hbWU8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJkZXRhaWxzVGFza05hbWVcIj4ke25hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8cD5UYXNrIERlc2NyaXB0aW9uPC9wPlxuICAgICAgICAgIDxwIGlkPVwiZGV0YWlsc1Rhc2tkZXNjXCI+JHtkZXNjfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPHA+UHJpb3JpdHk8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJkZXRhaWxzVGFza2Rlc2NcIj4ke3ByaW9yaXR5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPHA+RGVhZGxpbmU8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJkZXRhaWxzVGFza2Rlc2NcIj4ke2RlYWRsaW5lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPHA+UHJvamVjdDwvcD5cbiAgICAgICAgICA8cCBpZD1cImRldGFpbHNUYXNrZGVzY1wiPiR7cHJvamVjdH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJjYW5jZWxcIiBpZD1cImRldGFpbHNDbG9zZVwiIGNsYXNzPVwiYnRuIGNhbmNlbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICByZXR1cm4gdGFza0RldGFpbHM7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRGV0YWlscyhldmVudCkge1xuICAvLyBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0Lm5hbWU7XG4gIGNvbnN0IGRlc2MgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmRlc2M7XG4gIGNvbnN0IHByaW9yaXR5ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcmlvcml0eTtcbiAgY29uc3QgZGVhZGxpbmUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmRlYWRsaW5lO1xuICBjb25zdCBwcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0O1xuICBjb25zdCBkZXRhaWxzRGlhbG9ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc0RpYWxvZ3NcIik7XG5cbiAgY29uc3QgdGFza0RldGFpbHMgPSBjcmVhdGVUYXNrRGV0YWlscyhcbiAgICBuYW1lLFxuICAgIGRlc2MsXG4gICAgcHJpb3JpdHksXG4gICAgZGVhZGxpbmUsXG4gICAgcHJvamVjdFxuICApO1xuXG4gIGRldGFpbHNEaWFsb2dzLmlubmVySFRNTCA9IFwiXCI7XG4gIGRldGFpbHNEaWFsb2dzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgY29uc3QgZGV0YWlsc0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXRhaWxzRGlhbG9nQm94YCk7XG4gIGRldGFpbHNEaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgY29uc3QgY2xvc2VEZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxzQ2xvc2VcIik7XG4gIGNsb3NlRGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkZXRhaWxzRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREZXRhaWxzRnVuY3Rpb25Ub2J1dHRvbihpbmRleCkge1xuICBjb25zdCBkZXRhaWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RldGFpbHNCdG4ke2luZGV4fWApO1xuICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VGFza0RldGFpbHMpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUYXNrRGV0YWlscywgYWRkRGV0YWlsc0Z1bmN0aW9uVG9idXR0b24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9