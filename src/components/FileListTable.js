import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const FileListTable = ({ fileList, fileType }) => {
  return (
    <Table striped bordered hover size='sm' className='text-center'>
      {fileType == 'export' && (
        <>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File</th>
              <th>Usage</th>
              <th>File Status</th>
              <th>Transfer Status</th>
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
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {fileList && fileList.length ? (
              fileList.map((file, index) => {
                return (
                  <tr key={index}>
                    <td>{file.name}</td>
                    <td className='text-center'>
                      <FontAwesomeIcon icon={faFileArrowDown} />
                    </td>
                    <td>{file.usage}</td>
                    <td>{file.status}</td>
                    <td>Trfr Stat</td>
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
                    <td>D</td>
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
