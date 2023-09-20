import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import FileStatusDetails from './FileStatusDetails';

const FileListTable = ({ fileList, fileType }) => {
  return (
    <Table striped bordered hover size='sm' className='text-center'>
      {fileType == 'export' && (
        <>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File</th>
              <th>File Status</th>
              <th>Transfer Status</th>
              <th>Usage</th>
              <th>Begin Date</th>
              <th>End Date</th>
              <th>Mode</th>
              <th>Count</th>
              <th>Previous</th>
              <th>Adds</th>
              <th>Changes</th>
              <th>Terms</th>
              <th>Started</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {fileList && fileList.length ? (
              fileList.map((file, index) => {
                const transferStatus = file.transferLogs.length > 0 ? file.transferLogs[0].status : 'N/A';

                return (
                  <tr key={index}>
                    <td>{file.name}</td>
                    <td>
                      <FontAwesomeIcon icon={faFileArrowDown} />
                    </td>
                    <td>
                      <FileStatusDetails file={file} />
                    </td>
                    <td>{transferStatus}</td>
                    <td>{file.usage}</td>
                    <td>{file.beginDate}</td>
                    <td>{file.endDate}</td>
                    <td>{file.mode}</td>
                    <td>{file.totalCount}</td>
                    <td>{file.previousCount}</td>
                    <td>{file.addCount}</td>
                    <td>{file.changeCount}</td>
                    <td>{file.termCount}</td>
                    <td>{file.runDate}</td>
                    <td>{file.runDuration}</td>
                    <td>
                      <Button variant='secondary'>Transfer</Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </>
      )}

      {fileType == 'import' && <>{/* TO DO */}</>}
    </Table>
  );
};

export default FileListTable;
