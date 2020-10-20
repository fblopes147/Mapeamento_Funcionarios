webpackHotUpdate_N_E("pages/MapeamentoFuncionarios/dadosfuncionarios",{

/***/ "./components/DadosFuncionarios.js":
/*!*****************************************!*\
  !*** ./components/DadosFuncionarios.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirNovoFuncionario; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\DadosFuncionarios.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var listaSexo = [{
  value: '-',
  label: '-'
}, {
  value: 'Feminino',
  label: 'F'
}, {
  value: 'Masculino',
  label: 'M'
}];
var listaEstadoCivil = [{
  value: '-',
  label: '-'
}, {
  value: 'Solteiro',
  label: 'Solteiro'
}, {
  value: 'Casado',
  label: 'Casado'
}, {
  value: 'Viúvo',
  label: 'Viúvo'
}, {
  value: 'Divorciado',
  label: 'Divorciado'
}];
var listaEstado = [{
  value: '-',
  label: '-'
}, {
  value: 'Acre',
  label: 'AC'
}, {
  value: 'Alagoas ',
  label: 'AL'
}, {
  value: 'Amapá ',
  label: 'AP'
}, {
  value: 'Amazonas ',
  label: 'AM'
}, {
  value: 'Bahia ',
  label: 'BA'
}, {
  value: 'Ceará ',
  label: 'CE'
}, {
  value: 'Distrito Federal ',
  label: 'DF'
}, {
  value: 'Espírito Santo ',
  label: 'ES'
}, {
  value: 'Goiás ',
  label: 'GO'
}, {
  value: 'Maranhão ',
  label: 'MA'
}, {
  value: 'Mato Grosso ',
  label: 'MT'
}, {
  value: 'Mato Grosso do Sul ',
  label: 'MS'
}, {
  value: 'Minas Gerais ',
  label: 'MG'
}, {
  value: 'Pará ',
  label: 'PA'
}, {
  value: 'Paraíba ',
  label: 'PB'
}, {
  value: 'Paraná ',
  label: 'PR'
}, {
  value: 'Pernambuco ',
  label: 'PE'
}, {
  value: 'Piauí ',
  label: 'PI'
}, {
  value: 'Rio de Janeiro ',
  label: 'RJ'
}, {
  value: 'Rio Grande do Norte ',
  label: 'RN'
}, {
  value: 'Rio Grande do Sul ',
  label: 'RS'
}, {
  value: 'Rondônia ',
  label: 'RO'
}, {
  value: 'Roraima ',
  label: 'RR'
}, {
  value: 'Santa Catarina ',
  label: 'SC'
}, {
  value: 'São Paulo ',
  label: 'SP'
}, {
  value: 'Sergipe ',
  label: 'SE'
}, {
  value: 'Tocantins ',
  label: 'TO'
}];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
}); // var nomeFuncionario = "";

var itemSexo = "";

var SalvarDados = function SalvarDados() {
  itemSexo = document.querySelector("[id='txtSexo']").value;
  alert(itemSexo); // Acessar API de salvar dados no Banco

  alert("Os dados foram salvos com sucesso!");
};

_c = SalvarDados;
function InserirNovoFuncionario() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      sexo = _React$useState2[0],
      setSexo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      estadoCivil = _React$useState4[0],
      setEstadoCivil = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      estado = _React$useState6[0],
      setEstado = _React$useState6[1];

  var handleChangeSexo = function handleChangeSexo(event) {
    document.querySelector("[id='txtSexo']").value = event.target.value;
    setSexo(event.target.value);
  };

  var handleChangeEstadoCivil = function handleChangeEstadoCivil(event) {
    document.querySelector("[id='txtEstadoCivil']").value = event.target.value;
    setEstadoCivil(event.target.value);
  };

  var handleChangeEstado = function handleChangeEstado(event) {
    document.querySelector("[id='txtEstado']").value = event.target.value;
    setEstado(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: {
      fontSize: "30px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "ADICIONAR NOVO FUNCION\xC1RIO"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 28
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Voltar"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtNomeFuncionario",
    label: "Nome do Funcion\xE1rio",
    style: {
      margin: 8,
      width: "350px",
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
      lineNumber: 133,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtNascimento",
    label: "Data de Nascimento",
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
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtSexo",
    select: true,
    label: "Sexo",
    style: {
      margin: 8,
      width: "100px",
      marginRight: "10px"
    },
    size: "small",
    value: sexo,
    onChange: handleChangeSexo,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, listaSexo.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtEstadoCivil",
    select: true,
    label: "Estado Civil",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: estadoCivil,
    onChange: handleChangeEstadoCivil,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, listaEstadoCivil.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtArea",
    label: "\xC1rea",
    style: {
      margin: 8,
      width: "50px",
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
      lineNumber: 189,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtTelFuncionario",
    label: "Telefone",
    style: {
      margin: 8,
      width: "120px",
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
      lineNumber: 200,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtGestor",
    label: "Gestor",
    style: {
      margin: 8,
      width: "300px",
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
      lineNumber: 212,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtCargo",
    label: "Cargo",
    style: {
      margin: 8,
      width: "130px",
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
      lineNumber: 223,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtEmpresa",
    label: "Empresa",
    style: {
      margin: 8,
      width: "130px",
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
      lineNumber: 234,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtLoja",
    label: "Loja",
    style: {
      margin: 8,
      width: "130px",
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
      lineNumber: 245,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtCEP",
    label: "CEP",
    style: {
      margin: 8,
      width: "75px",
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
      lineNumber: 257,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtEndereco",
    label: "Endere\xE7o",
    style: {
      margin: 8,
      width: "300px",
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
      lineNumber: 268,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtBairro",
    label: "Bairro",
    style: {
      margin: 8,
      width: "200px",
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
      lineNumber: 279,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtCidade",
    label: "Cidade",
    style: {
      margin: 8,
      width: "200px",
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
      lineNumber: 290,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtEstado",
    select: true,
    label: "Estado",
    style: {
      margin: 8,
      width: "80px",
      marginRight: "10px"
    },
    size: "small",
    value: estado,
    onChange: handleChangeEstado,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }, listaEstado.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 21
      }
    }, option.label);
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtProntuario",
    label: "Prontu\xE1rio",
    style: {
      margin: 8,
      width: "185px",
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
      lineNumber: 318,
      columnNumber: 13
    }
  }));
}

_s(InserirNovoFuncionario, "obHSi1eV6mPokKM7Ek7pj+LTMNA=");

_c2 = InserirNovoFuncionario;

var _c, _c2;

$RefreshReg$(_c, "SalvarDados");
$RefreshReg$(_c2, "InserirNovoFuncionario");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYWRvc0Z1bmNpb25hcmlvcy5qcyJdLCJuYW1lcyI6WyJsaXN0YVNleG8iLCJ2YWx1ZSIsImxhYmVsIiwibGlzdGFFc3RhZG9DaXZpbCIsImxpc3RhRXN0YWRvIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ3aXRob3V0TGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsIml0ZW1TZXhvIiwiU2FsdmFyRGFkb3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbGVydCIsIkluc2VyaXJOb3ZvRnVuY2lvbmFyaW8iLCJSZWFjdCIsInVzZVN0YXRlIiwic2V4byIsInNldFNleG8iLCJlc3RhZG9DaXZpbCIsInNldEVzdGFkb0NpdmlsIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwiaGFuZGxlQ2hhbmdlU2V4byIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwiLCJoYW5kbGVDaGFuZ2VFc3RhZG8iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5SaWdodCIsInNocmluayIsIm1hcCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZDtBQUFDQyxPQUFLLEVBQUUsR0FBUjtBQUFhQyxPQUFLLEVBQUU7QUFBcEIsQ0FEYyxFQUVkO0FBQUNELE9BQUssRUFBRSxVQUFSO0FBQW9CQyxPQUFLLEVBQUU7QUFBM0IsQ0FGYyxFQUdkO0FBQUNELE9BQUssRUFBRSxXQUFSO0FBQXFCQyxPQUFLLEVBQUU7QUFBNUIsQ0FIYyxDQUFsQjtBQU1BLElBQU1DLGdCQUFnQixHQUFH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dkMsS0FKWDtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksU0FBSyxFQUFFVCxNQU5YO0FBT0ksWUFBUSxFQUFFTSxrQkFQZDtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVS2hDLFdBQVcsQ0FBQ3FDLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRDtBQUFBLFdBQ2IsTUFBQyxrRUFBRDtBQUFVLFNBQUcsRUFBRUEsTUFBTSxDQUFDekMsS0FBdEI7QUFBNkIsV0FBSyxFQUFFeUMsTUFBTSxDQUFDekMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLeUMsTUFBTSxDQUFDeEMsS0FEWixDQURhO0FBQUEsR0FBaEIsQ0FWTCxDQWpNSixFQWlOSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBak5KLEVBa05JLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsZUFEUDtBQUVJLFNBQUssRUFBQyxlQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVPLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QnNCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxOSixDQURKO0FBd1NIOztHQTVUdUJqQixzQjs7TUFBQUEsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwZWFtZW50b0Z1bmNpb25hcmlvcy9kYWRvc2Z1bmNpb25hcmlvcy42NzFhZWE0ZTNlYjQ5YWU0M2MzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY29uc3QgbGlzdGFTZXhvID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnRmVtaW5pbm8nLCBsYWJlbDogJ0YnfSxcclxuICAgIHt2YWx1ZTogJ01hc2N1bGlubycsIGxhYmVsOiAnTSd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhRXN0YWRvQ2l2aWwgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdTb2x0ZWlybycsIGxhYmVsOiAnU29sdGVpcm8nfSxcclxuICAgIHt2YWx1ZTogJ0Nhc2FkbycsIGxhYmVsOiAnQ2FzYWRvJ30sXHJcbiAgICB7dmFsdWU6ICdWacO6dm8nLCBsYWJlbDogJ1Zpw7p2byd9LFxyXG4gICAge3ZhbHVlOiAnRGl2b3JjaWFkbycsIGxhYmVsOiAnRGl2b3JjaWFkbyd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhRXN0YWRvID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnQWNyZScsIGxhYmVsOiAnQUMnfSxcclxuICAgIHt2YWx1ZTogJ0FsYWdvYXMgJywgbGFiZWw6ICdBTCd9LFxyXG4gICAge3ZhbHVlOiAnQW1hcMOhICcsIGxhYmVsOiAnQVAnfSxcclxuICAgIHt2YWx1ZTogJ0FtYXpvbmFzICcsIGxhYmVsOiAnQU0nfSxcclxuICAgIHt2YWx1ZTogJ0JhaGlhICcsIGxhYmVsOiAnQkEnfSxcclxuICAgIHt2YWx1ZTogJ0NlYXLDoSAnLCBsYWJlbDogJ0NFJ30sXHJcbiAgICB7dmFsdWU6ICdEaXN0cml0byBGZWRlcmFsICcsIGxhYmVsOiAnREYnfSxcclxuICAgIHt2YWx1ZTogJ0VzcMOtcml0byBTYW50byAnLCBsYWJlbDogJ0VTJ30sXHJcbiAgICB7dmFsdWU6ICdHb2nDoXMgJywgbGFiZWw6ICdHTyd9LFxyXG4gICAge3ZhbHVlOiAnTWFyYW5ow6NvICcsIGxhYmVsOiAnTUEnfSxcclxuICAgIHt2YWx1ZTogJ01hdG8gR3Jvc3NvICcsIGxhYmVsOiAnTVQnfSxcclxuICAgIHt2YWx1ZTogJ01hdG8gR3Jvc3NvIGRvIFN1bCAnLCBsYWJlbDogJ01TJ30sXHJcbiAgICB7dmFsdWU6ICdNaW5hcyBHZXJhaXMgJywgbGFiZWw6ICdNRyd9LFxyXG4gICAge3ZhbHVlOiAnUGFyw6EgJywgbGFiZWw6ICdQQSd9LFxyXG4gICAge3ZhbHVlOiAnUGFyYcOtYmEgJywgbGFiZWw6ICdQQid9LFxyXG4gICAge3ZhbHVlOiAnUGFyYW7DoSAnLCBsYWJlbDogJ1BSJ30sXHJcbiAgICB7dmFsdWU6ICdQZXJuYW1idWNvICcsIGxhYmVsOiAnUEUnfSxcclxuICAgIHt2YWx1ZTogJ1BpYXXDrSAnLCBsYWJlbDogJ1BJJ30sXHJcbiAgICB7dmFsdWU6ICdSaW8gZGUgSmFuZWlybyAnLCBsYWJlbDogJ1JKJ30sXHJcbiAgICB7dmFsdWU6ICdSaW8gR3JhbmRlIGRvIE5vcnRlICcsIGxhYmVsOiAnUk4nfSxcclxuICAgIHt2YWx1ZTogJ1JpbyBHcmFuZGUgZG8gU3VsICcsIGxhYmVsOiAnUlMnfSxcclxuICAgIHt2YWx1ZTogJ1JvbmTDtG5pYSAnLCBsYWJlbDogJ1JPJ30sXHJcbiAgICB7dmFsdWU6ICdSb3JhaW1hICcsIGxhYmVsOiAnUlInfSxcclxuICAgIHt2YWx1ZTogJ1NhbnRhIENhdGFyaW5hICcsIGxhYmVsOiAnU0MnfSxcclxuICAgIHt2YWx1ZTogJ1PDo28gUGF1bG8gJywgbGFiZWw6ICdTUCd9LFxyXG4gICAge3ZhbHVlOiAnU2VyZ2lwZSAnLCBsYWJlbDogJ1NFJ30sXHJcbiAgICB7dmFsdWU6ICdUb2NhbnRpbnMgJywgbGFiZWw6ICdUTyd9XHJcbl1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHdpdGhvdXRMYWJlbDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzI1Y2gnLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuLy8gdmFyIG5vbWVGdW5jaW9uYXJpbyA9IFwiXCI7XHJcbnZhciBpdGVtU2V4byA9IFwiXCI7XHJcblxyXG5jb25zdCBTYWx2YXJEYWRvcyA9ICgpID0+IHtcclxuICAgIGl0ZW1TZXhvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U2V4byddXCIpLnZhbHVlO1xyXG4gICAgYWxlcnQoaXRlbVNleG8pO1xyXG4gICAgLy8gQWNlc3NhciBBUEkgZGUgc2FsdmFyIGRhZG9zIG5vIEJhbmNvXHJcbiAgICBhbGVydChcIk9zIGRhZG9zIGZvcmFtIHNhbHZvcyBjb20gc3VjZXNzbyFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc2VyaXJOb3ZvRnVuY2lvbmFyaW8oKSB7XHJcbiAgICBjb25zdCBbc2V4bywgc2V0U2V4b10gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW2VzdGFkb0NpdmlsLCBzZXRFc3RhZG9DaXZpbF0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW2VzdGFkbywgc2V0RXN0YWRvXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNleG8gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U2V4byddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNleG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvQ2l2aWwnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRFc3RhZG9DaXZpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VFc3RhZG8gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RXN0YWRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBmb250V2VpZ2h0OlwiYm9sZFwifX0gPkFESUNJT05BUiBOT1ZPIEZVTkNJT07DgVJJTzwvYT5cclxuICAgICAgICAgICAgPHAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtTYWx2YXJEYWRvc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYWx2YXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxCYWNrSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgIGhyZWY9XCJwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWb2x0YXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0Tm9tZUZ1bmNpb25hcmlvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBkbyBGdW5jaW9uw6FyaW9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjM1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0RHROYXNjaW1lbnRvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBOYXNjaW1lbnRvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0U2V4b1wiXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2V4b1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXhvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNleG99XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFTZXhvLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEVzdGFkb0NpdmlsXCJcclxuICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG8gQ2l2aWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFFc3RhZG9DaXZpbC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRBcmVhXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiw4FyZWFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbGVmb25lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEdlc3RvclwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkdlc3RvclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMzAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmdvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMzBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEVtcHJlc2FcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMzBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dExvamFcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb2phXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMzBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dENFUFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiNzVweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEVuZGVyZWNvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEJhaXJyb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhaXJyb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0RXN0YWRvXCJcclxuICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpc3RhRXN0YWRvLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dFByb250dWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9udHXDoXJpb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTg1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE1MFwiPjxsYWJlbD5Ob21lIGRvIEZ1bmNpb27DoXJpbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMzE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0Tm9tZUZ1bmNpb25hcmlvXCIgc3R5bGU9e3t3aWR0aDpcIjMwMHB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjc1XCI+PGxhYmVsPlByb250dcOhcmlvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRQcm9udHVhcmlvXCIgc3R5bGU9e3t3aWR0aDpcIjE4NXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE0MFwiPjxsYWJlbD5EYXRhIGRlIE5hc2NpbWVudG88L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE0MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInR4dER0TmFzY2ltZW50b1wiIHN0eWxlPXt7d2lkdGg6XCIxMjVweFwiLCBoZWlnaHQ6XCIyMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI0MFwiPjxsYWJlbD5TZXhvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17bGlzdGFTZXhvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjkwXCI+PGxhYmVsPkVzdGFkbyBDaXZpbDwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2xpc3RhRXN0YWRvQ2l2aWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6XCI2MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNDBcIj48bGFiZWw+Q0VQPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI5MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4dENFUFwiIHN0eWxlPXt7d2lkdGg6XCI3NXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjcwXCI+PGxhYmVsPkVuZGVyZcOnbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMzE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0RW5kZXJlY29cIiBzdHlsZT17e3dpZHRoOlwiMzAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+QmFpcnJvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRCYWlycm9cIiBzdHlsZT17e3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+Q2lkYWRlPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRDaWRhZGVcIiBzdHlsZT17e3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+RXN0YWRvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI3NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2xpc3RhRXN0YWRvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjY1XCI+PGxhYmVsPlRlbGVmb25lPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiIHN0eWxlPXt7d2lkdGg6XCIxMDVweFwiLCBoZWlnaHQ6XCIyMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI1MFwiPjxsYWJlbD5DYXJnbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTY1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0Q2FyZ29cIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNDBcIj48bGFiZWw+w4FyZWE8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjExNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4dEFyZWFcIiBzdHlsZT17e3dpZHRoOlwiMTAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTBcIj48bGFiZWw+R2VzdG9yPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxNjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRHZXN0b3JcIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTEwXCI+PGxhYmVsPlRlbGVmb25lIEdlc3RvcjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0VGVsR2VzdG9yXCIgc3R5bGU9e3t3aWR0aDpcIjEwNXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9