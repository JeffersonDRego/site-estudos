import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header"


export default function Home(){
    return(
        <Container fluid style={{backgroundColor:'skyblue', height:'100vh'}}>
            <Header/>
            <div className="d-flex align-items-stretch" >Hello World</div>
            <div></div>
        </Container>
    )
}