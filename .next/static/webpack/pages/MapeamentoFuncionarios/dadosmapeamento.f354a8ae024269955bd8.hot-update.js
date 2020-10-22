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
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
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
      marginBottom: "30px",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
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
      lineNumber: 124,
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
      lineNumber: 135,
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
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkPossuiSintomas,
      onChange: handleChange,
      name: "chkPossuiSintomas",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }),
    style: {
      width: "175px",
      marginRight: "10px",
      paddingBottom: "33px"
    },
    label: "Possui Sintomas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtSintomas",
    label: "Sintomas",
    multiline: true,
    rows: 3,
    style: {
      margin: 8,
      width: "530px",
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
      lineNumber: 171,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkGrupoRisco,
      onChange: handleChange,
      name: "chkGrupoRisco",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }),
    label: "Grupo Risco",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtPlanoSaude",
    select: true,
    label: "Plano de Sa\xFAde",
    style: {
      margin: 8,
      width: "250px",
      marginRight: "10px"
    },
    size: "small",
    value: planoSaude,
    onChange: handleChangePlanoSaude,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, listaPlanoSaude.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
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
      lineNumber: 213,
      columnNumber: 17
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
        lineNumber: 228,
        columnNumber: 21
      }
    }),
    label: "Contactou M\xE9dico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
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
      lineNumber: 237,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtExame",
    label: "Data do Exame",
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
      lineNumber: 252,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtStatusExame",
    select: true,
    label: "Status do Exame",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: statusExame,
    onChange: handleChangeStatusExame,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, listaStatusExame.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespCentral",
    label: "Respons\xE1vel Central",
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
      lineNumber: 281,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespMedico",
    label: "Respons\xE1vel M\xE9dico",
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
      lineNumber: 292,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtRespTecinco",
    label: "Respons\xE1vel T\xE9cnico",
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
      lineNumber: 303,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      checked: state.chkInternadoHoje,
      onChange: handleChange,
      name: "chkInternadoHoje",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 21
      }
    }),
    label: "Internado Hoje",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
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
      lineNumber: 327,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtInicioInternacao",
    label: "Per\xEDodo de Interna\xE7\xE3o - In\xEDcio",
    style: {
      margin: 8,
      width: "220px",
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
      lineNumber: 338,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "txtDtFinalInternacao",
    label: "Per\xEDodo de Interna\xE7\xE3o - T\xE9rmino",
    style: {
      margin: 8,
      width: "240px",
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
      lineNumber: 351,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 366,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 381,
      columnNumber: 17
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRlTWFwZWFtZW50by5qcyJdLCJuYW1lcyI6WyJsaXN0YVBsYW5vU2F1ZGUiLCJ2YWx1ZSIsImxhYmVsIiwibGlzdGFTdGF0dXNFeGFtZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpbiIsInNwYWNpbmciLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJTYWx2YXJEYWRvcyIsImFsZXJ0IiwiSW5zZXJpck1hcGVhbWVudG8iLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hrUG9zc3VpU2ludG9tYXMiLCJjaGtHcnVwb1Jpc2NvIiwiY2hrQ29udGF0b01lZGljbyIsImNoa0ludGVybmFkb0hvamUiLCJzdGF0ZSIsInNldFN0YXRlIiwicGxhbm9TYXVkZSIsInNldFBsYW5vU2F1ZGUiLCJzdGF0dXNFeGFtZSIsInNldFN0YXR1c0V4YW1lIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZVBsYW5vU2F1ZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNocmluayIsInBhZGRpbmdCb3R0b20iLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLENBQ3BCO0FBQUNDLE9BQUssRUFBRSxHQUFSO0FBQWFDLE9BQUssRUFBRTtBQUFwQixDQURvQixFQUVwQjtBQUFDRCxPQUFLLEVBQUUs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RTtBQUFFbkMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCMkIsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksUUFBSSxFQUFDLE1BSlQ7QUFLSSxVQUFNLEVBQUMsWUFMWDtBQU1JLFVBQU0sRUFBQyxRQU5YO0FBT0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQVByQjtBQVVJLFdBQU8sRUFBQyxVQVZaO0FBV0ksUUFBSSxFQUFDLE9BWFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBbFNKLENBREo7QUFvVEg7O0dBNVV1QnpCLGlCOztNQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zbWFwZWFtZW50by5mMzU0YThhZTAyNDI2OTk1NWJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZSc7XHJcbmltcG9ydCBCYWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrJztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5cclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5cclxuY29uc3QgbGlzdGFQbGFub1NhdWRlID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnTi9BJywgbGFiZWw6ICdOw6NvIFBvc3N1aSd9LFxyXG4gICAge3ZhbHVlOiAnQWxsaWFueicsIGxhYmVsOiAnQWxsaWFueid9LFxyXG4gICAge3ZhbHVlOiAnQW1pbCcsIGxhYmVsOiAnQW1pbCd9LFxyXG4gICAge3ZhbHVlOiAnQnJhZGVzY28nLCBsYWJlbDogJ0JyYWRlc2NvJ30sXHJcbiAgICB7dmFsdWU6ICdHb2xkZW5Dcm9zcycsIGxhYmVsOiAnR29sZGVuIENyb3NzJ30sXHJcbiAgICB7dmFsdWU6ICdOb3RyZURhbWVJbnRlcm1lZGljYScsIGxhYmVsOiAnTm90cmUgRGFtZSBJbnRlcm3DqWRpY2EnfSxcclxuICAgIHt2YWx1ZTogJ1BvcnRvU2VndXJvJywgbGFiZWw6ICdQb3J0byBTZWd1cm8nfSxcclxuICAgIHt2YWx1ZTogJ1ByZXZlbnRTZW5pb3InLCBsYWJlbDogJ1ByZXZlbnQgU2VuaW9yJ30sXHJcbiAgICB7dmFsdWU6ICdTYW9DcmlzdG92YW8nLCBsYWJlbDogJ1PDo28gQ3Jpc3TDs3bDo28nfSxcclxuICAgIHt2YWx1ZTogJ1NlZ3Vyb3NVbmltZWQnLCBsYWJlbDogJ1NlZ3Vyb3MgVW5pbWVkJ30sXHJcbiAgICB7dmFsdWU6ICdTb21wbycsIGxhYmVsOiAnU29tcG8nfSxcclxuICAgIHt2YWx1ZTogJ1N1bEFtZXJpY2EnLCBsYWJlbDogJ1N1bCBBbcOpcmljYSd9LFxyXG4gICAge3ZhbHVlOiAnVHJhc21vbnRhbm8nLCBsYWJlbDogJ1RyYXNtb250YW5vJ30sXHJcbiAgICB7dmFsdWU6ICdVbmltZWQnLCBsYWJlbDogJ1VuaW1lZCd9LFxyXG4gICAge3ZhbHVlOiAnT3V0cm9zJywgbGFiZWw6ICdPdXRyb3MnfSxcclxuXVxyXG5cclxuY29uc3QgbGlzdGFTdGF0dXNFeGFtZSA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ1Bvc2l0aXZvJywgbGFiZWw6ICdQb3NpdGl2byd9LFxyXG4gICAge3ZhbHVlOiAnTmVnYXRpdm8nLCBsYWJlbDogJ05lZ2F0aXZvJ30sXHJcbl1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHdpdGhvdXRMYWJlbDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzI1Y2gnLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2FsdmFyRGFkb3MgPSAoKSA9PiB7XHJcbiAgICAvLyBBY2Vzc2FyIEFQSSBkZSBzYWx2YXIgZGFkb3Mgbm8gQmFuY29cclxuICAgIGFsZXJ0KFwiT3MgZGFkb3MgZm9yYW0gc2Fsdm9zIGNvbSBzdWNlc3NvIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zZXJpck1hcGVhbWVudG8oKXtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGNoa1Bvc3N1aVNpbnRvbWFzOiBmYWxzZSxcclxuICAgICAgICBjaGtHcnVwb1Jpc2NvOiBmYWxzZSxcclxuICAgICAgICBjaGtDb250YXRvTWVkaWNvOiBmYWxzZSxcclxuICAgICAgICBjaGtJbnRlcm5hZG9Ib2plOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3BsYW5vU2F1ZGUsIHNldFBsYW5vU2F1ZGVdID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFtzdGF0dXNFeGFtZSwgc2V0U3RhdHVzRXhhbWVdID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGxhbm9TYXVkZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRQbGFub1NhdWRlJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0UGxhbm9TYXVkZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTdGF0dXNFeGFtZSddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFN0YXR1c0V4YW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIzMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17U2FsdmFyRGFkb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjIwcHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FsdmFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEJhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRJZEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJZCBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dENvbnRhdG9Db250YW1pbmFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250YXRvIENvbnRhbWluYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRNb3JhUXVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JhIENvbSBRdWVtP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0VWx0aW1vRGlhVHJhYmFsaGFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLDmmx0aW1vIERpYSBUcmFiYWxoYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTc1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hrUG9zc3VpU2ludG9tYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtQb3NzdWlTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjE3NXB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwiLCBwYWRkaW5nQm90dG9tOlwiMzNweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3N1aSBTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0U2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUzMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIzMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hrR3J1cG9SaXNjb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoa0dydXBvUmlzY29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3J1cG8gUmlzY29cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFBsYW5vU2F1ZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxhbm8gZGUgU2HDumRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYW5vU2F1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBsYW5vU2F1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFQbGFub1NhdWRlLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREYXRhUmVnaXN0cm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBSZWdpc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoa0NvbnRhdG9NZWRpY299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtDb250YXRvTWVkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhY3RvdSBNw6lkaWNvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREdENvbnRhdG9NZWRpY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBDb250YXRvIE3DqWRpY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREdEV4YW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZG8gRXhhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNzVweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRTdGF0dXNFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXMgZG8gRXhhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzRXhhbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN0YXR1c0V4YW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhU3RhdHVzRXhhbWUubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFJlc3BDZW50cmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlc3BvbnPDoXZlbCBDZW50cmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRSZXNwTWVkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlc3BvbnPDoXZlbCBNw6lkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRSZXNwVGVjaW5jb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWwgVMOpY25pY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoa0ludGVybmFkb0hvamV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtJbnRlcm5hZG9Ib2plXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkludGVybmFkbyBIb2plXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRIb3NwaXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIb3NwaXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMzMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRJbmljaW9JbnRlcm5hY2FvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcsOtb2RvIGRlIEludGVybmHDp8OjbyAtIEluw61jaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREdEZpbmFsSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXLDrW9kbyBkZSBJbnRlcm5hw6fDo28gLSBUw6lybWlub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjI0MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dEhpc3Rvcmljb0ludGVybmFjYW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGlzdMOzcmljbyBkZSBJbnRlcm5hw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0UHJldmlzYW9SZXRvcm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpc8OjbyBkZSBSZXRvcm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=