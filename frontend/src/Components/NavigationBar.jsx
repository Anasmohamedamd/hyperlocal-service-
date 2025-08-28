import React from 'react'
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' >
      <Container>
        <Navbar.Brand href='/'>ServicePlace</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className='ms-auto'>
            <Nav.Link href='/' className='mx-2 nav-links'>Home</Nav.Link>
            <Nav.Link href='/service' className='mx-2 nav-links'>Services</Nav.Link>
            <Nav.Link href='/professional' className='mx-2 nav-links'>Professionals</Nav.Link>
            <Nav.Link href='/contact' className='mx-2 nav-links'>Contacts</Nav.Link>

            <NavDropdown title='Account' id='main-account' className='mx-2 nav-links'>
              <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item href='/register'>Register</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;