import { Container, Col, Row } from 'react-bootstrap';
function Header() {
    return (
        <Container>
            <Row>
                <Col>
                    <hr />
                    <p>Desenvolvido na disciplina de Programação para Web 2 </p>
                    <p>Primeiro semestre de 2022 </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
