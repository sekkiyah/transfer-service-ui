import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NavigationBar } from './components';
import { Dashboard, AdminDashboard } from './pages';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Container id='appWindow' className='p-2'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
