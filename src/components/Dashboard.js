import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { CreateTransferModal, TransferListTable } from './';
import transferListOutboundData from '../data/transferListOutbound.json';
import transferListInboundData from '../data/transferListInbound.json';

const Dashboard = () => {
  const [transferListType, setTransferListType] = useState('outbound');
  const [transferList, setTransferList] = useState([]);

  const fetchTransferList = async () => {
    // database call here, then setTransferList
    if (transferListType == 'outbound') setTransferList(transferListOutboundData);
    else if (transferListType == 'inbound') setTransferList(transferListInboundData);
  };

  useEffect(() => {
    fetchTransferList();
  }, [transferListType]);

  return (
    <>
      <Tabs className='mb-0' activeKey={transferListType} onSelect={key => setTransferListType(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          <TransferListTable transferList={transferList} />
        </Tab>
        <Tab eventKey='inbound' title='Inbound'>
          <TransferListTable transferList={transferList} />
        </Tab>
      </Tabs>

      <CreateTransferModal />
    </>
  );
};

export default Dashboard;
