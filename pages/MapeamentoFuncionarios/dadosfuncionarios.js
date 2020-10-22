import React from "react"
import Dados from '../../components/ComponenteFuncionarios';

import FormGroup from '@material-ui/core/FormGroup';

export default() => {
    return(
        <div>
            <FormGroup row style={{marginBottom:"10px",marginLeft:"20px",marginRight:"10px"}}>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >ADICIONAR NOVO ASSOCIADO</a>
            </FormGroup>
            <Dados />
            <br />
        </div>
    )
}