import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { TransferListTable } from '../components';
import { CreateTransfer } from '.';
import transferListData from '../data/transferListData.json';

const UserDashboard = () => {
  const [transferListType, setTransferListType] = useState('outbound');
  const [transferList, setTransferList] = useState([]);

  const fetchTransferList = async () => {
    // database call here, then setTransferList
    setTransferList(() => {
      return transferListData.filter(transfer => transfer.type == transferListType);
    });
  };

  useEffect(() => {
    fetchTransferList();
  }, [transferListType]);

  return (
    <>
      <h3 className='text-center'>Transfer Definitions</h3>
      <Tabs className='mb-0' activeKey={transferListType} onSelect={key => setTransferListType(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          <TransferListTable transferList={transferList} transferType={transferListType} />
        </Tab>
        <Tab eventKey='inbound' title='Inbound'>
          <TransferListTable transferList={transferList} transferType={transferListType} />
        </Tab>
      </Tabs>

      <CreateTransfer />
    </>
  );
};

export default UserDashboard;
