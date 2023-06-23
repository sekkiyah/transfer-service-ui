import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Dashboard = () => {
  const [records, setRecords] = useState([{ name: 'Name1', type: 'Export', url: 'sftp.com' }]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            records.length &&
            records.map((record, index) => {
              return (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.type}</td>
                  <td>{record.url}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Button variant='success'>Create Transfer</Button>
    </>
  );
};

export default Dashboard;
