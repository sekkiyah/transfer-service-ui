import React, { useEffect, useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { SearchBar, TemplateListTable } from '../components';
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
      <h3 className='text-center'>Transfer Templates</h3>
      <Tabs className='mb-0' activeKey={templateListType} onSelect={key => setTemplateListType(key)}>
        <Tab eventKey='outbound' title='Outbound'>
          <Row className='my-2 justify-content-end'>
            <Col sm='4' className='m-0'>
              <SearchBar />
            </Col>
          </Row>

          <TemplateListTable templateList={templateList} templateType={templateListType} />
        </Tab>

        <Tab eventKey='inbound' title='Inbound'>
          <TemplateListTable templateList={templateList} templateType={templateListType} />
        </Tab>
      </Tabs>

      <CreateTemplate />
    </>
  );
};

export default AdminDashboard;
