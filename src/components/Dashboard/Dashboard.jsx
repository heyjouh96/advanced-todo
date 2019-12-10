import React, { useContext } from 'react';

import { DashboardContext } from '../../contexts/dashboard.context';

import Panel from '../Panel/Panel';
import Options from '../Options/Options';

// styles
import {
  DashboardContainer,
} from './styles';

function Dashboard() {

  const { state } = useContext(DashboardContext);

  return (
    <DashboardContainer>
        
      <Panel columns={state.columns} bgColor={state.bgColor} />

      <Options />

    </DashboardContainer>
  );
}

export default Dashboard;
