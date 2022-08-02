import React, {useState} from 'react';
import styles from '../../styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
    {
        name :'Links!',
        scroll: true,
        backdrop: true,
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
        <Button className="mt-5 btn" style={{backgroundColor:'#FFA500', borderWidth:0}}onClick={toggleShow}>
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header style={{backgroundColor:'#313131'}}>
            <Offcanvas.Title style={{color:'#FFA500'}}>VAI MODAFOCKA! ESTUDA!</Offcanvas.Title>
            <div className='btn-close' style={{backgroundColor:'#FFA500'}} onClick={() => setShow(false)}></div>
          </Offcanvas.Header>
          <div className='pt-2' style={{backgroundColor:'#A1A1A1', color:'#FFF'}}>
            <h5 className='ms-3' >Documentações Oficiais: </h5>
          </div>
          <Offcanvas.Body className='btn-info' style={{backgroundColor:'#D3D3D3'}}>
            <Col className='mb-1'>
                <a className={styles.a} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" >- HTML</a>
            </Col>
            <Col className='mb-1'>
                <a className={styles.a} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">- CSS</a>
            </Col>
            <Col className='mb-1'>
                <a className={styles.a} href="https://pt-br.reactjs.org/">- React</a>
            </Col>
            <Col className='mb-1'>
                <a className={styles.a} href="https://dev.mysql.com/doc/">- MySql</a>
            </Col>
            {/* <Container>
            </Container> */}
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
  };
