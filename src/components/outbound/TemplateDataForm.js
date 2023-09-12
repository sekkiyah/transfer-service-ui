import React, { useEffect, useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const TemplateDataForm = ({ newTemplate, setNewTemplate }) => {
  const [showAuth, setShowAuth] = useState(false);

  const updateShowAuthRow = () => {
    if (!newTemplate.sshEnabled && !newTemplate.passwordEnabled) setShowAuth(false);
    else setShowAuth(true);
  };

  useEffect(() => {
    updateShowAuthRow();
  }, [newTemplate.passwordEnabled, newTemplate.sshEnabled]);

  return (
    <>
      <Row className='mb-3'>
        <Form.Group as={Col} sm='9'>
          <Form.Label>Template Name</Form.Label>
          <Form.Control
            type='text'
            value={newTemplate.name || ''}
            placeholder='Carrier Global SFTP'
            onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='3' className=''>
          <FontAwesomeIcon icon={faLock} />
          <Form.Label className='ms-1'>Read Only</Form.Label>
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='8'>
          <Form.Label>SFTP URL</Form.Label>
          <Form.Control
            type='text'
            value={newTemplate.sftpUrl || ''}
            placeholder='sftp.url.com'
            onChange={e => setNewTemplate({ ...newTemplate, sftpUrl: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} sm='1' className='p-0'>
          <FontAwesomeIcon icon={faLock} />
          <Form.Check className='mt-2' />
        </Form.Group>

        <Form.Group as={Col} sm='2'>
          <Form.Label>Port</Form.Label>
          <Form.Control
            type='text'
            value={newTemplate.port || ''}
            placeholder='22'
            onChange={e => setNewTemplate({ ...newTemplate, port: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} sm='1' className='p-0'>
          <FontAwesomeIcon icon={faLock} />
          <Form.Check className='mt-2' />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='7'>
          <Form.Label>Default Filename</Form.Label>
          <Form.Control
            type='text'
            value={newTemplate.filename || ''}
            placeholder='Carrier_ExportType_[YYYYMMDD].txt'
            onChange={e => setNewTemplate({ ...newTemplate, filename: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} sm='2' className='d-flex flex-column align-items-end'>
          <Form.Label>
            Auth <FontAwesomeIcon icon={faLock} />
          </Form.Label>
          <Form.Check />
        </Form.Group>
        <Form.Group as={Col} sm='3' className='d-flex flex-column justify-content-end'>
          <Row className='ms-2'>
            <Form.Check
              label='SSH'
              className='w-50'
              checked={newTemplate.sshEnabled || ''}
              onChange={e => setNewTemplate({ ...newTemplate, sshEnabled: e.target.checked })}
            />
            <Form.Check
              label='PGP'
              className='w-50'
              checked={newTemplate.pgpEncrypted || ''}
              onChange={e => setNewTemplate({ ...newTemplate, pgpEncrypted: e.target.checked })}
            />
          </Row>
          <Row className='ms-2'>
            <Form.Check
              label='Password'
              checked={newTemplate.passwordEnabled || ''}
              onChange={e => setNewTemplate({ ...newTemplate, passwordEnabled: e.target.checked })}
            />
          </Row>
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} sm='6'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={newTemplate.username || ''}
            placeholder='username'
            onChange={e => setNewTemplate({ ...newTemplate, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} sm='1' className='p-0'>
          <FontAwesomeIcon icon={faLock} />
          <Form.Check className='mt-2' />
        </Form.Group>

        <Form.Group as={Col} sm='4'>
          <Form.Label>Directory</Form.Label>
          <InputGroup>
            <InputGroup.Text>/</InputGroup.Text>
            <Form.Control
              type='text'
              value={newTemplate.directory || ''}
              placeholder='folder'
              onChange={e => setNewTemplate({ ...newTemplate, directory: e.target.value })}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} sm='1' className='p-0'>
          <FontAwesomeIcon icon={faLock} />
          <Form.Check className='mt-2' />
        </Form.Group>
      </Row>

      {/* Only show row if either ssh or password are checked */}
      {showAuth && (
        <Row className='mb-3'>
          {newTemplate.passwordEnabled ? (
            <>
              <Form.Group as={Col} sm='6'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='text'
                  value={newTemplate.password || ''}
                  placeholder='password'
                  onChange={e => setNewTemplate({ ...newTemplate, password: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col} sm='1' className='p-0'>
                <FontAwesomeIcon icon={faLock} />
                <Form.Check className='mt-2' />
              </Form.Group>
            </>
          ) : (
            <></>
          )}

          {newTemplate.sshEnabled ? (
            <>
              <Form.Group as={Col} sm='4'>
                <Form.Label>SSH Key</Form.Label>
                <Form.Select
                  type='option'
                  value={newTemplate.sshKeyId || ''}
                  onChange={e => setNewTemplate({ ...newTemplate, sshKeyId: e.target.value })}>
                  <option hidden>Select a key</option>
                  <option value='1'>RSA 1024</option>
                  <option value='2'>RSA 2048</option>
                  <option value='3'>RSA 4096</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} sm='1' className='p-0'>
                <FontAwesomeIcon icon={faLock} />
                <Form.Check className='mt-2' />
              </Form.Group>
            </>
          ) : (
            <></>
          )}
        </Row>
      )}

      {newTemplate.pgpEncrypted ? (
        <>
          <Row className='mb-3'>
            <Form.Group as={Col} sm='7'>
              <Form.Label>PGP Key</Form.Label>
              <Form.Control
                type='text'
                value={newTemplate.pgpKey}
                placeholder='PGP Recipient or Key ID'
                onChange={e => setNewTemplate({ ...newTemplate, pgpKey: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm='3'>
              <Form.Label>PGP Extension</Form.Label>
              <Form.Control
                type='text'
                value={newTemplate.pgpExtension || ''}
                placeholder='.pgp'
                onChange={e => setNewTemplate({ ...newTemplate, pgpExtension: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm='2'>
              <Form.Label>PGP Sign</Form.Label>
              <Form.Check
                className='ps-4'
                checked={newTemplate.pgpSign || ''}
                onChange={e => setNewTemplate({ ...newTemplate, pgpSign: e.target.checked })}
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

export default TemplateDataForm;
