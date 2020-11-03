import Pesquisa from '../../components/PesquisaDados';
import Dados from '../../components/ComponentePesquisarDados';
import Adicionar from '../../components/InserirDados';

import FormGroup from '@material-ui/core/FormGroup';

export default() => {
    return (
        <div>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <Adicionar />
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >CONSULTA DE DADOS</a>
            </FormGroup>
            <FormGroup row style={{marginBottom:"20px",marginLeft:"10px",marginRight:"10px"}}>
                <Dados />
            </FormGroup>
        </div>
    )
}