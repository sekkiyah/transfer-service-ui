import React, { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row, Table } from 'react-bootstrap';

const FileStatusDetails = ({ file }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant='link' onClick={() => setShowModal(true)} size='sm'>
        {file.status}
      </Button>

      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{file.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='mb-3'>
            <Form.Group as={Col} sm='6'>
              <Form.Label className='mb-0'>Notes</Form.Label>
              <Form.Control as='textarea' rows='4' disabled className='my-1' />
              <Form.Control as='textarea' rows='3' className='mb-1' placeholder='New Comment...' />
              <Button variant='secondary'>Submit</Button>
            </Form.Group>

            <Form.Group as={Col} sm='6'>
              <Form.Label className='mb-0'>Carrier Error Reports</Form.Label>
              <Form.Control type='file' className='mb-1' />

              <Form.Control as='textarea' rows='8' disabled />
            </Form.Group>
          </Row>

          <Row>
            {/* TO DO - Build as standalone component and feed data */}
            <Card className='p-0'>
              <Card.Header className='text-center'>Rules Validator</Card.Header>
              <Card.Body>
                <Table className='text-center'>
                  <thead>
                    <tr>
                      <th>Rule</th>
                      <th>Segment</th>
                      <th>Type</th>
                      <th>Member Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Is not null</td>
                      <td>L2300 HD03</td>
                      <td>Critical</td>
                      <td>3554623</td>
                    </tr>
                    <tr>
                      <td>Is not null</td>
                      <td>L2000A</td>
                      <td>Critical</td>
                      <td>5475033</td>
                    </tr>
                  </tbody>
                </Table>
                <Button size='sm' variant='link'>
                  Download Report
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FileStatusDetails;
