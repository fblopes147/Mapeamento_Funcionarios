import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import axios from 'axios';

const PesquisarFuncionario = () => {
    if(document.querySelector("[name='txtNomeFuncionario']").value == ""){
        alert("Nome deve ser preenchido");
    }
    
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: '25ch',
//     },
//     table:{
//         "& .MuiTableCell-root": {
//             borderLeft: "1px solid rgba(0, 0, 0, 1)",
//             borderRight: "1px solid rgba(0, 0, 0, 1)",
//             borderBottom: "1px solid rgba(0, 0, 0, 1)",
//         },
//     },
//     tableRow: {
//         "&:last-child th, &:last-child td": {
//           borderBottom: 0
//         }
//     }
// }));

export default class PesquisarDados extends React.Component{
    state = {
        lista: []
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/associates/')
            .then(res => {
                const lista = res.data;
                //console.log(lista);
                this.setState({lista});
            })
    }
    
    render(){
        return(
            <TableContainer style={{marginLeft:"5px",marginRight:"5px"}}>
                <Table style={{borderColor:'black', borderStyle:'solid'}}>
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
                                style={{fontWeight:"bold", borderLeftStyle:"double", borderLeftColor:'black'}}
                                align="center"
                            >
                                Nome do Associado
                            </TableCell>
                            <TableCell 
                                width="150"
                                style={{fontWeight:"bold", borderLeftStyle:"double", borderLeftColor:'black'}}
                                align="center"
                            >
                                Associado
                            </TableCell>
                            <TableCell 
                                width="225"
                                style={{fontWeight:"bold", borderLeftStyle:"double", borderLeftColor:'black'}}
                                align="center"
                            >
                                Medidas
                            </TableCell>
                            <TableCell 
                                width="225"
                                style={{fontWeight:"bold", borderLeftStyle:"double", borderLeftColor:'black'}}
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
                                        borderRightColor:'black'
                                    }} 
                                    width="50" 
                                    component="th" 
                                    scope="row" 
                                >
                                    {row.id}
                                </TableCell>
                                <TableCell 
                                    width="350"
                                    style={{
                                        borderColor:'black', 
                                        borderBottomStyle:'ridge',
                                        borderRightStyle:"double", 
                                        borderRightColor:'black'
                                    }}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell 
                                    width="150"
                                    align="center"
                                    style={{
                                        borderColor:'black', 
                                        borderBottomStyle:'ridge',
                                        borderRightStyle:"double", 
                                        borderRightColor:'black'
                                    }}
                                >
                                    <Tooltip title="Editar Associado">
                                        <Fab color="default" style={{marginRight:"30px"}}>
                                            <EditIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Excluir Associado">
                                        <Fab color="secondary">
                                            <DeleteIcon />
                                        </Fab>
                                    </Tooltip>
                                </TableCell>
                                <TableCell 
                                    width="225"
                                    align="center"
                                    style={{
                                        borderColor:'black', 
                                        borderBottomStyle:'ridge',
                                        borderRightStyle:"double", 
                                        borderRightColor:'black'
                                    }}
                                >
                                    <Tooltip title="Adicionar Medidas">
                                        <Fab color="primary" style={{marginRight:"30px"}}>
                                            <AddIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Editar Medidas">
                                        <Fab color="default" style={{marginRight:"30px"}}>
                                            <EditIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Excluir Medidas">
                                        <Fab color="secondary">
                                            <DeleteIcon />
                                        </Fab>
                                    </Tooltip>
                                </TableCell>
                                <TableCell 
                                    width="225"
                                    align="center"
                                    style={{
                                        borderColor:'black', 
                                        borderBottomStyle:'ridge'
                                    }}
                                >
                                    <Tooltip title="Adicionar Mapeamento">
                                        <Fab color="primary" style={{marginRight:"30px"}}>
                                            <AddIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Editar Mapeamento">
                                        <Fab color="default" style={{marginRight:"30px"}}>
                                            <EditIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Excluir Mapeamento">
                                        <Fab color="secondary">
                                            <DeleteIcon />
                                        </Fab>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}