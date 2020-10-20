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
const listaEstado = [{
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
  itemSexo = document.querySelector("[id='txtSexo']").value;
  alert(itemSexo); // Acessar API de salvar dados no Banco

  alert("Os dados foram salvos com sucesso!");
};

function InserirNovoFuncionario() {
  const [sexo, setSexo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [estadoCivil, setEstadoCivil] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [estado, setEstado] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');
  const [tipoPresenca, setTipoPresenca] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('-');

  const handleChangeSexo = event => {
    document.querySelector("[id='txtSexo']").value = event.target.value;
    setSexo(event.target.value);
  };

  const handleChangeEstadoCivil = event => {
    document.querySelector("[id='txtEstadoCivil']").value = event.target.value;
    setEstadoCivil(event.target.value);
  };

  const handleChangeEstado = event => {
    document.querySelector("[id='txtEstado']").value = event.target.value;
    setEstado(event.target.value);
  };

  const handleChangeTipoPresenca = event => {
    document.querySelector("[id='txtTipoPresenca']").value = event.target.value;
    setTipoPresenca(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
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
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Salvar"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "black",
    size: "large",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 28
      }
    }),
    href: "principal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Voltar"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "txtNomeAssociado",
    label: "Nome do Associado",
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
      lineNumber: 141,
      columnNumber: 13
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
      lineNumber: 152,
      columnNumber: 13
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
      lineNumber: 165,
      columnNumber: 13
    }
  }, listaSexo.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
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
      lineNumber: 181,
      columnNumber: 13
    }
  }, listaEstadoCivil.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
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
      lineNumber: 197,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 208,
      columnNumber: 13
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
      lineNumber: 219,
      columnNumber: 13
    }
  }, listaTipoPresenca.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, option.label))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 236,
      columnNumber: 13
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
      lineNumber: 247,
      columnNumber: 13
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
      lineNumber: 258,
      columnNumber: 13
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
      lineNumber: 269,
      columnNumber: 13
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
      lineNumber: 280,
      columnNumber: 13
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
      lineNumber: 291,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "txtCEP",
    label: "CEP",
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
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "txtEndereco",
    label: "Endere\xE7o",
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
      lineNumber: 314,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 325,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 336,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      lineNumber: 347,
      columnNumber: 13
    }
  }, listaEstado.map(option => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  }, option.label))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "txtProntuario",
    label: "Prontu\xE1rio",
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
      lineNumber: 364,
      columnNumber: 13
    }
  }));
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
var _jsxFileName = "C:\\Felipe\\MBA FullStack\\WebServices_APIs_Restful\\Trabalho\\Mapeamento_Funcionarios\\pages\\MapeamentoFuncionarios\\dadosfuncionarios.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: {
      fontSize: "30px",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "ADICIONAR NOVO ASSOCIADO"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_components_ComponenteFuncionarios__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wb25lbnRlRnVuY2lvbmFyaW9zLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL01hcGVhbWVudG9GdW5jaW9uYXJpb3MvZGFkb3NmdW5jaW9uYXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImxpc3RhU2V4byIsInZhbHVlIiwibGFiZWwiLCJsaXN0YUVzdGFkb0NpdmlsIiwibGlzdGFFc3RhZG8iLCJsaXN0YVRpcG9QcmVzZW5jYSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpbiIsInNwYWNpbmciLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJpdGVtU2V4byIsIlNhbHZhckRhZG9zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxlcnQiLCJJbnNlcmlyTm92b0Z1bmNpb25hcmlvIiwic2V4byIsInNldFNleG8iLCJSZWFjdCIsInVzZVN0YXRlIiwiZXN0YWRvQ2l2aWwiLCJzZXRFc3RhZG9DaXZpbCIsImVzdGFkbyIsInNldEVzdGFkbyIsInRpcG9QcmVzZW5jYSIsInNldFRpcG9QcmVzZW5jYSIsImhhbmRsZUNoYW5nZVNleG8iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoYW5nZUVzdGFkb0NpdmlsIiwiaGFuZGxlQ2hhbmdlRXN0YWRvIiwiaGFuZGxlQ2hhbmdlVGlwb1ByZXNlbmNhIiwibWFyZ2luUmlnaHQiLCJzaHJpbmsiLCJtYXAiLCJvcHRpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FDZDtBQUFDQyxPQUFLLEVBQUUsR0FBUjtBQUFhQyxPQUFLLEVBQUU7QUFBcEIsQ0FEYyxFQUVkO0FBQUNE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eEMsS0FIWDtBQUlJLFVBQU0sRUFBQyxRQUpYO0FBS0ksbUJBQWUsRUFBRTtBQUNiQyxZQUFNLEVBQUU7QUFESyxLQUxyQjtBQVFJLFdBQU8sRUFBQyxVQVJaO0FBU0ksUUFBSSxFQUFDLE9BVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRQSixDQURKO0FBNFVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hjRDtBQUNBO0FBRWMscUVBQU07QUFDaEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxTQUFLLEVBQUU7QUFBQ0csY0FBUSxFQUFDLE1BQVY7QUFBa0JDLGdCQUFVLEVBQUM7QUFBN0IsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESjtBQVFILENBVEQsRTs7Ozs7Ozs7Ozs7QUNIQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zZnVuY2lvbmFyaW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9NYXBlYW1lbnRvRnVuY2lvbmFyaW9zL2RhZG9zZnVuY2lvbmFyaW9zLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZSc7XHJcbmltcG9ydCBCYWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrJztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuXHJcbmNvbnN0IGxpc3RhU2V4byA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ0ZlbWluaW5vJywgbGFiZWw6ICdGJ30sXHJcbiAgICB7dmFsdWU6ICdNYXNjdWxpbm8nLCBsYWJlbDogJ00nfVxyXG5dXHJcblxyXG5jb25zdCBsaXN0YUVzdGFkb0NpdmlsID0gW1xyXG4gICAge3ZhbHVlOiAnLScsIGxhYmVsOiAnLSd9LFxyXG4gICAge3ZhbHVlOiAnU29sdGVpcm8nLCBsYWJlbDogJ1NvbHRlaXJvJ30sXHJcbiAgICB7dmFsdWU6ICdDYXNhZG8nLCBsYWJlbDogJ0Nhc2Fkbyd9LFxyXG4gICAge3ZhbHVlOiAnVmnDunZvJywgbGFiZWw6ICdWacO6dm8nfSxcclxuICAgIHt2YWx1ZTogJ0Rpdm9yY2lhZG8nLCBsYWJlbDogJ0Rpdm9yY2lhZG8nfVxyXG5dXHJcblxyXG5jb25zdCBsaXN0YUVzdGFkbyA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ0FjcmUnLCBsYWJlbDogJ0FDJ30sXHJcbiAgICB7dmFsdWU6ICdBbGFnb2FzICcsIGxhYmVsOiAnQUwnfSxcclxuICAgIHt2YWx1ZTogJ0FtYXDDoSAnLCBsYWJlbDogJ0FQJ30sXHJcbiAgICB7dmFsdWU6ICdBbWF6b25hcyAnLCBsYWJlbDogJ0FNJ30sXHJcbiAgICB7dmFsdWU6ICdCYWhpYSAnLCBsYWJlbDogJ0JBJ30sXHJcbiAgICB7dmFsdWU6ICdDZWFyw6EgJywgbGFiZWw6ICdDRSd9LFxyXG4gICAge3ZhbHVlOiAnRGlzdHJpdG8gRmVkZXJhbCAnLCBsYWJlbDogJ0RGJ30sXHJcbiAgICB7dmFsdWU6ICdFc3DDrXJpdG8gU2FudG8gJywgbGFiZWw6ICdFUyd9LFxyXG4gICAge3ZhbHVlOiAnR29pw6FzICcsIGxhYmVsOiAnR08nfSxcclxuICAgIHt2YWx1ZTogJ01hcmFuaMOjbyAnLCBsYWJlbDogJ01BJ30sXHJcbiAgICB7dmFsdWU6ICdNYXRvIEdyb3NzbyAnLCBsYWJlbDogJ01UJ30sXHJcbiAgICB7dmFsdWU6ICdNYXRvIEdyb3NzbyBkbyBTdWwgJywgbGFiZWw6ICdNUyd9LFxyXG4gICAge3ZhbHVlOiAnTWluYXMgR2VyYWlzICcsIGxhYmVsOiAnTUcnfSxcclxuICAgIHt2YWx1ZTogJ1BhcsOhICcsIGxhYmVsOiAnUEEnfSxcclxuICAgIHt2YWx1ZTogJ1BhcmHDrWJhICcsIGxhYmVsOiAnUEInfSxcclxuICAgIHt2YWx1ZTogJ1BhcmFuw6EgJywgbGFiZWw6ICdQUid9LFxyXG4gICAge3ZhbHVlOiAnUGVybmFtYnVjbyAnLCBsYWJlbDogJ1BFJ30sXHJcbiAgICB7dmFsdWU6ICdQaWF1w60gJywgbGFiZWw6ICdQSSd9LFxyXG4gICAge3ZhbHVlOiAnUmlvIGRlIEphbmVpcm8gJywgbGFiZWw6ICdSSid9LFxyXG4gICAge3ZhbHVlOiAnUmlvIEdyYW5kZSBkbyBOb3J0ZSAnLCBsYWJlbDogJ1JOJ30sXHJcbiAgICB7dmFsdWU6ICdSaW8gR3JhbmRlIGRvIFN1bCAnLCBsYWJlbDogJ1JTJ30sXHJcbiAgICB7dmFsdWU6ICdSb25kw7RuaWEgJywgbGFiZWw6ICdSTyd9LFxyXG4gICAge3ZhbHVlOiAnUm9yYWltYSAnLCBsYWJlbDogJ1JSJ30sXHJcbiAgICB7dmFsdWU6ICdTYW50YSBDYXRhcmluYSAnLCBsYWJlbDogJ1NDJ30sXHJcbiAgICB7dmFsdWU6ICdTw6NvIFBhdWxvICcsIGxhYmVsOiAnU1AnfSxcclxuICAgIHt2YWx1ZTogJ1NlcmdpcGUgJywgbGFiZWw6ICdTRSd9LFxyXG4gICAge3ZhbHVlOiAnVG9jYW50aW5zICcsIGxhYmVsOiAnVE8nfVxyXG5dXHJcblxyXG5jb25zdCBsaXN0YVRpcG9QcmVzZW5jYSA9IFtcclxuICAgIHt2YWx1ZTogJy0nLCBsYWJlbDogJy0nfSxcclxuICAgIHt2YWx1ZTogJ1ByZXNlbmNpYWwnLCBsYWJlbDogJ1ByZXNlbmNpYWwnfSxcclxuICAgIHt2YWx1ZTogJ1JlbW90bycsIGxhYmVsOiAnUmVtb3RvJ31cclxuXVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgd2l0aG91dExhYmVsOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMjVjaCcsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG4vLyB2YXIgbm9tZUZ1bmNpb25hcmlvID0gXCJcIjtcclxudmFyIGl0ZW1TZXhvID0gXCJcIjtcclxuXHJcbmNvbnN0IFNhbHZhckRhZG9zID0gKCkgPT4ge1xyXG4gICAgaXRlbVNleG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPSd0eHRTZXhvJ11cIikudmFsdWU7XHJcbiAgICBhbGVydChpdGVtU2V4byk7XHJcbiAgICAvLyBBY2Vzc2FyIEFQSSBkZSBzYWx2YXIgZGFkb3Mgbm8gQmFuY29cclxuICAgIGFsZXJ0KFwiT3MgZGFkb3MgZm9yYW0gc2Fsdm9zIGNvbSBzdWNlc3NvIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zZXJpck5vdm9GdW5jaW9uYXJpbygpIHtcclxuICAgIGNvbnN0IFtzZXhvLCBzZXRTZXhvXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbZXN0YWRvQ2l2aWwsIHNldEVzdGFkb0NpdmlsXSA9IFJlYWN0LnVzZVN0YXRlKCctJyk7XHJcbiAgICBjb25zdCBbZXN0YWRvLCBzZXRFc3RhZG9dID0gUmVhY3QudXNlU3RhdGUoJy0nKTtcclxuICAgIGNvbnN0IFt0aXBvUHJlc2VuY2EsIHNldFRpcG9QcmVzZW5jYV0gPSBSZWFjdC51c2VTdGF0ZSgnLScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTZXhvID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dFNleG8nXVwiKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTZXhvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUVzdGFkb0NpdmlsID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEVzdGFkb0NpdmlsJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RXN0YWRvQ2l2aWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRXN0YWRvID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9J3R4dEVzdGFkbyddXCIpLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEVzdGFkbyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VUaXBvUHJlc2VuY2EgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltpZD0ndHh0VGlwb1ByZXNlbmNhJ11cIikudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VGlwb1ByZXNlbmNhKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17U2FsdmFyRGFkb3N9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMjBweFwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2FsdmFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEJhY2tJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cInByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZvbHRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHROb21lQXNzb2NpYWRvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBkbyBBc3NvY2lhZG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjM1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0RHROYXNjaW1lbnRvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBOYXNjaW1lbnRvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxODBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0U2V4b1wiXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2V4b1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMTAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXhvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNleG99XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFTZXhvLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEVzdGFkb0NpdmlsXCJcclxuICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG8gQ2l2aWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvQ2l2aWx9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFFc3RhZG9DaXZpbC5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRBcmVhXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiw4FyZWFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbGVmb25lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dFRpcG9QcmVzZW5jYVwiXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGlwbyBQcmVzZW7Dp2FcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGlwb1ByZXNlbmNhfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRpcG9QcmVzZW5jYX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsaXN0YVRpcG9QcmVzZW5jYS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPHAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRHZXN0b3JcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJHZXN0b3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0Q2FyZ29cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJnb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRFbXByZXNhXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1wcmVzYVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRMb2phXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9qYVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRUdXJub1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm5vXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIyMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEdydXBvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3J1cG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0Q0VQXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIxMjBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEVuZGVyZWNvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogOCwgd2lkdGg6XCIzNTBweFwiLCBtYXJnaW5SaWdodDpcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dEJhaXJyb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhaXJyb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMjAwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0eHRDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjIwMHB4XCIsIG1hcmdpblJpZ2h0OlwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwidHh0RXN0YWRvXCJcclxuICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiA4LCB3aWR0aDpcIjgwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXN0YWRvfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpc3RhRXN0YWRvLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cInR4dFByb250dWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9udHXDoXJpb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDgsIHdpZHRoOlwiMzUwcHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE1MFwiPjxsYWJlbD5Ob21lIGRvIEZ1bmNpb27DoXJpbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMzE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0Tm9tZUZ1bmNpb25hcmlvXCIgc3R5bGU9e3t3aWR0aDpcIjMwMHB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjc1XCI+PGxhYmVsPlByb250dcOhcmlvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRQcm9udHVhcmlvXCIgc3R5bGU9e3t3aWR0aDpcIjE4NXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE0MFwiPjxsYWJlbD5EYXRhIGRlIE5hc2NpbWVudG88L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE0MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInR4dER0TmFzY2ltZW50b1wiIHN0eWxlPXt7d2lkdGg6XCIxMjVweFwiLCBoZWlnaHQ6XCIyMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI0MFwiPjxsYWJlbD5TZXhvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17bGlzdGFTZXhvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjkwXCI+PGxhYmVsPkVzdGFkbyBDaXZpbDwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2xpc3RhRXN0YWRvQ2l2aWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6XCI2MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNDBcIj48bGFiZWw+Q0VQPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI5MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4dENFUFwiIHN0eWxlPXt7d2lkdGg6XCI3NXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjcwXCI+PGxhYmVsPkVuZGVyZcOnbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMzE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0RW5kZXJlY29cIiBzdHlsZT17e3dpZHRoOlwiMzAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+QmFpcnJvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRCYWlycm9cIiBzdHlsZT17e3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+Q2lkYWRlPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIyMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRDaWRhZGVcIiBzdHlsZT17e3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTVcIj48bGFiZWw+RXN0YWRvPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI3NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e2xpc3RhRXN0YWRvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OlwiNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjY1XCI+PGxhYmVsPlRlbGVmb25lPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRUZWxGdW5jaW9uYXJpb1wiIHN0eWxlPXt7d2lkdGg6XCIxMDVweFwiLCBoZWlnaHQ6XCIyMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCI1MFwiPjxsYWJlbD5DYXJnbzwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTY1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0Q2FyZ29cIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNDBcIj48bGFiZWw+w4FyZWE8L2xhYmVsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjExNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4dEFyZWFcIiBzdHlsZT17e3dpZHRoOlwiMTAwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNTBcIj48bGFiZWw+R2VzdG9yPC9sYWJlbD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxNjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRHZXN0b3JcIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIiwgaGVpZ2h0OlwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTEwXCI+PGxhYmVsPlRlbGVmb25lIEdlc3RvcjwvbGFiZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0VGVsR2VzdG9yXCIgc3R5bGU9e3t3aWR0aDpcIjEwNXB4XCIsIGhlaWdodDpcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IERhZG9zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcG9uZW50ZUZ1bmNpb25hcmlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBmb250V2VpZ2h0OlwiYm9sZFwifX0gPkFESUNJT05BUiBOT1ZPIEFTU09DSUFETzwvYT5cclxuICAgICAgICAgICAgPHAvPlxyXG4gICAgICAgICAgICA8RGFkb3MgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=