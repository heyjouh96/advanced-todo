import React, { useContext, useMemo } from 'react';

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

  const renderColumns = useMemo(() => state.columns.map(column => <Column key={column.id} {...column}/>), [columns]);

  return (
    <TasksContextProvider>
      <PanelContainer bgColor={state.bgColor}>
        <h1>Dashboard</h1>

        <ColumnsContainer>

          {renderColumns}
        
        </ColumnsContainer>
      </PanelContainer>
    </TasksContextProvider>
  );
}

export default Panel;
