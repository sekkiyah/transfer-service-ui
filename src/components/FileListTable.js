import React from 'react';
import { Table } from 'react-bootstrap';

const FileListTable = ({ fileList, fileType }) => {
  return (
    <Table striped bordered hover>
      {fileType == 'export' && (
        <>
          <thead>
            <tr>
              <th>File Name</th>
            </tr>
          </thead>
          <tbody>
            {fileList && fileList.length ? (
              fileList.map((file, index) => {
                return (
                  <tr key={index}>
                    <td>{file.name}</td>
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
