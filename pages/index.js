import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header"
import Footer from '../components/footer';
import OffCanvas from '../components/offcanvas';
import Accordionn from '../components/accordion';
import styles from '../styles.module.css'
import Image from 'next/dist/client/image';
import nodejs from '../public/nodejs.png';
import html from '../public/html5.png';
import reactjs from '../public/Reactjs.jpg';
import nextjs from '../public/nextjs.png';
import css from '../public/css.jpg';
import jeff from '../public/jeff.jpg';

export default function Home(){
    return(
        <Container fluid style={{padding:0, height:'100vh'}}>
            <Header/>
            <Container fluid style={{height:'100%', padding:0}}>
                <Row className='me-0'>
                    <Col className='col-12 col-md-2 text-center'>
                        <Row style={{flexDirection:'column'}}>
                            <Col>
                                <OffCanvas/>
                            </Col>
                            <Col className='mt-2 col-8 col-md-11 m-auto'>
                                <div style={{width:'100%', justifyContent:'center', display:'flex', marginTop:'30px'}}>
                                    <div className={styles.cube}>
                                        <div className={styles.facefront}>
                                            <Image src={nodejs} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                        <div className={styles.faceright}>
                                            <Image src={reactjs} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                        <div className={styles.faceback}>
                                            <Image src={jeff} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                        <div className={styles.faceleft}>
                                            <Image src={nextjs} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                        <div className={styles.facetop}>
                                            <Image src={html} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                        <div className={styles.facebottom}>
                                            <Image src={css} layout="fill" objectFit="cover" quality={100}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col className='mt-4 m-5'>
                        <h2 className={styles.h2} style={{fontWeight:'bold'}}>Seja Bem Vindo!</h2>
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
// style={{backgroundImage:`url(${bg.src})`}}