import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import Home from '../pages/Home/Home';
import ReceitasList from '../pages/Receitas/ReceitasList';
import ReceitasCadastrar from '../pages/Receitas/ReceitasCadastrar';
import UsuariosList from '../pages/Usuarios/UsuariosList';
import UsuariosCadastrar from '../pages/Usuarios/UsuariosCadastrar';

function Menu() {
  return (
    <Router>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href='/'> Home</Nav.Link>
              <NavDropdown title="Receitas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/receitasList">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/receitasCadastrar">Cadastrar</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                <NavDropdown.Item href="/usuariosList">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/usuariosCadastrar">Cadastrar</NavDropdown.Item>
              </NavDropdown>            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/receitasList" element={<ReceitasList />}></Route>
        <Route path="/receitasCadastrar" element={<ReceitasCadastrar />}></Route>
        <Route path="/usuariosList" element={<UsuariosList />}></Route>
        <Route path="/usuariosCadastrar" element={<UsuariosCadastrar />}></Route>
      </Routes>
    </Router>
  );
}

export default Menu;
