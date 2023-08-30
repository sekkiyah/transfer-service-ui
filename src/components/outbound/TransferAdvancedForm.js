import React, { useState } from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';
import testMessageExamples from '../../data/testMessageExamples.json';

const TransferAdvancedForm = ({ newTransfer, setNewTransfer }) => {
  const [liveLog, setLiveLog] = useState('');

  const generateTestExample = () => {
    // grabs a logging example with an array of messages
    const randomNum = Math.floor(Math.random() * testMessageExamples.length);
    const example = testMessageExamples[randomNum];
    setLiveLog('Attempting to connect to server...\n');

    // simulates a delay with connecting to a server and logging messages
    setTimeout(() => {
      for (let n = 0; n < example.length; n++) {
        setLiveLog(log => log + `${example[n]}\n`);
      }
    }, 3000);
  };

  return (
    <>
      <Row className='mb-3 mx-1'>
        <Form.Group as={Col} sm='10'>
          <Form.Label>Connection Log</Form.Label>
          <Form.Control as='textarea' rows='6' disabled value={liveLog} />
        </Form.Group>

        <Form.Group as={Col} sm='2' className='d-flex flex-column justify-content-around mt-3'>
          <Button variant='success' onClick={() => generateTestExample()}>
            Test
          </Button>
          <Button variant='secondary' onClick={() => setLiveLog('')}>
            Clear
          </Button>
        </Form.Group>
      </Row>

      <Accordion>
        <Accordion.Header>Advanced Options</Accordion.Header>
        <Accordion.Body className='pb-0'>
          <Row className='mb-3'>
            <Form.Group as={Col} sm='4'>
              <Form.Label>Timeout</Form.Label>
              <Form.Control
                type='number'
                value={newTransfer.timeout || ''}
                placeholder='Seconds'
                onChange={e => setNewTransfer({ ...newTransfer, timeout: e.target.value })}
              />
              <Form.Text>Interval to wait for response</Form.Text>
            </Form.Group>

            <Form.Group as={Col} sm='4'>
              <Form.Label>Max Retries</Form.Label>
              <Form.Control
                type='number'
                value={newTransfer.maxRetries || ''}
                placeholder='Count'
                onChange={e => setNewTransfer({ ...newTransfer, maxRetries: e.target.value })}
              />
              <Form.Text>Number of retry attempts</Form.Text>
            </Form.Group>

            <Form.Group as={Col} sm='4'>
              <Form.Label>Reconnect Interval</Form.Label>
              <Form.Control
                type='number'
                value={newTransfer.reconnectInterval || ''}
                placeholder='Seconds'
                onChange={e => setNewTransfer({ ...newTransfer, reconnectInterval: e.target.value })}
              />
              <Form.Text>Interval to wait between attempts</Form.Text>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} sm='6'>
              <Form.Label>Key Exchange Algorithms</Form.Label>
              <Form.Control
                type='text'
                value={newTransfer.sshKexAlgorithm || ''}
                placeholder='Example: diffie-hellman-group14-sha1'
                onChange={e => setNewTransfer({ ...newTransfer, sshKexAlgorithm: e.target.value })}
              />
              <Form.Text>Usually left blank</Form.Text>
            </Form.Group>

            <Form.Group as={Col} sm='6'>
              <Form.Label>Host Key Algorithms</Form.Label>
              <Form.Control
                type='text'
                value={newTransfer.sshHostkeyAlgorithm || ''}
                placeholder='Example: ssh-dss'
                onChange={e => setNewTransfer({ ...newTransfer, sshHostkeyAlgorithm: e.target.value })}
              />
              <Form.Text>Usually left blank</Form.Text>
            </Form.Group>
          </Row>
        </Accordion.Body>
      </Accordion>
    </>
  );
};

export default TransferAdvancedForm;
