import React from 'react';
import { Table } from 'react-bootstrap';

const TransferListTable = ({ transferList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {transferList &&
          transferList.length &&
          transferList.map((transfer, index) => {
            return (
              <tr key={index}>
                <td>{transfer.name}</td>
                <td>{transfer.type}</td>
                <td>{transfer.url}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TransferListTable;
