webpackHotUpdate_N_E("pages/MapeamentoFuncionarios/dadosmapeamento",{

/***/ "./components/ComponenteMapeamento.js":
/*!********************************************!*\
  !*** ./components/ComponenteMapeamento.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirMapeamento; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");



var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteMapeamento.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var listaPlanoSaude = [{
  value: '-',
  label: '-'
}, {
  value: 'N/A',
  label: 'Não Possui'
}, {
  value: 'Allianz',
  label: 'Allianz'
}, {
  value: 'Amil',
  label: 'Amil'
}, {
  value: 'Bradesco',
  label: 'Bradesco'
}, {
  value: 'GoldenCross',
  label: 'Golden Cross'
}, {
  value: 'NotreDameIntermedica',
  label: 'Notre Dame Intermédica'
}, {
  value: 'PortoSeguro',
  label: 'Porto Seguro'
}, {
  value: 'PreventSenior',
  label: 'Prevent Senior'
}, {
  value: 'SaoCristovao',
  label: 'São Cristóvão'
}, {
  value: 'SegurosUnimed',
  label: 'Seguros Unimed'
}, {
  value: 'Sompo',
  label: 'Sompo'
}, {
  value: 'SulAmerica',
  label: 'Sul América'
}, {
  value: 'Trasmontano',
  label: 'Trasmontano'
}, {
  value: 'Unimed',
  label: 'Unimed'
}, {
  value: 'Outros',
  label: 'Outros'
}];
var listaStatusExame = [{
  value: '-',
  label: '-'
}, {
  value: 'Positivo',
  label: 'Positivo'
}, {
  value: 'Negativo',
  label: 'Negativo'
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
});

var SalvarDados = function SalvarDados() {
  // Acessar API de salvar dados no Banco
  alert("Os dados foram salvos com sucesso!");
};

_c = SalvarDados;
function InserirMapeamento() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    chkPossuiSintomas: false,
    chkGrupoRisco: false,
    chkContatoMedico: false,
    chkInternadoHoje: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('-'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      planoSaude = _React$useState4[0],
      setPlanoSaude = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('-'),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      statusExame = _React$useState6[0],
      setStatusExame = _React$useState6[1];

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.checked)));
  };

  var handleChangePlanoSaude = function handleChangePlanoSaude(event) {
    document.querySelector("[id='txtPlanoSaude']").value = event.target.value;
    setPlanoSaude(event.target.value);
  };

  var handleChangeStatusExame = function handleChangeStatusExame(event) {
    document.querySelector("[id='txtStatusExame']").value = event.target.value;
    setStatusExame(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 32
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Voltar")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 135,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtContatoContaminado",
    label: "Contato Contaminado",
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
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtMoraQuem",
    label: "Mora Com Quem?",
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
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtUltimoDiaTrabalhado",
    label: "\xDAltimo Dia Trabalhado",
    style: {
      margin: 8,
      width: "175px",
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
      lineNumber: 168,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkPossuiSintomas,
      onChange: handleChange,
      name: "chkPossuiSintomas",
      color: "primary",
      style: {
        width: "105px",
        marginRight: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }),
    label: "Possui Sintomas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtSintomas",
    label: "Sintomas",
    multiline: true,
    rows: 3,
    style: {
      margin: 8,
      width: "500px",
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
      lineNumber: 193,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkGrupoRisco,
      onChange: handleChange,
      name: "chkGrupoRisco",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }
    }),
    label: "Grupo Risco",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtPlanoSaude",
    select: true,
    label: "Plano de Sa\xFAde",
    style: {
      margin: 8,
      width: "180px",
      marginRight: "10px"
    },
    size: "small",
    value: planoSaude,
    onChange: handleChangePlanoSaude,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, listaPlanoSaude.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 21
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDataRegistro",
    label: "Data de Registro",
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
      lineNumber: 306,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkContatoMedico,
      onChange: handleChange,
      name: "chkContatoMedico",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }
    }),
    label: "Contactou M\xE9dico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtContatoMedico",
    label: "Data de Contato M\xE9dico",
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
      lineNumber: 330,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtExame",
    label: "Data do Exame",
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
      lineNumber: 344,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtStatusExame",
    select: true,
    label: "Status do Exame",
    style: {
      margin: 8,
      width: "180px",
      marginRight: "10px"
    },
    size: "small",
    value: statusExame,
    onChange: handleChangeStatusExame,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, listaStatusExame.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 21
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespCentral",
    label: "Respons\xE1vel Central",
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
      lineNumber: 373,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespMedico",
    label: "Respons\xE1vel M\xE9dico",
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
      lineNumber: 384,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespTecinco",
    label: "Respons\xE1vel T\xE9cnico",
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
      lineNumber: 395,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkInternadoHoje,
      onChange: handleChange,
      name: "chkInternadoHoje",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    }),
    label: "Internado Hoje",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtHospital",
    label: "Hospital",
    style: {
      margin: 8,
      width: "330px",
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
      lineNumber: 418,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtInicioInternacao",
    label: "Per\xEDodo de Interna\xE7\xE3o - In\xEDcio",
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
      lineNumber: 429,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtFinalInternacao",
    label: "Per\xEDodo de Interna\xE7\xE3o - T\xE9rmino",
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
      lineNumber: 442,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtHistoricoInternacao",
    label: "Hist\xF3rico de Interna\xE7\xE3o",
    multiline: true,
    rows: 5,
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
      lineNumber: 455,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtPrevisaoRetorno",
    label: "Previs\xE3o de Retorno",
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
      lineNumber: 469,
      columnNumber: 13
    }
  }));
}

_s(InserirMapeamento, "oZ6Ri6duAf38DMmSjVsd6ckLzV8=");

_c2 = InserirMapeamento;

var _c, _c2;

$RefreshReg$(_c, "SalvarDados");
$RefreshReg$(_c2, "InserirMapeamento");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRlTWFwZWFtZW50by5qcyJdLCJuYW1lcyI6WyJsaXN0YVBsYW5vU2F1ZGUiLCJ2YWx1ZSIsImxhYmVsIiwibGlzdGFTdGF0dXNFeGFtZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpbiIsInNwYWNpbmciLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJTYWx2YXJEYWRvcyIsImFsZXJ0IiwiSW5zZXJpck1hcGVhbWVudG8iLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hrUG9zc3VpU2ludG9tYXMiLCJjaGtHcnVwb1Jpc2NvIiwiY2hrQ29udGF0b01lZGljbyIsImNoa0ludGVybmFkb0hvamUiLCJzdGF0ZSIsInNldFN0YXRlIiwicGxhbm9TYXVkZSIsInNldFBsYW5vU2F1ZGUiLCJzdGF0dXNFeGFtZSIsInNldFN0YXR1c0V4YW1lIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZVBsYW5vU2F1ZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Iiwic2hyaW5rIiwibWFwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyxDQUNwQjtBQUFDQyxPQUFLLEVBQUUsR0FBUjtBQUFhQyxPQUFLLEVBQUU7QUFBcEIsQ0FEb0IsRUFFcEI7QUFBQ0QsT0FBSyxFQUFFLEtBQVI7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENB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MFhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExWEosRUEyWEksTUFBQyxtRUFBRDtBQUNJLE1BQUUsRUFBQyxzQkFEUDtBQUVJLFNBQUssRUFBQyx3QkFGVjtBQUdJLFNBQUssRUFBRTtBQUFFbkMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCMEIsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksUUFBSSxFQUFDLE1BSlQ7QUFLSSxVQUFNLEVBQUMsWUFMWDtBQU1JLFVBQU0sRUFBQyxRQU5YO0FBT0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQVByQjtBQVVJLFdBQU8sRUFBQyxVQVZaO0FBV0ksUUFBSSxFQUFDLE9BWFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNYSixDQURKO0FBMllIOztHQW5hdUJ4QixpQjs7TUFBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwZWFtZW50b0Z1bmNpb25hcmlvcy9kYWRvc21hcGVhbWVudG8uNTI2YzAxZGY4MjBlMTJkMzg2NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NhdmUnO1xyXG5pbXBvcnQgQmFja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFjayc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcblxyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuXHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuXHJcbmNvbnN0IGxpc3RhUGxhbm9TYXVkZSA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ04vQScsIGxhYmVsOiAnTsOjbyBQb3NzdWknfSxcclxuICAgIHt2YWx1ZTogJ0FsbGlhbnonLCBsYWJlbDogJ0FsbGlhbnonfSxcclxuICAgIHt2YWx1ZTogJ0FtaWwnLCBsYWJlbDogJ0FtaWwnfSxcclxuICAgIHt2YWx1ZTogJ0JyYWRlc2NvJywgbGFiZWw6ICdCcmFkZXNjbyd9LFxyXG4gICAge3ZhbHVlOiAnR29sZGVuQ3Jvc3MnLCBsYWJlbDogJ0dvbGRlbiBDcm9zcyd9LFxyXG4gICAge3ZhbHVlOiAnTm90cmVEYW1lSW50ZXJtZWRpY2EnLCBsYWJlbDogJ05vdHJlIERhbWUgSW50ZXJtw6lkaWNhJ30sXHJcbiAgICB7dmFsdWU6ICdQb3J0b1NlZ3VybycsIGxhYmVsOiAnUG9ydG8gU2VndXJvJ30sXHJcbiAgICB7dmFsdWU6ICdQcmV2ZW50U2VuaW9yJywgbGFiZWw6ICdQcmV2ZW50IFNlbmlvcid9LFxyXG4gICAge3ZhbHVlOiAnU2FvQ3Jpc3RvdmFvJywgbGFiZWw6ICdTw6NvIENyaXN0w7N2w6NvJ30sXHJcbiAgICB7dmFsdWU6ICdTZWd1cm9zVW5pbWVkJywgbGFiZWw6ICdTZWd1cm9zIFVuaW1lZCd9LFxyXG4gICAge3ZhbHVlOiAnU29tcG8nLCBsYWJlbDogJ1NvbXBvJ30sXHJcbiAgICB7dmFsdWU6ICdTdWxBbWVyaWNhJywgbGFiZWw6ICdTdWwgQW3DqXJpY2EnfSxcclxuICAgIHt2YWx1ZTogJ1RyYXNtb250YW5vJywgbGFiZWw6ICdUcmFzbW9udGFubyd9LFxyXG4gICAge3ZhbHVlOiAnVW5pbWVkJywgbGFiZWw6ICdVbmltZWQnfSxcclxuICAgIHt2YWx1ZTogJ091dHJvcycsIGxhYmVsOiAnT3V0cm9zJ30sXHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhU3RhdHVzRXhhbWUgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdQb3NpdGl2bycsIGxhYmVsOiAnUG9zaXRpdm8nfSxcclxuICAgIHt2YWx1ZTogJ05lZ2F0aXZvJywgbGFiZWw6ICdOZWdhdGl2byd9LFxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB3aXRob3V0TGFiZWw6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNhbHZhckRhZG9zID0gKCkgPT4ge1xyXG4gICAgLy8gQWNlc3NhciBBUEkgZGUgc2FsdmFyIGRhZG9zIG5vIEJhbmNvXHJcbiAgICBhbGVydChcIk9zIGRhZG9zIGZvcmFtIHNhbHZvcyBjb20gc3VjZXNzbyFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc2VyaXJNYXBlYW1lbnRvKCl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBjaGtQb3NzdWlTaW50b21hczogZmFsc2UsXHJcbiAgICAgICAgY2hrR3J1cG9SaXNjbzogZmFsc2UsXHJcbiAgICAgICAgY2hrQ29udGF0b01lZGljbzogZmFsc2UsXHJcbiAgICAgICAgY2hrSW50ZXJuYWRvSG9qZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtwbGFub1NhdWRlLCBzZXRQbGFub1NhdWRlXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzRXhhbWUsIHNldFN0YXR1c0V4YW1lXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBsYW5vU2F1ZGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UGxhbm9TYXVkZSddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFBsYW5vU2F1ZGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3RhdHVzRXhhbWUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U3RhdHVzRXhhbWUnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTdGF0dXNFeGFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTYWx2YXJEYWRvc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYWx2YXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17U2FsdmFyRGFkb3N9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2FsdmFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEJhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRJZEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJZCBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dENvbnRhdG9Db250YW1pbmFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250YXRvIENvbnRhbWluYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRNb3JhUXVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JhIENvbSBRdWVtP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0VWx0aW1vRGlhVHJhYmFsaGFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLDmmx0aW1vIERpYSBUcmFiYWxoYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTc1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hrUG9zc3VpU2ludG9tYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtQb3NzdWlTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDVweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NzdWkgU2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFNpbnRvbWFzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNpbnRvbWFzXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCI1MDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dElkQXNzb2NpYWRvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSWQgQXNzb2NpYWRvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dENvbnRhdG9Db250YW1pbmFkb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhdG8gQ29udGFtaW5hZG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIyMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0TW9yYVF1ZW1cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JhIENvbSBRdWVtP1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRVbHRpbW9EaWFUcmFiYWxoYWRvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiw5psdGltbyBEaWEgVHJhYmFsaGFkb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTc1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0ZS5jaGtQb3NzdWlTaW50b21hc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtQb3NzdWlTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3N1aSBTaW50b21hc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0U2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiNTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hrR3J1cG9SaXNjb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtHcnVwb1Jpc2NvXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3J1cG8gUmlzY29cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dFBsYW5vU2F1ZGVcIlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYW5vIGRlIFNhw7pkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwbGFub1NhdWRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBsYW5vU2F1ZGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFQbGFub1NhdWRlLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dERhdGFSZWdpc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZGUgUmVnaXN0cm9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hrQ29udGF0b01lZGljb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtDb250YXRvTWVkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGFjdG91IE3DqWRpY29cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dER0Q29udGF0b01lZGljb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZGUgQ29udGF0byBNw6lkaWNvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0RHRFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZG8gRXhhbWVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRTdGF0dXNFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzIGRvIEV4YW1lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c0V4YW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN0YXR1c0V4YW1lfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpc3RhU3RhdHVzRXhhbWUubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcENlbnRyYWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWwgQ2VudHJhbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRSZXNwTWVkaWNvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVzcG9uc8OhdmVsIE3DqWRpY29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcFRlY2luY29cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWwgVMOpY25pY29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoa0ludGVybmFkb0hvamV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hrSW50ZXJuYWRvSG9qZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkludGVybmFkbyBIb2plXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRIb3NwaXRhbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhvc3BpdGFsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzMzBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dER0SW5pY2lvSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcsOtb2RvIGRlIEludGVybmHDp8OjbyAtIEluw61jaW9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHREdEZpbmFsSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcsOtb2RvIGRlIEludGVybmHDp8OjbyAtIFTDqXJtaW5vXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0SGlzdG9yaWNvSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhpc3TDs3JpY28gZGUgSW50ZXJuYcOnw6NvXCJcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHREdFByZXZpc2FvUmV0b3Jub1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpc8OjbyBkZSBSZXRvcm5vXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9