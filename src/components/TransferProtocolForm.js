import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import transferTemplateData from '../data/transferTemplates.json';

const TransferProtocolForm = ({ newTransfer, setNewTransfer }) => {
  const [transferTemplates, setTransferTemplates] = useState([]);

  const updateTemplateList = () => {
    console.log('Database called');
    if (newTransfer.type == 'outbound') {
      // database call for outbound transfer templates
      setTransferTemplates(transferTemplateData);
    } else if (newTransfer.type == 'inbound') {
      // database call for inbound transfer templates
      setTransferTemplates(transferTemplateData);
    }
  };

  useEffect(() => {
    updateTemplateList();
  }, [newTransfer.type]);

  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Label>Type</Form.Label>
        <Form.Select
          required
          value={newTransfer.type}
          onChange={e => {
            setNewTransfer({ ...newTransfer, type: e.target.value, transferTemplateId: '' });
          }}>
          <option hidden>Please Select</option>
          <option value='outbound'>Export</option>
          <option value='inbound'>Import</option>
        </Form.Select>
      </Form.Group>

      {newTransfer && newTransfer.type && (
        <Form.Group className='mb-3'>
          <Form.Label>Template</Form.Label>
          <Form.Select
            value={newTransfer.transferTemplateId}
            onChange={e => setNewTransfer({ ...newTransfer, transferTemplateId: e.target.value })}>
            <option value=''>None Selected</option>

            {transferTemplates &&
              transferTemplates.length &&
              transferTemplates.map(template => {
                if (template.type === newTransfer.type)
                  return (
                    <option key={template.id} value={template.id}>
                      {template.name} ({template.url})
                    </option>
                  );
              })}
          </Form.Select>
          <Form.Text muted>Select from a transfer template, if applicable</Form.Text>
        </Form.Group>
      )}
    </>
  );
};

export default TransferProtocolForm;
