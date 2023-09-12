import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' className='d-flex justify-content-between px-4 mb-3'>
        <Navbar.Brand>Transfer Service UI</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <NavDropdown title='Admin' className=''>
            <NavDropdown.Item onClick={() => navigate('/user')}>Transfers</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/admin')}>Templates</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
