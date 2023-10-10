import React, { useState } from 'react';
import { Accordion, Button, Form, Modal, Table } from 'react-bootstrap';

const FileTransferDetails = ({ file }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant='link' onClick={() => setShowModal(true)}>
        {file.transferLogs[0].status}
      </Button>

      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{file.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {file.transferLogs &&
            file.transferLogs.length &&
            file.transferLogs.map((transferLog, index) => {
              const runCount = file.transferLogs.length - index;
              const lineCount = transferLog.logMessage.split('\n').length;
              console.log(transferLog.logMessage, lineCount);

              return (
                <Accordion key={index}>
                  <Accordion.Header className=''>
                    Attempt: {runCount} - Ran: {transferLog.transferDate} - By: {transferLog.transferredBy}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form.Control as='textarea' disabled value={transferLog.logMessage} rows={lineCount} />
                  </Accordion.Body>
                </Accordion>
              );
            })}
        </Modal.Body>

        {/* <Modal.Body as={Table} size='sm' className='text-center'>
          <thead>
            <tr>
              <th>Attempt</th>
              <th>Ran By</th>
              <th>Status</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {file.transferLogs && file.transferLogs.length ? (
              file.transferLogs.map((transferLog, index) => {
                index++;
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{transferLog.transferredBy}</td>
                    <td>{transferLog.status}</td>
                    <td>{transferLog.logMessage}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </Modal.Body> */}
      </Modal>
    </>
  );
};

export default FileTransferDetails;
