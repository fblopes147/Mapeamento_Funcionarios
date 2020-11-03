import React from 'react';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';
import UpdateIcon from '@material-ui/icons/Update';

import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';

import axios from 'axios';

var idAssociado = 0;
var idMapeamento = 0;
var infoContatoContaminado = "";
var infoMoraQuem = "";
var infoUltimoDiaTrabalhado = "";
var infoPossuiSintomas = "";
var infoSintomas = "";
var infoGrupoRisco = "";
var infoPlanoSaude = "";
var infoDataRegistro = "";
var infoContatoMedico = "";
var infoDataContatoMedico = "";
var infoDataExame = "";
var infoStatusExame = "";
var infoRespCentral = "";
var infoRespMedico = "";
var infoRespTecinco = "";
var infoInternadoHoje = "";
var infoHospital = "";
var infoDataInicioInternacao = "";
var infoDataFinalInternacao = "";
var infoHistoricoInternacao = "";
var infoDataPrevisaoRetorno = "";

var btnSalvar = true;
var btnAtualizar = false;

const SalvarDados = Event => {
    Event.preventDefault();
    
    idAssociado = window.location.search.replace("?id=","");
    infoContatoContaminado = document.querySelector("[id='txtContatoContaminado']").value;
    infoMoraQuem = document.querySelector("[id='txtMoraQuem']").value;
    infoUltimoDiaTrabalhado = document.querySelector("[id='txtUltimoDiaTrabalhado']").value;
    infoPossuiSintomas = document.querySelector("[id='txtPossuiSintomas']").value;
    infoSintomas = document.querySelector("[id='txtSintomas']").value;
    infoGrupoRisco = document.querySelector("[id='txtGrupoRisco']").value;
    infoPlanoSaude = document.querySelector("[id='txtPlanoSaude']").value;
    infoDataRegistro = document.querySelector("[id='txtDataRegistro']").value;
    infoContatoMedico = document.querySelector("[id='txtContatoMedico']").value;
    if(infoContatoMedico == "Sim"){
        infoContatoMedico = 1;
    }
    else{
        infoContatoMedico = 0;
    }
    infoDataContatoMedico = document.querySelector("[id='txtDtContatoMedico']").value;
    infoDataExame = document.querySelector("[id='txtDtExame']").value;
    infoStatusExame = document.querySelector("[id='txtStatusExame']").value;
    infoRespCentral = document.querySelector("[id='txtRespCentral']").value;
    infoRespMedico = document.querySelector("[id='txtRespMedico']").value;
    infoRespTecinco = document.querySelector("[id='txtRespTecinco']").value;
    infoInternadoHoje = document.querySelector("[id='txtInternadoHoje']").value;
    if(infoInternadoHoje == "Sim"){
        infoInternadoHoje = 1;
    }
    else{
        infoInternadoHoje = 0;
    }
    infoHospital = document.querySelector("[id='txtHospital']").value;
    infoDataInicioInternacao = document.querySelector("[id='txtDtInicioInternacao']").value;
    infoDataFinalInternacao = document.querySelector("[id='txtDtFinalInternacao']").value;
    infoHistoricoInternacao = document.querySelector("[id='txtHistoricoInternacao']").value;
    if(infoHistoricoInternacao == "Sim"){
        infoHistoricoInternacao = 1;
    }
    else{
        infoHistoricoInternacao = 0;
    }
    infoDataPrevisaoRetorno = document.querySelector("[id='txtDtPrevisaoRetorno']").value;

    var obj = {
        "admittedToday": infoInternadoHoje,
        "associateId": idAssociado,
        "centralResponsible": infoRespCentral,
        "contactedContaminated": infoContatoContaminado,
        "contactedDoctor": infoContatoMedico,
        "dateExam": infoDataExame,
        "dateHospitalizationEnd": infoDataFinalInternacao,
        "dateHospitalizationStart": infoDataInicioInternacao,
        "dateMedicalContact": infoDataContatoMedico,
        "dateRegistration": infoDataRegistro,
        "dateReturnForecast": infoDataPrevisaoRetorno,
        "earlySymptoms": infoPossuiSintomas,
        "examStatus": infoStatusExame,
        "healthPlan": infoPlanoSaude,
        "hospital": infoHospital,
        "hospitalizationHistory": infoHistoricoInternacao,
        "lastDayWorked": infoUltimoDiaTrabalhado,
        "medicalOfficer": infoRespMedico,
        "riskGroup": infoGrupoRisco,
        "symptoms": infoSintomas,
        "technicalManager": infoRespTecinco,
        "whoDoYouLiveWith": infoMoraQuem,
    };
    var myJson = JSON.stringify(obj);
    console.log(myJson);

    fetch('http://localhost:8080/mappings/',{
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(obj)
        }).then(r=>r.json()).then(res=>{
            if(res){
                alert("Mapeamento criado com sucesso!");
            }
        }).catch(error => {
            console.log(JSON.stringify(obj));
    })
    
    document.location.reload(true);
}

export default class ControleMapeamento extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listaMapeamento: [],
            listaEditarMapeamento: [],
            selectedPossuiSintomas: null,
            selectedGrupoRisco: null,
            selectedPlanoSaude: null,
            selectedContactouMedico: null,
            selectedStatusExame: null,
            selectedInternadoHoje: null,
            selectedHistoricoInternacao: null
        }
    }
    
    handleChangePossuiSintomas(valor){
        this.state.selectedPossuiSintomas = valor;
        document.querySelector("[id='txtPossuiSintomas']").value = valor;
        document.querySelector("[id='txtPossuiSintomas']").innerText = valor;
    }

    handleChangeGrupoRisco(valor){
        this.state.selectedGrupoRisco = valor;
        document.querySelector("[id='txtGrupoRisco']").value = valor;
        document.querySelector("[id='txtGrupoRisco']").innerText = valor;
    }

    handleChangePlanoSaude(valor){
        this.state.selectedPlanoSaude = valor;
        document.querySelector("[id='txtPlanoSaude']").value = valor;
        document.querySelector("[id='txtPlanoSaude']").innerText = valor;
    }

    handleChangeContactouMedico(valor){
        this.state.selectedContactouMedico = valor;
        document.querySelector("[id='txtContatoMedico']").value = valor;
        document.querySelector("[id='txtContatoMedico']").innerText = valor;
    }

    handleChangeStatusExame(valor){
        this.state.selectedStatusExame = valor;
        document.querySelector("[id='txtStatusExame']").value = valor;
        document.querySelector("[id='txtStatusExame']").innerText = valor;
    }

    handleChangeInternadoHoje(valor){
        this.state.selectedInternadoHoje = valor;
        document.querySelector("[id='txtInternadoHoje']").value = valor;
        document.querySelector("[id='txtInternadoHoje']").innerText = valor;
    }

    handleChangeHistoricoInternacao(valor){
        this.state.selectedHistoricoInternacao = valor;
        document.querySelector("[id='txtHistoricoInternacao']").value = valor;
        document.querySelector("[id='txtHistoricoInternacao']").innerText = valor;
    }
    
    componentDidMount(){
        btnSalvar = false;
        btnAtualizar = true;
        
        idAssociado = window.location.search.replace("?id=","");

        axios.get('http://localhost:8080/associates/' + idAssociado + '/mappings/')
            .then(res => {
                const listaMapeamento = res.data;
                this.setState({listaMapeamento});

                console.log(listaMapeamento);
            });
    }

    handleEditarDados = (itemId) => {
        btnSalvar = true;
        btnAtualizar = false;

        idMapeamento = itemId;
        
        axios.get('http://localhost:8080/mappings/' + itemId)
            .then(res => {
                const listaEditarMapeamento = res.data;
                this.setState({listaEditarMapeamento});

                document.querySelector("[id='txtIdMapeamento']").value = idMapeamento;
                document.querySelector("[id='txtContatoContaminado']").value = listaEditarMapeamento.contactedContaminated;
                document.querySelector("[id='txtMoraQuem']").value = listaEditarMapeamento.whoDoYouLiveWith;
                document.querySelector("[id='txtUltimoDiaTrabalhado']").value = listaEditarMapeamento.lastDayWorked.substring(0,10);
                document.querySelector("[id='txtGrupoRisco']").value = listaEditarMapeamento.riskGroup;
                document.querySelector("[id='txtGrupoRisco']").innerText = listaEditarMapeamento.riskGroup;
                document.querySelector("[id='txtPossuiSintomas']").value = listaEditarMapeamento.earlySymptoms;
                document.querySelector("[id='txtPossuiSintomas']").innerText = listaEditarMapeamento.earlySymptoms;
                document.querySelector("[id='txtSintomas']").value = listaEditarMapeamento.symptoms;
                document.querySelector("[id='txtPlanoSaude']").value = listaEditarMapeamento.healthPlan;
                document.querySelector("[id='txtPlanoSaude']").innerText = listaEditarMapeamento.healthPlan;
                document.querySelector("[id='txtDataRegistro']").value = listaEditarMapeamento.dateRegistration.substring(0,10);
                document.querySelector("[id='txtContatoMedico']").value = listaEditarMapeamento.contactedDoctor ? "Sim" : "Não";
                document.querySelector("[id='txtContatoMedico']").innerText = listaEditarMapeamento.contactedDoctor ? "Sim" : "Não";
                document.querySelector("[id='txtDtContatoMedico']").value = listaEditarMapeamento.dateMedicalContact.substring(0,10);
                document.querySelector("[id='txtDtExame']").value = listaEditarMapeamento.dateExam.substring(0,10);
                document.querySelector("[id='txtStatusExame']").value = listaEditarMapeamento.examStatus;
                document.querySelector("[id='txtStatusExame']").innerText = listaEditarMapeamento.examStatus;
                document.querySelector("[id='txtRespCentral']").value = listaEditarMapeamento.centralResponsible;
                document.querySelector("[id='txtRespMedico']").value = listaEditarMapeamento.medicalOfficer;
                document.querySelector("[id='txtRespTecinco']").value = listaEditarMapeamento.technicalManager;
                document.querySelector("[id='txtInternadoHoje']").value = listaEditarMapeamento.admittedToday ? "Sim" : "Não";
                document.querySelector("[id='txtInternadoHoje']").innerText = listaEditarMapeamento.admittedToday ? "Sim" : "Não";
                document.querySelector("[id='txtHospital']").value = listaEditarMapeamento.hospital;
                document.querySelector("[id='txtDtInicioInternacao']").value = listaEditarMapeamento.dateHospitalizationStart.substring(0,10);
                document.querySelector("[id='txtDtFinalInternacao']").value = listaEditarMapeamento.dateHospitalizationEnd.substring(0,10);
                document.querySelector("[id='txtHistoricoInternacao']").value = listaEditarMapeamento.hospitalizationHistory ? "Sim" : "Não";
                document.querySelector("[id='txtHistoricoInternacao']").innerText = listaEditarMapeamento.hospitalizationHistory ? "Sim" : "Não";
                document.querySelector("[id='txtDtPrevisaoRetorno']").value = listaEditarMapeamento.dateReturnForecast.substring(0,10);
            });
    }

    handleDeleteMapeamento = (itemId) => {
        axios.delete("http://localhost:8080/mappings/" + itemId,
            {params:{id:itemId}}).then(response => {
                alert("Mapeamento excluído com sucesso!");
                document.location.reload(true);
            })
    }

    handleUpdateMapeamento = () => {
        idMapeamento = document.querySelector("[id='txtIdMapeamento']").value;
        infoContatoContaminado = document.querySelector("[id='txtContatoContaminado']").value;
        infoMoraQuem = document.querySelector("[id='txtMoraQuem']").value;
        infoUltimoDiaTrabalhado = document.querySelector("[id='txtUltimoDiaTrabalhado']").value;
        infoPossuiSintomas = document.querySelector("[id='txtPossuiSintomas']").value;
        infoSintomas = document.querySelector("[id='txtSintomas']").value;
        infoGrupoRisco = document.querySelector("[id='txtGrupoRisco']").value;
        infoPlanoSaude = document.querySelector("[id='txtPlanoSaude']").value;
        infoDataRegistro = document.querySelector("[id='txtDataRegistro']").value;
        infoContatoMedico = document.querySelector("[id='txtContatoMedico']").value;
        if(infoContatoMedico == "Sim"){
            infoContatoMedico = 1;
        }
        else{
            infoContatoMedico = 0;
        }
        infoDataContatoMedico = document.querySelector("[id='txtDtContatoMedico']").value;
        infoDataExame = document.querySelector("[id='txtDtExame']").value;
        infoStatusExame = document.querySelector("[id='txtStatusExame']").value;
        infoRespCentral = document.querySelector("[id='txtRespCentral']").value;
        infoRespMedico = document.querySelector("[id='txtRespMedico']").value;
        infoRespTecinco = document.querySelector("[id='txtRespTecinco']").value;
        infoInternadoHoje = document.querySelector("[id='txtInternadoHoje']").value;
        if(infoInternadoHoje == "Sim"){
            infoInternadoHoje = 1;
        }
        else{
            infoInternadoHoje = 0;
        }
        infoHospital = document.querySelector("[id='txtHospital']").value;
        infoDataInicioInternacao = document.querySelector("[id='txtDtInicioInternacao']").value;
        infoDataFinalInternacao = document.querySelector("[id='txtDtFinalInternacao']").value;
        infoHistoricoInternacao = document.querySelector("[id='txtHistoricoInternacao']").value;
        if(infoHistoricoInternacao == "Sim"){
            infoHistoricoInternacao = 1;
        }
        else{
            infoHistoricoInternacao = 0;
        }
        infoDataPrevisaoRetorno = document.querySelector("[id='txtDtPrevisaoRetorno']").value;

        var obj = {
            "admittedToday": infoInternadoHoje,
            "associateId": idAssociado,
            "centralResponsible": infoRespCentral,
            "contactedContaminated": infoContatoContaminado,
            "contactedDoctor": infoContatoMedico,
            "dateExam": infoDataExame,
            "dateHospitalizationEnd": infoDataFinalInternacao,
            "dateHospitalizationStart": infoDataInicioInternacao,
            "dateMedicalContact": infoDataContatoMedico,
            "dateRegistration": infoDataRegistro,
            "dateReturnForecast": infoDataPrevisaoRetorno,
            "earlySymptoms": infoPossuiSintomas,
            "examStatus": infoStatusExame,
            "healthPlan": infoPlanoSaude,
            "hospital": infoHospital,
            "hospitalizationHistory": infoHistoricoInternacao,
            "lastDayWorked": infoUltimoDiaTrabalhado,
            "medicalOfficer": infoRespMedico,
            "riskGroup": infoGrupoRisco,
            "symptoms": infoSintomas,
            "technicalManager": infoRespTecinco,
            "whoDoYouLiveWith": infoMoraQuem,
        };
        // var myJson = JSON.stringify(obj);
        // console.log(myJson);

        fetch('http://localhost:8080/mappings/' + idMapeamento + '/',{
                method:'put',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify(obj)
            }).then(r=>r.json()).then(res=>{
                if(res){
                    alert("Mapeamento atualizado com sucesso!");
                    document.location.reload(true);
                }
            }).catch(error => {
                console.log(JSON.stringify(obj));
        })
    }

    render(){
        const selectedPossuiSintomas = this.state;
        const selectedGrupoRisco = this.state;
        const selectedPlanoSaude = this.state;
        const selectedContactouMedico = this.state;
        const selectedStatusExame = this.state;
        const selectedInternadoHoje = this.state;
        const selectedHistoricoInternacao = this.state;

        return(
            <div>
                <Accordion style={{marginBottom:"30px",marginLeft:"10px",marginRight:"10px"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panelControle"
                        style={{backgroundColor:"lightgray"}}
                    >
                        <Typography>CONTROLE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer style={{marginLeft:"5px",marginRight:"5px"}}>
                            <Table style={{borderColor:'black', borderStyle:'solid', width:900}}>
                                <TableHead style={{fontWeight:"bold", borderBottomStyle:"solid"}}>
                                    <TableRow>
                                        <TableCell 
                                            width="50" 
                                            style={{fontWeight:"bold"}}
                                            align="center"
                                        >
                                            Id
                                        </TableCell>
                                        <TableCell 
                                            width="250" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                            Contato Contaminado
                                        </TableCell>
                                        <TableCell 
                                            width="150" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                            Possui Sintomas
                                        </TableCell>
                                        <TableCell 
                                            width="150" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                            Grupo de Risco
                                        </TableCell>
                                        <TableCell 
                                            width="150" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                            Status do Exame
                                        </TableCell>
                                        <TableCell 
                                            width="100" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.listaMapeamento.map((rowMapeamento) => (
                                        <TableRow key={rowMapeamento.id}>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="50" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMapeamento.id}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="250" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMapeamento.contactedContaminated}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="150" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMapeamento.earlySymptoms}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="150" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMapeamento.riskGroup}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="150" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMapeamento.examStatus}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge'
                                                }} 
                                                width="100" 
                                                component="th" 
                                                scope="row"
                                                align="center"
                                            >
                                                <Tooltip title="Editar Mapeamento">
                                                    <EditIcon 
                                                        color="default"
                                                        style={{marginRight:"20px"}}
                                                        onClick={() => this.handleEditarDados(rowMapeamento.id)}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Excluir Mapeamento">
                                                    <DeleteIcon 
                                                        color="secondary"
                                                        onClick={() => this.handleDeleteMapeamento(rowMapeamento.id)}
                                                    />
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
                <FormGroup row style={{marginBottom:"30px",marginLeft:"20px",marginRight:"10px"}}>
                    <Button
                        variant="contained"
                        color="black"
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={SalvarDados}
                        style={{marginRight:"20px"}}
                        disabled={btnSalvar}
                    >
                        Salvar
                    </Button>
                    <Button
                        variant="contained"
                        color="black"
                        size="large"
                        startIcon={<UpdateIcon />}
                        onClick={() => this.handleUpdateMapeamento()}
                        style={{marginRight:"20px"}}
                        disabled={btnAtualizar}
                    >
                        Atualizar
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
                <FormGroup row style={{marginBottom:"30px",marginLeft:"10px"}}>
                    <TextField
                        id="txtIdMapeamento"
                        label="Id Mapeamento"
                        style={{ margin: 8, width:"120px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        disabled
                    />
                    <TextField
                        id="txtIdAssociado"
                        label="Id Associado"
                        style={{ margin: 8, width:"100px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        value={idAssociado}
                    />
                    <TextField
                        id="txtContatoContaminado"
                        label="Contato Contaminado"
                        style={{ margin: 8, width:"220px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="txtMoraQuem"
                        label="Mora Com Quem?"
                        style={{ margin: 8, width:"200px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="txtUltimoDiaTrabalhado"
                        label="Último Dia Trabalhado"
                        style={{ margin: 8, width:"175px", marginRight:"10px"}}
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
                        <InputLabel htmlFor="txtGrupoRisco">Grupo de Risco?</InputLabel>
                        <Select
                            id="txtGrupoRisco"
                            value={this.state.selectedGrupoRisco}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeGrupoRisco(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                id: 'txtGrupoRisco',
                                value: {selectedGrupoRisco},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
                </FormGroup>
                <FormGroup  row style={{marginBottom:"30px",marginLeft:"10px",marginRight:"10px"}}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtPossuiSintomas">Possui Sintomas?</InputLabel>
                        <Select
                            id="txtPossuiSintomas"
                            name="Possui Sintomas?"
                            value={this.state.selectedPossuiSintomas}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangePossuiSintomas(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Possui Sintomas?',
                                id: 'txtPossuiSintomas',
                                value: {selectedPossuiSintomas},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtSintomas"
                        label="Sintomas"
                        style={{ margin: 8, width:"300px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtPlanoSaude">Plano de Saúde</InputLabel>
                        <Select
                            id="txtPlanoSaude"
                            name="Plano de Saúde"
                            value={this.state.selectedPlanoSaude}
                            variant="outlined"
                            style={{ margin: 8, width:"230px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangePlanoSaude(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Plano de Saúde',
                                id: 'txtPlanoSaude',
                                value: {selectedPlanoSaude},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Não Possui">Não Possui</MenuItem>
                            <MenuItem value="Allianz">Allianz</MenuItem>
                            <MenuItem value="Amil">Amil</MenuItem>
                            <MenuItem value="Bradesco">Bradesco</MenuItem>
                            <MenuItem value="Golden Cross">Golden Cross</MenuItem>
                            <MenuItem value="Notre Dame Intermédica">Notre Dame Intermédica</MenuItem>
                            <MenuItem value="Porto Seguro">Porto Seguro</MenuItem>
                            <MenuItem value="Prevent Senior">Prevent Senior</MenuItem>
                            <MenuItem value="São Cristóvão">São Cristóvão</MenuItem>
                            <MenuItem value="Seguros Unimed">Seguros Unimed</MenuItem>
                            <MenuItem value="Sompo">Sompo</MenuItem>
                            <MenuItem value="Sul América">Sul América</MenuItem>
                            <MenuItem value="Trasmontano">Trasmontano</MenuItem>
                            <MenuItem value="Unimed">Unimed</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtDataRegistro"
                        label="Data de Registro"
                        style={{ margin: 8, width:"150px", marginRight:"10px"}}
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
                        <InputLabel htmlFor="txtContatoMedico">Contato Médico?</InputLabel>
                        <Select
                            id="txtContatoMedico"
                            name="Contato Médico?"
                            value={this.state.selectedContactouMedico}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeContactouMedico(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Contato Médico?',
                                id: 'txtContatoMedico',
                                value: {selectedContactouMedico},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtDtContatoMedico"
                        label="Data Contato Médico"
                        style={{ margin: 8, width:"160px", marginRight:"10px"}}
                        type="date"
                        format="dd/MM/yyyy"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                </FormGroup>
                <FormGroup row style={{marginBottom:"30px",marginLeft:"10px",marginRight:"10px"}}>
                    <TextField
                        id="txtDtExame"
                        label="Data do Exame"
                        style={{ margin: 8, width:"150px", marginRight:"10px"}}
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
                        <InputLabel htmlFor="txtStatusExame">Status do Exame</InputLabel>
                        <Select
                            id="txtStatusExame"
                            name="Status do Exame"
                            value={this.state.selectedStatusExame}
                            variant="outlined"
                            style={{ margin: 8, width:"130px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeStatusExame(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Status do Exame',
                                id: 'txtStatusExame',
                                value: {selectedStatusExame},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Positivo">Positivo</MenuItem>
                            <MenuItem value="Negativo">Negativo</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtRespCentral"
                        label="Responsável Central"
                        style={{ margin: 8, width:"250px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="txtRespMedico"
                        label="Responsável Médico"
                        style={{ margin: 8, width:"250px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="txtRespTecinco"
                        label="Responsável Técnico"
                        style={{ margin: 8, width:"250px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                </FormGroup>
                <FormGroup row style={{marginBottom:"15px",marginLeft:"10px",marginRight:"10px"}}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtInternadoHoje">Internado Hoje?</InputLabel>
                        <Select
                            id="txtInternadoHoje"
                            name="Internado Hoje?"
                            value={this.state.selectedInternadoHoje}
                            variant="outlined"
                            style={{ margin: 8, width:"100px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeInternadoHoje(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Internado Hoje?',
                                id: 'txtInternadoHoje',
                                value: {selectedInternadoHoje},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="txtHospital"
                        label="Hospital"
                        style={{ margin: 8, width:"330px", marginRight:"10px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="txtDtInicioInternacao"
                        label="Período de Internação - Início"
                        style={{ margin: 8, width:"220px", marginRight:"10px"}}
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
                        id="txtDtFinalInternacao"
                        label="Período de Internação - Término"
                        style={{ margin: 8, width:"240px", marginRight:"10px"}}
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
                        <InputLabel htmlFor="txtHistoricoInternacao">Já foi Internado?</InputLabel>
                        <Select
                            id="txtHistoricoInternacao"
                            name="Já foi Internado?"
                            value={this.state.selectedHistoricoInternacao}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeHistoricoInternacao(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Já foi Internado?',
                                id: 'txtHistoricoInternacao',
                                value: {selectedHistoricoInternacao},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
                </FormGroup>
                <FormGroup row style={{marginLeft:"10px",marginRight:"10px"}}>
                    <TextField
                        id="txtDtPrevisaoRetorno"
                        label="Previsão de Retorno"
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
                </FormGroup>
            </div>
        )
    }
}