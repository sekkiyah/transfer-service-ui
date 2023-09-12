import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { TemplateListTable } from '../components';
import { CreateTemplate } from '../pages';
import templateListData from '../data/templateListData.json';

const AdminDashboard = () => {
  const [templateListType, setTemplateListType] = useState('outbound');
  const [templateList, setTemplateList] = useState(templateListData);

  const fetchTemplateList = async () => {
    // database call here, then setTemplateList based on template type
    setTemplateList(() => {
      return templateListData.filter(template => template.type == templateListType);
    });
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

export default AdminDashboard;
