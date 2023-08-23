import React, { useEffect } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const OutboundTransferDataForm = ({ newTransfer, setNewTransfer }) => {
  const generateTransferKey = () => {
    setNewTransfer({ ...newTransfer, transferKey: 'KXT42Y0PES' });
  };

  useEffect(() => {
    generateTransferKey();
  }, []);

  return (
    <>
      <Row className='mb-3'>
        <Form.Group as={Col} sm='9'>
          <Form.Label>Transfer Name</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.transferName || ''}
            placeholder='Carrier Global SFTP'
            onChange={e => setNewTransfer({ ...newTransfer, transferName: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='3'>
          <Form.Label>Transfer Key</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.transferKey || ''}
            onChange={e => setNewTransfer({ ...newTransfer, transferKey: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='9'>
          <Form.Label>SFTP URL</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.sftpUrl || ''}
            placeholder='sftp.url.com'
            onChange={e => setNewTransfer({ ...newTransfer, sftpUrl: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='3'>
          <Form.Label>Port</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.port || ''}
            placeholder='22'
            onChange={e => setNewTransfer({ ...newTransfer, port: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='9'>
          <Form.Label>Filename</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.filename || ''}
            placeholder='Carrier_ExportType_[YYYYMMDD].txt'
            onChange={e => setNewTransfer({ ...newTransfer, filename: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='3' className='d-flex flex-column justify-content-end'>
          {/* <Form.Label></Form.Label> className='mb-0' */}
          <Row className='ms-2'>
            <Form.Check
              label='SSH'
              className='w-50'
              checked={newTransfer.sshEnabled || ''}
              onChange={e => setNewTransfer({ ...newTransfer, sshEnabled: e.target.checked })}
            />
            <Form.Check
              label='PGP'
              className='w-50'
              checked={newTransfer.pgpEncrypted || ''}
              onChange={e => setNewTransfer({ ...newTransfer, pgpEncrypted: e.target.checked })}
            />
          </Row>
          <Row className='ms-2'>
            <Form.Check
              label='Password'
              checked={newTransfer.passwordEnabled || ''}
              onChange={e => setNewTransfer({ ...newTransfer, passwordEnabled: e.target.checked })}
            />
          </Row>
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='7'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.username || ''}
            placeholder='username'
            onChange={e => setNewTransfer({ ...newTransfer, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='5'>
          <Form.Label>Directory</Form.Label>
          <InputGroup>
            <InputGroup.Text>/</InputGroup.Text>
            <Form.Control
              type='text'
              value={newTransfer.directory || ''}
              placeholder='folder'
              onChange={e => setNewTransfer({ ...newTransfer, directory: e.target.value })}
            />
          </InputGroup>
        </Form.Group>
      </Row>
    </>
  );
};

export default OutboundTransferDataForm;
