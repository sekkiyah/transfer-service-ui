import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateTransfer = ({ setRecords }) => {
  const [showModal, setShowModal] = useState(false);
  const [newRecord, setNewRecord] = useState({});

  const [isFinalForm, setIsFinalForm] = useState(false);

  return (
    <>
      <Button variant='success' onClick={() => setShowModal(true)}>
        Create Transfer
      </Button>

      <Modal show={showModal} size='large'>
        <Form
          onSubmit={e => {
            e.preventDefault();
            console.log('Submitted', newRecord);
          }}>
          <Modal.Header closeButton onHide={() => setShowModal(false)}>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Body</h3>
          </Modal.Body>

          <Modal.Footer className='d-flex justify-content-between'>
            {newRecord && newRecord.type && (
              <>
                <Button variant='secondary'>Previous</Button>
              </>
            )}

            {isFinalForm ? (
              <Button type='submit'>Submit</Button>
            ) : (
              <Button variant='success' onClick={() => setIsFinalForm(true)}>
                Next
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateTransfer;
