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
                <Row className='col-12 gx-0'>
                    <Col className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <Navbar.Brand href="#home" style={{fontWeight:'bold',fontSize:17}}>Estudos de Programação</Navbar.Brand>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <Nav className="justify-content-around">
                            <Nav.Link style={{fontSize:16}} href="#home">Home</Nav.Link>
                            <Nav.Link style={{fontSize:16}} className='d-flex' href="https://wa.me/5535998068006">Whatsapp-me <Image style={{marginLeft:2.1}} width={25} height={25} src={logoWhats}/></Nav.Link>
                        </Nav>
                    </Col>
                    <Col className='col-1'></Col>
                    <Col className='col-7 col-md-3 ms-auto' style={{backgroundColor:'#161616', borderTopLeftRadius:5, borderBottomLeftRadius:5,}}>
                        <Nav style={{justifyContent:'flex-end'}}>
                            <Nav.Link style={{color:'#FFA500', fontSize:14}} href="https://github.com/JeffersonDRego" >Powered by Jefferson D. Rego</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </Container>
    )
}

export default Header;