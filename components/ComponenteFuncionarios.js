import React, {useEffect} from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';

// import MaterialTable from 'material-table';

import axios from 'axios';

// const listaSexo = [
//     {value: '-', label: '-'},
//     {value: 'Feminino', label: 'F'},
//     {value: 'Masculino', label: 'M'}
// ]

// const listaEstadoCivil = [
//     {value: '-', label: '-'},
//     {value: 'Solteiro', label: 'Solteiro'},
//     {value: 'Casado', label: 'Casado'},
//     {value: 'Viúvo', label: 'Viúvo'},
//     {value: 'Divorciado', label: 'Divorciado'}
// ]

// const listaTipoPresenca = [
//     {value: '-', label: '-'},
//     {value: 'Presencial', label: 'Presencial'},
//     {value: 'Remoto', label: 'Remoto'}
// ]

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
    // const [sexo, setSexo] = React.useState('-');
    // const [estadoCivil, setEstadoCivil] = React.useState('-');
    // const [tipoPresenca, setTipoPresenca] = React.useState('-');
    
    // const handleChangeSexo = event => {
    //     document.querySelector("[id='txtSexo']").value = event.target.value;
    //     setSexo(event.target.value);
    // };

    // const handleChangeEstadoCivil = event => {
    //     document.querySelector("[id='txtEstadoCivil']").value = event.target.value;
    //     setEstadoCivil(event.target.value);
    // };

    // const handleChangeTipoPresenca = event => {
    //     document.querySelector("[id='txtTipoPresenca']").value = event.target.value;
    //     setTipoPresenca(event.target.value);
    // };

    state = {
        listaAssociado: [],
        selected: null
    }

    handleChangeSexo(valor){
        this.setState({selected: valor});
        document.querySelector("[id='txtSexo']").value = valor;
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
        const selected = this.state;

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
                    {/* <TextField
                        id="txtSexo"
                        label="Sexo"
                        style={{ margin: 8, width:"100px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    /> */}
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtSexo">Sexo</InputLabel>
                        <Select
                            id="txtSexo"
                            name="Sexo"
                            //value={selected}
                            variant="outlined"
                            style={{ margin: 8, width:"150px", height:"40px", marginRight:"10px"}}
                            //label="Sexo"
                            onChange={event => this.handleChangeSexo(event.target.value)}
                            // input={<Input id="txtSexo"/>}
                            inputProps={{
                                name: 'Sexo',
                                id: 'txtSexo',
                                value: {selected}
                            }}
                        >
                            <MenuItem value="Feminino">Feminino</MenuItem>
                            <MenuItem value="Masculino">Masculino</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtEstadoCivil"
                        label="Estado Civil"
                        style={{ margin: 8, width:"150px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    {/* <TextField
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
                    </TextField> */}
                    {/* <TextField
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
                    </TextField> */}
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
                        label="Tipo de Presença"
                        style={{ margin: 8, width:"150px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    {/* <TextField
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
                    </TextField> */}
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

    // return(
    //     <div>
    //         <FormGroup row style={{marginBottom:"30px",marginLeft:"20px",marginRight:"10px"}}>
    //             <Button
    //                 variant="contained"
    //                 color="black"
    //                 size="large"
    //                 startIcon={<SaveIcon />}
    //                 onClick={SalvarDados}
    //                 style={{marginRight:"20px"}}
    //             >
    //                 Salvar
    //             </Button>
    //             <Button
    //                 variant="contained"
    //                 color="black"
    //                 size="large"
    //                 startIcon={<BackIcon />}
    //                 href="principal"
    //             >
    //                 Voltar
    //             </Button>
    //         </FormGroup>
    //         <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
    //             <TextField
    //                 id="txtNomeAssociado"
    //                 label="Nome do Associado"
    //                 style={{ margin: 8, width:"380px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtDtNascimento"
    //                 label="Data de Nascimento"
    //                 style={{ margin: 8, width:"180px", marginRight:"10px"}}
    //                 type="date"
    //                 format="dd/MM/yyyy"
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtSexo"
    //                 label="Sexo"
    //                 style={{ margin: 8, width:"100px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtEstadoCivil"
    //                 label="Estado Civil"
    //                 style={{ margin: 8, width:"150px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             {/* <TextField
    //                 id="txtSexo"
    //                 select
    //                 label="Sexo"
    //                 style={{ margin: 8, width:"100px", marginRight:"10px"}}
    //                 size="small"
    //                 value={sexo}
    //                 onChange={handleChangeSexo}
    //                 variant="outlined"
    //             >
    //                 {listaSexo.map((option) => (
    //                     <MenuItem key={option.value} value={option.value}>
    //                         {option.label}
    //                     </MenuItem>
    //                 ))}
    //             </TextField> */}
    //             {/* <TextField
    //                 id="txtEstadoCivil"
    //                 select
    //                 label="Estado Civil"
    //                 style={{ margin: 8, width:"150px", marginRight:"10px"}}
    //                 size="small"
    //                 value={estadoCivil}
    //                 onChange={handleChangeEstadoCivil}
    //                 variant="outlined"
    //             >
    //                 {listaEstadoCivil.map((option) => (
    //                     <MenuItem key={option.value} value={option.value}>
    //                         {option.label}
    //                     </MenuItem>
    //                 ))}
    //             </TextField> */}
    //             <TextField
    //                 id="txtArea"
    //                 label="Área"
    //                 style={{ margin: 8, width:"50px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtTelFuncionario"
    //                 label="Telefone"
    //                 style={{ margin: 8, width:"150px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtTipoPresenca"
    //                 label="Tipo de Presença"
    //                 style={{ margin: 8, width:"150px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             {/* <TextField
    //                 id="txtTipoPresenca"
    //                 select
    //                 label="Tipo Presença"
    //                 style={{ margin: 8, width:"150px", marginRight:"10px"}}
    //                 size="small"
    //                 value={tipoPresenca}
    //                 onChange={handleChangeTipoPresenca}
    //                 variant="outlined"
    //             >
    //                 {listaTipoPresenca.map((option) => (
    //                     <MenuItem key={option.value} value={option.value}>
    //                         {option.label}
    //                     </MenuItem>
    //                 ))}
    //             </TextField> */}
    //         </FormGroup>
    //         <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
    //             <TextField
    //                 id="txtGestor"
    //                 label="Gestor"
    //                 style={{ margin: 8, width:"100px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtCargo"
    //                 label="Cargo"
    //                 style={{ margin: 8, width:"200px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtEmpresa"
    //                 label="Empresa"
    //                 style={{ margin: 8, width:"200px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtLoja"
    //                 label="Loja"
    //                 style={{ margin: 8, width:"200px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtTurno"
    //                 label="Turno"
    //                 style={{ margin: 8, width:"220px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtGrupo"
    //                 label="Grupo"
    //                 style={{ margin: 8, width:"100px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //         </FormGroup>
    //         <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
    //             <TextField
    //                 id="txtCEP"
    //                 label="CEP"
    //                 style={{ margin: 8, width:"130px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtEndereco"
    //                 label="Endereço"
    //                 style={{ margin: 8, width:"400px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtBairro"
    //                 label="Bairro"
    //                 style={{ margin: 8, width:"250px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //             <TextField
    //                 id="txtCidade"
    //                 label="Cidade"
    //                 style={{ margin: 8, width:"250px", marginRight:"10px"}}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //         </FormGroup>
    //         <FormGroup row style={{marginBottom:"20px",marginLeft:"20px",marginRight:"10px"}}>
    //             <TextField
    //                 id="txtProntuario"
    //                 label="Prontuário"
    //                 fullWidth
    //                 multiline
    //                 rows={5}
    //                 margin="normal"
    //                 InputLabelProps={{
    //                     shrink: true,
    //                 }}
    //                 variant="outlined"
    //                 size="small"
    //             />
    //         </FormGroup>
    //     </div>
    // )
}