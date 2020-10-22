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


var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteMapeamento.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';


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
var listaOpcoes = [{
  value: '-',
  label: '-'
}, {
  value: 'S',
  label: 'Sim'
}, {
  value: 'N',
  label: 'Não'
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
});

var SalvarDados = function SalvarDados() {
  console.log("Id Associado: " + document.querySelector("[id='txtIdAssociado']").value);
  console.log("Contato Contaminado: " + document.querySelector("[id='txtContatoContaminado']").value);
  console.log("Mora Com Quem?: " + document.querySelector("[id='txtMoraQuem']").value);
  console.log("Último Dia Trabalhado: " + document.querySelector("[id='txtUltimoDiaTrabalhado']").value);
  console.log("Possui Sintomas: " + document.querySelector("[id='txtPossuiSintomas']").value);
  console.log("Sintomas: " + document.querySelector("[id='txtSintomas']").value);
  console.log("Grupo de Risco: " + document.querySelector("[id='txtGrupoRisco']").value);
  console.log("Plano de Saúde: " + document.querySelector("[id='txtPlanoSaude']").value);
  console.log("Data de Registro: " + document.querySelector("[id='txtDataRegistro']").value);
  console.log("Contactou Médico: " + document.querySelector("[id='txtContatoMedico']").value);
  console.log("Data de Contato Médico: " + document.querySelector("[id='txtDtContatoMedico']").value);
  console.log("Data do Exame: " + document.querySelector("[id='txtDtExame']").value);
  console.log("Status do Exame: " + document.querySelector("[id='txtStatusExame']").value);
  console.log("Responsável Central: " + document.querySelector("[id='txtRespCentral']").value);
  console.log("Responsável Médico: " + document.querySelector("[id='txtRespMedico']").value);
  console.log("Responsável Técnico: " + document.querySelector("[id='txtRespTecinco']").value);
  console.log("Internado Hoje: " + document.querySelector("[id='txtInternadoHoje']").value);
  console.log("Hospital: " + document.querySelector("[id='txtHospital']").value);
  console.log("Período de Internação - Início: " + document.querySelector("[id='txtDtInicioInternacao']").value);
  console.log("Período de Internação - Término: " + document.querySelector("[id='txtDtFinalInternacao']").value);
  console.log("Histórico de Internação: " + document.querySelector("[id='txtHistoricoInternacao']").value);
  console.log("Previsão de Retorno: " + document.querySelector("[id='txtDtPrevisaoRetorno']").value); // Acessar API de salvar dados no Banco

  alert("Os dados foram salvos com sucesso!");
};

_c = SalvarDados;
function InserirMapeamento() {
  _s();

  var _this = this;

  // const [state, setState] = React.useState({
  //     chkPossuiSintomas: false,
  //     chkGrupoRisco: false,
  //     chkContatoMedico: false,
  //     chkInternadoHoje: false,
  // });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      possuiSintomas = _React$useState2[0],
      setPossuiSintomas = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      grupoRisco = _React$useState4[0],
      setGrupoRisco = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      planoSaude = _React$useState6[0],
      setPlanoSaude = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      contatoMedico = _React$useState8[0],
      setContatoMedico = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      statusExame = _React$useState10[0],
      setStatusExame = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('-'),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState11, 2),
      internadoHoje = _React$useState12[0],
      setInternadoHoje = _React$useState12[1]; // const handleChangePossuiSintomas = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //     document.querySelector("[id='chkPossuiSintomas']").value = event.target.value;
  // };
  // const handleChange = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  // };


  var handleChangePossuiSintomas = function handleChangePossuiSintomas(event) {
    document.querySelector("[id='txtPossuiSintomas']").value = event.target.value;
    setPossuiSintomas(event.target.value);
  };

  var handleChangeGrupoRisco = function handleChangeGrupoRisco(event) {
    document.querySelector("[id='txtGrupoRisco']").value = event.target.value;
    setGrupoRisco(event.target.value);
  };

  var handleChangePlanoSaude = function handleChangePlanoSaude(event) {
    document.querySelector("[id='txtPlanoSaude']").value = event.target.value;
    setPlanoSaude(event.target.value);
  };

  var handleChangeContatoMedico = function handleChangeContatoMedico(event) {
    document.querySelector("[id='txtContatoMedico']").value = event.target.value;
    setContatoMedico(event.target.value);
  };

  var handleChangeStatusExame = function handleChangeStatusExame(event) {
    document.querySelector("[id='txtStatusExame']").value = event.target.value;
    setStatusExame(event.target.value);
  };

  var handleChangeInternadoHoje = function handleChangeInternadoHoje(event) {
    document.querySelector("[id='txtInternadoHoje']").value = event.target.value;
    setInternadoHoje(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "20px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
        lineNumber: 153,
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
      lineNumber: 149,
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
        lineNumber: 163,
        columnNumber: 32
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "Voltar")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 170,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 181,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 203,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtPossuiSintomas",
    select: true,
    label: "Possui Sintomas?",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: possuiSintomas,
    onChange: handleChangePossuiSintomas,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, listaOpcoes.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 232,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtGrupoRisco",
    select: true,
    label: "Grupo de Risco?",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: grupoRisco,
    onChange: handleChangeGrupoRisco,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, listaOpcoes.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 263,
      columnNumber: 17
    }
  }, listaPlanoSaude.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 279,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtContatoMedico",
    select: true,
    label: "Contactou M\xE9dico?",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: contatoMedico,
    onChange: handleChangeContatoMedico,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, listaOpcoes.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 308,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "30px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 323,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtStatusExame",
    select: true,
    label: "Status do Exame",
    style: {
      margin: 8,
      width: "140px",
      marginRight: "10px"
    },
    size: "small",
    value: statusExame,
    onChange: handleChangeStatusExame,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  }, listaStatusExame.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtRespCentral",
    label: "Respons\xE1vel Central",
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
      lineNumber: 352,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtRespMedico",
    label: "Respons\xE1vel M\xE9dico",
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
      lineNumber: 363,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtRespTecinco",
    label: "Respons\xE1vel T\xE9cnico",
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
      lineNumber: 374,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "15px",
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtInternadoHoje",
    select: true,
    label: "Internado Hoje?",
    style: {
      margin: 8,
      width: "150px",
      marginRight: "10px"
    },
    size: "small",
    value: internadoHoje,
    onChange: handleChangeInternadoHoje,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 17
    }
  }, listaOpcoes.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 25
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 403,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 414,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 427,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginBottom: "15px",
      marginLeft: "20px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "txtHistoricoInternacao",
    label: "Hist\xF3rico de Interna\xE7\xE3o",
    multiline: true,
    rows: 4,
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
      lineNumber: 442,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    style: {
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 457,
      columnNumber: 17
    }
  })));
}

_s(InserirMapeamento, "KUcZ30dl9v6l0gCgmd898YcVS8c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRlTWFwZWFtZW50by5qcyJdLCJuYW1lcyI6WyJsaXN0YVBsYW5vU2F1ZGUiLCJ2YWx1ZSIsImxhYmVsIiwibGlzdGFTdGF0dXNFeGFtZSIsImxpc3RhT3Bjb2VzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ3aXRob3V0TGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsIlNhbHZhckRhZG9zIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFsZXJ0IiwiSW5zZXJpck1hcGVhbWVudG8iLCJSZWFjdCIsInVzZVN0YXRlIiwicG9zc3VpU2ludG9tYXMiLCJzZXRQb3NzdWlTaW50b21hcyIsImdydXBvUmlzY28iLCJzZXRHcnVwb1Jpc2NvIiwicGxhbm9TYXVkZSIsInNldFBsYW5vU2F1ZGUiLCJjb250YXRvTWVkaWNvIiwic2V0Q29udGF0b01lZGljbyIsInN0YXR1c0V4YW1lIiwic2V0U3RhdHVzRXhhbWUiLCJpbnRlcm5hZG9Ib2plIiwic2V0SW50ZXJuYWRvSG9qZSIsImhhbmRsZUNoYW5nZVBvc3N1aVNpbnRvbWFzIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVDaGFuZ2VHcnVwb1Jpc2NvIiwiaGFuZGxlQ2hhbmdlUGxhbm9TYXVkZSIsImhhbmRsZUNoYW5nZUNvbnRhdG9NZWRpY28iLCJoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZSIsImhhbmRsZUNoYW5nZUludGVybmFkb0hvamUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FB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QUFDLFVBVlo7QUFXSSxRQUFJLEVBQUMsT0FYVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F0U0osRUFxVEksTUFBQyxtRUFBRDtBQUFXLE9BQUcsTUFBZDtBQUFlLFNBQUssRUFBRTtBQUFDRixnQkFBVSxFQUFDLE1BQVo7QUFBbUJDLGlCQUFXLEVBQUM7QUFBL0IsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFDSSxNQUFFLEVBQUMsc0JBRFA7QUFFSSxTQUFLLEVBQUMsd0JBRlY7QUFHSSxTQUFLLEVBQUU7QUFBRXhDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QmdDLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFFBQUksRUFBQyxNQUpUO0FBS0ksVUFBTSxFQUFDLFlBTFg7QUFNSSxVQUFNLEVBQUMsUUFOWDtBQU9JLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FQckI7QUFVSSxXQUFPLEVBQUMsVUFWWjtBQVdJLFFBQUksRUFBQyxPQVhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXJUSixDQURKO0FBdVVIOztHQTVYdUIxQixpQjs7TUFBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTWFwZWFtZW50b0Z1bmNpb25hcmlvcy9kYWRvc21hcGVhbWVudG8uNTg0ZGI0MzgwZmY1NDBiZjA4NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NhdmUnO1xyXG5pbXBvcnQgQmFja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFjayc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcblxyXG4vLyBpbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuLy8gaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuXHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuXHJcbmNvbnN0IGxpc3RhUGxhbm9TYXVkZSA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ04vQScsIGxhYmVsOiAnTsOjbyBQb3NzdWknfSxcclxuICAgIHt2YWx1ZTogJ0FsbGlhbnonLCBsYWJlbDogJ0FsbGlhbnonfSxcclxuICAgIHt2YWx1ZTogJ0FtaWwnLCBsYWJlbDogJ0FtaWwnfSxcclxuICAgIHt2YWx1ZTogJ0JyYWRlc2NvJywgbGFiZWw6ICdCcmFkZXNjbyd9LFxyXG4gICAge3ZhbHVlOiAnR29sZGVuQ3Jvc3MnLCBsYWJlbDogJ0dvbGRlbiBDcm9zcyd9LFxyXG4gICAge3ZhbHVlOiAnTm90cmVEYW1lSW50ZXJtZWRpY2EnLCBsYWJlbDogJ05vdHJlIERhbWUgSW50ZXJtw6lkaWNhJ30sXHJcbiAgICB7dmFsdWU6ICdQb3J0b1NlZ3VybycsIGxhYmVsOiAnUG9ydG8gU2VndXJvJ30sXHJcbiAgICB7dmFsdWU6ICdQcmV2ZW50U2VuaW9yJywgbGFiZWw6ICdQcmV2ZW50IFNlbmlvcid9LFxyXG4gICAge3ZhbHVlOiAnU2FvQ3Jpc3RvdmFvJywgbGFiZWw6ICdTw6NvIENyaXN0w7N2w6NvJ30sXHJcbiAgICB7dmFsdWU6ICdTZWd1cm9zVW5pbWVkJywgbGFiZWw6ICdTZWd1cm9zIFVuaW1lZCd9LFxyXG4gICAge3ZhbHVlOiAnU29tcG8nLCBsYWJlbDogJ1NvbXBvJ30sXHJcbiAgICB7dmFsdWU6ICdTdWxBbWVyaWNhJywgbGFiZWw6ICdTdWwgQW3DqXJpY2EnfSxcclxuICAgIHt2YWx1ZTogJ1RyYXNtb250YW5vJywgbGFiZWw6ICdUcmFzbW9udGFubyd9LFxyXG4gICAge3ZhbHVlOiAnVW5pbWVkJywgbGFiZWw6ICdVbmltZWQnfSxcclxuICAgIHt2YWx1ZTogJ091dHJvcycsIGxhYmVsOiAnT3V0cm9zJ30sXHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhU3RhdHVzRXhhbWUgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdQb3NpdGl2bycsIGxhYmVsOiAnUG9zaXRpdm8nfSxcclxuICAgIHt2YWx1ZTogJ05lZ2F0aXZvJywgbGFiZWw6ICdOZWdhdGl2byd9LFxyXG5dXHJcblxyXG5jb25zdCBsaXN0YU9wY29lcyA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ1MnLCBsYWJlbDogJ1NpbSd9LFxyXG4gICAge3ZhbHVlOiAnTicsIGxhYmVsOiAnTsOjbyd9LFxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB3aXRob3V0TGFiZWw6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNhbHZhckRhZG9zID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJJZCBBc3NvY2lhZG86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0SWRBc3NvY2lhZG8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRhdG8gQ29udGFtaW5hZG86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Q29udGF0b0NvbnRhbWluYWRvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJNb3JhIENvbSBRdWVtPzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRNb3JhUXVlbSddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiw5psdGltbyBEaWEgVHJhYmFsaGFkbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRVbHRpbW9EaWFUcmFiYWxoYWRvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJQb3NzdWkgU2ludG9tYXM6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UG9zc3VpU2ludG9tYXMnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNpbnRvbWFzOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFNpbnRvbWFzJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJHcnVwbyBkZSBSaXNjbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRHcnVwb1Jpc2NvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGFubyBkZSBTYcO6ZGU6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UGxhbm9TYXVkZSddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBkZSBSZWdpc3RybzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHREYXRhUmVnaXN0cm8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRhY3RvdSBNw6lkaWNvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dENvbnRhdG9NZWRpY28nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgZGUgQ29udGF0byBNw6lkaWNvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0Q29udGF0b01lZGljbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBkbyBFeGFtZTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHREdEV4YW1lJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJTdGF0dXMgZG8gRXhhbWU6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U3RhdHVzRXhhbWUnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnPDoXZlbCBDZW50cmFsOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFJlc3BDZW50cmFsJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJSZXNwb25zw6F2ZWwgTcOpZGljbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRSZXNwTWVkaWNvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJSZXNwb25zw6F2ZWwgVMOpY25pY286IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UmVzcFRlY2luY28nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkludGVybmFkbyBIb2plOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEludGVybmFkb0hvamUnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhvc3BpdGFsOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEhvc3BpdGFsJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJQZXLDrW9kbyBkZSBJbnRlcm5hw6fDo28gLSBJbsOtY2lvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0SW5pY2lvSW50ZXJuYWNhbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGVyw61vZG8gZGUgSW50ZXJuYcOnw6NvIC0gVMOpcm1pbm86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RHRGaW5hbEludGVybmFjYW8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhpc3TDs3JpY28gZGUgSW50ZXJuYcOnw6NvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEhpc3Rvcmljb0ludGVybmFjYW8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByZXZpc8OjbyBkZSBSZXRvcm5vOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0UHJldmlzYW9SZXRvcm5vJ11cIikudmFsdWUpO1xyXG4gICAgLy8gQWNlc3NhciBBUEkgZGUgc2FsdmFyIGRhZG9zIG5vIEJhbmNvXHJcbiAgICBhbGVydChcIk9zIGRhZG9zIGZvcmFtIHNhbHZvcyBjb20gc3VjZXNzbyFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc2VyaXJNYXBlYW1lbnRvKCl7XHJcbiAgICAvLyBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIC8vICAgICBjaGtQb3NzdWlTaW50b21hczogZmFsc2UsXHJcbiAgICAvLyAgICAgY2hrR3J1cG9SaXNjbzogZmFsc2UsXHJcbiAgICAvLyAgICAgY2hrQ29udGF0b01lZGljbzogZmFsc2UsXHJcbiAgICAvLyAgICAgY2hrSW50ZXJuYWRvSG9qZTogZmFsc2UsXHJcbiAgICAvLyB9KTtcclxuICAgIGNvbnN0IFtwb3NzdWlTaW50b21hcywgc2V0UG9zc3VpU2ludG9tYXNdID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFtncnVwb1Jpc2NvLCBzZXRHcnVwb1Jpc2NvXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbcGxhbm9TYXVkZSwgc2V0UGxhbm9TYXVkZV0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW2NvbnRhdG9NZWRpY28sIHNldENvbnRhdG9NZWRpY29dID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFtzdGF0dXNFeGFtZSwgc2V0U3RhdHVzRXhhbWVdID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFtpbnRlcm5hZG9Ib2plLCBzZXRJbnRlcm5hZG9Ib2plXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlUG9zc3VpU2ludG9tYXMgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcclxuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSdjaGtQb3NzdWlTaW50b21hcyddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUG9zc3VpU2ludG9tYXMgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UG9zc3VpU2ludG9tYXMnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRQb3NzdWlTaW50b21hcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VHcnVwb1Jpc2NvID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEdydXBvUmlzY28nXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRHcnVwb1Jpc2NvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBsYW5vU2F1ZGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UGxhbm9TYXVkZSddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFBsYW5vU2F1ZGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ29udGF0b01lZGljbyA9IGV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRDb250YXRvTWVkaWNvJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q29udGF0b01lZGljbyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTdGF0dXNFeGFtZSddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFN0YXR1c0V4YW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUludGVybmFkb0hvamUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0SW50ZXJuYWRvSG9qZSddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEludGVybmFkb0hvamUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMjBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTYWx2YXJEYWRvc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYWx2YXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dElkQXNzb2NpYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIklkIEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0Q29udGF0b0NvbnRhbWluYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhdG8gQ29udGFtaW5hZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dE1vcmFRdWVtXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vcmEgQ29tIFF1ZW0/XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRVbHRpbW9EaWFUcmFiYWxoYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIsOabHRpbW8gRGlhIFRyYWJhbGhhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNzVweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRQb3NzdWlTaW50b21hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NzdWkgU2ludG9tYXM/XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bvc3N1aVNpbnRvbWFzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQb3NzdWlTaW50b21hc31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YU9wY29lcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0U2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIzMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0R3J1cG9SaXNjb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcnVwbyBkZSBSaXNjbz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3J1cG9SaXNjb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlR3J1cG9SaXNjb31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YU9wY29lcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0UGxhbm9TYXVkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGFubyBkZSBTYcO6ZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGxhbm9TYXVkZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGxhbm9TYXVkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YVBsYW5vU2F1ZGUubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dERhdGFSZWdpc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIGRlIFJlZ2lzdHJvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0Q29udGF0b01lZGljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250YWN0b3UgTcOpZGljbz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGF0b01lZGljb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ29udGF0b01lZGljb31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YU9wY29lcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRDb250YXRvTWVkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgZGUgQ29udGF0byBNw6lkaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIzMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIGRvIEV4YW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTc1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0U3RhdHVzRXhhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzIGRvIEV4YW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTQwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c0V4YW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdGF0dXNFeGFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YVN0YXR1c0V4YW1lLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRSZXNwQ2VudHJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWwgQ2VudHJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcE1lZGljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zw6F2ZWwgTcOpZGljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcFRlY2luY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVzcG9uc8OhdmVsIFTDqWNuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMzAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRJbnRlcm5hZG9Ib2plXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkludGVybmFkbyBIb2plP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnRlcm5hZG9Ib2plfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnRlcm5hZG9Ib2plfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhT3Bjb2VzLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRIb3NwaXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIb3NwaXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMzMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRJbmljaW9JbnRlcm5hY2FvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcsOtb2RvIGRlIEludGVybmHDp8OjbyAtIEluw61jaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREdEZpbmFsSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXLDrW9kbyBkZSBJbnRlcm5hw6fDo28gLSBUw6lybWlub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjI0MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTVweFwiLG1hcmdpbkxlZnQ6XCIyMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dEhpc3Rvcmljb0ludGVybmFjYW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGlzdMOzcmljbyBkZSBJbnRlcm5hw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRQcmV2aXNhb1JldG9ybm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJldmlzw6NvIGRlIFJldG9ybm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==