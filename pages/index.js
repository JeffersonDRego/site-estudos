import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header"
import OffCanvas from '../components/offcanvas';

export default function Home(){
    return(
        <Container fluid style={{padding:0}}>
            <Header/>
            <Container fluid style={{backgroundColor:'skyblue', height:'100%', padding:0}}>
                <Row className='me-0'>
                    <Col className='col-3 d-flex align-items-start justify-content-center' style={{backgroundColor:'blue', height:'100vh'}}>
                        <OffCanvas/>
                    </Col>
                    <Col className='mt-5 m-5'>
                        <h2>Seja Bem Vindo!</h2>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi praesentium officiis recusandae, 
                            fuga alias saepe reprehenderit voluptates culpa repellendus? Accusamus fugit 
                            voluptate cum placeat cumque. Ducimus architecto corrupti quia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi praesentium officiis recusandae, 
                            fuga alias saepe reprehenderit voluptates culpa repellendus? Accusamus fugit 
                            vLorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi praesentium officiis recusandae, 
                            fuga alias saepe reprehenderit voluptates culpa repellendus? Accusamus fugit 
                            vLorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi praesentium officiis recusandae, 
                            fuga alias saepe reprehenderit voluptates culpa repellendus? Accusamus fugit 
                            ve.
                            </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}