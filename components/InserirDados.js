import React from "react"

import Button from '@material-ui/core/Button';
import NovoAssociadoIcon from '@material-ui/icons/Create';
import NovasMedidasIcon from '@material-ui/icons/LocalHospital';

export default class ExibirInsercao extends React.Component{
    render(){
        return(
            <div>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >INSERÇÃO DE DADOS</a>
                <p></p>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<NovoAssociadoIcon />}
                    href="dadosfuncionarios"
                    style={{marginRight:"20px"}}
                >
                    Inserir Novo Associado
                </Button>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<NovasMedidasIcon />}
                    href="dadosmedidas"
                    style={{marginRight:"20px"}}
                >
                    Inserir Novas Medidas
                </Button>
            </div>
        )
    }
}