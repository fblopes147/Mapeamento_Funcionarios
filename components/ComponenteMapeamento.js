import React from 'react';

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

var idAssociado = 0;
var infoContatoContaminado = "";
var infoMoraQuem = "";
var infoRegistradoHoje = "";
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

const SalvarDados = Event => {
    Event.preventDefault();
    
    idAssociado = window.location.search.replace("?id=","");
    infoContatoContaminado = document.querySelector("[id='txtContatoContaminado']").value;
    infoMoraQuem = document.querySelector("[id='txtMoraQuem']").value;
    infoRegistradoHoje = document.querySelector("[id='txtRegistradoHoje']").value;
    if(infoRegistradoHoje == "Sim"){
        infoRegistradoHoje = 1;
    }
    else{
        infoRegistradoHoje = 0;
    }
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

    // console.log("Id Associado: " + idAssociado);
    // console.log("Contato Contaminado: " + infoContatoContaminado);
    // console.log("Mora Com Quem?: " + infoMoraQuem);
    // console.log("Registrado Hoje?: " + infoRegistradoHoje);
    // console.log("Último Dia Trabalhado: " + infoUltimoDiaTrabalhado);
    // console.log("Possui Sintomas: " + infoPossuiSintomas);
    // console.log("Sintomas: " + infoSintomas);
    // console.log("Grupo de Risco: " + infoGrupoRisco);
    // console.log("Plano de Saúde: " + infoPlanoSaude);
    // console.log("Data de Registro: " + infoDataRegistro);
    // console.log("Contactou Médico: " + infoContatoMedico);
    // console.log("Data de Contato Médico: " + infoDataContatoMedico);
    // console.log("Data do Exame: " + infoDataExame);
    // console.log("Status do Exame: " + infoStatusExame);
    // console.log("Responsável Central: " + infoRespCentral);
    // console.log("Responsável Médico: " + infoRespMedico);
    // console.log("Responsável Técnico: " + infoRespTecinco);
    // console.log("Internado Hoje: " + infoInternadoHoje);
    // console.log("Hospital: " + infoHospital);
    // console.log("Período de Internação - Início: " + infoDataInicioInternacao);
    // console.log("Período de Internação - Término: " + infoDataFinalInternacao);
    // console.log("Histórico de Internação: " + infoHistoricoInternacao);
    // console.log("Previsão de Retorno: " + infoDataPrevisaoRetorno);
    
    var obj = {
        "admittedToday": infoRegistradoHoje,
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
    
    // Acessar API de salvar dados no Banco
    // alert("Os dados foram salvos com sucesso!");
}

export default class ControleMapeamento extends React.Component {
    state = {
        selectedRegistradoHoje: null,
        selectedPossuiSintomas: null,
        selectedGrupoRisco: null,
        selectedPlanoSaude: null,
        selectedContactouMedico: null,
        selectedStatusExame: null,
        selectedInternadoHoje: null,
        selectedHistoricoInternacao: null
    }

    handleChangeRegistradoHoje(valor){
        this.state.selectedRegistradoHoje = valor;
        document.querySelector("[id='txtRegistradoHoje']").value = valor;
        document.querySelector("[id='txtRegistradoHoje']").innerText = valor;
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
        idAssociado = window.location.search.replace("?id=","");
    }

    render(){
        const selectedRegistradoHoje = this.state;
        const selectedPossuiSintomas = this.state;
        const selectedGrupoRisco = this.state;
        const selectedPlanoSaude = this.state;
        const selectedContactouMedico = this.state;
        const selectedStatusExame = this.state;
        const selectedInternadoHoje = this.state;
        const selectedHistoricoInternacao = this.state;

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
                <FormGroup row style={{marginBottom:"30px",marginLeft:"10px"}}>
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
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="txtRegistradoHoje">Registrado Hoje?</InputLabel>
                        <Select
                            id="txtRegistradoHoje"
                            name="Registrado Hoje?"
                            value={this.state.selectedRegistradoHoje}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeRegistradoHoje(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Registrado Hoje?',
                                id: 'txtRegistradoHoje',
                                value: {selectedRegistradoHoje},
                                shrink: true
                            }}
                        >
                            <MenuItem value="">Selecionar</MenuItem>
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                        </Select>
                    </FormControl>
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
                            name="Grupo de Risco?"
                            value={this.state.selectedGrupoRisco}
                            variant="outlined"
                            style={{ margin: 8, width:"120px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeGrupoRisco(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Grupo de Risco?',
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
                        multiline
                        rows={2}
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
                        <InputLabel htmlFor="txtContatoMedico">Contactou Médico?</InputLabel>
                        <Select
                            id="txtContatoMedico"
                            name="Contactou Médico?"
                            value={this.state.selectedContactouMedico}
                            variant="outlined"
                            style={{ margin: 8, width:"140px", height:"40px", marginRight:"10px"}}
                            onChange={event => this.handleChangeContactouMedico(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                name: 'Contactou Médico?',
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