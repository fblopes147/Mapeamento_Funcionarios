import React from "react"

import Button from '@material-ui/core/Button';
import NovoAssociadoIcon from '@material-ui/icons/Add';

export default class ExibirInsercao extends React.Component{
    render(){
        return(
            <div>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<NovoAssociadoIcon />}
                    href="dadosfuncionarios?id=0"
                    style={{marginRight:"20px"}}
                >
                    Inserir Novo Associado
                </Button>
                {/* <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<NovasMedidasIcon />}
                    href="dadosmedidas"
                    style={{marginRight:"20px"}}
                >
                    Inserir Novas Medidas
                </Button>
                <Button
                    variant="contained"
                    color="black"
                    size="large"
                    startIcon={<NovoMapeamentoIcon />}
                    href="dadosmapeamento"
                    style={{marginRight:"20px"}}
                >
                    Inserir Mapeamento
                </Button> */}
            </div>
        )
    }
}