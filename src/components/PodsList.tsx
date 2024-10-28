import React, { useEffect, useState } from 'react';
import { Card, CardBody, Title } from '@patternfly/react-core';

const PodsList: React.FC = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    async function fetchPods() {
      const response = await fetch('/api/kubernetes/api/v1/pods', {
        headers: { Authorization: `Bearer dummy-token` },
      });
      const data = await response.json();
      setPods(data.items);
    }

    fetchPods();
  }, []);

  return (
    <div>
      <Title headingLevel="h1">Pods</Title>
      {pods.map((pod: any) => (
        <Card key={pod.metadata.uid}>
          <CardBody>{pod.metadata.name}</CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PodsList;


