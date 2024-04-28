import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="sm"  bg='black'>
      <Container>
        {/* <Navbar.Brand></Navbar.Brand>   logo to be added here */}
        <Navbar.Brand>Omar Lawah</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className="ms-auto">
            <Nav.Link ><NavLink to={'/'}>Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink  to={'/Services'}>Services</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'/Projects'}>Projects</NavLink></Nav.Link>
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
