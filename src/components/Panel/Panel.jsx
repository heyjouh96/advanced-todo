import React, { useState, useMemo, useEffect } from 'react';

import { TasksContextProvider } from '../../contexts/tasks.context';

import Column from './children/Column/Column';
import Modal from './children/Modal/Modal';

// styles
import {
  PanelContainer,
  ColumnsContainer,
} from './styles';

function Panel({ columns, bgColor }) {

  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = () => setModalVisible(!modalVisible);

  const renderColumn = useMemo(() => (
    <ColumnsContainer>
      {columns.map(column => <Column key={column.id} {...column} propagateModal={modalHandler} />)}
    </ColumnsContainer>
  ), [columns]);

  return (
    <TasksContextProvider>
      <PanelContainer bgColor={bgColor}>
        <h1>Dashboard</h1>

        {renderColumn}
        
      </PanelContainer>

      { modalVisible
        ? <Modal propagateClose={modalHandler} />
        : null
      }
      
    </TasksContextProvider>
  );
}

export default Panel;
