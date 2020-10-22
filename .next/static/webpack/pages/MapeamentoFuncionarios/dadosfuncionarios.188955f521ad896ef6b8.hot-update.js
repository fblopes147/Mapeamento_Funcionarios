webpackHotUpdate_N_E("pages/MapeamentoFuncionarios/dadosfuncionarios",{

/***/ "./components/ComponenteFuncionarios.js":
/*!**********************************************!*\
  !*** ./components/ComponenteFuncionarios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirNovoFuncionario; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");


var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteFuncionarios.js",
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
var listaTipoPresenca = [{
  value: '-',
  label: '-'
}, {
  value: 'Presencial',
  label: 'Presencial'
}, {
  value: 'Remoto',
  label: 'Remoto'
}];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
  // Acessar API de salvar dados no Banco
  console.log("Nome do Associado: " + document.querySelector("[id='txtNomeAssociado']").value);
  console.log("Data de Nascimento: " + document.querySelector("[id='txtDtNascimento']").value);
  console.log("Sexo: " + document.querySelector("[id='txtSexo']").value);
  console.log("Estado Civil: " + document.querySelector("[id='txtEstadoCivil']").value);
  console.log("Área: " + document.querySelector("[id='txtArea']").value);
  console.log("Telefone: " + document.querySelector("[id='txtTelFuncionario']").value);
  console.log("Tipo Presença: " + document.querySelector("[id='txtTipoPresenca']").value);
  console.log("Gestor: " + document.querySelector("[id='txtGestor']").value);
  console.log("Cargo: " + document.querySelector("[id='txtCargo']").value);
  console.log("Empresa: " + document.querySelector("[id='txtEmpresa']").value);
  console.log("Loja: " + document.querySelector("[id='txtLoja']").value);
  console.log("Turno: " + document.querySelector("[id='txtTurno']").value);
  console.log("Grupo: " + document.querySelector("[id='txtGrupo']").value);
  console.log("CEP: " + document.querySelector("[id='txtCEP']").value);
  console.log("Endereço: " + document.querySelector("[id='txtEndereco']").value);
  console.log("Bairro: " + document.querySelector("[id='txtBairro']").value);
  console.log("Cidade: " + document.querySelector("[id='txtCidade']").value);
  console.log("Prontuário: " + document.querySelector("[id='txtProntuario']").value);
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
      tipoPresenca = _React$useState6[0],
      setTipoPresenca = _React$useState6[1];

  var handleChangeSexo = function handleChangeSexo(event) {
    document.querySelector("[id='txtSexo']").value = event.target.value;
    setSexo(event.target.value);
  };

  var handleChangeEstadoCivil = function handleChangeEstadoCivil(event) {
    document.querySelector("[id='txtEstadoCivil']").value = event.target.value;
    setEstadoCivil(event.target.value);
  };

  var handleChangeTipoPresenca = function handleChangeTipoPresenca(event) {
    document.querySelector("[id='txtTipoPresenca']").value = event.target.value;
    setTipoPresenca(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 32
      }
    }),
    onClick: SalvarDados,
    style: {
      marginRight: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 32
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Voltar")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtNomeAssociado",
    label: "Nome do Associado",
    style: {
      margin: 8,
      width: "380px",
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
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 133,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 146,
      columnNumber: 17
    }
  }, listaSexo.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 162,
      columnNumber: 17
    }
  }, listaEstadoCivil.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 178,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtTelFuncionario",
    label: "Telefone",
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
      lineNumber: 189,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtTipoPresenca",
    select: true,
    label: "Tipo Presen\xE7a",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: tipoPresenca,
    onChange: handleChangeTipoPresenca,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, listaTipoPresenca.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, option.label);
  }))), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtGestor",
    label: "Gestor",
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
      lineNumber: 218,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtCargo",
    label: "Cargo",
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
      lineNumber: 229,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtEmpresa",
    label: "Empresa",
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
      lineNumber: 240,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtLoja",
    label: "Loja",
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
      lineNumber: 251,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtTurno",
    label: "Turno",
    style: {
      margin: 8,
      width: "220px",
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
      lineNumber: 262,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtGrupo",
    label: "Grupo",
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
      lineNumber: 273,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtCEP",
    label: "CEP",
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
      lineNumber: 286,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtEndereco",
    label: "Endere\xE7o",
    style: {
      margin: 8,
      width: "400px",
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
      lineNumber: 297,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtBairro",
    label: "Bairro",
    style: {
      margin: 8,
      width: "250px",
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
      lineNumber: 308,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtCidade",
    label: "Cidade",
    style: {
      margin: 8,
      width: "250px",
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
      lineNumber: 319,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtProntuario",
    label: "Prontu\xE1rio" //style={{ margin: 8, width:"350px", marginRight:"10px"}}
    ,
    fullWidth: true,
    multiline: true,
    rows: 5,
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  })));
}

_s(InserirNovoFuncionario, "hXbEiL4wrPxELhsRTFm8do+B/ig=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRlRnVuY2lvbmFyaW9zLmpzIl0sIm5hbWVzIjpbImxpc3RhU2V4byIsInZhbHVlIiwibGFiZWwiLCJsaXN0YUVzdGFkb0NpdmlsIiwibGlzdGFUaXBvUHJlc2VuY2EiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiaXRlbVNleG8iLCJTYWx2YXJEYWRvcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbGVydCIsIkluc2VyaXJOb3ZvRnVuY2lvbmFyaW8iLCJSZWFjdCIsInVzZVN0YXRlIiwic2V4byIsInNldFNleG8iLCJlc3RhZG9DaXZpbCIsInNldEVzdGFkb0NpdmlsIiwidGlwb1ByZXNlbmNhIiwic2V0VGlwb1ByZXNlbmNhIiwiaGFuZGxlQ2hhbmdlU2V4byIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwiLCJoYW5kbGVDaGFuZ2VUaXBvUHJlc2VuY2EiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZDtBQUFDQyxPQUFLLEVBQUUsR0FBUjtBQUFhQyxPQUFLLEVBQUU7QUFBcEIsQ0FEYyxFQUVkO0FBQUNELE9BQUssRUFBRSxVQUFSO0FBQW9CQyxPQUFLLEVBQUU7QUFBM0IsQ0FGYyxFQUdkO0FBQUNELE9BQUssRUFBRSxXQUFSO0FBQXFCQyxPQUFLLEVBQUU7QUFBNUIsQ0FIYyxDQUFsQjtBQU1BLElBQU1DLGdCQUFnQixHQUFHLENBQ3JCO0FBQUNGLE9BQUssRUFBRSxHQUFSO0FBQWFDLE9BQUssRUFBRTtBQUFwQixDQURxQixFQUVyQjtBQUFDRCxPQUFLLEVBQUUsVUFBUjtBQUFvQkMsT0FBSyxFQUFFO0FBQTNCLENBRnFCLEVBR3JCO0FBQUNELE9BQUssRUFBRSxRQUFSO0FBQWtCQyxPQUFLLEVBQUU7QUFBekIsQ0FIcUIsRUFJckI7QUFBQ0QsT0FBSyxFQUFFLE9BQVI7QUFBaUJDLE9BQUssRUFBRTtBQUF4QixDQUpxQixFQUtyQjtBQUFDRCxPQUFLLEVBQUUsWUFBUjtBQUFzQkMsT0FBSyxFQUFFO0FBQTdCLENBTHFCLENBQXpCO0FBUUEsSUFBTUUsaUJBQWlCLEdBQUcsQ0FDdEI7QUFBQ0gsT0FBSyxFQUFFLEdBQVI7QUFBYUMsT0FBSyxFQUFFO0FBQXBCLENBRHNCLEVBRXRCO0FBQUNELE9BQUssRUFBRSxZQUFSO0FBQXNCQyxPQUFLLEVBQUU7QUFBN0IsQ0FGc0IsRUFHdEI7QUFBQ0QsT0FBSyxFQUFFLFFBQVI7QUFBa0JDLE9BQUssRUFBRTtBQUF6QixDQUhzQixDQUExQjtBQU1BLElBQU1HLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGLEtBRDZCO0FBSXJDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRkMsY0FBUSxFQUFFO0FBRlIsS0FKK0I7QUFRckNKLFVBQU0sRUFBRTtBQUNKQSxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFESixLQVI2QjtBQVdyQ0ksZ0JBQVksRUFBRTtBQUNWQyxlQUFTLEVBQUVSLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFERCxLQVh1QjtBQWNyQ00sYUFBUyxFQUFFO0FBQ1BDLFdBQUssRUFBRTtBQURBO0FBZDBCLEdBQVo7QUFBQSxDQUFELENBQTVCLEMsQ0FtQkE7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBd0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsRUFBa0R0QixLQUF0RjtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQXlCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEdEIsS0FBdEY7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUN0QixLQUFoRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQW1CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEdEIsS0FBL0U7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUN0QixLQUFoRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDBCQUF2QixFQUFtRHRCLEtBQTlFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUR0QixLQUFqRjtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBYUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ3RCLEtBQXBFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDdEIsS0FBbEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNEN0QixLQUF0RTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBV0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q3RCLEtBQWhFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDdEIsS0FBbEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMEN0QixLQUFsRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBVUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDdEIsS0FBOUQ7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkN0QixLQUF4RTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBYUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ3RCLEtBQXBFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDdEIsS0FBcEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ3RCLEtBQTVFO0FBQ0F1QixPQUFLLENBQUMsb0NBQUQsQ0FBTDtBQUNILENBckJEOztLQUFNTCxXO0FBdUJTLFNBQVNNLHNCQUFULEdBQWtDO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ3JCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQURxQjtBQUFBO0FBQUEsTUFDdENDLElBRHNDO0FBQUEsTUFDaENDLE9BRGdDOztBQUFBLHlCQUVQSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUZPO0FBQUE7QUFBQSxNQUV0Q0csV0FGc0M7QUFBQSxNQUV6QkMsY0FGeUI7O0FBQUEseUJBR0xMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBSEs7QUFBQTtBQUFBLE1BR3RDSyxZQUhzQztBQUFBLE1BR3hCQyxlQUh3Qjs7QUFLN0MsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLLEVBQUk7QUFDOUJiLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUN0QixLQUF6QyxHQUFpRGtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsS0FBOUQ7QUFDQTRCLFdBQU8sQ0FBQ00sS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUFkLENBQVA7QUFDSCxHQUhEOztBQUtBLE1BQU1vQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFGLEtBQUssRUFBSTtBQUNyQ2IsWUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixFQUFnRHRCLEtBQWhELEdBQXdEa0MsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUFyRTtBQUNBOEIsa0JBQWMsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUFkLENBQWQ7QUFDSCxHQUhEOztBQUtBLE1BQU1xQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUFILEtBQUssRUFBSTtBQUN0Q2IsWUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixFQUFpRHRCLEtBQWpELEdBQXlEa0MsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUF0RTtBQUNBZ0MsbUJBQWUsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUFkLENBQWY7QUFDSCxHQUhEOztBQUtBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBZSxTQUFLLEVBQUU7QUFBQ3NDLGtCQUFZLEVBQUMsTUFBZDtBQUFxQkMsZ0JBQVUsRUFBQyxNQUFoQztBQUF1Q0MsaUJBQVcsRUFBQztBQUFuRCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnRUFBRDtBQUNJLFdBQU8sRUFBQyxXQURaO0FBRUksU0FBSyxFQUFDLE9BRlY7QUFHSSxRQUFJLEVBQUMsT0FIVDtBQUlJLGFBQVMsRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKZjtBQUtJLFdBQU8sRUFBRXRCLFdBTGI7QUFNSSxTQUFLLEVBQUU7QUFBQ3NCLGlCQUFXLEVBQUM7QUFBYixLQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQVdJLE1BQUMsZ0VBQUQ7QUFDSSxXQUFPLEVBQUMsV0FEWjtBQUVJLFNBQUssRUFBQyxPQUZWO0FBR0ksUUFBSSxFQUFDLE9BSFQ7QUFJSSxhQUFTLEVBQUUsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmY7QUFLSSxRQUFJLEVBQUMsV0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosQ0FESixFQXNCSSxNQUFDLG1FQUFEO0FBQVcsT0FBRyxNQUFkO0FBQWUsU0FBSyxFQUFFO0FBQUNGLGtCQUFZLEVBQUMsTUFBZDtBQUFxQkMsZ0JBQVUsRUFBQyxNQUFoQztBQUF1Q0MsaUJBQVcsRUFBQztBQUFuRCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxrQkFEUDtBQUVJLFNBQUssRUFBQyxtQkFGVjtBQUdJLFNBQUssRUFBRTtBQUFFaEMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFZSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLGlCQURQO0FBRUksU0FBSyxFQUFDLG9CQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxRQUFJLEVBQUMsTUFKVDtBQUtJLFVBQU0sRUFBQyxZQUxYO0FBTUksVUFBTSxFQUFDLFFBTlg7QUFPSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBUHJCO0FBVUksV0FBTyxFQUFDLFVBVlo7QUFXSSxRQUFJLEVBQUMsT0FYVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUF5QkksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxTQURQO0FBRUksVUFBTSxNQUZWO0FBR0ksU0FBSyxFQUFDLE1BSFY7QUFJSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FKWDtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksU0FBSyxFQUFFYixJQU5YO0FBT0ksWUFBUSxFQUFFTSxnQkFQZDtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVS2xDLFNBQVMsQ0FBQzJDLEdBQVYsQ0FBYyxVQUFDQyxNQUFEO0FBQUEsV0FDWCxNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxNQUFNLENBQUMzQyxLQUF0QjtBQUE2QixXQUFLLEVBQUUyQyxNQUFNLENBQUMzQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0syQyxNQUFNLENBQUMxQyxLQURaLENBRFc7QUFBQSxHQUFkLENBVkwsQ0F6QkosRUF5Q0ksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxnQkFEUDtBQUVJLFVBQU0sTUFGVjtBQUdJLFNBQUssRUFBQyxjQUhWO0FBSUksU0FBSyxFQUFFO0FBQUVPLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FKWDtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksU0FBSyxFQUFFWCxXQU5YO0FBT0ksWUFBUSxFQUFFTyx1QkFQZDtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVS2xDLGdCQUFnQixDQUFDd0MsR0FBakIsQ0FBcUIsVUFBQ0MsTUFBRDtBQUFBLFdBQ2xCLE1BQUMsa0VBQUQ7QUFBVSxTQUFHLEVBQUVBLE1BQU0sQ0FBQzNDLEtBQXRCO0FBQTZCLFdBQUssRUFBRTJDLE1BQU0sQ0FBQzNDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSzJDLE1BQU0sQ0FBQzFDLEtBRFosQ0FEa0I7QUFBQSxHQUFyQixDQVZMLENBekNKLEVBeURJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsU0FEUDtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVPLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxNQUFuQjtBQUEyQndCLGlCQUFXLEVBQUM7QUFBdkMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpESixFQW9FSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLG1CQURQO0FBRUksU0FBSyxFQUFDLFVBRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBFSixFQStFSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLGlCQURQO0FBRUksVUFBTSxNQUZWO0FBR0ksU0FBSyxFQUFDLGtCQUhWO0FBSUksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSlg7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLFNBQUssRUFBRVQsWUFOWDtBQU9JLFlBQVEsRUFBRU0sd0JBUGQ7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUtsQyxpQkFBaUIsQ0FBQ3VDLEdBQWxCLENBQXNCLFVBQUNDLE1BQUQ7QUFBQSxXQUNuQixNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxNQUFNLENBQUMzQyxLQUF0QjtBQUE2QixXQUFLLEVBQUUyQyxNQUFNLENBQUMzQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0syQyxNQUFNLENBQUMxQyxLQURaLENBRG1CO0FBQUEsR0FBdEIsQ0FWTCxDQS9FSixDQXRCSixFQXNISSxNQUFDLG1FQUFEO0FBQVcsT0FBRyxNQUFkO0FBQWUsU0FBSyxFQUFFO0FBQUNxQyxrQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLGdCQUFVLEVBQUMsTUFBaEM7QUFBdUNDLGlCQUFXLEVBQUM7QUFBbkQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsV0FEUDtBQUVJLFNBQUssRUFBQyxRQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVoQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVlJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsVUFEUDtBQUVJLFNBQUssRUFBQyxPQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQXVCSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLFlBRFA7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJKLEVBa0NJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsU0FEUDtBQUVJLFNBQUssRUFBQyxNQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0osRUE2Q0ksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxVQURQO0FBRUksU0FBSyxFQUFDLE9BRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDSixFQXdESSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLFVBRFA7QUFFSSxTQUFLLEVBQUMsT0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeERKLENBdEhKLEVBMExJLE1BQUMsbUVBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBZSxTQUFLLEVBQUU7QUFBQ0gsa0JBQVksRUFBQyxNQUFkO0FBQXFCQyxnQkFBVSxFQUFDLE1BQWhDO0FBQXVDQyxpQkFBVyxFQUFDO0FBQW5ELEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLFFBRFA7QUFFSSxTQUFLLEVBQUMsS0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFaEMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFZSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLGFBRFA7QUFFSSxTQUFLLEVBQUMsYUFGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUF1QkksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxXQURQO0FBRUksU0FBSyxFQUFDLFFBRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCSixFQWtDSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLFdBRFA7QUFFSSxTQUFLLEVBQUMsUUFGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENKLENBMUxKLEVBd09JLE1BQUMsbUVBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBZSxTQUFLLEVBQUU7QUFBQ0gsa0JBQVksRUFBQyxNQUFkO0FBQXFCQyxnQkFBVSxFQUFDLE1BQWhDO0FBQXVDQyxpQkFBVyxFQUFDO0FBQW5ELEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQ0ksTUFBRSxFQUFDLGVBRFA7QUFFSSxTQUFLLEVBQUMsZUFGVixDQUdJO0FBSEo7QUFJSSxhQUFTLE1BSmI7QUFLSSxhQUFTLE1BTGI7QUFNSSxRQUFJLEVBQUUsQ0FOVjtBQU9JLFVBQU0sRUFBQyxRQVBYO0FBUUksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQVJyQjtBQVdJLFdBQU8sRUFBQyxVQVhaO0FBWUksUUFBSSxFQUFDLE9BWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBeE9KLENBREo7QUEyUEg7O0dBL1F1QmpCLHNCOztNQUFBQSxzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zZnVuY2lvbmFyaW9zLjE4ODk1NWY1MjFhZDg5NmVmNmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5cclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5cclxuY29uc3QgbGlzdGFTZXhvID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnRmVtaW5pbm8nLCBsYWJlbDogJ0YnfSxcclxuICAgIHt2YWx1ZTogJ01hc2N1bGlubycsIGxhYmVsOiAnTSd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhRXN0YWRvQ2l2aWwgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdTb2x0ZWlybycsIGxhYmVsOiAnU29sdGVpcm8nfSxcclxuICAgIHt2YWx1ZTogJ0Nhc2FkbycsIGxhYmVsOiAnQ2FzYWRvJ30sXHJcbiAgICB7dmFsdWU6ICdWacO6dm8nLCBsYWJlbDogJ1Zpw7p2byd9LFxyXG4gICAge3ZhbHVlOiAnRGl2b3JjaWFkbycsIGxhYmVsOiAnRGl2b3JjaWFkbyd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhVGlwb1ByZXNlbmNhID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnUHJlc2VuY2lhbCcsIGxhYmVsOiAnUHJlc2VuY2lhbCd9LFxyXG4gICAge3ZhbHVlOiAnUmVtb3RvJywgbGFiZWw6ICdSZW1vdG8nfVxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB3aXRob3V0TGFiZWw6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbi8vIHZhciBub21lRnVuY2lvbmFyaW8gPSBcIlwiO1xyXG52YXIgaXRlbVNleG8gPSBcIlwiO1xyXG5cclxuY29uc3QgU2FsdmFyRGFkb3MgPSAoKSA9PiB7XHJcbiAgICAvLyBBY2Vzc2FyIEFQSSBkZSBzYWx2YXIgZGFkb3Mgbm8gQmFuY29cclxuICAgIGNvbnNvbGUubG9nKFwiTm9tZSBkbyBBc3NvY2lhZG86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Tm9tZUFzc29jaWFkbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBkZSBOYXNjaW1lbnRvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0TmFzY2ltZW50byddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V4bzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTZXhvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFc3RhZG8gQ2l2aWw6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvQ2l2aWwnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIsOBcmVhOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEFyZWEnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRlbGVmb25lOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFRlbEZ1bmNpb25hcmlvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJUaXBvIFByZXNlbsOnYTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRUaXBvUHJlc2VuY2EnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdlc3RvcjogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRHZXN0b3InXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNhcmdvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dENhcmdvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFbXByZXNhOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEVtcHJlc2EnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvamE6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0TG9qYSddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVHVybm86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VHVybm8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdydXBvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEdydXBvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJDRVA6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Q0VQJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFbmRlcmXDp286IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RW5kZXJlY28nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkJhaXJybzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRCYWlycm8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNpZGFkZTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRDaWRhZGUnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByb250dcOhcmlvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFByb250dWFyaW8nXVwiKS52YWx1ZSk7XHJcbiAgICBhbGVydChcIk9zIGRhZG9zIGZvcmFtIHNhbHZvcyBjb20gc3VjZXNzbyFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc2VyaXJOb3ZvRnVuY2lvbmFyaW8oKSB7XHJcbiAgICBjb25zdCBbc2V4bywgc2V0U2V4b10gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW2VzdGFkb0NpdmlsLCBzZXRFc3RhZG9DaXZpbF0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW3RpcG9QcmVzZW5jYSwgc2V0VGlwb1ByZXNlbmNhXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNleG8gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U2V4byddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNleG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvQ2l2aWwnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRFc3RhZG9DaXZpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VUaXBvUHJlc2VuY2EgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VGlwb1ByZXNlbmNhJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VGlwb1ByZXNlbmNhKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTYWx2YXJEYWRvc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYWx2YXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMjBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dE5vbWVBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBkbyBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0TmFzY2ltZW50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIGRlIE5hc2NpbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRTZXhvXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNleG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V4b31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2V4b31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YVNleG8ubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dEVzdGFkb0NpdmlsXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVzdGFkbyBDaXZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG9DaXZpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFFc3RhZG9DaXZpbC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLDgXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWxlZm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0VGlwb1ByZXNlbmNhXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gUHJlc2Vuw6dhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpcG9QcmVzZW5jYX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGlwb1ByZXNlbmNhfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhVGlwb1ByZXNlbmNhLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRHZXN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VzdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRMb2phXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvamFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFR1cm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRHcnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIyMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0Q0VQXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEzMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RW5kZXJlY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiNDAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRCYWlycm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFpcnJvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2lkYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRQcm9udHVhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb250dcOhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAvL3N0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=