webpackHotUpdate_N_E("pages/MapeamentoFuncionarios/principal",{

/***/ "./components/PesquisaDados.js":
/*!*************************************!*\
  !*** ./components/PesquisaDados.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExibirConsulta; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");







var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\PesquisaDados.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var nomeFuncionario = "";

var PesquisarFuncionario = function PesquisarFuncionario() {
  // nomeFuncionario = document.querySelector("[name='txtNomeFuncionario']").value;
  nomeFuncionario = document.querySelector("[id='txtNomeFuncionario']").value;

  if (nomeFuncionario == "") {
    alert("Nome deve ser preenchido");
  } else {
    alert(nomeFuncionario);
  }
};

_c = PesquisarFuncionario;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: '25ch'
    }
  };
});

var ExibirConsulta = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ExibirConsulta, _React$Component);

  var _super = _createSuper(ExibirConsulta);

  function ExibirConsulta() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExibirConsulta);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleNomeFuncionario", function (e) {
      _this.setState({
        txtNomeFuncionario: e.target.value
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExibirConsulta, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, __jsx("a", {
        style: {
          fontSize: "30px",
          fontWeight: "bold"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "CONSULTA DE DADOS"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "txtNomeFuncionario",
        label: "Nome do Funcion\xE1rio",
        style: {
          margin: 8,
          width: "300px",
          marginRight: "20px"
        },
        margin: "normal",
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined",
        size: "small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "contained",
        color: "black",
        size: "large",
        startIcon: __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 32
          }
        }),
        onClick: PesquisarFuncionario,
        style: {
          marginTop: "6px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, "Pesquisar"));
    }
  }]);

  return ExibirConsulta;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



var _c;

$RefreshReg$(_c, "PesquisarFuncionario");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZXNxdWlzYURhZG9zLmpzIl0sIm5hbWVzIjpbIm5vbWVGdW5jaW9uYXJpbyIsIlBlc3F1aXNhckZ1bmNpb25hcmlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJhbGVydCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXJnaW4iLCJzcGFjaW5nIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJFeGliaXJDb25zdWx0YSIsImUiLCJzZXRTdGF0ZSIsInR4dE5vbWVGdW5jaW9uYXJpbyIsInRhcmdldCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblJpZ2h0Iiwic2hyaW5rIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBSUEsZUFBZSxHQUFHLEVBQXRCOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQjtBQUNBRCxpQkFBZSxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMkJBQXZCLEVBQW9EQyxLQUF0RTs7QUFFQSxNQUFHSixlQUFlLElBQUksRUFBdEIsRUFBeUI7QUFDckJLLFNBQUssQ0FBQywwQkFBRCxDQUFMO0FBQ0gsR0FGRCxNQUdJO0FBQ0FBLFNBQUssQ0FBQ0wsZUFBRCxDQUFMO0FBQ0g7QUFDSixDQVZEOztLQUFNQyxvQjtBQVlOLElBQU1LLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVEsRUFBRTtBQUZOLEtBRCtCO0FBS3JDQyxVQUFNLEVBQUU7QUFDTkEsWUFBTSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREYsS0FMNkI7QUFRckNDLGdCQUFZLEVBQUU7QUFDWkMsZUFBUyxFQUFFUCxLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREMsS0FSdUI7QUFXckNHLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQVgwQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7SUFnQnFCQyxjOzs7Ozs7Ozs7Ozs7Ozs7O2dPQUNPLFVBQUNDLENBQUQsRUFBTztBQUMzQixZQUFLQyxRQUFMLENBQWM7QUFBQ0MsMEJBQWtCLEVBQUVGLENBQUMsQ0FBQ0csTUFBRixDQUFTbEI7QUFBOUIsT0FBZDtBQUNILEs7Ozs7Ozs7NkJBRU87QUFDSixhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGFBQUssRUFBRTtBQUFDbUIsa0JBQVEsRUFBQyxNQUFWO0FBQWtCQyxvQkFBVSxFQUFDO0FBQTdCLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJLE1BQUMsb0VBQUQ7QUFDSSxVQUFFLEVBQUMsb0JBRFA7QUFFSSxhQUFLLEVBQUMsd0JBRlY7QUFHSSxhQUFLLEVBQUU7QUFBRVosZ0JBQU0sRUFBRSxDQUFWO0FBQWFLLGVBQUssRUFBQyxPQUFuQjtBQUE0QlEscUJBQVcsRUFBQztBQUF4QyxTQUhYO0FBSUksY0FBTSxFQUFDLFFBSlg7QUFLSSx1QkFBZSxFQUFFO0FBQ2JDLGdCQUFNLEVBQUU7QUFESyxTQUxyQjtBQVFJLGVBQU8sRUFBQyxVQVJaO0FBU0ksWUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLEVBY0ksTUFBQyxnRUFBRDtBQUNJLGVBQU8sRUFBQyxXQURaO0FBRUksYUFBSyxFQUFDLE9BRlY7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLGlCQUFTLEVBQUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSmY7QUFLSSxlQUFPLEVBQUV6QixvQkFMYjtBQU1JLGFBQUssRUFBRTtBQUFDYyxtQkFBUyxFQUFDO0FBQVgsU0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKLENBREo7QUEyQkg7Ozs7RUFqQ3VDWSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvcHJpbmNpcGFsLjBiMjA3N2NiNGE3N2ZiNDc1OTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxudmFyIG5vbWVGdW5jaW9uYXJpbyA9IFwiXCI7XHJcblxyXG5jb25zdCBQZXNxdWlzYXJGdW5jaW9uYXJpbyA9ICgpID0+IHtcclxuICAgIC8vIG5vbWVGdW5jaW9uYXJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0ndHh0Tm9tZUZ1bmNpb25hcmlvJ11cIikudmFsdWU7XHJcbiAgICBub21lRnVuY2lvbmFyaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHROb21lRnVuY2lvbmFyaW8nXVwiKS52YWx1ZTtcclxuICAgIFxyXG4gICAgaWYobm9tZUZ1bmNpb25hcmlvID09IFwiXCIpe1xyXG4gICAgICAgIGFsZXJ0KFwiTm9tZSBkZXZlIHNlciBwcmVlbmNoaWRvXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBhbGVydChub21lRnVuY2lvbmFyaW8pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgd2l0aG91dExhYmVsOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpYmlyQ29uc3VsdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBoYW5kbGVOb21lRnVuY2lvbmFyaW8gPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3R4dE5vbWVGdW5jaW9uYXJpbzogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgZm9udFdlaWdodDpcImJvbGRcIn19ID5DT05TVUxUQSBERSBEQURPUzwvYT5cclxuICAgICAgICAgICAgICAgIDxwLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dE5vbWVGdW5jaW9uYXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21lIGRvIEZ1bmNpb27DoXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2VhcmNoSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtQZXNxdWlzYXJGdW5jaW9uYXJpb31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDpcIjZweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQZXNxdWlzYXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9