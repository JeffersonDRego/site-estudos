import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header =()=>{
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark" style={{borderRadius:5}}>
                <Container>
                    <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>Estudos de Programação</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header;