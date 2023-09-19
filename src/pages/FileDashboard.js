import React, { useEffect, useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { FileListTable, SearchBar } from '../components';
import fileListData from '../data/fileListData.json';

const FileDashboard = () => {
  const [fileListType, setFileListType] = useState('export');
  const [fileList, setFileList] = useState(fileListData);

  const fetchFileList = async () => {
    setFileList(() => {
      return fileListData.filter(file => file.type == fileListType);
    });
  };

  useEffect(() => {
    fetchFileList();
  }, [fileListType]);

  return (
    <>
      <h3 className='text-center'>EDI Dashboard</h3>
      <Tabs className='mb-0' activeKey={fileListType} onSelect={key => setFileListType(key)}>
        <Tab eventKey='export' title='Export'>
          <Row className='my-2 justify-content-end'>
            <Col sm='4' className='m-0'>
              <SearchBar />
            </Col>
          </Row>

          <FileListTable fileList={fileList} fileType={fileListType} />
        </Tab>

        <Tab eventKey='import' title='Import'>
          <FileListTable fileList={fileList} fileType={fileListType} />
        </Tab>
      </Tabs>
    </>
  );
};

export default FileDashboard;
