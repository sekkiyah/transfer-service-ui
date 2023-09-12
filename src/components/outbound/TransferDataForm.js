import React, { useEffect, useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const TransferDataForm = ({ newTransfer, setNewTransfer }) => {
  const [showAuth, setShowAuth] = useState(false);

  const generateTransferKey = () => {
    // generate a random alpha numeric value with a length of 10
    if (!newTransfer.transferKey) {
      const validKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const keysArray = [];
      for (let n = 0; n < 10; n++) {
        const index = Math.random() * 36;
        keysArray.push(validKeys.charAt(index));
      }
      const transferKey = keysArray.join('');
      setNewTransfer({ ...newTransfer, transferKey });
    }
  };

  const updateShowAuthRow = () => {
    if (!newTransfer.sshEnabled && !newTransfer.passwordEnabled) setShowAuth(false);
    else setShowAuth(true);
  };

  useEffect(() => {
    generateTransferKey();
  }, []);

  useEffect(() => {
    updateShowAuthRow();
  }, [newTransfer.passwordEnabled, newTransfer.sshEnabled]);

  return (
    <>
      <Row className='mb-3'>
        <Form.Group as={Col} sm='9'>
          <Form.Label>Transfer Name</Form.Label>
          <Form.Control
            type='text'
            value={newTransfer.name || ''}
            placeholder='Carrier Global SFTP'
            onChange={e => setNewTransfer({ ...newTransfer, name: e.target.value })}
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

      {/* Only show row if either ssh or password are checked */}
      {showAuth && (
        <Row className='mb-3'>
          {newTransfer.passwordEnabled ? (
            <>
              <Form.Group as={Col} sm='7'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='text'
                  value={newTransfer.password || ''}
                  placeholder='password'
                  onChange={e => setNewTransfer({ ...newTransfer, password: e.target.value })}
                />
              </Form.Group>
            </>
          ) : (
            <></>
          )}

          {newTransfer.sshEnabled ? (
            <>
              <Form.Group as={Col} sm='5'>
                <Form.Label>SSH Key</Form.Label>
                <Form.Select
                  type='option'
                  value={newTransfer.sshKeyId || ''}
                  onChange={e => setNewTransfer({ ...newTransfer, sshKeyId: e.target.value })}>
                  <option hidden>Select a key</option>
                  <option value='1'>RSA 1024</option>
                  <option value='2'>RSA 2048</option>
                  <option value='3'>RSA 4096</option>
                </Form.Select>
              </Form.Group>
            </>
          ) : (
            <></>
          )}
        </Row>
      )}

      {newTransfer.pgpEncrypted ? (
        <>
          <Row className='mb-3'>
            <Form.Group as={Col} sm='7'>
              <Form.Label>PGP Key</Form.Label>
              <Form.Control
                type='text'
                value={newTransfer.pgpKey || ''}
                placeholder='PGP Recipient or Key ID'
                onChange={e => setNewTransfer({ ...newTransfer, pgpKey: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm='3'>
              <Form.Label>PGP Extension</Form.Label>
              <Form.Control
                type='text'
                value={newTransfer.pgpExtension || ''}
                placeholder='.pgp'
                onChange={e => setNewTransfer({ ...newTransfer, pgpExtension: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm='2'>
              <Form.Label>PGP Sign</Form.Label>
              <Form.Check
                className='ps-4'
                checked={newTransfer.pgpSign || ''}
                onChange={e => setNewTransfer({ ...newTransfer, pgpSign: e.target.checked })}
              />
            </Form.Group>
          </Row>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TransferDataForm;
