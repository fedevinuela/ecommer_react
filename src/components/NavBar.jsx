import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

import { CarWidget } from "./CarWidget";

export const NavBar = () => {
    return (
    <>
 
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Mi Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/category/futbol" as={NavLink}>Futbol</Nav.Link>
            <Nav.Link href="/category/running" as={NavLink}>Running</Nav.Link>
            <Nav.Link href="/category/moda"as={NavLink} >Moda</Nav.Link>
          </Nav>
          <CarWidget/>
        </Container>
      </Navbar>


    

    </>
    );
}