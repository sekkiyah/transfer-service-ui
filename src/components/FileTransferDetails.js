import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const FileTransferDetails = ({ file }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant='link' onClick={() => setShowModal(true)}>
        Status
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>File Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>TBD</h3>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FileTransferDetails;
