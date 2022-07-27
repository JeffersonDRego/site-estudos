import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header"
import OffCanvas from '../components/offcanvas';

export default function Home(){
    return(
        <Container fluid style={{backgroundColor:'skyblue', height:'100%'}}>
            <Header/>
            <Row>
                <Col className='col-3 d-flex align-items-start justify-content-center' style={{backgroundColor:'blue', height:'100vh'}}>
                    <OffCanvas/>
                </Col>
                <Col className='m-5'>
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
            
            <div></div>
        </Container>
    )
}