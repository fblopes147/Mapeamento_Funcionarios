import React from 'react';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import TextField from '@material-ui/core/TextField';

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
                alert("Medida criada com sucesso!");
                document.location.reload(true);
            }
        }).catch(error => {
            console.log(JSON.stringify(obj));
    })
}

export default class CadastroMedidas extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listaMedidas: [],
            listaEditarMedidas: []
        }
    }
    
    componentDidMount(){
        idAssociado = window.location.search.replace("?id=","");

        axios.get('http://localhost:8080/associates/' + idAssociado + '/measures/')
            .then(res => {
                const listaMedidas = res.data;
                this.setState({listaMedidas});

                console.log(listaMedidas);
            });
    }

    handleEditarDados = (itemId) => {
        axios.get('http://localhost:8080/measures/' + itemId)
            .then(res => {
                const listaEditarMedidas = res.data;
                this.setState({listaEditarMedidas});

                document.querySelector("[id='txtDtMedida']").value = listaEditarMedidas.date.substring(0,10);
                document.querySelector("[id='txtResponsavel']").value = listaEditarMedidas.responsible;
                document.querySelector("[id='txtStatus']").value = listaEditarMedidas.status;
                document.querySelector("[id='txtDescricaoMedidas']").value = listaEditarMedidas.measure;
                document.querySelector("[id='txtObsResultados']").value = listaEditarMedidas.resultObservation;

                console.log(listaEditarMedidas);
            });
    }

    handleDeleteMedidas = (itemId) => {
        axios.delete("http://localhost:8080/measures/" + itemId,
            {params:{id:itemId}}).then(response => {
                alert("Associado excluído com sucesso!");
                document.location.reload(true);
            })
    }
    
    render(){
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
                            <Table style={{borderColor:'black', borderStyle:'solid', width:600}}>
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
                                            width="350" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                            Responsável
                                        </TableCell>
                                        <TableCell 
                                            width="150" 
                                            style={{fontWeight:"bold",borderLeftStyle:"double", borderLeftColor:'black'}}
                                            align="center"
                                        >
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.listaMedidas.map((rowMedidas) => (
                                        <TableRow key={rowMedidas.id}>
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
                                                {rowMedidas.id}
                                            </TableCell>
                                            <TableCell 
                                                style={{
                                                    borderColor:'black', 
                                                    borderBottomStyle:'ridge',
                                                    borderRightStyle:"double", 
                                                    borderRightColor:'black'
                                                }} 
                                                width="350" 
                                                component="th" 
                                                scope="row" 
                                            >
                                                {rowMedidas.responsible}
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
                                                <Tooltip title="Editar Medidas">
                                                    <EditIcon 
                                                        color="default"
                                                        style={{marginRight:"20px"}}
                                                        onClick={() => this.handleEditarDados(rowMedidas.id)}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Excluir Medidas">
                                                    <DeleteIcon 
                                                        color="secondary"
                                                        onClick={() => this.handleDeleteMedidas(rowMedidas.id)}
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
                <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                    <TextField
                        id="txtObsResultados"
                        label="Observação dos Resultados"
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
            </div>
        )
    }
}