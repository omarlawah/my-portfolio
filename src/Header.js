
import React from 'react';
import {  Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from './assets/logo.png';

const Header = () => {
  
  return (
    <Navbar className='header' variant='dark' bg='black' expand="sm" >
      <Container>
        <Navbar.Brand><Image src={logo} alt='logo'/></Navbar.Brand>   
        <Navbar.Brand>Omar Lawah</Navbar.Brand>
        <Navbar.Toggle  className='navbar-light'  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav   className="ms-auto">
            <Nav.Link ><Link  to={'/'}>Home</Link></Nav.Link>
            <Nav.Link ><Link  to={'/Services'}>Services</Link></Nav.Link>
            <Nav.Link ><Link  to={'/Projects'}>Projects</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
