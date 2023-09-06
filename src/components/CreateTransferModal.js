import React, { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { OutboundTransferDataForm, OutboundTransferAdvancedForm, TransferProtocolForm } from '.';

const CreateTransferModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTransfer, setNewTransfer] = useState({});
  const [formPage, setFormPage] = useState(1);
  const formLength = 3;

  console.log('Transfer config data:', newTransfer);

  const clearTransferData = () => {
    setShowModal(false);
    setNewTransfer({});
    setFormPage(1);
  };

  const createNewTransfer = () => {
    console.log('Submitted', newTransfer);
  };

  return (
    <>
      <Button variant='success' onClick={() => setShowModal(true)}>
        New Transfer
      </Button>

      <Modal show={showModal} size='lg' onHide={() => clearTransferData()}>
        <Form onSubmit={e => e.preventDefault()}>
          <Modal.Header closeButton>
            <Modal.Title>Transfer Definition</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {formPage == 1 && (
              <>
                <TransferProtocolForm newTransfer={newTransfer} setNewTransfer={setNewTransfer} />
              </>
            )}
            {formPage == 2 && (
              <>
                {newTransfer.type == 'outbound' && (
                  <OutboundTransferDataForm newTransfer={newTransfer} setNewTransfer={setNewTransfer} />
                )}
                {newTransfer.type == 'inbound' && <>{/* TODO */}</>}
              </>
            )}
            {formPage == 3 && (
              <>
                {newTransfer.type == 'outbound' && (
                  <OutboundTransferAdvancedForm newTransfer={newTransfer} setNewTransfer={setNewTransfer} />
                )}
                {newTransfer.type == 'inbound' && <>{/* TODO */}</>}
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

export default CreateTransferModal;
