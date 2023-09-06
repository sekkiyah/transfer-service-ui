import React from 'react';
import { Form } from 'react-bootstrap';

const TemplateProtocolForm = ({ newTemplate, setNewTemplate }) => {
  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Label>Type</Form.Label>
        <Form.Select
          required
          value={newTemplate.type}
          onChange={e => {
            setNewTemplate({ ...newTemplate, type: e.target.value });
          }}>
          <option hidden>Please Select</option>
          <option value='outbound'>Export</option>
          <option value='inbound'>Import</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default TemplateProtocolForm;
