import {Link} from 'react-router-dom';

import Logo from '../pics/EscudoGreyco.jpg';
import Facebook from '../pics/facebook.png';
import Instagram from '../pics/instagram.png';
import WhatsApp from '../pics/whatsApp.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Inicio.css';

export const Inicio = () =>{
     return(
      <Container fluid >
        <Container fluid id='logo'>
          <Row>
            <Col xs={12}> <Image fluid src={Logo} width={120} ></Image></Col>
          </Row>
        </Container>
        <br/> <br/> <br/> <br/> <br/> <br/><br/>
        <Container fluid >
          <Container fluid className='boton' >
            <Row>
              <Col xs={12}><Link class="link" to='/website'> <Button variant="dark" id='boton'>PAGINA WEB</Button> </Link></Col>
              </Row>
          </Container>
          <br/>
          <Container fluid className='boton'>
            <Row>
            <Col xs={12}><Button variant="dark">ASESORIAS Y COMPRAS POR WHATSAPP</Button></Col><br></br>
            </Row>
          </Container>
          <br/>
          <Container fluid className='boton'>
            <Row>
            <Col xs={12}><Button variant="dark">CAMBIOS, DEVOLUCIONES Y GARANTIAS</Button></Col><br></br>
            </Row>
          </Container>
         
        </Container>

        <br/> <br/> <br/> 

        <Container fluid className='redes'>
          <Image fluid src={Instagram} width={30}/> 
          <a><Image fluid src={Facebook} width={30}/></a>
          <a><Image fluid src={WhatsApp} width={30}/></a>
        
          {/* <Row>
            <Col xs={4}> <Image fluid src={Instagram} width={30} id='Instagram'/>  </Col>
            <Col xs={4}> <Image fluid src={Facebook} width={30} id='Facebook'/>   </Col>
            <Col xs={4}> <Image fluid src={WhatsApp} width={30} id='WhatsApp'/>   </Col>
          </Row> */}
        </Container>
       
      </Container>
      
    );
}

