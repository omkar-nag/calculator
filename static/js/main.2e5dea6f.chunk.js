(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),react_dom__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__),_index_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),_index_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__),_App__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8),_calc_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(18),Calculator=function(_React$Component){Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component);var _super=Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator);function Calculator(){var _;return Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(_=_super.call(this)).inputhandle=function(e){_.setState({answer:"",input:[].concat(Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_.state.input),[e.target.value]).join("")})},_.state={input:[],answer:""},_.handleClick=_.handleClick.bind(Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_}return Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"handleClick",value:function handleClick(event){if("<-"===event.target.value){var replica=this.state.input;replica.length>0?(replica=replica.substring(0,replica.length-1),this.setState({answer:"",input:replica})):this.setState({answer:""})}else if("C"===event.target.value)this.setState({answer:"",input:""});else if("="===event.target.value){var eqn=this.state.input.toString();eqn=eqn.replace("++","+"),eqn=eqn.replace("--","+");try{this.setState({answer:eval(eqn),input:[]})}catch(_unused){this.setState({answer:"Computational error",input:[]})}}else this.setState({answer:"",input:[].concat(Object(_home_knomkarnag_Desktop_calc_Basic_calculator_React_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.input),[event.target.value]).join("")})}},{key:"render",value:function(){var _="";return _=""===this.state.answer?this.state.input:this.state.answer,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{textAlign:"center"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_App__WEBPACK_IMPORTED_MODULE_10__.a,{handlechange:this.handleClick,answer:_,inputHandle:this.inputhandle})})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Calculator,{}),document.getElementById("root"))},17:function(_,e,a){},18:function(_,e,a){"use strict";a.p},8:function(_,e,a){"use strict";var t=a(0);a(1);e.a=function(_){var e="Computational error"===_.answer?{fontSize:"15px"}:null;return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{id:"calc",onMouseDown:function(e){return _.handlechange(e)},children:[Object(t.jsx)("input",{id:"ans",style:e,value:_.answer,disabled:!0}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{value:"<-",children:"\u2190"}),Object(t.jsx)("button",{value:"C",children:"C"}),Object(t.jsx)("button",{value:"%",children:"%"}),Object(t.jsx)("button",{value:"/",children:"/"}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{value:"1",children:"1"}),Object(t.jsx)("button",{value:"2",children:"2"}),Object(t.jsx)("button",{value:"3",children:"3"}),Object(t.jsx)("button",{value:"*",children:"*"}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{value:"4",children:"4"}),Object(t.jsx)("button",{value:"5",children:"5"}),Object(t.jsx)("button",{value:"6",children:"6"}),Object(t.jsx)("button",{value:"-",children:"-"}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{value:"7",children:"7"}),Object(t.jsx)("button",{value:"8",children:"8"}),Object(t.jsx)("button",{value:"9",children:"9"}),Object(t.jsx)("button",{value:"+",children:"+"}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{value:"0",children:"0"}),Object(t.jsx)("button",{value:".",children:"."}),Object(t.jsx)("button",{className:"btn",value:"=",children:"="})]})})}}},[[11,1,2]]]);
//# sourceMappingURL=main.2e5dea6f.chunk.js.map