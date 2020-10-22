import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';

const listaPlanoSaude = [
    {value: '-', label: '-'},
    {value: 'N/A', label: 'Não Possui'},
    {value: 'Allianz', label: 'Allianz'},
    {value: 'Amil', label: 'Amil'},
    {value: 'Bradesco', label: 'Bradesco'},
    {value: 'GoldenCross', label: 'Golden Cross'},
    {value: 'NotreDameIntermedica', label: 'Notre Dame Intermédica'},
    {value: 'PortoSeguro', label: 'Porto Seguro'},
    {value: 'PreventSenior', label: 'Prevent Senior'},
    {value: 'SaoCristovao', label: 'São Cristóvão'},
    {value: 'SegurosUnimed', label: 'Seguros Unimed'},
    {value: 'Sompo', label: 'Sompo'},
    {value: 'SulAmerica', label: 'Sul América'},
    {value: 'Trasmontano', label: 'Trasmontano'},
    {value: 'Unimed', label: 'Unimed'},
    {value: 'Outros', label: 'Outros'},
]

const listaStatusExame = [
    {value: '-', label: '-'},
    {value: 'Positivo', label: 'Positivo'},
    {value: 'Negativo', label: 'Negativo'},
]

const listaOpcoes = [
    {value: '-', label: '-'},
    {value: 'S', label: 'Sim'},
    {value: 'N', label: 'Não'},
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
    console.log("Previsão de Retorno: " + document.querySelector("[id='txtDtPrevisaoRetorno']").value);
    // Acessar API de salvar dados no Banco
    alert("Os dados foram salvos com sucesso!");
}

export default function InserirMapeamento(){
    // const [state, setState] = React.useState({
    //     chkPossuiSintomas: false,
    //     chkGrupoRisco: false,
    //     chkContatoMedico: false,
    //     chkInternadoHoje: false,
    // });
    const [possuiSintomas, setPossuiSintomas] = React.useState('-');
    const [grupoRisco, setGrupoRisco] = React.useState('-');
    const [planoSaude, setPlanoSaude] = React.useState('-');
    const [contatoMedico, setContatoMedico] = React.useState('-');
    const [statusExame, setStatusExame] = React.useState('-');
    const [internadoHoje, setInternadoHoje] = React.useState('-');

    // const handleChangePossuiSintomas = (event) => {
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
                <TextField
                    id="txtPossuiSintomas"
                    select
                    label="Possui Sintomas?"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={possuiSintomas}
                    onChange={handleChangePossuiSintomas}
                    variant="outlined"
                >
                    {listaOpcoes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtSintomas"
                    label="Sintomas"
                    multiline
                    rows={3}
                    style={{ margin: 8, width:"500px", marginRight:"10px"}}
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
                    id="txtGrupoRisco"
                    select
                    label="Grupo de Risco?"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={grupoRisco}
                    onChange={handleChangeGrupoRisco}
                    variant="outlined"
                >
                    {listaOpcoes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtPlanoSaude"
                    select
                    label="Plano de Saúde"
                    style={{ margin: 8, width:"250px", marginRight:"10px"}}
                    size="small"
                    value={planoSaude}
                    onChange={handleChangePlanoSaude}
                    variant="outlined"
                >
                    {listaPlanoSaude.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtDataRegistro"
                    label="Data de Registro"
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
                    id="txtContatoMedico"
                    select
                    label="Contactou Médico?"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={contatoMedico}
                    onChange={handleChangeContatoMedico}
                    variant="outlined"
                >
                    {listaOpcoes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtDtContatoMedico"
                    label="Data de Contato Médico"
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
            <FormGroup row style={{marginBottom:"30px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtDtExame"
                    label="Data do Exame"
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
                <TextField
                    id="txtStatusExame"
                    select
                    label="Status do Exame"
                    style={{ margin: 8, width:"140px", marginRight:"10px"}}
                    size="small"
                    value={statusExame}
                    onChange={handleChangeStatusExame}
                    variant="outlined"
                >
                    {listaStatusExame.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="txtRespCentral"
                    label="Responsável Central"
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
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
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
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
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
            </FormGroup>
            <FormGroup row style={{marginBottom:"15px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtInternadoHoje"
                    select
                    label="Internado Hoje?"
                    style={{ margin: 8, width:"150px", marginRight:"10px"}}
                    size="small"
                    value={internadoHoje}
                    onChange={handleChangeInternadoHoje}
                    variant="outlined"
                >
                    {listaOpcoes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
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
            </FormGroup>
            <FormGroup row style={{marginBottom:"15px",marginLeft:"20px",marginRight:"10px"}}>
                <TextField
                    id="txtHistoricoInternacao"
                    label="Histórico de Internação"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
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