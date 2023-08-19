import React, { useEffect, useState } from 'react';
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { CreateTransfer, TransferListTable } from './';

const Dashboard = () => {
  const [transferListType, setTransferListType] = useState('outbound');
  const [transferList, setTransferList] = useState([{ name: 'Name1', type: 'Export', url: 'sftp.com' }]);

  const fetchTransferList = async () => {
    // database call here, then setTransferList
    console.log('Loaded tab list:', transferListType);
  };

  useEffect(() => {
    fetchTransferList();
  }, [transferListType]);

  return (
    <>
      <Tabs className='mb-0' activeKey={transferListType} onSelect={key => setTransferListType(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          {/* {reloadList()} */}
          <TransferListTable transferList={transferList} />
        </Tab>
        <Tab eventKey='inbound' title='Inbound'>
          {/* {reloadList()} */}
          <TransferListTable transferList={transferList} />
        </Tab>
      </Tabs>

      <CreateTransfer />
    </>
  );
};

export default Dashboard;
