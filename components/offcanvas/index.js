import React, {useState} from 'react';
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
  
    return (
      <>
        <Button variant="secondary" onClick={toggleShow} className="m-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Matérias para estudo</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Col className='mb-2'>
                <a href="#">HTML</a>
            </Col>
            <Col className='mb-2'>
                <a href="#">Link para matéria</a>
            </Col>
            <Col className='mb-2'>
                <a href="#">Link para matéria</a>
            </Col>
            <Col className='mb-2'>
                <a href="#">Link para matéria</a>
            </Col>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default function OffCanvas() {
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasExample key={idx} {...props} />
        ))}
      </>
    );
  }