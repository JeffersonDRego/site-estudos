import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export default function Footer(){
    return(
        <Container fluid className='mt-5 fixed-bottom' style={{backgroundColor:'black'}}>
            <Col className='text-center'>
                <p className='mt-3' style={{color:'#FFF', fontSize:12}}>Nenhum direito reservado © Muito menos marca registrada ®</p>
            </Col>
        </Container>
    )
}