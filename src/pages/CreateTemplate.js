import React, { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { TemplateProtocolForm, OutboundTemplateDataForm } from '../components';

const CreateTemplateModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTemplate, setNewTemplate] = useState({});
  const [formPage, setFormPage] = useState(1);
  const formLength = 3;

  console.log('Template data:', newTemplate);

  const clearTemplateData = () => {
    setShowModal(false);
    setNewTemplate({});
    setFormPage(1);
  };

  const createNewTemplate = () => {
    console.log('Submitted', newTemplate);
  };

  return (
    <>
      <Button className='ms-4' variant='success' onClick={() => setShowModal(true)}>
        New Template
      </Button>

      <Modal show={showModal} size='lg' onHide={() => clearTemplateData()}>
        <Form onSubmit={e => e.preventDefault()}>
          <Modal.Header closeButton>
            <Modal.Title>Transfer Template</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {formPage == 1 && (
              <>
                <TemplateProtocolForm newTemplate={newTemplate} setNewTemplate={setNewTemplate} />
              </>
            )}
            {formPage == 2 && (
              <>
                {newTemplate.type == 'outbound' && (
                  <OutboundTemplateDataForm newTemplate={newTemplate} setNewTemplate={setNewTemplate} />
                )}
                {newTemplate.type == 'inbound' && <p> TODO</p>}
              </>
            )}
            {/* {formPage == 3 && (
              <>
                {newTemplate.type == 'outbound' && (
                  <OutboundTemplateAdvancedForm newTemplate={newTemplate} setNewTemplate={setNewTemplate} />
                )}
                {newTemplate.type == 'inbound' && <p>TODO</p>}
              </>
            )} */}
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
                  <Button hidden={false} type='submit' onClick={() => createNewTemplate()}>
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

export default CreateTemplateModal;
