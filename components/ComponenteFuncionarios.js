import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';

const listaSexo = [
    {value: '-', label: '-'},
    {value: 'Feminino', label: 'F'},
    {value: 'Masculino', label: 'M'}
]

const listaEstadoCivil = [
    {value: '-', label: '-'},
    {value: 'Solteiro', label: 'Solteiro'},
    {value: 'Casado', label: 'Casado'},
    {value: 'Viúvo', label: 'Viúvo'},
    {value: 'Divorciado', label: 'Divorciado'}
]

const listaTipoPresenca = [
    {value: '-', label: '-'},
    {value: 'Presencial', label: 'Presencial'},
    {value: 'Remoto', label: 'Remoto'}
]

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

// var nomeFuncionario = "";
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
}

export default function InserirNovoFuncionario() {
    const [sexo, setSexo] = React.useState('-');
    const [estadoCivil, setEstadoCivil] = React.useState('-');
    const [tipoPresenca, setTipoPresenca] = React.useState('-');
    
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

    return(
        <div>
            <FormGroup row style={{marginBottom:"30px",marginLeft:"20px",marginRight:"10px"}}>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={SalvarDados}
                    style={{marginRight:"20px"}}
                >
                    Salvar
                </Button>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<BackIcon />}
                    href="principal"
                >
                    Voltar
                </Button>
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtNomeAssociado"
                    label="Nome do Associado"
                    style={{ margin: 8, width:"380px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtDtNascimento"
                    label="Data de Nascimento"
                    style={{ margin: 8, width:"180px", marginRight:"10px"}}
                    type="date"
                    format="dd/MM/yyyy"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtSexo"
                    select
                    label="Sexo"
                    style={{ margin: 8, width:"100px", marginRight:"10px"}}
                    size="small"
                    value={sexo}
                    onChange={handleChangeSexo}
                    variant="outlined"
                >
                    {listaSexo.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtEstadoCivil"
                    select
                    label="Estado Civil"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={estadoCivil}
                    onChange={handleChangeEstadoCivil}
                    variant="outlined"
                >
                    {listaEstadoCivil.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtArea"
                    label="Área"
                    style={{ margin: 8, width:"50px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtTelFuncionario"
                    label="Telefone"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtTipoPresenca"
                    select
                    label="Tipo Presença"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={tipoPresenca}
                    onChange={handleChangeTipoPresenca}
                    variant="outlined"
                >
                    {listaTipoPresenca.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtGestor"
                    label="Gestor"
                    style={{ margin: 8, width:"100px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtCargo"
                    label="Cargo"
                    style={{ margin: 8, width:"200px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtEmpresa"
                    label="Empresa"
                    style={{ margin: 8, width:"200px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtLoja"
                    label="Loja"
                    style={{ margin: 8, width:"200px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtTurno"
                    label="Turno"
                    style={{ margin: 8, width:"220px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtGrupo"
                    label="Grupo"
                    style={{ margin: 8, width:"100px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtCEP"
                    label="CEP"
                    style={{ margin: 8, width:"130px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtEndereco"
                    label="Endereço"
                    style={{ margin: 8, width:"400px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtBairro"
                    label="Bairro"
                    style={{ margin: 8, width:"250px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtCidade"
                    label="Cidade"
                    style={{ margin: 8, width:"250px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"20px",marginRight:"10px"}}>
                <TextField
                    id="txtProntuario"
                    label="Prontuário"
                    fullWidth
                    multiline
                    rows={5}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
        </div>
    )
}