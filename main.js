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

.task-Name.striked {
  text-decoration: overline;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;sDACoD;AACtD;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,qBAAqB;AACvB;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA,SAAS;;AAET;;;EAGE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;EAGE,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB","sourcesContent":["body {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  height: 100svh;\n  box-sizing: border-box;\n}\n\n.side-bar {\n  padding-left: 24px;\n  padding-top: 64px;\n  border-right: solid 1px gainsboro;\n}\n\n.side-bar ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.side-bar li {\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.side-bar li:hover {\n  background-color: rgb(229, 229, 229);\n}\n\n.side-bar li.selected {\n  background-color: rgb(76, 70, 196);\n  color: white;\n}\n\n.side-bar a {\n  /* color: rgb(95, 95, 95); */\n  width: 100%;\n  text-decoration: none;\n}\n\n/* Style the content */\n\n.content {\n  padding: 24px;\n}\n\n.separator {\n  height: 1px;\n  background-color: gainsboro;\n}\n\n#newTask {\n  cursor: pointer;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n}\n\n#newTask:hover {\n  background-color: rgb(111, 105, 235);\n}\n\n/* style the cards */\n\n.taskList {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.taskCard {\n  border: solid 1px gainsboro;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n}\n\n.task-Name.striked {\n  text-decoration: overline;\n}\n\n.taskHeading,\n.taskPrio {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.prionormal {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(24, 160, 96);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priolow {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(190, 152, 16);\n  padding: 8px;\n  border-radius: 8px;\n}\n.priohigh {\n  font-size: 14px;\n  color: white;\n  background-color: rgb(160, 24, 24);\n  padding: 8px;\n  border-radius: 8px;\n}\n\n#deadline,\n#deadlineSelect {\n  border: solid 1px gainsboro;\n  padding: 8px;\n  border-radius: 8px;\n  color: gray;\n}\n\n/* form */\n\n#dialogBox,\n#editDialogBox,\n#newProjectDialogBox {\n  /* position: fixed; */\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.textBox,\n.selectBox,\n.textArea {\n  border: solid gainsboro 1px;\n  padding: 8px;\n  border-radius: 8px;\n  width: 250px;\n}\n\n.side-bar .textBox {\n  flex: 1;\n  margin-left: 16px;\n}\n\n.btnDiv {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n\n.btn,\n.newPrjBtn {\n  cursor: pointer;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(76, 70, 196);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 16px;\n  width: 100%;\n}\n.btn.cancel {\n  background-color: rgb(255, 255, 255);\n  color: rgb(76, 70, 196);\n  border: solid 2px rgb(76, 70, 196);\n}\n\n.side-bar .btn {\n  /* margin-right: 24px; */\n  border: none;\n  border-radius: 0;\n  text-align: left;\n  font-size: 1rem;\n  color: gray;\n  border-top: solid 1px gainsboro;\n}\n\n.side-bar .btn:hover {\n  background-color: rgb(76, 70, 196);\n  color: white;\n}\n\n.taskDetails {\n  position: fixed;\n  top: 25%;\n  left: 25%;\n  border: none;\n  background-color: white;\n  width: 400px;\n  border: solid 1px gainsboro;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.detailsDialogs {\n  position: fixed;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-icon:hover {\n  cursor: pointer;\n  color: rgb(76, 70, 196);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checked: () => (/* binding */ checked)
/* harmony export */ });
// function checked(event) {
//   //   const nextItem = event.target.nextSibling;
//   //   console.log("hi");
//   //   nextItem.classList.toggle("striked");
// }

function checked(event) {
  const nextItem = event.target.nextSibling;
  console.log(nextItem);
}



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
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check */ "./src/check.js");







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
              <input type="checkbox" name="" id="checkListElement"/>
              <div class="task-Name">${obj.name}</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFdBQVcsT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwwREFBMEQsTUFBTTtBQUNoRTtBQUNBOztBQUV5RDs7Ozs7OztVQ2pFekQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrRGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBoZWlnaHQ6IDEwMHN2aDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNpZGUtYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ2FpbnNib3JvO1xufVxuXG4uc2lkZS1iYXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuLnNpZGUtYmFyIGxpIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2lkZS1iYXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjksIDIyOSk7XG59XG5cbi5zaWRlLWJhciBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpZGUtYmFyIGEge1xuICAvKiBjb2xvcjogcmdiKDk1LCA5NSwgOTUpOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBTdHlsZSB0aGUgY29udGVudCAqL1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4jbmV3VGFzayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuI25ld1Rhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMDUsIDIzNSk7XG59XG5cbi8qIHN0eWxlIHRoZSBjYXJkcyAqL1xuXG4udGFza0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnRhc2tDYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnRhc2stTmFtZS5zdHJpa2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcbn1cblxuLnRhc2tIZWFkaW5nLFxuLnRhc2tQcmlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5wcmlvbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYwLCA5Nik7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnByaW9sb3cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTUyLCAxNik7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnByaW9oaWdoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDI0LCAyNCk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jZGVhZGxpbmUsXG4jZGVhZGxpbmVTZWxlY3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLyogZm9ybSAqL1xuXG4jZGlhbG9nQm94LFxuI2VkaXREaWFsb2dCb3gsXG4jbmV3UHJvamVjdERpYWxvZ0JveCB7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0Qm94LFxuLnNlbGVjdEJveCxcbi50ZXh0QXJlYSB7XG4gIGJvcmRlcjogc29saWQgZ2FpbnNib3JvIDFweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGUtYmFyIC50ZXh0Qm94IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5idG5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uYnRuLFxuLm5ld1ByakJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3NiwgNzAsIDE5Nik7XG59XG5cbi5zaWRlLWJhciAuYnRuIHtcbiAgLyogbWFyZ2luLXJpZ2h0OiAyNHB4OyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBnYWluc2Jvcm87XG59XG5cbi5zaWRlLWJhciAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFza0RldGFpbHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAyNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZGV0YWlsc0RpYWxvZ3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24taWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYig3NiwgNzAsIDE5Nik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtzREFDb0Q7QUFDdEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsU0FBUzs7QUFFVDs7O0VBR0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDBzdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZy10b3A6IDY0cHg7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxufVxcblxcbi5zaWRlLWJhciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcbi5zaWRlLWJhciBsaSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uc2lkZS1iYXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI5LCAyMjkpO1xcbn1cXG5cXG4uc2lkZS1iYXIgbGkuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGUtYmFyIGEge1xcbiAgLyogY29sb3I6IHJnYig5NSwgOTUsIDk1KTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgY29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxufVxcblxcbiNuZXdUYXNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNuZXdUYXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDEwNSwgMjM1KTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIGNhcmRzICovXFxuXFxuLnRhc2tMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stTmFtZS5zdHJpa2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XFxufVxcblxcbi50YXNrSGVhZGluZyxcXG4udGFza1ByaW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByaW9ub3JtYWwge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNjAsIDk2KTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnByaW9sb3cge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTUyLCAxNik7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wcmlvaGlnaCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAyNCwgMjQpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jZGVhZGxpbmUsXFxuI2RlYWRsaW5lU2VsZWN0IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBmb3JtICovXFxuXFxuI2RpYWxvZ0JveCxcXG4jZWRpdERpYWxvZ0JveCxcXG4jbmV3UHJvamVjdERpYWxvZ0JveCB7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGV4dEJveCxcXG4uc2VsZWN0Qm94LFxcbi50ZXh0QXJlYSB7XFxuICBib3JkZXI6IHNvbGlkIGdhaW5zYm9ybyAxcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaWRlLWJhciAudGV4dEJveCB7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcblxcbi5idG5EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uYnRuLFxcbi5uZXdQcmpCdG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRuLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBjb2xvcjogcmdiKDc2LCA3MCwgMTk2KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3NiwgNzAsIDE5Nik7XFxufVxcblxcbi5zaWRlLWJhciAuYnRuIHtcXG4gIC8qIG1hcmdpbi1yaWdodDogMjRweDsgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IGdyYXk7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uc2lkZS1iYXIgLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza0RldGFpbHMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAyNSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsc0RpYWxvZ3Mge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5pb24taWNvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlvbi1pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoNzYsIDcwLCAxOTYpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZnVuY3Rpb24gY2hlY2tlZChldmVudCkge1xuLy8gICAvLyAgIGNvbnN0IG5leHRJdGVtID0gZXZlbnQudGFyZ2V0Lm5leHRTaWJsaW5nO1xuLy8gICAvLyAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4vLyAgIC8vICAgbmV4dEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInN0cmlrZWRcIik7XG4vLyB9XG5cbmZ1bmN0aW9uIGNoZWNrZWQoZXZlbnQpIHtcbiAgY29uc3QgbmV4dEl0ZW0gPSBldmVudC50YXJnZXQubmV4dFNpYmxpbmc7XG4gIGNvbnNvbGUubG9nKG5leHRJdGVtKTtcbn1cbmV4cG9ydCB7IGNoZWNrZWQgfTtcbiIsImltcG9ydCB7IGluYm94LCBkcmF3TGlzdCB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICBpbmJveC5zcGxpY2UoaW5kZXgsIDEpO1xuICBkcmF3TGlzdChpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGFkZERlbGV0ZVRvQnV0dG9uKGluZGV4KSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZWxldGVCdG4ke2luZGV4fWApO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xufVxuXG5leHBvcnQgeyBhZGREZWxldGVUb0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgaW5ib3gsIGFycmF5T2ZQcm9qZWN0cywgZHJhd0xpc3QgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBhZGRFZGl0VG9CdXR0b24oaW5kZXgpIHtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0QnRuJHtpbmRleH1gKTtcbiAgZWRpdEJ0bi5teVBhcmFtID0gaW5kZXg7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0RGlhbG9nKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXREaWFsb2coZXZlbnQpIHtcbiAgY29uc3QgZWRpdERpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdERpYWxvZ0JveFwiKTtcbiAgZWRpdERpYWxvZ0JveC5zaG93TW9kYWwoKTtcblxuICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5teVBhcmFtO1xuXG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RFZGl0XCIpO1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgeCBpbiBhcnJheU9mUHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBhcnJheU9mUHJvamVjdHNbeF07XG4gICAgb3B0aW9uLnZhbHVlID0gYXJyYXlPZlByb2plY3RzW3hdO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuICBzZXRQcmV2aW91c1BhcmFtZXRlcnNJbkVkaXQoaW5kZXgpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsRWRpdEJ0blwiKTtcblxuICBjYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gIGNyZWF0ZUNvbmZpcm1CdG4oZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXREaWFsb2dCb3guY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJldmlvdXNQYXJhbWV0ZXJzSW5FZGl0KGluZGV4KSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZUVkaXRcIik7XG4gIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY0ZpZWxkRWRpdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5U2VsZWN0RWRpdFwiKTtcbiAgY29uc3QgZGVhZGxpbmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWRsaW5lU2VsZWN0RWRpdFwiKTtcbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdEVkaXRcIik7XG4gIHRhc2tOYW1lLnZhbHVlID0gaW5ib3hbaW5kZXhdLm5hbWU7XG4gIGRlc2NGaWVsZC52YWx1ZSA9IGluYm94W2luZGV4XS5kZXNjO1xuICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IGluYm94W2luZGV4XS5wcmlvcml0eTtcbiAgZGVhZGxpbmVTZWxlY3QudmFsdWUgPSBpbmJveFtpbmRleF0uZGVhZGxpbmU7XG4gIHByb2plY3RTZWxlY3QudmFsdWUgPSBpbmJveFtpbmRleF0ucHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRGb3JtXCIpO1xuXG4gIGVkaXREaWFsb2dCb3guY2xvc2UoKTtcbiAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQubXlQYXJhbTtcblxuICBsb2FkRWRpdG9yTWV0aG9kKGluZGV4KTtcbiAgZWRpdEZvcm0ucmVzZXQoKTtcblxuICBkcmF3TGlzdChpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRFZGl0b3JNZXRob2QoaW5kZXgpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lRWRpdFwiKTtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjRmllbGRFZGl0XCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlTZWxlY3RFZGl0XCIpO1xuICBjb25zdCBkZWFkbGluZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhZGxpbmVTZWxlY3RFZGl0XCIpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0RWRpdFwiKTtcblxuICBpbmJveFtpbmRleF0uZWRpdFRhc2soXG4gICAgdGFza05hbWUudmFsdWUsXG4gICAgZGVzY0ZpZWxkLnZhbHVlLFxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgIGRlYWRsaW5lU2VsZWN0LnZhbHVlLFxuICAgIHByb2plY3RTZWxlY3QudmFsdWVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uZmlybUJ0bihldmVudCkge1xuICBjb25zdCBjb25maXJtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybUVkaXRCdG5cIik7XG4gIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcblxuICBjb25maXJtRWRpdEJ0bi5teVBhcmFtID0gaW5kZXg7XG4gIGNvbmZpcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG59XG5cbmV4cG9ydCB7IGFkZEVkaXRUb0J1dHRvbiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFkZERlbGV0ZVRvQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlVGFza1wiO1xuaW1wb3J0IHsgYWRkRGV0YWlsc0Z1bmN0aW9uVG9idXR0b24gfSBmcm9tIFwiLi90YXNrRGV0YWlsc1wiO1xuaW1wb3J0IHsgYWRkRWRpdFRvQnV0dG9uIH0gZnJvbSBcIi4vZWRpdFRhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVNpZGVCYXJMaXN0IH0gZnJvbSBcIi4vc2lkZUJhclwiO1xuaW1wb3J0IHsgY2hlY2tlZCB9IGZyb20gXCIuL2NoZWNrXCI7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza1wiKTtcbmNvbnN0IGRpYWxvZ2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nQm94XCIpO1xuY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUZvcm1cIik7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OZXdUYXNrRGlhbG9nKTtcblxuLy8gY3JlYXRlIGNsYXNzIGZvciB0YXNrc1xuY2xhc3MgVGFza09iaiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIHByaW9yaXR5LCBkZWFkbGluZSwgcHJvamVjdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZWFkbGluZSA9IGRlYWRsaW5lO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBlZGl0VGFzayhuYW1lLCBkZXNjLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVhZGxpbmUgPSBkZWFkbGluZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5OZXdUYXNrRGlhbG9nKCkge1xuICBkaWFsb2dib3guc2hvd01vZGFsKCk7XG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG4gIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBmb3IgKGxldCB4IGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGFycmF5T2ZQcm9qZWN0c1t4XTtcbiAgICBvcHRpb24udmFsdWUgPSBhcnJheU9mUHJvamVjdHNbeF07XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKGFycmF5T2ZQcm9qZWN0c1t4XSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbEJ0blwiKTtcblxuICBjYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGRpYWxvZ2JveC5jbG9zZSgpO1xufVxuXG4vLyBjcmVhdGUgdGFzayBlbGVtZW50IGZyb20gdGhlIG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlVGFza09iamVjdCgpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xuICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NGaWVsZFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5U2VsZWN0XCIpO1xuICBjb25zdCBkZWFkbGluZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhZGxpbmVTZWxlY3RcIik7XG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG5cbiAgY29uc3QgbmV3VGFza09iamVjdCA9IG5ldyBUYXNrT2JqKFxuICAgIHRhc2tOYW1lLnZhbHVlLFxuICAgIGRlc2NGaWVsZC52YWx1ZSxcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSxcbiAgICBkZWFkbGluZVNlbGVjdC52YWx1ZSxcbiAgICBwcm9qZWN0U2VsZWN0LnZhbHVlXG4gICk7XG5cbiAgcmV0dXJuIG5ld1Rhc2tPYmplY3Q7XG59XG5cbmNvbnN0IGluYm94ID0gW107XG5jb25zdCBhcnJheU9mUHJvamVjdHMgPSBbXCJpbmJveFwiLCBcInByb2plY3QgMVwiXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IGFycmF5T2ZQcm9qZWN0c1swXTtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2plY3QoZXZlbnQpIHtcbiAgY3VycmVudFByb2plY3QgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xuICBjcmVhdGVTaWRlQmFyTGlzdCgpO1xuICBkcmF3TGlzdChpbmJveCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdEFycmF5KHRhc2tzQXJyYXksIG9iaikge1xuICB0YXNrc0FycmF5LnVuc2hpZnQob2JqKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgYWRkVG9Qcm9qZWN0QXJyYXkoaW5ib3gsIGNyZWF0ZVRhc2tPYmplY3QoKSk7XG5cbiAgbXlGb3JtLnJlc2V0KCk7XG4gIGRpYWxvZ2JveC5jbG9zZSgpO1xuICBkcmF3TGlzdChpbmJveCk7XG4gIGNvbnNvbGUubG9nKGluYm94KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQob2JqLCBpbmRleCwgdGFza3NBcnJheSkge1xuICBpZiAob2JqLnByb2plY3QgIT09IGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tDYXJkXCIpO1xuICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tIZWFkaW5nXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJjaGVja0xpc3RFbGVtZW50XCIvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1OYW1lXCI+JHtvYmoubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tQcmlvXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIiR7b2JqLm5hbWV9XCIgZGF0YS1kZXNjPVwiJHtvYmouZGVzY31cIlxuICAgICAgICAgICAgZGF0YS1wcmlvcml0eT1cIiR7b2JqLnByaW9yaXR5fVwiIGRhdGEtZGVhZGxpbmU9XCIke29iai5kZWFkbGluZX1cIiBkYXRhLXByb2plY3Q9XCIke29iai5wcm9qZWN0fVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gaWQ9XCJkZXRhaWxzQnRuJHtpbmRleH1cIiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbyR7b2JqLnByaW9yaXR5fVwiPiR7b2JqLnByaW9yaXR5fTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJkZWFkbGluZVwiIHZhbHVlPVwiJHtvYmouZGVhZGxpbmV9XCIgZGlzYWJsZWQvPlxuICAgICAgICAgICAgICA8aW9uLWljb24gaWQ9XCJlZGl0QnRuJHtpbmRleH1cIiBuYW1lPVwiY3JlYXRlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWljb24gaWQ9XCJkZWxldGVCdG4ke2luZGV4fVwiIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZHJhd0xpc3QodGFza3NBcnJheSkge1xuICBjb25zdCB0YXNrTGlzdEVsZW1lbnRzID0gdGFza3NBcnJheS5tYXAoY3JlYXRlVGFza0VsZW1lbnQpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIik7XG5cbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza0xpc3RFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgLy8gYWRkIGxvZ2ljIHRvIGxpc3QgYnV0dG9uc1xuICAgIGFkZERldGFpbHNGdW5jdGlvblRvYnV0dG9uKGluZGV4KTtcbiAgICBhZGREZWxldGVUb0J1dHRvbihpbmRleCk7XG4gICAgYWRkRWRpdFRvQnV0dG9uKGluZGV4KTtcbiAgfSk7XG59XG5cbmNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1CdG5cIik7XG5jb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVGFzaygpO1xufSk7XG5cbi8vIGVkaXQgZnVuY3Rpb25cblxuLy8gb3BlbiBhcnJheSBhdCBpbmRleCB0byBnZXQgdGhlIG9iamVjdFxuLy8gb3BlbiB0aGUgZGlhbG9nIGJveCBwYXNzaW5nIHRoZSBvbGQgdmFsdWVzXG4vLyBhcHBseSBtZXRob2QgcGFzc2luZyBuZXcgdmFsdWVzXG4vLyBkcmF3TGlzdCBhZ2FpblxuY3JlYXRlU2lkZUJhckxpc3QoKTtcblxuZXhwb3J0IHtcbiAgaW5ib3gsXG4gIGFycmF5T2ZQcm9qZWN0cyxcbiAgY3VycmVudFByb2plY3QsXG4gIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxuICBkcmF3TGlzdCxcbn07XG4iLCJpbXBvcnQgeyBhcnJheU9mUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCBjaGFuZ2VDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVCYXJMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0VUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RVTGlzdFwiKTtcbiAgcHJvamVjdFVMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgeCBpbiBhcnJheU9mUHJvamVjdHMpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYXJyYXlPZlByb2plY3RzW3hdO1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDdXJyZW50UHJvamVjdCk7XG4gICAgaWYgKGFycmF5T2ZQcm9qZWN0c1t4XSA9PSBjdXJyZW50UHJvamVjdCkge1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIHByb2plY3RVTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIisgYWRkIHByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXdQcm9qZWN0RGlhbG9nKTtcblxuICBwcm9qZWN0VUxpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHNob3dOZXdQcm9qZWN0RGlhbG9nKCkge1xuICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gY3JlYXRlTmV3UHJvamVjdERpYWxvZygpO1xuICBjb25zdCBwcm9qZWN0VUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RVTGlzdFwiKTtcblxuICBwcm9qZWN0VUxpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpYWxvZyk7XG4gIG5ld1Byb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb0FycmF5KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2plY3RUZXh0Qm94XCIpO1xuICBjb25maXJtQnRuLm15UGFyYW0gPSB0ZXh0Qm94LnZhbHVlO1xuICBmb3IgKGxldCB4IGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgIGlmICh0ZXh0Qm94LnZhbHVlID09IGFycmF5T2ZQcm9qZWN0c1t4XSkge1xuICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI25ld1Byb2plY3REaWFsb2dCb3hcIlxuICAgICAgKTtcblxuICAgICAgbmV3UHJvamVjdERpYWxvZ0JveC5jbG9zZSgpO1xuICAgICAgY3JlYXRlU2lkZUJhckxpc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgYXJyYXlPZlByb2plY3RzLnB1c2godGV4dEJveC52YWx1ZSk7XG4gIGNyZWF0ZVNpZGVCYXJMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3REaWFsb2coKSB7XG4gIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBuZXdQcm9qZWN0RGlhbG9nLmlkID0gXCJuZXdQcm9qZWN0RGlhbG9nQm94XCI7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIG5ld1Byb2plY3REaWFsb2cuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld0xhYmVsLmZvciA9IFwibmV3UHJvamVjdFwiO1xuICBuZXdMYWJlbC5pbm5lclRleHQgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGV4dEJveC5yZXF1aXJlZCA9IHRydWU7XG4gIHRleHRCb3gudHlwZSA9IFwidGV4dFwiO1xuICB0ZXh0Qm94Lm5hbWUgPSBcIm5ld1Byb2plY3RcIjtcbiAgdGV4dEJveC5pZCA9IFwibmV3UHJvamVjdFRleHRCb3hcIjtcbiAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKFwidGV4dEJveFwiKTtcblxuICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld0Rpdik7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcIm5ld1ByakJ0blwiKTtcbiAgY29uZmlybUJ0bi5pbm5lclRleHQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3RUb0FycmF5KTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2c7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNpZGVCYXJMaXN0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVUYXNrRGV0YWlscyhuYW1lLCBkZXNjLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QpIHtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidGFza0RldGFpbHNcIik7XG4gIHRhc2tEZXRhaWxzLmlkID0gYGRldGFpbHNEaWFsb2dCb3hgO1xuICB0YXNrRGV0YWlscy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tEZXRhaWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPHA+VGFzayBOYW1lPC9wPlxuICAgICAgICAgIDxwIGlkPVwiZGV0YWlsc1Rhc2tOYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPHA+VGFzayBEZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgICA8cCBpZD1cImRldGFpbHNUYXNrZGVzY1wiPiR7ZGVzY308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxwPlByaW9yaXR5PC9wPlxuICAgICAgICAgIDxwIGlkPVwiZGV0YWlsc1Rhc2tkZXNjXCI+JHtwcmlvcml0eX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxwPkRlYWRsaW5lPC9wPlxuICAgICAgICAgIDxwIGlkPVwiZGV0YWlsc1Rhc2tkZXNjXCI+JHtkZWFkbGluZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxwPlByb2plY3Q8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJkZXRhaWxzVGFza2Rlc2NcIj4ke3Byb2plY3R9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiY2FuY2VsXCIgaWQ9XCJkZXRhaWxzQ2xvc2VcIiBjbGFzcz1cImJ0biBjYW5jZWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgcmV0dXJuIHRhc2tEZXRhaWxzO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza0RldGFpbHMoZXZlbnQpIHtcbiAgLy8gY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5uYW1lO1xuICBjb25zdCBkZXNjID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5kZXNjO1xuICBjb25zdCBwcmlvcml0eSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJpb3JpdHk7XG4gIGNvbnN0IGRlYWRsaW5lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5kZWFkbGluZTtcbiAgY29uc3QgcHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdDtcbiAgY29uc3QgZGV0YWlsc0RpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNEaWFsb2dzXCIpO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY3JlYXRlVGFza0RldGFpbHMoXG4gICAgbmFtZSxcbiAgICBkZXNjLFxuICAgIHByaW9yaXR5LFxuICAgIGRlYWRsaW5lLFxuICAgIHByb2plY3RcbiAgKTtcblxuICBkZXRhaWxzRGlhbG9ncy5pbm5lckhUTUwgPSBcIlwiO1xuICBkZXRhaWxzRGlhbG9ncy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gIGNvbnN0IGRldGFpbHNEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGV0YWlsc0RpYWxvZ0JveGApO1xuICBkZXRhaWxzRGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gIGNvbnN0IGNsb3NlRGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc0Nsb3NlXCIpO1xuICBjbG9zZURldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGV0YWlsc0RpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRGV0YWlsc0Z1bmN0aW9uVG9idXR0b24oaW5kZXgpIHtcbiAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXRhaWxzQnRuJHtpbmRleH1gKTtcbiAgZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Rhc2tEZXRhaWxzKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFza0RldGFpbHMsIGFkZERldGFpbHNGdW5jdGlvblRvYnV0dG9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==