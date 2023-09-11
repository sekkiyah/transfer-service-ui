import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { TemplateListTable } from '../components';
import { CreateTemplate } from '../pages';
import templateListOutboundData from '../data/templateListOutbound.json';
import templateListInboundData from '../data/templateListInbound.json';

const Dashboard = () => {
  const [templateListType, setTemplateListType] = useState('outbound');
  const [templateList, setTemplateList] = useState([]);

  const fetchTemplateList = async () => {
    // database call here, then setTemplateList
    if (templateListType == 'outbound') setTemplateList(templateListOutboundData);
    else if (templateListType == 'inbound') setTemplateList(templateListInboundData);
  };

  useEffect(() => {
    fetchTemplateList();
  }, [templateListType]);

  return (
    <>
      <Tabs className='mb-0' activeKey={templateListType} onSelect={key => setTemplateListType(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          <TemplateListTable templateList={templateList} />
        </Tab>
        <Tab eventKey='inbound' title='Inbound'>
          <TemplateListTable templateList={templateList} />
        </Tab>
      </Tabs>

      <CreateTemplate />
    </>
  );
};

export default Dashboard;
