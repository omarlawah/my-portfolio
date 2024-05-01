import {Container, Col, Row} from 'react-bootstrap';
const Footer = () => {
    const email = 'Omarxxxxx135@gmail.com';
    
    const phoneNumber = "+233595108434";
    return ( 
        <>
            <Container  className='justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div id='contacts'>
                            <ul>
                                <h6>Contact's info</h6>
                                <li><span>Email: </span><a href= {`mailto:${email}`}>{email}</a></li>
                                <li><span>Phone: </span><a href= {`https://wa.me/${phoneNumber}`}>{phoneNumber}</a>  </li>
                                <li><span>Address: </span> Accra, Ghana</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <p> &copy; {new Date().getFullYear()} Omar's portfolio. All Rights reserved</p>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </>
     );
}
 
export default Footer;