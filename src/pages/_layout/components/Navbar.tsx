
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarr from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Button } from 'react-bootstrap';


const Navbar = () => {
    return (
            <Navbarr expand="lg" className="bg-body-tertiary Nav-cntr">
            <Container className='Nav-ctnt-box'>
            <Navbarr.Brand href="/">  <img
              src="https://i.imgur.com/cOq2iiu.png"
              width="195"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            /></Navbarr.Brand>
            <Navbarr.Toggle aria-controls="basic-navbar-nav" />
            <Navbarr.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className='link' href="/listuser">Alumnos</Nav.Link>
                <Nav.Link className='link' href="/companyList">Compañias</Nav.Link>
                <Nav.Link className='link' href="/offersList">Ofertas</Nav.Link>
                <Nav.Link className='link' href="/offersList">Sobre Nosotros</Nav.Link>
                <Nav.Link className='link' href="/offersList">FAQS</Nav.Link>
                <Button className='boton button-register'>Registrarse</Button>
                <Button className='button-iniciar-sesion'>Iniciar Sesión</Button>
                {/* <NavDropdown title="Otros" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/test">Link de Test</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbarr.Collapse>
            </Container>
            </Navbarr>
    )}
export default Navbar
