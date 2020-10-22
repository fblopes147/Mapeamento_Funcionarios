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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/MapeamentoFuncionarios/dadosfuncionarios.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ComponenteFuncionarios.js":
/*!**********************************************!*\
  !*** ./components/ComponenteFuncionarios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InserirNovoFuncionario; });
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
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\components\\ComponenteFuncionarios.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const listaSexo = [{
  value: '-',
  label: '-'
}, {
  value: 'Feminino',
  label: 'F'
}, {
  value: 'Masculino',
  label: 'M'
}];
const listaEstadoCivil = [{
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
const listaTipoPresenca = [{
  value: '-',
  label: '-'
}, {
  value: 'Presencial',
  label: 'Presencial'
}, {
  value: 'Remoto',
  label: 'Remoto'
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
})); // var nomeFuncionario = "";

var itemSexo = "";

const SalvarDados = () => {
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

function InserirNovoFuncionario() {
  const [sexo, setSexo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [estadoCivil, setEstadoCivil] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [tipoPresenca, setTipoPresenca] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');

  const handleChangeSexo = event => {
    document.querySelector("[id='txtSexo']").value = event.target.value;
    setSexo(event.target.value);
  };

  const handleChangeEstadoCivil = event => {
    document.querySelector("[id='txtEstadoCivil']").value = event.target.value;
    setEstadoCivil(event.target.value);
  };

  const handleChangeTipoPresenca = event => {
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
      lineNumber: 100,
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
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "Voltar")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaSexo.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaEstadoCivil.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, option.label))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, listaTipoPresenca.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, option.label)))), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
    row: true,
    style: {
      marginBottom: "20px",
      marginLeft: "20px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "txtProntuario",
    label: "Prontu\xE1rio",
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

/***/ }),

/***/ "./pages/MapeamentoFuncionarios/dadosfuncionarios.js":
/*!***********************************************************!*\
  !*** ./pages/MapeamentoFuncionarios/dadosfuncionarios.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ComponenteFuncionarios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ComponenteFuncionarios */ "./components/ComponenteFuncionarios.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\pages\\MapeamentoFuncionarios\\dadosfuncionarios.js";
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
  }, "ADICIONAR NOVO ASSOCIADO")), __jsx(_components_ComponenteFuncionarios__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wb25lbnRlRnVuY2lvbmFyaW9zLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvZGFkb3NmdW5jaW9uYXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImxpc3RhU2V4byIsInZhbHVlIiwibGFiZWwiLCJsaXN0YUVzdGFkb0NpdmlsIiwibGlzdGFUaXBvUHJlc2VuY2EiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiaXRlbVNleG8iLCJTYWx2YXJEYWRvcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbGVydCIsIkluc2VyaXJOb3ZvRnVuY2lvbmFyaW8iLCJzZXhvIiwic2V0U2V4byIsIlJlYWN0IiwidXNlU3RhdGUiLCJlc3RhZG9DaXZpbCIsInNldEVzdGFkb0NpdmlsIiwidGlwb1ByZXNlbmNhIiwic2V0VGlwb1ByZXNlbmNhIiwiaGFuZGxlQ2hhbmdlU2V4byIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwiLCJoYW5kbGVDaGFuZ2VUaXBvUHJlc2VuY2EiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQ2Q7QUFBQ0MsT0FBSyxFQUFFLEdBQVI7QUFBYUMsT0FBSyxFQUFFO0FBQXBCLENBRGMsRUFFZDtBQUFDRCxPQUFLLEVBQUUsVUFBUjtBQUFvQkMsT0FBSyxFQUFFO0FBQTNCLENBRmMsRUFHZDtBQUFDRCxPQUFLLEVBQUUsV0FBUjtBQUFxQkMsT0FBSyxFQUFFO0FBQTVCLENBSGMsQ0FBbEI7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUNyQjtBQUFDRixPQUFLLEVBQUUsR0FBUjtBQUFhQyxPQUFLLEVBQUU7QUFBcEIsQ0FEcUIsRUFFckI7QUFBQ0QsT0FBSyxFQUFFLFVBQVI7QUFBb0JDLE9BQUssRUFBRTtBQUEzQixDQUZxQixFQUdyQjtBQUFDRCxPQUFLLEVBQUUsUUFBUjtBQUFrQkMsT0FBSyxFQUFFO0FBQXpCLENBSHFCLEVBSXJCO0FBQUNELE9BQUssRUFBRSxPQUFSO0FBQWlCQyxPQUFLLEVBQUU7QUFBeEIsQ0FKcUIsRUFLckI7QUFBQ0QsT0FBSyxFQUFFLFlBQVI7QUFBc0JDLE9BQUssRUFBRTtBQUE3QixDQUxxQixDQUF6QjtBQVFBLE1BQU1FLGlCQUFpQixHQUFHLENBQ3RCO0FBQUNILE9BQUssRUFBRSxHQUFSO0FBQWFDLE9BQUssRUFBRTtBQUFwQixDQURzQixFQUV0QjtBQUFDRCxPQUFLLEVBQUUsWUFBUjtBQUFzQkMsT0FBSyxFQUFFO0FBQTdCLENBRnNCLEVBR3RCO0FBQUNELE9BQUssRUFBRSxRQUFSO0FBQWtCQyxPQUFLLEVBQUU7QUFBekIsQ0FIc0IsQ0FBMUI7QUFNQSxNQUFNRyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURGLEdBRDZCO0FBSXJDQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFLE1BRFA7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FKK0I7QUFRckNKLFFBQU0sRUFBRTtBQUNKQSxVQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFESixHQVI2QjtBQVdyQ0ksY0FBWSxFQUFFO0FBQ1ZDLGFBQVMsRUFBRVIsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURELEdBWHVCO0FBY3JDTSxXQUFTLEVBQUU7QUFDUEMsU0FBSyxFQUFFO0FBREE7QUFkMEIsQ0FBWixDQUFELENBQTVCLEMsQ0FtQkE7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDdEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQXdCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEdEIsS0FBdEY7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUF5QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixFQUFpRHRCLEtBQXRGO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFXQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDdEIsS0FBaEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFtQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixFQUFnRHRCLEtBQS9FO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFXQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDdEIsS0FBaEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsRUFBbUR0QixLQUE5RTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEdEIsS0FBakY7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkN0QixLQUFwRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ3RCLEtBQWxFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDdEIsS0FBdEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUN0QixLQUFoRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ3RCLEtBQWxFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDdEIsS0FBbEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q3RCLEtBQTlEO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDdEIsS0FBeEU7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkN0QixLQUFwRTtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBYUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ3RCLEtBQXBFO0FBQ0FtQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsRUFBK0N0QixLQUE1RTtBQUNBdUIsT0FBSyxDQUFDLG9DQUFELENBQUw7QUFDSCxDQXJCRDs7QUF1QmUsU0FBU0Msc0JBQVQsR0FBa0M7QUFDN0MsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBQXRDO0FBQ0EsUUFBTSxDQUFDRyxZQUFELEVBQWVDLGVBQWYsSUFBa0NMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBQXhDOztBQUVBLFFBQU1LLGdCQUFnQixHQUFHQyxLQUFLLElBQUk7QUFDOUJiLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUN0QixLQUF6QyxHQUFpRGtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsS0FBOUQ7QUFDQTBCLFdBQU8sQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxLQUFkLENBQVA7QUFDSCxHQUhEOztBQUtBLFFBQU1vQyx1QkFBdUIsR0FBR0YsS0FBSyxJQUFJO0FBQ3JDYixZQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEdEIsS0FBaEQsR0FBd0RrQyxLQUFLLENBQUNDLE1BQU4sQ0FBYW5DLEtBQXJFO0FBQ0E4QixrQkFBYyxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYW5DLEtBQWQsQ0FBZDtBQUNILEdBSEQ7O0FBS0EsUUFBTXFDLHdCQUF3QixHQUFHSCxLQUFLLElBQUk7QUFDdENiLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUR0QixLQUFqRCxHQUF5RGtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsS0FBdEU7QUFDQWdDLG1CQUFlLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsS0FBZCxDQUFmO0FBQ0gsR0FIRDs7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQVcsT0FBRyxNQUFkO0FBQWUsU0FBSyxFQUFFO0FBQUNzQyxrQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLGdCQUFVLEVBQUMsTUFBaEM7QUFBdUNDLGlCQUFXLEVBQUM7QUFBbkQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFDSSxXQUFPLEVBQUMsV0FEWjtBQUVJLFNBQUssRUFBQyxPQUZWO0FBR0ksUUFBSSxFQUFDLE9BSFQ7QUFJSSxhQUFTLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmY7QUFLSSxXQUFPLEVBQUV0QixXQUxiO0FBTUksU0FBSyxFQUFFO0FBQUNzQixpQkFBVyxFQUFDO0FBQWIsS0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFXSSxNQUFDLCtEQUFEO0FBQ0ksV0FBTyxFQUFDLFdBRFo7QUFFSSxTQUFLLEVBQUMsT0FGVjtBQUdJLFFBQUksRUFBQyxPQUhUO0FBSUksYUFBUyxFQUFFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpmO0FBS0ksUUFBSSxFQUFDLFdBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKLENBREosRUFzQkksTUFBQyxrRUFBRDtBQUFXLE9BQUcsTUFBZDtBQUFlLFNBQUssRUFBRTtBQUFDRixrQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLGdCQUFVLEVBQUMsTUFBaEM7QUFBdUNDLGlCQUFXLEVBQUM7QUFBbkQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFDSSxNQUFFLEVBQUMsa0JBRFA7QUFFSSxTQUFLLEVBQUMsbUJBRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWhDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBWUksTUFBQyxrRUFBRDtBQUNJLE1BQUUsRUFBQyxpQkFEUDtBQUVJLFNBQUssRUFBQyxvQkFGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksUUFBSSxFQUFDLE1BSlQ7QUFLSSxVQUFNLEVBQUMsWUFMWDtBQU1JLFVBQU0sRUFBQyxRQU5YO0FBT0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQVByQjtBQVVJLFdBQU8sRUFBQyxVQVZaO0FBV0ksUUFBSSxFQUFDLE9BWFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBeUJJLE1BQUMsa0VBQUQ7QUFDSSxNQUFFLEVBQUMsU0FEUDtBQUVJLFVBQU0sTUFGVjtBQUdJLFNBQUssRUFBQyxNQUhWO0FBSUksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSlg7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLFNBQUssRUFBRWYsSUFOWDtBQU9JLFlBQVEsRUFBRVEsZ0JBUGQ7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUtsQyxTQUFTLENBQUMyQyxHQUFWLENBQWVDLE1BQUQsSUFDWCxNQUFDLGlFQUFEO0FBQVUsT0FBRyxFQUFFQSxNQUFNLENBQUMzQyxLQUF0QjtBQUE2QixTQUFLLEVBQUUyQyxNQUFNLENBQUMzQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0syQyxNQUFNLENBQUMxQyxLQURaLENBREgsQ0FWTCxDQXpCSixFQXlDSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLGdCQURQO0FBRUksVUFBTSxNQUZWO0FBR0ksU0FBSyxFQUFDLGNBSFY7QUFJSSxTQUFLLEVBQUU7QUFBRU8sWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUpYO0FBS0ksUUFBSSxFQUFDLE9BTFQ7QUFNSSxTQUFLLEVBQUVYLFdBTlg7QUFPSSxZQUFRLEVBQUVPLHVCQVBkO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLbEMsZ0JBQWdCLENBQUN3QyxHQUFqQixDQUFzQkMsTUFBRCxJQUNsQixNQUFDLGlFQUFEO0FBQVUsT0FBRyxFQUFFQSxNQUFNLENBQUMzQyxLQUF0QjtBQUE2QixTQUFLLEVBQUUyQyxNQUFNLENBQUMzQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0syQyxNQUFNLENBQUMxQyxLQURaLENBREgsQ0FWTCxDQXpDSixFQXlESSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLFNBRFA7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFTyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsTUFBbkI7QUFBMkJ3QixpQkFBVyxFQUFDO0FBQXZDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6REosRUFvRUksTUFBQyxrRUFBRDtBQUNJLE1BQUUsRUFBQyxtQkFEUDtBQUVJLFNBQUssRUFBQyxVQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwRUosRUErRUksTUFBQyxrRUFBRDtBQUNJLE1BQUUsRUFBQyxpQkFEUDtBQUVJLFVBQU0sTUFGVjtBQUdJLFNBQUssRUFBQyxrQkFIVjtBQUlJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUpYO0FBS0ksUUFBSSxFQUFDLE9BTFQ7QUFNSSxTQUFLLEVBQUVULFlBTlg7QUFPSSxZQUFRLEVBQUVNLHdCQVBkO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLbEMsaUJBQWlCLENBQUN1QyxHQUFsQixDQUF1QkMsTUFBRCxJQUNuQixNQUFDLGlFQUFEO0FBQVUsT0FBRyxFQUFFQSxNQUFNLENBQUMzQyxLQUF0QjtBQUE2QixTQUFLLEVBQUUyQyxNQUFNLENBQUMzQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0syQyxNQUFNLENBQUMxQyxLQURaLENBREgsQ0FWTCxDQS9FSixDQXRCSixFQXNISSxNQUFDLGtFQUFEO0FBQVcsT0FBRyxNQUFkO0FBQWUsU0FBSyxFQUFFO0FBQUNxQyxrQkFBWSxFQUFDLE1BQWQ7QUFBcUJDLGdCQUFVLEVBQUMsTUFBaEM7QUFBdUNDLGlCQUFXLEVBQUM7QUFBbkQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFDSSxNQUFFLEVBQUMsV0FEUDtBQUVJLFNBQUssRUFBQyxRQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVoQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVlJLE1BQUMsa0VBQUQ7QUFDSSxNQUFFLEVBQUMsVUFEUDtBQUVJLFNBQUssRUFBQyxPQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQXVCSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLFlBRFA7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJKLEVBa0NJLE1BQUMsa0VBQUQ7QUFDSSxNQUFFLEVBQUMsU0FEUDtBQUVJLFNBQUssRUFBQyxNQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUVqQyxZQUFNLEVBQUUsQ0FBVjtBQUFhUSxXQUFLLEVBQUMsT0FBbkI7QUFBNEJ3QixpQkFBVyxFQUFDO0FBQXhDLEtBSFg7QUFJSSxVQUFNLEVBQUMsUUFKWDtBQUtJLG1CQUFlLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREssS0FMckI7QUFRSSxXQUFPLEVBQUMsVUFSWjtBQVNJLFFBQUksRUFBQyxPQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0osRUE2Q0ksTUFBQyxrRUFBRDtBQUNJLE1BQUUsRUFBQyxVQURQO0FBRUksU0FBSyxFQUFDLE9BRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDSixFQXdESSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLFVBRFA7QUFFSSxTQUFLLEVBQUMsT0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeERKLENBdEhKLEVBMExJLE1BQUMsa0VBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBZSxTQUFLLEVBQUU7QUFBQ0gsa0JBQVksRUFBQyxNQUFkO0FBQXFCQyxnQkFBVSxFQUFDLE1BQWhDO0FBQXVDQyxpQkFBVyxFQUFDO0FBQW5ELEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLFFBRFA7QUFFSSxTQUFLLEVBQUMsS0FGVjtBQUdJLFNBQUssRUFBRTtBQUFFaEMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFZSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLGFBRFA7QUFFSSxTQUFLLEVBQUMsYUFGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUF1QkksTUFBQyxrRUFBRDtBQUNJLE1BQUUsRUFBQyxXQURQO0FBRUksU0FBSyxFQUFDLFFBRlY7QUFHSSxTQUFLLEVBQUU7QUFBRWpDLFlBQU0sRUFBRSxDQUFWO0FBQWFRLFdBQUssRUFBQyxPQUFuQjtBQUE0QndCLGlCQUFXLEVBQUM7QUFBeEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCSixFQWtDSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLFdBRFA7QUFFSSxTQUFLLEVBQUMsUUFGVjtBQUdJLFNBQUssRUFBRTtBQUFFakMsWUFBTSxFQUFFLENBQVY7QUFBYVEsV0FBSyxFQUFDLE9BQW5CO0FBQTRCd0IsaUJBQVcsRUFBQztBQUF4QyxLQUhYO0FBSUksVUFBTSxFQUFDLFFBSlg7QUFLSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBTHJCO0FBUUksV0FBTyxFQUFDLFVBUlo7QUFTSSxRQUFJLEVBQUMsT0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENKLENBMUxKLEVBd09JLE1BQUMsa0VBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBZSxTQUFLLEVBQUU7QUFBQ0gsa0JBQVksRUFBQyxNQUFkO0FBQXFCQyxnQkFBVSxFQUFDLE1BQWhDO0FBQXVDQyxpQkFBVyxFQUFDO0FBQW5ELEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQ0ksTUFBRSxFQUFDLGVBRFA7QUFFSSxTQUFLLEVBQUMsZUFGVjtBQUdJLGFBQVMsTUFIYjtBQUlJLGFBQVMsTUFKYjtBQUtJLFFBQUksRUFBRSxDQUxWO0FBTUksVUFBTSxFQUFDLFFBTlg7QUFPSSxtQkFBZSxFQUFFO0FBQ2JDLFlBQU0sRUFBRTtBQURLLEtBUHJCO0FBVUksV0FBTyxFQUFDLFVBVlo7QUFXSSxRQUFJLEVBQUMsT0FYVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F4T0osQ0FESjtBQTBQSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNWRDtBQUNBO0FBRUE7QUFFYyxxRUFBTTtBQUNoQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQVcsT0FBRyxNQUFkO0FBQWUsU0FBSyxFQUFFO0FBQUNILGtCQUFZLEVBQUMsTUFBZDtBQUFxQkMsZ0JBQVUsRUFBQyxNQUFoQztBQUF1Q0MsaUJBQVcsRUFBQztBQUFuRCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxTQUFLLEVBQUU7QUFBQ0ksY0FBUSxFQUFDLE1BQVY7QUFBa0JDLGdCQUFVLEVBQUM7QUFBN0IsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLENBREosRUFJSSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKO0FBU0gsQ0FWRCxFOzs7Ozs7Ozs7OztBQ0xBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvZGFkb3NmdW5jaW9uYXJpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvZGFkb3NmdW5jaW9uYXJpb3MuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcclxuaW1wb3J0IEJhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5cclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5cclxuY29uc3QgbGlzdGFTZXhvID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnRmVtaW5pbm8nLCBsYWJlbDogJ0YnfSxcclxuICAgIHt2YWx1ZTogJ01hc2N1bGlubycsIGxhYmVsOiAnTSd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhRXN0YWRvQ2l2aWwgPSBbXHJcbiAgICB7dmFsdWU6ICctJywgbGFiZWw6ICctJ30sXHJcbiAgICB7dmFsdWU6ICdTb2x0ZWlybycsIGxhYmVsOiAnU29sdGVpcm8nfSxcclxuICAgIHt2YWx1ZTogJ0Nhc2FkbycsIGxhYmVsOiAnQ2FzYWRvJ30sXHJcbiAgICB7dmFsdWU6ICdWacO6dm8nLCBsYWJlbDogJ1Zpw7p2byd9LFxyXG4gICAge3ZhbHVlOiAnRGl2b3JjaWFkbycsIGxhYmVsOiAnRGl2b3JjaWFkbyd9XHJcbl1cclxuXHJcbmNvbnN0IGxpc3RhVGlwb1ByZXNlbmNhID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnUHJlc2VuY2lhbCcsIGxhYmVsOiAnUHJlc2VuY2lhbCd9LFxyXG4gICAge3ZhbHVlOiAnUmVtb3RvJywgbGFiZWw6ICdSZW1vdG8nfVxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICB3aXRob3V0TGFiZWw6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbi8vIHZhciBub21lRnVuY2lvbmFyaW8gPSBcIlwiO1xyXG52YXIgaXRlbVNleG8gPSBcIlwiO1xyXG5cclxuY29uc3QgU2FsdmFyRGFkb3MgPSAoKSA9PiB7XHJcbiAgICAvLyBBY2Vzc2FyIEFQSSBkZSBzYWx2YXIgZGFkb3Mgbm8gQmFuY29cclxuICAgIGNvbnNvbGUubG9nKFwiTm9tZSBkbyBBc3NvY2lhZG86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Tm9tZUFzc29jaWFkbyddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBkZSBOYXNjaW1lbnRvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dER0TmFzY2ltZW50byddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V4bzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTZXhvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFc3RhZG8gQ2l2aWw6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvQ2l2aWwnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIsOBcmVhOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEFyZWEnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRlbGVmb25lOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFRlbEZ1bmNpb25hcmlvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJUaXBvIFByZXNlbsOnYTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRUaXBvUHJlc2VuY2EnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdlc3RvcjogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRHZXN0b3InXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNhcmdvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dENhcmdvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFbXByZXNhOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEVtcHJlc2EnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvamE6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0TG9qYSddXCIpLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVHVybm86IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VHVybm8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdydXBvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEdydXBvJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJDRVA6IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0Q0VQJ11cIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJFbmRlcmXDp286IFwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RW5kZXJlY28nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkJhaXJybzogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRCYWlycm8nXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNpZGFkZTogXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRDaWRhZGUnXVwiKS52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByb250dcOhcmlvOiBcIiArIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFByb250dWFyaW8nXVwiKS52YWx1ZSk7XHJcbiAgICBhbGVydChcIk9zIGRhZG9zIGZvcmFtIHNhbHZvcyBjb20gc3VjZXNzbyFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc2VyaXJOb3ZvRnVuY2lvbmFyaW8oKSB7XHJcbiAgICBjb25zdCBbc2V4bywgc2V0U2V4b10gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW2VzdGFkb0NpdmlsLCBzZXRFc3RhZG9DaXZpbF0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgY29uc3QgW3RpcG9QcmVzZW5jYSwgc2V0VGlwb1ByZXNlbmNhXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNleG8gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0U2V4byddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNleG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWwgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0RXN0YWRvQ2l2aWwnXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRFc3RhZG9DaXZpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VUaXBvUHJlc2VuY2EgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VGlwb1ByZXNlbmNhJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VGlwb1ByZXNlbmNhKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjMwcHhcIixtYXJnaW5MZWZ0OlwiMjBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtTYWx2YXJEYWRvc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYWx2YXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMjBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCIsbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dE5vbWVBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBkbyBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dER0TmFzY2ltZW50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIGRlIE5hc2NpbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRTZXhvXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNleG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V4b31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2V4b31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YVNleG8ubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dEVzdGFkb0NpdmlsXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVzdGFkbyBDaXZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG9DaXZpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFFc3RhZG9DaXZpbC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0QXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLDgXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZWxlZm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0VGlwb1ByZXNlbmNhXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gUHJlc2Vuw6dhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpcG9QcmVzZW5jYX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGlwb1ByZXNlbmNhfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhVGlwb1ByZXNlbmNhLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiMTBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRHZXN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VzdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRMb2phXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvamFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMDBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInR4dFR1cm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm5vXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRHcnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcnVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIyMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0Q0VQXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEzMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHh0RW5kZXJlY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiNDAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRCYWlycm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFpcnJvXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2lkYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjIwcHhcIixtYXJnaW5MZWZ0OlwiMjBweFwiLG1hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0eHRQcm9udHVhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb250dcOhcmlvXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEYWRvcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBvbmVudGVGdW5jaW9uYXJpb3MnO1xyXG5cclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3cgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMHB4XCIsbWFyZ2luTGVmdDpcIjIwcHhcIixtYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgZm9udFdlaWdodDpcImJvbGRcIn19ID5BRElDSU9OQVIgTk9WTyBBU1NPQ0lBRE88L2E+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8RGFkb3MgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9