import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';

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

const SalvarDados = () => {
    console.log("Id Associado: " + document.querySelector("[id='txtIdAssociado']").value);
    console.log("Data da Medida: " + document.querySelector("[id='txtDtMedida']").value);
    console.log("Responsável: " + document.querySelector("[id='txtResponsavel']").value);
    console.log("Status: " + document.querySelector("[id='txtStatus']").value);
    console.log("Descrição das Medidas: " + document.querySelector("[id='txtDescricaoMedidas']").value);
    console.log("Observação dos Resultados: " + document.querySelector("[id='txtObsResultados']").value);    
    // Acessar API de salvar dados no Banco
    alert("Os dados foram salvos com sucesso!");
}

export default function InserirMedidas(){
    return(
        <div>
            <FormGroup row style={{marginBottom:"30px",marginLeft:"10px",marginRight:"10px"}}>
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
                    id="txtDtMedida"
                    label="Data da Medida"
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
                    id="txtResponsavel"
                    label="Responsável"
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtStatus"
                    label="Status"
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
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
                    id="txtDescricaoMedidas"
                    label="Descrição das Medidas"
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
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <TextField
                    id="txtObsResultados"
                    label="Observação dos Resultados"
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
            </FormGroup>
        </div>
    )
}