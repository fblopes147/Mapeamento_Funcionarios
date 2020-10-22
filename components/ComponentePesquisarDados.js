import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PesquisarFuncionario = () => {
    if(document.querySelector("[name='txtNomeFuncionario']").value == ""){
        alert("Nome deve ser preenchido");
    }
    
}

const useStyles = makeStyles((theme) => ({
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
    table:{
        minwidth:1300,
        "& .MuiTableCell-root": {
            borderLeft: "1px solid rgba(0, 0, 0, 1)",
            borderRight: "1px solid rgba(0, 0, 0, 1)",
            borderBottom: "1px solid rgba(0, 0, 0, 1)",
        },
    },
    tableRow: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
    }
}));

function createData(id, nomeAssociado, area, telefone) {
    return { id, nomeAssociado, area, telefone };
}

const rows = [
    createData(1,'Felipe','11','973400876'),
    createData(2,'Luis','11','993354686'),
    createData(3,'Guilherme','12','997254786'),
    createData(4,'Leonardo','13','988150807'),
    createData(5,'Carlos','13','996335449'),
]

export default function PesquisarDados(){
    const classes = useStyles();

    return(
        <TableContainer component={Paper} style={{marginLeft:"5px",marginRight:"10px"}}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{backgroundColor:'blue'}}>
                        <TableCell width="75" style={{color:'white'}} align="center">Id</TableCell>
                        <TableCell width="735" style={{color:'white'}} align="center">Nome do Associado</TableCell>
                        <TableCell width="40" style={{color:'white'}} align="center">Área</TableCell>
                        <TableCell width="150" style={{color:'white'}} align="center">Telefone</TableCell>
                        <TableCell width="75" style={{color:'white'}} align="center">Editar Associado</TableCell>
                        <TableCell width="75" style={{color:'white'}} align="center">Editar Medidas</TableCell>
                        <TableCell width="75" style={{color:'white'}} align="center">Editar Mapeamento</TableCell>
                        <TableCell width="75" style={{color:'white'}} align="center">Excluir Associado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell width="75" component="th" scope="row">{row.id}</TableCell>
                            <TableCell width="735">{row.nomeAssociado}</TableCell>
                            <TableCell width="40" align="center">{row.area}</TableCell>
                            <TableCell width="150">{row.telefone}</TableCell>
                            <TableCell width="75" align="center"><EditIcon /></TableCell>
                            <TableCell width="75" align="center"><EditIcon /></TableCell>
                            <TableCell width="75" align="center"><EditIcon /></TableCell>
                            <TableCell width="75" align="center"><DeleteIcon /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}