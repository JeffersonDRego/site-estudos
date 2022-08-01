import React, {useState, StyleSheet} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
    {
        name :'Exibir todos os tópicos!',
        scroll: true,
        backdrop: true
    }
]



function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const [initialValue, setInitialValue] = useState(0);
    function counter(){
      setInitialValue(initialValue+1)
    }
    return (
      <>
        <Button className="mt-5 btn-info" onClick={toggleShow}>
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header style={{backgroundColor:'#313131'}} closeButton>
            <Offcanvas.Title style={{color:'#FFA500'}}>Matérias para estudo</Offcanvas.Title>
          </Offcanvas.Header>
          <div className='pt-2' style={{backgroundColor:'#d1d1d1'}}>
            <h5 className='ms-3' >Documentações Oficiais </h5>
          </div>
          <Offcanvas.Body className='btn-info' style={{backgroundColor:'skyblue'}}>
            <Col className='mb-1'>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a>
            </Col>
            <Col className='mb-1'>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a>
            </Col>
            <Col className='mb-1'>
                <a href="https://pt-br.reactjs.org/">React</a>
            </Col>
            <Col className='mb-1'>
                <a href="https://dev.mysql.com/doc/">MySql</a>
            </Col>
            <Container>
              <Row className='justify-content-between gx-0'>
                <Col className='col-5'>
                  <Button onClick={()=> counter()} style={{borderRadius:5, width:150, height:40, backgroundColor:'#FFA500'}}>Somar {initialValue}</Button>
                </Col>
                <Col className='col-5'>
                  <Button  onClick={()=> setInitialValue(0)} style={{borderRadius:5, width:150, height:40, backgroundColor:'#FFA500'}}>Zerar</Button>
                </Col>
              </Row>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default function OffCanvas() {
    const [initialValue, setInitialValue] = useState(0);
    // function counter(){
    //   setInitialValue(initialValue++)
    // }
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasExample key={idx} {...props} />
        ))}
      </>
    );
  }
