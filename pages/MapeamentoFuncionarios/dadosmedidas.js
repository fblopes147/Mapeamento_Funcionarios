import React from "react"
import Dados from '../../components/ComponenteMedidas';

import FormGroup from '@material-ui/core/FormGroup';

export default() => {
    return(
        <div>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >CONTROLE DE MEDIDAS</a>
            </FormGroup>
            <Dados />
            <br />
        </div>
    )
}