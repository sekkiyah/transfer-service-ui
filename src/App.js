import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Dashboard } from './components';

const App = () => {
  return (
    <>
      <Container>
        <h1 className='text-center'>Transfer Service UI</h1>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
