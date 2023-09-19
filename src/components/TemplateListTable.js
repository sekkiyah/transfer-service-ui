import React from 'react';
import { Table } from 'react-bootstrap';

const TemplateListTable = ({ templateList, templateType }) => {
  return (
    <Table striped bordered hover>
      {templateType == 'outbound' && (
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Template Name</th>
              <th>URL</th>
              <th>Username</th>
              <th>Directory</th>
            </tr>
          </thead>
          <tbody>
            {templateList && templateList.length ? (
              templateList.map((template, index) => {
                return (
                  <tr key={index}>
                    <td>{template.id}</td>
                    <td>{template.name}</td>
                    <td>{template.sftpUrl}</td>
                    <td>{template.username}</td>
                    <td>{template.directory}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </>
      )}

      {templateType == 'inbound' && <>{/* TO DO */}</>}
    </Table>
  );
};

export default TemplateListTable;
