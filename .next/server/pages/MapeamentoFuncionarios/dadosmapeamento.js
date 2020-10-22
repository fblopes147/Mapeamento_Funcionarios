module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/MapeamentoFuncionarios/dadosmapeamento.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ComponenteMapeamento.js":
/*!********************************************!*\
  !*** ./components/ComponenteMapeamento.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirMapeamento; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteMapeamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';


const listaPlanoSaude = [{
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
const listaStatusExame = [{
  value: '-',
  label: '-'
}, {
  value: 'Positivo',
  label: 'Positivo'
}, {
  value: 'Negativo',
  label: 'Negativo'
}];
const listaOpcoes = [{
  value: '-',
  label: '-'
}, {
  value: 'S',
  label: 'Sim'
}, {
  value: 'N',
  label: 'Não'
}];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
}));

const SalvarDados = () => {
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

function InserirMapeamento() {
  // const [state, setState] = React.useState({
  //     chkPossuiSintomas: false,
  //     chkGrupoRisco: false,
  //     chkContatoMedico: false,
  //     chkInternadoHoje: false,
  // });
  const [possuiSintomas, setPossuiSintomas] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [grupoRisco, setGrupoRisco] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [planoSaude, setPlanoSaude] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [contatoMedico, setContatoMedico] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [statusExame, setStatusExame] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [internadoHoje, setInternadoHoje] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-'); // const handleChangePossuiSintomas = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //     document.querySelector("[id='chkPossuiSintomas']").value = event.target.value;
  // };
  // const handleChange = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const handleChangePossuiSintomas = event => {
    document.querySelector("[id='txtPossuiSintomas']").value = event.target.value;
    setPossuiSintomas(event.target.value);
  };

  const handleChangeGrupoRisco = event => {
    document.querySelector("[id='txtGrupoRisco']").value = event.target.value;
    setGrupoRisco(event.target.value);
  };

  const handleChangePlanoSaude = event => {
    document.querySelector("[id='txtPlanoSaude']").value = event.target.value;
    setPlanoSaude(event.target.value);
  };

  const handleChangeContatoMedico = event => {
    document.querySelector("[id='txtContatoMedico']").value = event.target.value;
    setContatoMedico(event.target.value);
  };

  const handleChangeStatusExame = event => {
    document.querySelector("[id='txtStatusExame']").value = event.target.value;
    setStatusExame(event.target.value);
  };

  const handleChangeInternadoHoje = event => {
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
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "Voltar")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaOpcoes.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaOpcoes.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaPlanoSaude.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaOpcoes.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaStatusExame.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaOpcoes.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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

/***/ }),

/***/ "./pages/MapeamentoFuncionarios/dadosmapeamento.js":
/*!*********************************************************!*\
  !*** ./pages/MapeamentoFuncionarios/dadosmapeamento.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ComponenteMapeamento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ComponenteMapeamento */ "./components/ComponenteMapeamento.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\pages\\MapeamentoFuncionarios\\dadosmapeamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    row: true,
    style: {
      marginBottom: "10px",
      marginLeft: "20px",
      marginRight: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      fontSize: "30px",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "ADICIONAR MAPEAMENTO")), __jsx(_components_ComponenteMapeamento__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wb25lbnRlTWFwZWFtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zbWFwZWFtZW50by5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsibGlzdGFQbGFub1NhdWRlIiwidmFsdWUiLCJsYWJlbCIsImxpc3RhU3RhdHVzRXhhbWUiLCJsaXN0YU9wY29lcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpbiIsInNwYWNpbmciLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJTYWx2YXJEYWRvcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbGVydCIsIkluc2VyaXJNYXBlYW1lbnRvIiwicG9zc3VpU2ludG9tYXMiLCJzZXRQb3NzdWlTaW50b21hcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJncnVwb1Jpc2NvIiwic2V0R3J1cG9SaXNjbyIsInBsYW5vU2F1ZGUiLCJzZXRQbGFub1NhdWRlIiwiY29udGF0b01lZGljbyIsInNldENvbnRhdG9NZWRpY28iLCJzdGF0dXNFeGFtZSIsInNldFN0YXR1c0V4YW1lIiwiaW50ZXJuYWRvSG9qZSIsInNldEludGVybmFkb0hvamUiLCJoYW5kbGVDaGFuZ2VQb3NzdWlTaW50b21hcyIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlR3J1cG9SaXNjbyIsImhhbmRsZUNoYW5nZVBsYW5vU2F1ZGUiLCJoYW5kbGVDaGFuZ2VDb250YXRvTWVkaWNvIiwiaGFuZGxlQ2hhbmdlU3RhdHVzRXhhbWUiLCJoYW5kbGVDaGFuZ2VJbnRlcm5hZG9Ib2plIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic2hyaW5rIiwibWFwIiwib3B0aW9uIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zbWFwZWFtZW50by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvTWFwZWFtZW50b0Z1bmNpb25hcmlvcy9kYWRvc21hcGVhbWVudG8uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5cclxuLy8gaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbi8vIGltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcblxyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcblxyXG5jb25zdCBsaXN0YVBsYW5vU2F1ZGUgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdOL0EnLCBsYWJlbDogJ07Do28gUG9zc3VpJ30sXHJcbiAgICB7dmFsdWU6ICdBbGxpYW56JywgbGFiZWw6ICdBbGxpYW56J30sXHJcbiAgICB7dmFsdWU6ICdBbWlsJywgbGFiZWw6ICdBbWlsJ30sXHJcbiAgICB7dmFsdWU6ICdCcmFkZXNjbycsIGxhYmVsOiAnQnJhZGVzY28nfSxcclxuICAgIHt2YWx1ZTogJ0dvbGRlbkNyb3NzJywgbGFiZWw6ICdHb2xkZW4gQ3Jvc3MnfSxcclxuICAgIHt2YWx1ZTogJ05vdHJlRGFtZUludGVybWVkaWNhJywgbGFiZWw6ICdOb3RyZSBEYW1lIEludGVybcOpZGljYSd9LFxyXG4gICAge3ZhbHVlOiAnUG9ydG9TZWd1cm8nLCBsYWJlbDogJ1BvcnRvIFNlZ3Vybyd9LFxyXG4gICAge3ZhbHVlOiAnUHJldmVudFNlbmlvcicsIGxhYmVsOiAnUHJldmVudCBTZW5pb3InfSxcclxuICAgIHt2YWx1ZTogJ1Nhb0NyaXN0b3ZhbycsIGxhYmVsOiAnU8OjbyBDcmlzdMOzdsOjbyd9LFxyXG4gICAge3ZhbHVlOiAnU2VndXJvc1VuaW1lZCcsIGxhYmVsOiAnU2VndXJvcyBVbmltZWQnfSxcclxuICAgIHt2YWx1ZTogJ1NvbXBvJywgbGFiZWw6ICdTb21wbyd9LFxyXG4gICAge3ZhbHVlOiAnU3VsQW1lcmljYScsIGxhYmVsOiAnU3VsIEFtw6lyaWNhJ30sXHJcbiAgICB7dmFsdWU6ICdUcmFzbW9udGFubycsIGxhYmVsOiAnVHJhc21vbnRhbm8nfSxcclxuICAgIHt2YWx1ZTogJ1VuaW1lZCcsIGxhYmVsOiAnVW5pbWVkJ30sXHJcbiAgICB7dmFsdWU6ICdPdXRyb3MnLCBsYWJlbDogJ091dHJvcyd9LFxyXG5dXHJcblxyXG5jb25zdCBsaXN0YVN0YXR1c0V4YW1lID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnUG9zaXRpdm8nLCBsYWJlbDogJ1Bvc2l0aXZvJ30sXHJcbiAgICB7dmFsdWU6ICdOZWdhdGl2bycsIGxhYmVsOiAnTmVnYXRpdm8nfSxcclxuXVxyXG5cclxuY29uc3QgbGlzdGFPcGNvZXMgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdTJywgbGFiZWw6ICdTaW0nfSxcclxuICAgIHt2YWx1ZTogJ04nLCBsYWJlbDogJ07Do28nfSxcclxuXVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgd2l0aG91dExhYmVsOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMjVjaCcsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTYWx2YXJEYWRvcyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiSWQgQXNzb2NpYWRvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dElkQXNzb2NpYWRvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb250YXRvIENvbnRhbWluYWRvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dENvbnRhdG9Db250YW1pbmFkbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW9yYSBDb20gUXVlbT86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0TW9yYVF1ZW0nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIsOabHRpbW8gRGlhIFRyYWJhbGhhZG86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VWx0aW1vRGlhVHJhYmFsaGFkbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUG9zc3VpIFNpbnRvbWFzOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFBvc3N1aVNpbnRvbWFzJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJTaW50b21hczogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTaW50b21hcyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiR3J1cG8gZGUgUmlzY286IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0R3J1cG9SaXNjbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxhbm8gZGUgU2HDumRlOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFBsYW5vU2F1ZGUnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgZGUgUmVnaXN0cm86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RGF0YVJlZ2lzdHJvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb250YWN0b3UgTcOpZGljbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRDb250YXRvTWVkaWNvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhIGRlIENvbnRhdG8gTcOpZGljbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHREdENvbnRhdG9NZWRpY28nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgZG8gRXhhbWU6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RHRFeGFtZSddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU3RhdHVzIGRvIEV4YW1lOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFN0YXR1c0V4YW1lJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJSZXNwb25zw6F2ZWwgQ2VudHJhbDogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRSZXNwQ2VudHJhbCddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc8OhdmVsIE3DqWRpY286IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0UmVzcE1lZGljbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc8OhdmVsIFTDqWNuaWNvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFJlc3BUZWNpbmNvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJJbnRlcm5hZG8gSG9qZTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRJbnRlcm5hZG9Ib2plJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJIb3NwaXRhbDogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRIb3NwaXRhbCddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGVyw61vZG8gZGUgSW50ZXJuYcOnw6NvIC0gSW7DrWNpbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHREdEluaWNpb0ludGVybmFjYW8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBlcsOtb2RvIGRlIEludGVybmHDp8OjbyAtIFTDqXJtaW5vOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0RmluYWxJbnRlcm5hY2FvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJIaXN0w7NyaWNvIGRlIEludGVybmHDp8OjbzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRIaXN0b3JpY29JbnRlcm5hY2FvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJQcmV2aXPDo28gZGUgUmV0b3JubzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHREdFByZXZpc2FvUmV0b3JubyddXCIpLnZhbHVlKTtcclxuICAgIC8vIEFjZXNzYXIgQVBJIGRlIHNhbHZhciBkYWRvcyBubyBCYW5jb1xyXG4gICAgYWxlcnQoXCJPcyBkYWRvcyBmb3JhbSBzYWx2b3MgY29tIHN1Y2Vzc28hXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnNlcmlyTWFwZWFtZW50bygpe1xyXG4gICAgLy8gY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAvLyAgICAgY2hrUG9zc3VpU2ludG9tYXM6IGZhbHNlLFxyXG4gICAgLy8gICAgIGNoa0dydXBvUmlzY286IGZhbHNlLFxyXG4gICAgLy8gICAgIGNoa0NvbnRhdG9NZWRpY286IGZhbHNlLFxyXG4gICAgLy8gICAgIGNoa0ludGVybmFkb0hvamU6IGZhbHNlLFxyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zdCBbcG9zc3VpU2ludG9tYXMsIHNldFBvc3N1aVNpbnRvbWFzXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbZ3J1cG9SaXNjbywgc2V0R3J1cG9SaXNjb10gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW3BsYW5vU2F1ZGUsIHNldFBsYW5vU2F1ZGVdID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFtjb250YXRvTWVkaWNvLCBzZXRDb250YXRvTWVkaWNvXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzRXhhbWUsIHNldFN0YXR1c0V4YW1lXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbaW50ZXJuYWRvSG9qZSwgc2V0SW50ZXJuYWRvSG9qZV0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZUNoYW5nZVBvc3N1aVNpbnRvbWFzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0nY2hrUG9zc3VpU2ludG9tYXMnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBvc3N1aVNpbnRvbWFzID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFBvc3N1aVNpbnRvbWFzJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0UG9zc3VpU2ludG9tYXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlR3J1cG9SaXNjbyA9IGV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRHcnVwb1Jpc2NvJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0R3J1cG9SaXNjbyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQbGFub1NhdWRlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFBsYW5vU2F1ZGUnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRQbGFub1NhdWRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRhdG9NZWRpY28gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Q29udGF0b01lZGljbyddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldENvbnRhdG9NZWRpY28oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3RhdHVzRXhhbWUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U3RhdHVzRXhhbWUnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTdGF0dXNFeGFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnRlcm5hZG9Ib2plID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEludGVybmFkb0hvamUnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRJbnRlcm5hZG9Ib2plKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIzMHB4XCIsbWFyZ2luTGVmdDpcIjIwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2F2ZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17U2FsdmFyRGFkb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDpcIjIwcHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FsdmFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEJhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRJZEFzc29jaWFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJZCBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dENvbnRhdG9Db250YW1pbmFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250YXRvIENvbnRhbWluYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRNb3JhUXVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JhIENvbSBRdWVtP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0VWx0aW1vRGlhVHJhYmFsaGFkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLDmmx0aW1vIERpYSBUcmFiYWxoYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTc1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0UG9zc3VpU2ludG9tYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zc3VpIFNpbnRvbWFzP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3NzdWlTaW50b21hc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUG9zc3VpU2ludG9tYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFPcGNvZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFNpbnRvbWFzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNpbnRvbWFzXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCI1MDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dEdydXBvUmlzY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3J1cG8gZGUgUmlzY28/XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dydXBvUmlzY299XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUdydXBvUmlzY299XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFPcGNvZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFBsYW5vU2F1ZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxhbm8gZGUgU2HDumRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYW5vU2F1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBsYW5vU2F1ZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFQbGFub1NhdWRlLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHREYXRhUmVnaXN0cm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBSZWdpc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dENvbnRhdG9NZWRpY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGFjdG91IE3DqWRpY28/XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRhdG9NZWRpY299XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbnRhdG9NZWRpY299XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFPcGNvZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0Q29udGF0b01lZGljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIGRlIENvbnRhdG8gTcOpZGljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE4MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0RXhhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkbyBFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE3NXB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFN0YXR1c0V4YW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1cyBkbyBFeGFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE0MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXNFeGFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3RhdHVzRXhhbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFTdGF0dXNFeGFtZS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0UmVzcENlbnRyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVzcG9uc8OhdmVsIENlbnRyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFJlc3BNZWRpY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVzcG9uc8OhdmVsIE3DqWRpY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFJlc3BUZWNpbmNvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlc3BvbnPDoXZlbCBUw6ljbmljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjMwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxNXB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0SW50ZXJuYWRvSG9qZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnRlcm5hZG8gSG9qZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW50ZXJuYWRvSG9qZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW50ZXJuYWRvSG9qZX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YU9wY29lcy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0SG9zcGl0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSG9zcGl0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzMzBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0SW5pY2lvSW50ZXJuYWNhb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXLDrW9kbyBkZSBJbnRlcm5hw6fDo28gLSBJbsOtY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RHRGaW5hbEludGVybmFjYW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGVyw61vZG8gZGUgSW50ZXJuYcOnw6NvIC0gVMOpcm1pbm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyNDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjE1cHhcIixtYXJnaW5MZWZ0OlwiMjBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRIaXN0b3JpY29JbnRlcm5hY2FvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhpc3TDs3JpY28gZGUgSW50ZXJuYcOnw6NvXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0UHJldmlzYW9SZXRvcm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpc8OjbyBkZSBSZXRvcm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGFkb3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21wb25lbnRlTWFwZWFtZW50byc7XHJcblxyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjEwcHhcIixtYXJnaW5MZWZ0OlwiMjBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBmb250V2VpZ2h0OlwiYm9sZFwifX0gPkFESUNJT05BUiBNQVBFQU1FTlRPPC9hPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPERhZG9zIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==