import logo from './logo.png'
import { Container, Col, Row } from 'react-bootstrap';
function Header() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8} md={6}>
          <img src={logo} alt="logo do site" width="100%" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Header;
