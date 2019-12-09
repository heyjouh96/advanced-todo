import React, { useContext } from 'react';

import { TasksContextProvider } from '../../contexts/tasks.context';
import { DashboardContext } from '../../contexts/dashboard.context';


import Column from './children/Column/Column';
import Modal from './children/Modal/Modal';

// styles
import {
  PanelContainer,
  ColumnsContainer,
} from './styles';

function Panel({ columns }) {

  const { state } = useContext(DashboardContext);

  return (
    <TasksContextProvider>
      <PanelContainer>
        <h1>Dashboard</h1>

        <ColumnsContainer>

          {state.columns.map(column => <Column {...column}/>)}
        
        </ColumnsContainer>
      </PanelContainer>
    </TasksContextProvider>
  );
}

export default Panel;
