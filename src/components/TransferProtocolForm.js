import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import transferTemplateData from '../data/transferTemplates.json';

const TransferProtocolForm = () => {
  const [transferType, setTransferType] = useState('');
  const [transferTemplates, setTransferTemplates] = useState([]);
  const [transferTemplateSelected, setTransferTemplateSelected] = useState('');

  useEffect(() => {
    if (transferType == 'outbound') {
      // database call for transfer templates
      setTransferTemplates(transferTemplateData);
    }
  }, [transferType]);

  return (
    <>
      {/* <h3 className='text-center'>Transfer Templates</h3> */}
      <Form.Group className='mb-3'>
        <Form.Label>Transfer Type</Form.Label>
        <Form.Select onChange={e => setTransferType(e.target.value)}>
          <option value=''>Please Select</option>
          <option value='outbound'>Export</option>
          <option value='inbound'>Import</option>
        </Form.Select>
      </Form.Group>

      {transferType && (
        <Form.Group className='mb-3'>
          <Form.Label>Transfer Template</Form.Label>
          <Form.Select onChange={e => setTransferTemplateSelected(e.target.value)}>
            {/* load list of templates here */}
            <option value=''>None Selected</option>
            {transferTemplates &&
              transferTemplates.length &&
              transferTemplates.map(template => {
                if (template.type === transferType)
                  return (
                    <option key={template.id} value={template.id}>
                      {template.name}
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
