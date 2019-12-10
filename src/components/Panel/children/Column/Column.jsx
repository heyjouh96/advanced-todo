import React, { useContext, useMemo } from 'react';

import { TasksContext } from '../../../../contexts/tasks.context';

import Card from '../Card/Card.jsx';

// styles
import {
  ColumnContainer,
} from './styles';

function Column({ title, id, propagateModal }) {

  const { state, dispatch } = useContext(TasksContext);

  const clickHandler = (type, task) => {
    if (type === 'edit') {
      dispatch({ type: 'edit', payload: task });
    }

    propagateModal();
  }

  const renderCards = useMemo(() => (
    state.tasks
      .filter(task => task.status === id)
      .map(task => (
        <Card key={task.id} propagateClick={clickHandler} task={task} />)
    )
  ), [state]);

  return (
    <ColumnContainer>
      <h3 onClick={() => clickHandler()}>{title}</h3>

      {renderCards}
    </ColumnContainer>
  );
}

export default Column;
