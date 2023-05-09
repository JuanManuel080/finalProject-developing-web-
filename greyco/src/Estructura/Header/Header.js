import EscudoGreyco from '../../pics/EscudoGreyco.jpg';
import Corazon from '../../pics/corazon.png';
import Lupa from '../../pics/lupa.png';
import carritoCompras from '../../pics/carritoCompras.png';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'


export const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
        <Container className='navBar'>
          <Navbar.Brand href="#home"><Image width='60px' src={EscudoGreyco} alt='Escudo'/ ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><b>INICIO</b></Nav.Link>
              <Nav.Link href="#link"><b>JERSEYS</b></Nav.Link>
              <Nav.Link href="#link"><b>PANTALONES</b></Nav.Link>
              <Nav.Link href="#link"><b>SALE</b></Nav.Link>
            </Nav>
           
            <Form className="d-flex" expand="lg">
                <Form.Control
                 type="search"
                placeholder="Buscar productos..."
                className="me-2"
                aria-label="Search"
                />

                <Nav.Link href="#home"> <Image width='30px' src={Lupa}/> </Nav.Link>
                <Nav.Link href="#home"> <Image width='30px' src={Corazon}/> </Nav.Link>
                <Nav.Link href="#home"> <Image width='60px' src={carritoCompras}/> </Nav.Link>
            </Form>
                
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    );
} 