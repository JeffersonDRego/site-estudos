import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoWhats from '../../public/logo-whatsapp.png';
// import whatsapplogo from '../src/img/whatsapp-logo.jpg';
const Header =()=>{
    return (
        <Container fluid className='m-0 p-0'>
            <Navbar bg="dark" variant="dark">
                <Container fluid style={{display:'unset'}}>
                    <Row>
                        <Col className='col-sm-12 col-md-8 d-flex'>
                            <Row className='d-flex justify-content-center'>
                                <Col className='d-flex'>
                                    <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>Estudos de Programação</Navbar.Brand>
                                </Col>
                                <Col>
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link className='d-flex' href="https://wa.me/5535998068006">Whatsapp-me <Image style={{marginLeft:2.1}} width={25} height={25} src={logoWhats}/></Nav.Link>
                                    </Nav>
                                </Col>

                            </Row>
                        </Col>
                        <Col className='col-sm-12 col-md-4 justify-content-center' style={{backgroundColor:'#030303', borderRadius:5}}>
                            <Nav>
                                <Nav.Link href="https://github.com/JeffersonDRego">Powered by Jefferson D. Rego</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header;