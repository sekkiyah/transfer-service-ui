import React, { useState } from 'react';
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { CreateTransfer } from './';

const Dashboard = () => {
  const [transfers, setTransfers] = useState([{ name: 'Name1', type: 'Export', url: 'sftp.com' }]);

  const reloadList = key => {
    console.log('Reloaded', key);
  };

  return (
    <>
      <Tabs className='mb-3' onSelect={key => reloadList(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          {/* {reloadList()} */}
        </Tab>
        <Tab eventKey='inbound' title='Inbound'>
          {/* {reloadList()} */}
        </Tab>
      </Tabs>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {transfers &&
            transfers.length &&
            transfers.map((record, index) => {
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
      <CreateTransfer setTransfers={setTransfers} />
    </>
  );
};

export default Dashboard;
