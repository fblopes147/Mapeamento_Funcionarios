import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const listaPlanoSaude = [
    {value: '-', label: '-'},
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

const listaStatusAssociado = [
    {value: '-', label: '-'},
    {value: 'Ativo', label: 'Ativo'},
    {value: 'Inativo', label: 'Inativo'},
    {value: 'Cancelado', label: 'Cancelado'},
]

const listaStatusExame = [
    {value: '-', label: '-'},
    {value: 'Valido', label: 'Válido'},
    {value: 'Vencido', label: 'Vencido'},
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
    // Acessar API de salvar dados no Banco
    alert("Os dados foram salvos com sucesso!");
}

export default function InserirMapeamento(){
    const [state, setState] = React.useState({
        chkPossuiSintomas: false,
        chkGrupoRisco: false,
        chkPossuiPlanoSaude: false,
        chkContatoMedico: false,
        chkRealizouExame: false,
        chkPositivo: false,
        chkInternadoHoje: false,
    });
    const [planoSaude, setPlanoSaude] = React.useState('-');
    const [statusAssociado, setStatusAssociado] = React.useState('-');
    const [statusExame, setStatusExame] = React.useState('-');

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChangePlanoSaude = event => {
        document.querySelector("[id='txtPlanoSaude']").value = event.target.value;
        setPlanoSaude(event.target.value);
    };

    const handleChangeStatusAssociado = event => {
        document.querySelector("[id='txtStatusAssociado']").value = event.target.value;
        setStatusAssociado(event.target.value);
    };

    const handleChangeStatusExame = event => {
        document.querySelector("[id='txtStatusExame']").value = event.target.value;
        setStatusExame(event.target.value);
    };
    
    return(
        <div>
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
            <br />
            <br />
            <br />
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
                style={{ margin: 8, width:"200px", marginRight:"10px"}}
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
                style={{ margin: 8, width:"150px", marginRight:"10px"}}
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
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkPossuiSintomas}
                    onChange={handleChange}
                    name="chkPossuiSintomas"
                    color="primary"
                />
                }
                label="Possui Sintomas"
            />
            <TextField
                id="txtSintomas"
                label="Sintomas"
                multiline
                rows={5}
                style={{ margin: 8, width:"150px", marginRight:"10px"}}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                size="small"
            />
            <TextField
                id="txtInicioSintomas"
                label="Início dos Sintomas"
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
            <p />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkGrupoRisco}
                    onChange={handleChange}
                    name="chkGrupoRisco"
                    color="primary"
                />
                }
                label="Grupo Risco"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkPossuiPlanoSaude}
                    onChange={handleChange}
                    name="chkPossuiPlanoSaude"
                    color="primary"
                />
                }
                label="Possui Plano de Saude"
            />
            <TextField
                id="txtPlanoSaude"
                select
                label="Plano de Saúde"
                style={{ margin: 8, width:"180px", marginRight:"10px"}}
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
                id="txtStatusAssociado"
                select
                label="Status do Associado"
                style={{ margin: 8, width:"180px", marginRight:"10px"}}
                size="small"
                value={statusAssociado}
                onChange={handleChangeStatusAssociado}
                variant="outlined"
            >
                {listaStatusAssociado.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkContatoMedico}
                    onChange={handleChange}
                    name="chkContatoMedico"
                    color="primary"
                />
                }
                label="Contactou Médico"
            />
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
            <p />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkRealizouExame}
                    onChange={handleChange}
                    name="chkRealizouExame"
                    color="primary"
                />
                }
                label="Realizou Exame"
            />
            <TextField
                id="txtDtExame"
                label="Data do Exame"
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
                id="txtExame"
                label="Exame"
                style={{ margin: 8, width:"300px", marginRight:"10px"}}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                size="small"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkPositivo}
                    onChange={handleChange}
                    name="chkPositivo"
                    color="primary"
                />
                }
                label="Positivo"
            />
            <TextField
                id="txtTesteRealizado"
                label="Teste Realizado"
                style={{ margin: 8, width:"150px", marginRight:"10px"}}
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
                style={{ margin: 8, width:"180px", marginRight:"10px"}}
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
                style={{ margin: 8, width:"200px", marginRight:"10px"}}
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
                style={{ margin: 8, width:"200px", marginRight:"10px"}}
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
                style={{ margin: 8, width:"200px", marginRight:"10px"}}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                size="small"
            />
            <p />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.chkInternadoHoje}
                    onChange={handleChange}
                    name="chkInternadoHoje"
                    color="primary"
                />
                }
                label="Internado Hoje"
            />
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
                id="txtDtFinalInternacao"
                label="Período de Internação - Término"
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
                id="txtHistoricoInternacao"
                label="Histórico de Internação"
                multiline
                rows={5}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                size="small"
            />
            <p />
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
        </div>
    )
}