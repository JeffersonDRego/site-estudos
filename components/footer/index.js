import React, {useState} from 'react';
import styles from '../../styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Footer(){
    return(
        <Container fluid className='fixed-bottom' style={{backgroundColor:'black'}}>
            {/* <Row> */}
                <Col className='text-center'>
                    <p className='mt-3' style={{color:'#FFF'}}>Nenhum direito reservado © Muito menos marca registrada ®</p>
                </Col>
            {/* </Row> */}
        </Container>
    )
}