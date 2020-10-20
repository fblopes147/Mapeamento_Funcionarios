webpackHotUpdate_N_E("pages/MapeamentoFuncionarios/dadosmedidas",{

/***/ "./components/ComponenteMedidas.js":
/*!*****************************************!*\
  !*** ./components/ComponenteMedidas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirMedidas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteMedidas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    button: {
      margin: theme.spacing(1)
    },
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

var SalvarDados = function SalvarDados() {
  // Acessar API de salvar dados no Banco
  alert("Os dados foram salvos com sucesso!");
};

_c = SalvarDados;
function InserirMedidas() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 28
      }
    }),
    onClick: SalvarDados,
    style: {
      marginRight: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 28
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Voltar"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtIdAssociado",
    label: "Id Associado",
    style: {
      margin: 8,
      width: "100px",
      marginRight: "10px"
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
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtDtMedida",
    label: "Data da Medida",
    style: {
      margin: 8,
      width: "180px",
      marginRight: "10px"
    },
    type: "date",
    format: "dd/MM/yyyy",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtResponsavel",
    label: "Respons\xE1vel",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
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
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtStatus",
    label: "Status",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
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
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtDescricaoMedidas",
    label: "Descri\xE7\xE3o das Medidas",
    multiline: true,
    fullWidth: true,
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "txtObsResultados",
    label: "Observa\xE7\xE3o dos Resultados",
    multiline: true,
    fullWidth: true,
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }));
}
_c2 = InserirMedidas;

var _c, _c2;

$RefreshReg$(_c, "SalvarDados");
$RefreshReg$(_c2, "InserirMedidas");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRlTWVkaWRhcy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiU2FsdmFyRGFkb3MiLCJhbGVydCIsIkluc2VyaXJNZWRpZGFzIiwibWFyZ2luUmlnaHQiLCJzaHJpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREYsS0FENkI7QUFJckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGQyxjQUFRLEVBQUU7QUFGUixLQUorQjtBQVFyQ0osVUFBTSxFQUFFO0FBQ0pBLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURKLEtBUjZCO0FBV3JDSSxnQkFBWSxFQUFFO0FBQ1ZDLGVBQVMsRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURELEtBWHVCO0FBY3JDTSxhQUFTLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBREE7QUFkMEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBbUJBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEI7QUFDQUMsT0FBSyxDQUFDLG9DQUFELENBQUw7QUFDSCxDQUhEOztLQUFNRCxXO0FBS1MsU0FBU0UsY0FBVCxHQUF5QjtBQUNwQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckVKLEVBc0VJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMscUJBRFA7QUFFSSxTQUFLLEVBQUMsNkJBRlY7QUFHSSxhQUFTLE1BSGI7QUFJSSxhQUFTLE1BSmI7QUFLSSxVQUFNLEVBQUMsUUFMWDtBQU1JLG1CQUFlLEVBQUU7QUFDYkEsWUFBTSxFQUFFO0FBREssS0FOckI7QUFTSSxXQUFPLEVBQUMsVUFUWjtBQVVJLFFBQUksRUFBQyxPQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0RUosRUFrRkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxGSixFQW1GSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLGtCQURQO0FBRUksU0FBSyxFQUFDLGlDQUZWO0FBR0ksYUFBUyxNQUhiO0FBSUksYUFBUyxNQUpiO0FBS0ksVUFBTSxFQUFDLFFBTFg7QUFNSSxtQkFBZSxFQUFFO0FBQ2JBLFlBQU0sRUFBRTtBQURLLEtBTnJCO0FBU0ksV0FBTyxFQUFDLFVBVFo7QUFVSSxRQUFJLEVBQUMsT0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkZKLENBREo7QUFrR0g7TUFuR3VCRixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvZGFkb3NtZWRpZGFzLjU2MmU0NWZlNmQ4ZjJlN2JkMDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgd2l0aG91dExhYmVsOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMjVjaCcsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTYWx2YXJEYWRvcyA9ICgpID0+IHtcclxuICAgIC8vIEFjZXNzYXIgQVBJIGRlIHNhbHZhciBkYWRvcyBubyBCYW5jb1xyXG4gICAgYWxlcnQoXCJPcyBkYWRvcyBmb3JhbSBzYWx2b3MgY29tIHN1Y2Vzc28hXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnNlcmlyTWVkaWRhcygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1NhbHZhckRhZG9zfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjIwcHhcIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhbHZhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEJhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRJZEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIklkIEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHREdE1lZGlkYVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZGEgTWVkaWRhXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcG9uc2F2ZWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0U3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dERlc2NyaWNhb01lZGlkYXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmnDp8OjbyBkYXMgTWVkaWRhc1wiXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRPYnNSZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiT2JzZXJ2YcOnw6NvIGRvcyBSZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==