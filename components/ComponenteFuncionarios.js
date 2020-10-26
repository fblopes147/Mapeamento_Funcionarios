import React, {useEffect} from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';

import MaterialTable from 'material-table';

import axios from 'axios';

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

const SalvarDados = Event => {
    Event.preventDefault();
    
    var infoNomeAssociado = document.querySelector("[id='txtNomeAssociado']").value;
    var infoDataNascimento = document.querySelector("[id='txtDtNascimento']").value;
    var infoSexo = document.querySelector("[id='txtSexo']").value;
    var infoEstadoCivil = document.querySelector("[id='txtEstadoCivil']").value;
    var infoArea = document.querySelector("[id='txtArea']").value;
    var infoTelefone = document.querySelector("[id='txtTelFuncionario']").value;
    var infoTipoPresenca = document.querySelector("[id='txtTipoPresenca']").value;
    var infoGestor = document.querySelector("[id='txtGestor']").value;
    var infoCargo = document.querySelector("[id='txtCargo']").value;
    var infoEmpresa = document.querySelector("[id='txtEmpresa']").value;
    var infoLoja = document.querySelector("[id='txtLoja']").value;
    var infoTurno = document.querySelector("[id='txtTurno']").value;
    var infoGrupo = document.querySelector("[id='txtGrupo']").value;
    var infoCEP = document.querySelector("[id='txtCEP']").value;
    var infoEndereco = document.querySelector("[id='txtEndereco']").value;
    var infoBairro = document.querySelector("[id='txtBairro']").value;
    var infoCidade = document.querySelector("[id='txtCidade']").value;
    var infoProntuario = document.querySelector("[id='txtProntuario']").value;
    // Acessar API de salvar dados no Banco
    var obj = {
        "address": infoEndereco,
        "area": infoArea,
        "birthday": infoDataNascimento,
        "city": infoCidade,
        "company": infoEmpresa,
        "gender": infoSexo,
        "idManager": infoGestor,
        "locality": infoBairro,
        "maritalStatus": infoEstadoCivil,
        "name": infoNomeAssociado,
        "occupation": infoCargo,
        "patientRecord": infoProntuario,
        "phone": infoTelefone,
        "remoteWork": infoTipoPresenca,
        "store": infoLoja,
        "turn": infoTurno,
        "workGroup": infoGrupo,
        "zipCode": infoCEP
    };
    var myJson = JSON.stringify(obj);
    console.log(myJson);

    fetch('http://localhost:8080/associates/',{
        method:'post',
        headers:{
            'Content-type':'application/json',
            //'Access-Control-Allow-Origin':'*',
        },
        body:JSON.stringify(obj)
    }).then(r=>r.json()).then(res=>{
        if(res){
            alert("Os dados foram salvos com sucesso!");
        }
    }).catch(error => {
        console.log(JSON.stringify(obj));
      })

    // alert("Os dados foram salvos com sucesso!");
};

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