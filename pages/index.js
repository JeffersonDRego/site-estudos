import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header"
import Footer from '../components/footer';
import OffCanvas from '../components/offcanvas';
import Accordionn from '../components/accordion';
export default function Home(){
    return(
        <Container fluid style={{padding:0, height:'100vh'}}>
            <Header/>
            <Container fluid style={{height:'100%', padding:0}}>
                <Row className='me-0'>
                    <Col className='col-12 col-md-3 text-center'>
                        <Row className='' style={{flexDirection:'column'}}>
                            <Col>
                                <OffCanvas/>
                            </Col>
                            <Col className='mt-2 col-8 col-md-11 m-auto'>
                                <Accordionn/>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                        
                    </Col>
                    <Col className='mt-5 m-5'>
                        <h2 style={{fontWeight:'bold'}}>Seja Bem Vindo!</h2>
                            <div style={{textAlign:'justify'}}>Espero que, se você chegou até aqui, possa aproveitar o conteúdo
                                disponibilizado...são assuntos simples da programação, as vezes muito úteis
                                e talvez até, conhecimentos indispensáveis para quem quer se tornar um desenvolvedor... <br/><br/>
                                Espero que você saiba também que o que vai encontrar aqui é apenas a ponta do iceberg. A 
                                maioria das respostas que você procura estão provavelmente na documentação oficial.<br/>
                                Bons estudos!<br/><br/>
                                Qualquer coisa é só me chamar no WhatsApp...
                            </div>
                    </Col>
                </Row>
                <hr/>
            </Container>
            <Footer/>
        </Container>
    )
}