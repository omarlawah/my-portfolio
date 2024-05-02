
import React from 'react';
import {  Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from './assets/logo.png';

const Header = () => {
  
  return (
    <Navbar className='header' expand="sm"  bg='black'>
      <Container>
        <Navbar.Brand><Image src={logo} alt='logo'/></Navbar.Brand>   
        <Navbar.Brand>Omar Lawah</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className="ms-auto">
            <Nav.Link ><Link  to={'/'}>Home</Link></Nav.Link>
            <Nav.Link ><Link  to={'/Services'}>Services</Link></Nav.Link>
            <Nav.Link ><Link  to={'/Projects'}>Projects</Link></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
              {/* <NavDropdown.Divider/> */}
              {/* <NavDropdown.Item href="#action/3.4"> */}
                {/* Separated link */}
              {/* </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
