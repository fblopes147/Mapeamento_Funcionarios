import React from 'react';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';

import axios from 'axios';

var infoNomeAssociado = "";
var infoDataNascimento = "";
var infoSexo = "";
var infoEstadoCivil = "";
var infoArea = "";
var infoTelefone = "";
var infoTipoPresenca = "";
var infoGestor = "";
var infoCargo = "";
var infoEmpresa = "";
var infoLoja = "";
var infoTurno = "";
var infoGrupo = "";
var infoCEP = "";
var infoEndereco = "";
var infoBairro = "";
var infoCidade = "";
var infoProntuario = "";
var idAssociado = 0;
var endereco = "";

const SalvarDados = Event => {
    Event.preventDefault();
    
    idAssociado = window.location.search.replace("?id=","");
    console.log(idAssociado);

    infoNomeAssociado = document.querySelector("[id='txtNomeAssociado']").value;
    infoDataNascimento = document.querySelector("[id='txtDtNascimento']").value;
    infoSexo = document.querySelector("[id='txtSexo']").value;
    infoEstadoCivil = document.querySelector("[id='txtEstadoCivil']").value;
    infoArea = document.querySelector("[id='txtArea']").value;
    infoTelefone = document.querySelector("[id='txtTelFuncionario']").value;
    infoTipoPresenca = document.querySelector("[id='txtTipoPresenca']").value;
    infoGestor = document.querySelector("[id='txtGestor']").value;
    infoCargo = document.querySelector("[id='txtCargo']").value;
    infoEmpresa = document.querySelector("[id='txtEmpresa']").value;
    infoLoja = document.querySelector("[id='txtLoja']").value;
    infoTurno = document.querySelector("[id='txtTurno']").value;
    infoGrupo = document.querySelector("[id='txtGrupo']").value;
    infoCEP = document.querySelector("[id='txtCEP']").value;
    infoEndereco = document.querySelector("[id='txtEndereco']").value;
    infoBairro = document.querySelector("[id='txtBairro']").value;
    infoCidade = document.querySelector("[id='txtCidade']").value;
    infoProntuario = document.querySelector("[id='txtProntuario']").value;
    
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
        "workGoup": infoGrupo,
        "zipCode": infoCEP
    };
    var myJson = JSON.stringify(obj);
    console.log(myJson);

    if(idAssociado == 0){
        console.log('POST');

        fetch('http://localhost:8080/associates/',{
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(obj)
        }).then(r=>r.json()).then(res=>{
            if(res){
                alert("Associado criado com sucesso!");
            }
        }).catch(error => {
            console.log(JSON.stringify(obj));
        })
    }
    else if(idAssociado > 0){
        console.log('PUT');
        
        endereco = "http://localhost:8080/associates/" + idAssociado;
        
        fetch(endereco,{
            method:'put',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(obj)
        }).then(r=>r.json()).then(res=>{
            if(res){
                alert("Os dados do Associado foram atualizados com sucesso!");
            }
        }).catch(error => {
            console.log(JSON.stringify(obj));
        })
    }
};

export default class InserirNovoFuncionario extends React.Component {
    state = {
        listaAssociado: [],
        selectedSexo: null,
        selectedEstadoCivil: null,
        selectedTipoPresenca: null
    }

    handleChangeSexo(valor){
        this.state.selectedSexo = valor;
        document.querySelector("[id='txtSexo']").value = valor;
        document.querySelector("[id='txtSexo']").innerText = valor;
    }

    handleChangeEstadoCivil(valor){
        this.state.selectedEstadoCivil = valor;
        document.querySelector("[id='txtEstadoCivil']").value = valor;
        document.querySelector("[id='txtEstadoCivil']").innerText = valor;
    }

    handleChangeTipoPresenca(valor){
        this.state.selectedTipoPresenca = valor;
        document.querySelector("[id='txtTipoPresenca']").value = valor;
        document.querySelector("[id='txtTipoPresenca']").innerText = valor;
    }

    componentDidMount(){
        idAssociado = window.location.search.replace("?id=","");

        if(idAssociado > 0){
            endereco = "http://localhost:8080/associates/" + idAssociado;

            axios.get(endereco)
            .then(res => {
                const listaAssociado = res.data;
                this.setState({listaAssociado});

                document.querySelector("[id='txtNomeAssociado']").value = listaAssociado.name;
                document.querySelector("[id='txtDtNascimento']").value = listaAssociado.birthday;
                document.querySelector("[id='txtSexo']").value = listaAssociado.gender;
                document.querySelector("[id='txtEstadoCivil']").value = listaAssociado.maritalStatus;
                document.querySelector("[id='txtArea']").value = listaAssociado.area;
                document.querySelector("[id='txtTelFuncionario']").value = listaAssociado.phone;
                document.querySelector("[id='txtTipoPresenca']").value = listaAssociado.remoteWork;
                document.querySelector("[id='txtGestor']").value = listaAssociado.idManager;
                document.querySelector("[id='txtCargo']").value = listaAssociado.occupation;
                document.querySelector("[id='txtEmpresa']").value = listaAssociado.company;
                document.querySelector("[id='txtLoja']").value = listaAssociado.store;
                document.querySelector("[id='txtTurno']").value = listaAssociado.turn;
                document.querySelector("[id='txtGrupo']").value = listaAssociado.workGoup;
                document.querySelector("[id='txtCEP']").value = listaAssociado.zipCode;
                document.querySelector("[id='txtEndereco']").value = listaAssociado.address;
                document.querySelector("[id='txtBairro']").value = listaAssociado.locality;
                document.querySelector("[id='txtCidade']").value = listaAssociado.city;
                document.querySelector("[id='txtProntuario']").value = listaAssociado.patientRecord;

                // console.log(listaAssociado);
                // console.log(listaAssociado.id);
                // console.log(listaAssociado.name);
            })
        }
    }

    render(){
        const selectedSexo = this.state;
        const selectedEstadoCivil = this.state;
        const selectedTipoPresenca = this.state;
        
        return(
            <div id="pagina_DadosFuncionarios">
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
                        style={{ margin: 8, width:"350px", marginRight:"10px"}}
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
                        style={{ margin: 8, width:"155px", marginRight:"10px"}}
                        type="date"
                        format="dd/MM/yyyy"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtSexo">Sexo</InputLabel>
                        <Select
                            id="txtSexo"
                            name="Sexo"
                            value={this.state.selectedSexo}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeSexo(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Sexo',
                                id: 'txtSexo',
                                value: {selectedSexo},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Feminino">Feminino</MenuItem>
                            <MenuItem value="Masculino">Masculino</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtEstadoCivil">Estado Civil</InputLabel>
                        <Select
                            id="txtEstadoCivil"
                            name="Estado Civil"
                            value={this.state.selectedEstadoCivil}
                            variant="outlined"
                            style={{ margin: 8, width:"130px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeEstadoCivil(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Estado Civil',
                                id: 'txtEstadoCivil',
                                value: {selectedEstadoCivil},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Solteiro">Solteiro</MenuItem>
                            <MenuItem value="Casado">Casado</MenuItem>
                            <MenuItem value="Viúvo">Viúvo</MenuItem>
                            <MenuItem value="Divorciado">Divorciado</MenuItem>
                        </Select>
                    </FormControl>
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
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtTipoPresenca">Tipo de Presença</InputLabel>
                        <Select
                            id="txtTipoPresenca"
                            name="Tipo de Presença"
                            value={this.state.selectedTipoPresenca}
                            variant="outlined"
                            style={{ margin: 8, width:"130px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeTipoPresenca(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Tipo de Presença',
                                id: 'txtTipoPresenca',
                                value: {selectedTipoPresenca},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Presencial">Presencial</MenuItem>
                            <MenuItem value="Remoto">Remoto</MenuItem>
                        </Select>
                    </FormControl>
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
}