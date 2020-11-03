import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MedidasIcon from '@material-ui/icons/Assignment';
import MapeamentoIcon from '@material-ui/icons/LocalHospital';
import LimparPesquisaIcon from '@material-ui/icons/LocalLaundryService';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';

function ObterNomeLink(caminhoLink, valor){
    return caminhoLink + "?id=" + valor;
}

export default class PesquisarDados extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lista: [],
            listaMedidas: [],
            listaMapeamento: []
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/associates/')
            .then(res => {
                const lista = res.data;
                this.setState({lista});
            });
    }

    handleDeleteAssociado = (itemId) => {
        if(confirm("Você deseja excluir este associado?")){
            axios.get('http://localhost:8080/associates/' + itemId + '/measures/')
                .then(res => {
                    const listaMedidas = res.data;
                    this.setState({listaMedidas});

                    listaMedidas.map(function (itemMedida) {
                        axios.delete("http://localhost:8080/measures/" + itemId,
                            {params:{id:itemMedida.id}}).then(response => {
                        })
                    });
                });

            axios.get('http://localhost:8080/associates/' + itemId + '/mappings/')
                .then(res => {
                    const listaMapeamento = res.data;
                    this.setState({listaMapeamento});

                    listaMapeamento.map(function (itemMapeamento) {
                        axios.delete("http://localhost:8080/mappings/" + itemId,
                            {params:{id:itemMapeamento.id}}).then(response => {
                    })
                });
            });

            axios.delete("http://localhost:8080/associates/" + itemId,
                {params:{id:itemId}}).then(response => {
                    alert("Associado excluído com sucesso!");
                    document.location.reload(true);
                })
        }
    }

    handlePesquisarAssociado = () => {
        var nomeAssociado = document.querySelector("[id='txtNomeAssociado']").value;
        if(nomeAssociado == ""){
            alert("Nome deve ser preenchido");
        }
        else{
            axios.get('http://localhost:8080/associates/name/' + nomeAssociado + '/')
                .then(res => {
                    const lista = res.data;
                    this.setState({lista});
                });
        }
    }

    handleLimparPesquisa = () => {
        document.querySelector("[id='txtNomeAssociado']").value = "";
        document.querySelector("[id='txtNomeAssociado']").innerText = "";
        axios.get('http://localhost:8080/associates/')
            .then(res => {
                const lista = res.data;
                this.setState({lista});
            });
    }

    render(){
        return(
            <div>
                <FormGroup row style={{marginBottom:"20px",marginRight:"10px"}}>
                    <TextField
                        id="txtNomeAssociado"
                        label="Nome do Associado"
                        style={{ margin: 8, width:"300px", marginRight:"20px"}}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                    <Button
                        variant="contained"
                        color="black"
                        size="large"
                        startIcon={<SearchIcon />}
                        onClick={() => this.handlePesquisarAssociado()}
                        style={{marginTop:"6px", height:42, marginRight:"20px"}}
                    >
                        Pesquisar
                    </Button>
                    <Button
                        variant="contained"
                        color="black"
                        size="large"
                        startIcon={<LimparPesquisaIcon />}
                        onClick={() => this.handleLimparPesquisa()}
                        style={{marginTop:"6px", height:42}}
                    >
                        Limpar Pesquisa
                    </Button>
                </FormGroup>
                <TableContainer style={{marginLeft:"5px",marginRight:"5px"}}>
                    <Table style={{borderColor:'black', borderStyle:'solid', width:750}}>
                        <TableHead style={{fontWeight:"bold", borderBottomStyle:"solid"}}>
                            <TableRow>
                                <TableCell 
                                    style={{fontWeight:"bold", width:50}}
                                    align="center"
                                >
                                    Id
                                </TableCell>
                                <TableCell 
                                    style={{
                                        fontWeight:"bold", 
                                        borderLeftStyle:"double", 
                                        borderLeftColor:'black',
                                        width:350
                                    }}
                                    align="center"
                                >
                                    Nome do Associado
                                </TableCell>
                                <TableCell 
                                    style={{
                                        fontWeight:"bold", 
                                        borderLeftStyle:"double", 
                                        borderLeftColor:'black',
                                        width:250
                                    }}
                                    align="center"
                                >
                                    Associado
                                </TableCell>
                                <TableCell 
                                    style={{
                                        fontWeight:"bold", 
                                        borderLeftStyle:"double", 
                                        borderLeftColor:'black',
                                        width:50
                                    }}
                                    align="center"
                                >
                                    Medidas
                                </TableCell>
                                <TableCell 
                                    style={{
                                        fontWeight:"bold", 
                                        borderLeftStyle:"double", 
                                        borderLeftColor:'black',
                                        width:50
                                    }}
                                    align="center"
                                >
                                    Mapeamento
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.lista.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell 
                                        style={{
                                            borderColor:'black', 
                                            borderBottomStyle:'ridge',
                                            borderRightStyle:"double", 
                                            borderRightColor:'black',
                                            width:50
                                        }} 
                                        component="th" 
                                        scope="row" 
                                    >
                                        {row.id}
                                    </TableCell>
                                    <TableCell 
                                        style={{
                                            borderColor:'black', 
                                            borderBottomStyle:'ridge',
                                            borderRightStyle:"double", 
                                            borderRightColor:'black',
                                            width:350
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        style={{
                                            borderColor:'black', 
                                            borderBottomStyle:'ridge',
                                            borderRightStyle:"double", 
                                            borderRightColor:'black',
                                            width:250
                                        }}
                                    >
                                        <Tooltip title="Editar Associado">
                                            <Fab 
                                                color="default" 
                                                style={{marginRight:"30px"}}
                                                href={ObterNomeLink("dadosfuncionarios",row.id)}
                                            >
                                                <EditIcon />
                                            </Fab>
                                        </Tooltip>
                                        <Tooltip title="Excluir Associado">
                                            <Fab 
                                                color="secondary"
                                                onClick={() => this.handleDeleteAssociado(row.id)}
                                            >
                                                <DeleteIcon />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell 
                                        style={{
                                            borderColor:'black', 
                                            borderBottomStyle:'ridge',
                                            borderRightStyle:"double", 
                                            borderRightColor:'black',
                                            width:50
                                        }}
                                    >
                                        <Tooltip title="Controle de Medidas">
                                            <Fab 
                                                color="primary" 
                                                style={{marginRight:"30px"}}
                                                href={ObterNomeLink("dadosmedidas",row.id)}
                                            >
                                                <MedidasIcon />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        style={{
                                            borderColor:'black', 
                                            borderBottomStyle:'ridge',
                                            width:50
                                        }}
                                    >
                                        <Tooltip title="Controle de Mapeamento">
                                            <Fab 
                                                color="primary" 
                                                style={{marginRight:"30px"}}
                                                href={ObterNomeLink("dadosmapeamento",row.id)}
                                            >
                                                <MapeamentoIcon />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}