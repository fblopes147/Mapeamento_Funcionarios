import React from "react"
import Dados from '../../components/ComponenteMapeamento';

import FormGroup from '@material-ui/core/FormGroup';

export default() => {
    return(
        <div>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"20px",marginRight:"10px"}}>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >CONTROLE DE MAPEAMENTO</a>
            </FormGroup>
            <Dados />
            <br />
        </div>
    )
}