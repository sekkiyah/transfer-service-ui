import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' className='d-flex justify-content-between px-3 mb-3'>
        <Navbar.Brand>Transfer Service UI</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/admin')}>Admin</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
