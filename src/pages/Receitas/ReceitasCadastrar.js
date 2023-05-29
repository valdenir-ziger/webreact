import { Container, Col, Row } from 'react-bootstrap';
import ReceitaForm from '../../components/form/ReceitasForm'
import { useNavigate } from 'react-router-dom'

function ReceitasCadastrar() {
    const navigate = useNavigate();

    function createReceita(receita) {
        console.log(receita);
        fetch('http://localhost:5000/receitas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(receita)
        }).then((resp) => resp.json())
            .then((data) => {
                navigate('-1')
                console.log(data)
            }
            )
            .catch(err => { console.log(err); console.log('11111') })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1> Cadastrar Receita </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReceitaForm handleSubmit={createReceita} btnText="Cadastrar Receita" />
                </Col>
            </Row>
        </Container>
    )
}
export default ReceitasCadastrar;