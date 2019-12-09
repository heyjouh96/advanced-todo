import React from 'react';

import { DashboardContextProvider } from '../../contexts/dashboard.context';

import Panel from '../Panel/Panel';
import Options from '../Options/Options';

// styles
import {
  DashboardContainer,
} from './styles';

function Dashboard() {

  return (
    <DashboardContextProvider>
      <DashboardContainer>
          
        <Panel />

        <Options />

      </DashboardContainer>
    </DashboardContextProvider>
  );
}

export default Dashboard;
