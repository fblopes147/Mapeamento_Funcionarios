import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

import TextField from '@material-ui/core/TextField';

import FormGroup from '@material-ui/core/FormGroup';

// const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     margin: {
//         margin: theme.spacing(1),
//     },
//     withoutLabel: {
//         marginTop: theme.spacing(3),
//     },
//     textField: {
//         width: '25ch',
//     },
// }));

var idAssociado = 0;
var infoDataMedida = "";
var infoResponsavel = "";
var infoStatus = "";
var infoDescrMedidas = "";
var infoObsResultados = "";

const SalvarDados = Event => {
    Event.preventDefault();

    idAssociado = window.location.search.replace("?id=","");
    infoDataMedida = document.querySelector("[id='txtDtMedida']").value;
    infoResponsavel = document.querySelector("[id='txtResponsavel']").value;
    infoStatus = document.querySelector("[id='txtStatus']").value;
    infoDescrMedidas = document.querySelector("[id='txtDescricaoMedidas']").value;
    infoObsResultados = document.querySelector("[id='txtObsResultados']").value;
    
    console.log("Id Associado: " + idAssociado);
    console.log("Data da Medida: " + document.querySelector("[id='txtDtMedida']").value);
    console.log("Responsável: " + document.querySelector("[id='txtResponsavel']").value);
    console.log("Status: " + document.querySelector("[id='txtStatus']").value);
    console.log("Descrição das Medidas: " + document.querySelector("[id='txtDescricaoMedidas']").value);
    console.log("Observação dos Resultados: " + document.querySelector("[id='txtObsResultados']").value);
    var obj = {
        "date": infoDataMedida,
        "idAssociate": idAssociado,
        "measure": infoDescrMedidas,
        "responsible": infoResponsavel,
        "resultObservation": infoObsResultados,
        "status": infoStatus
    };
    var myJson = JSON.stringify(obj);
    console.log(myJson);

    fetch('http://localhost:8080/measures/',{
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(obj)
        }).then(r=>r.json()).then(res=>{
            if(res){
                alert("Medidas criadas com sucesso!");
            }
        }).catch(error => {
            console.log(JSON.stringify(obj));
        })

    // Acessar API de salvar dados no Banco
    // alert("Os dados foram salvos com sucesso!");
}

export default class CadastroMedidas extends React.Component {
    componentDidMount(){
        idAssociado = window.location.search.replace("?id=","");
    }
    
    render(){
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
                <FormGroup row style={{marginBottom:"20px",marginRight:"10px"}}>
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
}