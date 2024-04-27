// import { NavLink } from 'react-router-dom';
// // import bootstrap from 'bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
// const Header = () => {
//     return ( 
//             <Container fluid>
//                 <Row>
//                     <Col>
//                       <span>Logo</span><span>Omar lawah</span>
//                     </Col>
//                     <Col>
//                         <button className='link'><NavLink to={'/'}>Home</NavLink></button>
//                         <button className='link'><NavLink to={'/Services'}>Services</NavLink></button>
//                         <button className='link'><NavLink to={'/Projects'}>Projects</NavLink></button>
//                     </Col>
//                 </Row>
//             </Container>
//      );
// }
 
// export default Header;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={9}>
          <div className="logo">Logo</div>
          <div className="name">Omar Lawah</div>
        </Col>
        <Col xs={3} className="text-right">
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <button className="link">
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                </button>
                <button className="link">
                  <NavLink to="/Services" activeClassName="active">Services</NavLink>
                </button>
                <button className="link">
                  <NavLink to="/Projects" activeClassName="active">Projects</NavLink>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
