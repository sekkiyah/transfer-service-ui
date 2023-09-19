import React from 'react';
import { Table } from 'react-bootstrap';

const TransferListTable = ({ transferList, transferType }) => {
  return (
    <Table striped bordered hover size='sm' className='text-center'>
      {transferType == 'outbound' && (
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Transfer Name</th>
              <th>Naming Convention</th>
              <th>URL</th>
              <th>Directory</th>
              <th>Transfer Key</th>
            </tr>
          </thead>
          <tbody>
            {transferList && transferList.length ? (
              transferList.map((transfer, index) => {
                return (
                  <tr key={index}>
                    <td>{transfer.id}</td>
                    <td>{transfer.name}</td>
                    <td>{transfer.filename}</td>
                    <td>{transfer.url}</td>
                    <td>{transfer.directory}</td>
                    <td>{transfer.transferKey}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </>
      )}

      {transferType == 'inbound' && <>{/* TO DO */}</>}
    </Table>
  );
};

export default TransferListTable;
