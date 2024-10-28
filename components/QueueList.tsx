import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { fetchQueues } from '../api/kueueApi';
import { Queue } from '../types/KueueTypes';

const QueueList: React.FC = () => {
  const [queues, setQueues] = useState<Queue[]>([]);

  useEffect(() => {
    fetchQueues().then(setQueues);
  }, []);

  const columns = ['Name', 'Namespace'];
  const rows = queues.map((queue) => [queue.name, queue.namespace]);

  return (
    <Table aria-label="Queue List" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export default QueueList;
