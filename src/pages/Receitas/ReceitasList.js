import { useState, useEffect } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
function ReceitasList() {
    const [receitas, setReceitas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/receitas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
            .then((resp) => resp.json())
            .then((data) => setReceitas(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Listar Receitas </ h1>
                </ Col>
            </ Row>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Ingredietes</td>
                        <td>Modo de preparo</td>
                    </tr>
                </thead>
                <tbody>
                    {receitas.map((item)=>(
                        <tr>
                            <td>{item.nome}</td>
                            <td>{item.ingredientes}</td>
                            <td>{item.preparo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ Container>
    );
}
export default ReceitasList;