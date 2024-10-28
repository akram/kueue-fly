import React from 'react';
import { Page, PageSection } from '@patternfly/react-core';
import QueueList from './components/QueueList';

const App: React.FC = () => (
  <Page>
    <PageSection>
      <h1>Kueue Visualizer</h1>
      <QueueList />
    </PageSection>
  </Page>
);

export default App;
