import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { TransferDataForm, TransferProtocolForm } from './';

const CreateTransfer = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTransfer, setNewTransfer] = useState({});
  const [formPage, setFormPage] = useState(1);
  const formLength = 3;

  const createNewTransfer = () => {
    console.log('Submitted', newTransfer);
  };

  return (
    <>
      <Button variant='success' onClick={() => setShowModal(true)}>
        Create Transfer
      </Button>

      <Modal show={showModal} size='lg'>
        <Form onSubmit={e => e.preventDefault()}>
          <Modal.Header closeButton onHide={() => setShowModal(false)}>
            <Modal.Title>Transfer Configuration</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {formPage == 1 && (
              <>
                <TransferProtocolForm />
              </>
            )}
            {formPage == 2 && (
              <>
                <h2>Transfer Configuration</h2>
                <TransferDataForm setNewTransfer={setNewTransfer} />
              </>
            )}
            {formPage == 3 && (
              <>
                <h2>Testing</h2>
              </>
            )}
          </Modal.Body>

          <Modal.Footer className='d-flex justify-content-between'>
            <ButtonGroup>
              {formPage != 1 && (
                <>
                  <Button variant='secondary' onClick={() => setFormPage(val => val - 1)}>
                    Previous
                  </Button>
                </>
              )}
            </ButtonGroup>

            <ButtonGroup>
              {formPage == formLength ? (
                <>
                  <Button hidden={false} type='submit' onClick={() => createNewTransfer()}>
                    Create
                  </Button>
                </>
              ) : (
                <>
                  <Button variant='success' onClick={() => setFormPage(val => val + 1)}>
                    Next
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateTransfer;
