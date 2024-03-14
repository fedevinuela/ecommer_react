import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CarWidget } from "./CarWidget";

export const NavBar = () => {
    return (
    <>
 
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contáctanos</Nav.Link>
          </Nav>
          <CarWidget/>
        </Container>
      </Navbar>


    

    </>
    );
}